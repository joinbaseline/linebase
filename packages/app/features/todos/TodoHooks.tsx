import { useEffect, useState } from "react";
import moment from "moment";
import { useAtom } from "jotai";
import { atom } from 'jotai';

import { $storedMoodsAtom, $genericEntriesAtom } from "@my/app/utils/entries/atoms";
import { Todo } from '@my/app/features/todos/Todos';
import { createEntry, removeEntries } from '@my/app/utils/entries/createEntry';

export const $todoAtom = atom<Todo[]>([])

export const onCheck = (type: string, value: string | number | boolean) => {
  return (checked: boolean) => {
    if (type === 'mood') {
      return false;
    }
    if (checked) {
      const entry = {
        type,
        value,
        timestamp: moment(),
      };
      createEntry(entry);
    } else {
      const today = moment().startOf('day').format('YYYY-MM-DD');
      removeEntries(type, today);
    }
    return true;
  };
};

export const useCheckIfDone = (type: string) => {
  const [entries, _] = useAtom($genericEntriesAtom);
  
  if (type === 'mood') {
    return useLoggedMoodToday();
  }

  const today = moment().startOf('day');
  const todaysEntries = entries.filter(entry => moment(entry.timestamp).startOf('day').isSame(today));
  const result = todaysEntries.some(entry => entry.type === type);
  console.log(today, todaysEntries, result);
  return result;
};


export const useLoggedMoodToday = () => {
  const [moods, _] = useAtom($storedMoodsAtom);
  const [loggedMoodToday, setLoggedMoodToday] = useState(false);

  useEffect(() => {
    const checkLoggedMoodToday = () => {
      if (moods.length === 0) {
        setLoggedMoodToday(false);
        return;
      }
      const lastMood = moods[moods.length - 1];
      const lastMoodDate = moment(lastMood.timestamp).startOf('day');
      const today = moment().startOf('day');
      setLoggedMoodToday(lastMoodDate.isSame(today));
    };

    checkLoggedMoodToday();

    const intervalId = setInterval(() => {
      checkLoggedMoodToday();
    }, 60000);

    return () => clearInterval(intervalId);
  }, [moods]);
  return loggedMoodToday;
}
