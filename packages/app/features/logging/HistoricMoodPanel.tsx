import { useMemo, useState, useRef, useEffect } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { timeFormat } from "d3-time-format";
import { Card, Text, XStack, YStack } from "tamagui";
import { useMeMood } from "utils/mood/meMoodQueries";
import { SCREEN_WIDTH } from "constants/Window";
import { $state } from "utils/state";
import { dayWithSuffix, getDayInfo } from "./getDayInfo";
import { CornerRightUp, Plus } from "@tamagui/lucide-icons";
import { MoodBadge } from "components/cards/MoodBadge";
import { IMood } from "types/mood";
import { useRouter } from "expo-router";
import { dateToISOString } from "utils/mood/common";
import { observer, useObservable } from "@legendapp/state/react";
import moment from "moment";
import { getLocaleTime, getLocaleTimeString } from "utils/dates/time";

const DAYS_AGO = 10;
const formatTime = timeFormat("%H:%M");

export const DatePanel: React.FC<{daysAgo: number, setDaysAgo: (x: number) => void, moodMap}> = ({daysAgo, setDaysAgo, moodMap}) => {
    // const [currentDate, _] = useState(dateToISOString(new Date()));
    const dates = useMemo(() => {
      // create an array of dates from DAYS_AGO until today (reverse order)
      const dates = Array.from({length: DAYS_AGO}, (_, i) => {
        const base_date = new Date(getLocaleTimeString());
        const day_before = new Date(base_date.setDate(base_date.getDate() - i));
        return day_before;
      });
      return dates.reverse();
    }, []);
    const scrollRef = useRef<any>();

    const scrollToEnd = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollToEnd({ animated: false });
      }
    };

    return (
    <ScrollView
      onContentSizeChange={scrollToEnd}
      ref={scrollRef}
      bounces={false}
      scrollEventThrottle={16}
      horizontal
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={{
        alignItems: "center",
      }}
      style={{
        width: "100%",
        maxWidth: "100%",
        height: 16
      }}
    >
      <XStack rowGap={"$2"} px={"$4"}>
      {dates.map((date) => {
        const index = dates.indexOf(date);
        const data = moodMap.entries[dateToISOString(date)];
        return (
          <View key={`date-node-${index}`}>
            {/*<DateNode selected={daysAgo === DAYS_AGO - index - 1} index={index} setDaysAgo={setDaysAgo} date={date} dayMoods={data} />*/}
          </View>
        );
      })}
      </XStack>
    </ScrollView>
    )
  }

const Dot: React.FC<{size: number, color: string}> = ({size, color}) => {
  return <XStack
    als="center"
    w={size}
    h={size}
    br={size/2}  // radius half of width to be a circle
    // @ts-ignore
    bg={color}
    mx={4} />
}


const MoodEntryBadge: React.FC<{mood: IMood, pending?: boolean}> = ({mood, pending=false}) => {
  const [selected, setSelected] = useState(false);
  // const toggleSelected = () => setSelected(!selected);

  const getTime = (timestamp: string) => {
    return moment(timestamp).format("HH:mm");
  }
  return (
    <TouchableOpacity activeOpacity={0.8} style={{opacity: pending ? 0.25 : 1}}>
      <YStack jc="center" ai="center" rowGap={1}>
        <MoodBadge size={30} fontSize={16} selected={selected} mood={mood.entry} />
        <Text maxFontSizeMultiplier={1.5} fos="$1" fow={selected ? "500" : "400"} col="$gray4">{getTime(mood.timestamp)}</Text>
      </YStack>
    </TouchableOpacity>
  );
}


export const MoodLogBadge: React.FC<{day?: string, backgroundColor?: string, color?: string}> = ({
  day,
  color="$gray6",
  backgroundColor="$blue2"
}) => {
    const router = useRouter();
    const now = getLocaleTime()
    if (!day) day = now.format('YYYY-MM-DD')
    return (
      <TouchableOpacity hitSlop={{top: 20, bottom: 30, left: 20, right: 20}} onPress={() => router.push('/logmood')}>
        <XStack
          br={"$10"}
          jc="center"
          ai="center"
          w="$3"
          h="$3"
          // @ts-ignore
          bg={backgroundColor}
        >
          <Plus
            fontSize={20}
            fontWeight="600"
            // @ts-ignore
            color={color}
          />
        </XStack>
      </TouchableOpacity>
    )
  }

