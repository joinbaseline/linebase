import React, { useEffect, useMemo, useRef, useState } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { YStack, Text, Theme, ThemeName, validToken } from "@my/ui"
import { useAtom } from 'jotai';
import { useThemeSetting } from "app/provider/theme";
import { $storedMoodsAtom } from "app/utils/entries/atoms";
import { MoodEntry } from "app/utils/entries/types";
import moment from "moment";
import { selectedDayAtom } from "app/utils/atoms.native";

type DayInfo = {
  ISO: string,
  ISO_DATETIME: string,
  dayOfWeek: string,
  dayOfMonth: number,
};

interface DayTabProps {
  id: string,
  logscreen: boolean,
  day: DayInfo
}

// Helper function to generate date range from X days ago until today
const generateDateRangeFromXDaysAgo = (daysAgo) => {
  const dates: Date[] = [];
  for (let i = daysAgo; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    dates.push(date);
  }
  return dates;
};

// Helper function to get day info
const getDayInfo = (date) => {
  date = moment(date).toDate();
  const dayOfWeek = date.toLocaleString('default', { weekday: 'short' });
  const dayOfMonth = date.getDate();
  const ISO = date.toISOString().split('T')[0];
  const ISO_DATETIME = date.toISOString();
  return { ISO, ISO_DATETIME, dayOfWeek, dayOfMonth };
};

const DayTab: React.FC<DayTabProps> = ({ day, logscreen, id }) => {
  const [mood, setMood] = useState<number | undefined>(undefined);
  const [today, setToday] = useState<string>(getDayInfo(new Date()).ISO)
  const [selected, setSelected] = useAtom(selectedDayAtom);
  const { resolvedTheme: modeTheme } = useThemeSetting();
  const [storedMoods, _] = useAtom($storedMoodsAtom);

  useEffect(() => {
    // Fetch mood data from $storedMoodsAtom
    const moodEntry = storedMoods.find(entry => getDayInfo(entry.timestamp).ISO === day.ISO) as MoodEntry | undefined;
    const newMood = moodEntry ? moodEntry.value : undefined;
    setMood(newMood);
  }, [day.ISO, selected, storedMoods]);

  const handlePress = () => {
    if (selected === day.ISO) {
      setSelected(today);
    } else {
      setSelected(day.ISO);
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} disabled={logscreen && selected === day.ISO} onPress={handlePress}>
      <Theme name={modeTheme as ThemeName}>
        <Theme name="gray">
          <YStack
            bg={selected === day.ISO ? "$color3" : "$color2"}
            br={15}
            p={10}
            mx={10}
            mb={10}
            mt={5}
            w={50}
          >
            <Text col={selected === day.ISO ? "$color9" : "$color8"} fos={12} fow="600" ta="center">
              {day.dayOfWeek}
            </Text>
            <Text col={selected === day.ISO ? "$color12" : "$color10"} fos={14} fow="700" ta="center">
              {day.dayOfMonth}
            </Text>
            <YStack
              als="center"
              boc={selected === day.ISO ? "$color11": "$color9"}
              bw={mood ? 0 : 1}
              o={(mood && selected === day.ISO) ? 1 : 0.5}
              bg={mood ? validToken(`$mood${mood}`) : null}
              mt={5}
              w={14}
              h={14}
              br={14}
            />
          </YStack>
        </Theme>
      </Theme>
    </TouchableOpacity>
  );
};

export const MoodDayTabs: React.FC<{ logscreen: boolean }> = ({ logscreen }) => {
  const x = 30;
  const scrollViewRef = useRef<ScrollView>(null);
  const dateList = useMemo(() => generateDateRangeFromXDaysAgo(x), [x]);

  return (
    <ScrollView ref={scrollViewRef} horizontal style={{ width: "100%" }}>
      {dateList.map((x, i) => {
        const dayInfo = getDayInfo(x);
        return <DayTab id={i.toString()} key={`day-tab-${i}`} day={dayInfo} logscreen={logscreen} />;
      })}
    </ScrollView>
  );
};
