import React, { useEffect, useMemo, useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import { ScrollView, YStack, Circle, Text } from 'tamagui'
import { generateDateRangeFromXDaysAgo } from "utils/dates/dateRange";
import { LinearGradient } from '@tamagui/linear-gradient'

import { $state } from "utils/state";
import { useMeMood } from "utils/mood/meMoodQueries";
import { useAtom } from "jotai";
import { lastMoodChangeAtom } from "utils/atoms";
import { getDayInfo } from "./getDayInfo";
import moment from "moment";
import { observer } from "@legendapp/state/react";
import { getLocaleTimeString } from "utils/dates/time";

interface DayTabProps {
  id: string,
  logscreen: boolean,
  day: {
    ISO: string,
    ISO_DATETIME: string,
    dayOfWeek: string,
    dayOfMonth: number,
  }
}

// TODO: Put actual mood values in of course..
function getRandomInt(min = 1, max = 10){
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomInt;
}

const DayTab: React.FC<DayTabProps> = observer(({ day, logscreen, id }) => {
  const { data, isFetchedAfterMount } = useMeMood().useMeMoodQuery();
  const s  = $state.home.dayTabs.selected.get();
  const ISO  = $state.home.dayTabs.selectedISODateTime.get();
  const [mood, setMood] = useState<number | undefined>(Math.round(data?.[ISO]?.average) || undefined);
  const selected =  moment(ISO || getLocaleTimeString()).format('YYYY-MM-DD')
  const dayISO =  moment(day.ISO_DATETIME).format('YYYY-MM-DD')
  const [lastMoodChanged] = useAtom(lastMoodChangeAtom);

  useEffect(() => {
    const newMood = Math.round(data?.[dayISO]?.average) || undefined;
    setMood(newMood);
  }, [data?.[dayISO]?.average, selected, isFetchedAfterMount, lastMoodChanged])

  const handlePress = () => {
    // console.log("Day tab pressed:", dayISO, 'mood:', mood ? mood : "none")
    // if pressed day is already selected, then set to none
    if (selected === dayISO) {
      $state.home.dayTabs.selected.set("")
      $state.home.dayTabs.selectedISODateTime.set('')
    } else {
      $state.home.dayTabs.selected.set(dayISO)
      $state.home.dayTabs.selectedISODateTime.set(day.ISO_DATETIME)
    }
  }

  return (
    <TouchableOpacity disabled={logscreen && selected === dayISO} onPress={handlePress}>
        <YStack
            backgroundColor={selected === dayISO ? "purple" : "white"}
            borderRadius="$10"
            justifyContent="center"
            alignContent="center"
            padding="$2"
            paddingTop="$4"
            paddingBottom="$2.5"
            marginHorizontal="$3"
            marginBottom="$3"
            marginTop="$2"
            width="$4.5"
        >
            {selected === dayISO &&
                <LinearGradient
                    start={[0, 0]}
                    end={[0, 1]}
                    borderRadius="$10"
                    fullscreen
                    colors={['$blue9', '$pink9']}
                />
            }
            <Text allowFontScaling={false} color={selected === dayISO ? "white" : "$gray6"} fontSize="$2" fontWeight={"600"} textAlign="center">{day.dayOfWeek}</Text>
            <Text allowFontScaling={false} color={selected === dayISO ? "white" : "$gray9"} fontSize={"$4"} fontWeight={"700"} textAlign="center">{day.dayOfMonth}</Text>
            <Circle
              backgroundColor={
                selected === dayISO ? "white" : (
                  mood ? `\$mood${mood}` : "white"
                )}
              opacity={mood ? 1 : 0}
              marginTop="$1.5" alignSelf="center" size={7} />
        </YStack>
    </TouchableOpacity>
  )
})

const TAB_WIDTH = 40;  // TODO: Replace with actual width of each tab
export const MoodDayTabs: React.FC<{logscreen: boolean}> = observer(({logscreen}) => {
  const scrollViewRef = useRef(null);
  const ISO  = $state.home.dayTabs.selectedISODateTime.get();
  const selectedDay = moment(ISO || getLocaleTimeString()).format('YYYY-MM-DD')
  const sd = $state.home.dayTabs.selected.get();

  // const selectedDay = $state.home.dayTabs.selected.get();
  // Generate days from X days in the past until now
  const x = 7; // Adjust as needed
  const dateList = useMemo(() => generateDateRangeFromXDaysAgo(x), [x]);

  const setPosition = (index: number) => {
    const scrollPosition = index * TAB_WIDTH;
    scrollViewRef.current.scrollTo({ x: scrollPosition, animated: true });
  }

  const effectFn = () => {
    if (selectedDay) {
      if (!scrollViewRef.current) return;
      const selectedIndex = dateList.findIndex(day => moment(day).format('YYYY-MM-DD') === selectedDay);
      setPosition(selectedIndex);
    }
    else {
      if (!scrollViewRef.current) return;
      setPosition(x)
    }
  }

  useEffect(() => {
    if (!scrollViewRef.current) {
      setTimeout(effectFn, 200)
    } else {
      setTimeout(effectFn, 100)
    }
  }, [scrollViewRef.current, selectedDay, dateList]);
  return (
    <YStack>
      {/* TODO: If its already in view, then don't scroll to it? */}
      <ScrollView ref={scrollViewRef} horizontal width="100%">
        {dateList.map((x, i) => {
          const dayInfo = getDayInfo(moment(x));
            return (
              <DayTab id={i.toString()} key={`day-tab-${i}`} day={dayInfo} logscreen={logscreen} />
            )
          })
        }
      </ScrollView>
    </YStack>
  )
})