const cardWidth = SCREEN_WIDTH * 0.8;
export const HistoricMoodPanel: React.FC<{onLogScreen: boolean}> = observer(({onLogScreen}) => {
    const { data: moods, isLoading, error } = useMeMood().useMeMoodQuery();
    const selectedDay = $state.home.dayTabs.selectedISODateTime.get() || getLocaleTimeString();

    const dayInfo = getDayInfo(selectedDay ? moment(selectedDay) : getLocaleTime());
    const ISO =  moment(dayInfo.ISO_DATETIME || getLocaleTime()).format('YYYY-MM-DD')
    const time$ = useObservable({
      actualTime: getLocaleTime(),
      pTime: () => {
        const newPAT = formatTime()(time$.actualTime.get())
        return newPAT;
      },
      isoformat: () => {
        return time$.actualTime.get().toISOString(true);
      }
    })

    useEffect(() => {
      const interval = setInterval(() => {
        time$.actualTime.set(getLocaleTime());
      }, 100);
      return () => {
        clearInterval(interval);
      }
    })

    if (!selectedDay) return null
    return (
    <YStack ai="center" mt={-6} mb={"$4"} px={"$3"}>
      {(!onLogScreen && (moods && Object.keys(moods)?.length < 3)) ? <YStack pos="relative" mt={-4} mb="$2" mr="$4"
        jc="center" ai="center">
          <XStack columnGap={-4}>
            <YStack jc="center" ai="center" rowGap="$1">
              <Text ta="center" col="$blue9">Let's log your mood for the past couple of days. Choose the day above then log for that day.</Text>
            </YStack>
            <CornerRightUp col="$blue9" />
          </XStack>
      </YStack>: null}
      <Card minWidth={cardWidth} maxWidth={cardWidth} padding="$3" backgroundColor="white" elevation={"$2"}>
        <YStack rowGap="$3">
          {!onLogScreen ?
          <XStack jc="space-between">
            {/* Day/date */}
              <XStack ai="center">
                <Text maxFontSizeMultiplier={1.5} fos="$2" fow="600" col="$gray9">{dayInfo.longDayOfWeek}</Text>
                <Dot size={2} color="$gray4" />
                <Text maxFontSizeMultiplier={1.5} fos="$2" col="$gray4">{dayInfo.longDayOfMonth}</Text>
              </XStack>
            </XStack>: null
          }
          <XStack ai="center" columnGap="$2">
            <YStack jc="center" ai="center" rowGap={1}>
              <XStack ai="center" jc="center">
                <MoodBadge size={30} fontSize={16} selected={true} mood={moods && Math.round(moods[ISO]?.average * 10) / 10} />
                <YStack h="60%" w={1} ml={5} als="center" bg="$gray1" />
              </XStack>
              {(!onLogScreen || moods[ISO]?.moods) && <Text maxFontSizeMultiplier={1.5} ml={-5} fos="$1" fow="500" col="$gray4">Avg</Text>}
            </YStack>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <XStack columnGap="$2">
                {/* map over mood entries for this ISO */}
                {moods && moods[ISO]?.moods.map((mood, index) => (
                  <MoodEntryBadge key={index} mood={mood} />
                ))}
                {onLogScreen && !moods[ISO]?.moods && (
                  <Text als="flex-start" fos="$1" fow="400" col="$gray4">
                    {
                      ISO ===  time$.actualTime.get().format("YYYY-MM-DD") ?
                      "How are you today? Pick a number." :
                      `How were you on ${dayInfo.longDayOfWeek} ${dayWithSuffix(dayInfo.dayOfMonth)}?`
                    }
                  </Text>
                )}
              </XStack>
            </ScrollView>
            {!onLogScreen &&
            <YStack jc="center" ai="center" rowGap={1}>
              <MoodLogBadge color="$gray7" backgroundColor="$blue2" />
              <Text maxFontSizeMultiplier={1.5} fos="$1" fow="400" col="$gray4">Add Log</Text>
            </YStack>
            }
          </XStack>
        </YStack>
      </Card>

    </YStack>
    );
  }
)
