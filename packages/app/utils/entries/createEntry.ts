import { GenericEntry } from '@my/app/utils/entries/types';
import moment from 'moment';
import { $store, $storedMoodsAtom, $genericEntriesAtom } from '@my/app/utils/entries/atoms';
import { sortedInsert } from '@my/app/utils/entries/insert';

export const saveToStorage = (entries: GenericEntry[], type: string) => {
  try {
    if (type === 'mood') {
      $store.set($storedMoodsAtom, entries);
    } else {
      $store.set($genericEntriesAtom, entries);
    }
  } catch (error) {
    console.error('Error saving to storage', error);
  }
};

export const loadFromStorage = (type: string): GenericEntry[] => {
  try {
    if (type === 'mood') {
      return $store.get($storedMoodsAtom);
    } else {
      return $store.get($genericEntriesAtom);
    }
  } catch (error) {
    console.error('Error loading from storage', error);
    return [];
  }
};

export const createEntry = (entry: GenericEntry): GenericEntry[] => {
  const storage = loadFromStorage(entry.type);
  const entries = sortedInsert(storage, entry);
  saveToStorage(entries, entry.type);
  return entries;
};

export const removeEntries = (type: string, date: string): GenericEntry[] => {
  const storage = loadFromStorage(type);
  const updatedEntries = storage.filter(entry => 
    entry.type !== type || !moment(entry.timestamp).isSame(date, 'day')
  );
  saveToStorage(updatedEntries, type);
  return updatedEntries;
};
