import { atom, getDefaultStore } from 'jotai';
import { GenericEntry } from './types';
import { atomWithMMKV } from '@my/app/utils/storage.native';

export const $store = getDefaultStore();
export const $moodAtom = atom(0);
export const GENERIC_ENTRIES_STORAGE_KEY = 'generic_entries';
export const MOOD_ENTRIES_STORAGE_KEY = 'mood_entries';

export const $genericEntriesAtom = atomWithMMKV<GenericEntry[]>(GENERIC_ENTRIES_STORAGE_KEY, []);
export const $storedMoodsAtom = atomWithMMKV<GenericEntry[]>(MOOD_ENTRIES_STORAGE_KEY, []);
