import { MMKV } from 'react-native-mmkv';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

export const storage = new MMKV({
    id: "default",
    encryptionKey: undefined,
});

const createStorageClient = (storage) => ({
    getItem: (key) => {
        const value = storage.getString(key);
        return value ? value : null;
    },
    setItem: (key, value) => {
        storage.set(key, value);
    },
    removeItem: (key) => {
        storage.delete(key);
    },
    clearAll: () => {
        storage.clearAll();
    }
});

export const clientStorage = createStorageClient(storage);

export const atomWithMMKV = <T>(key: string, initialValue: T) => {
  return atomWithStorage<T>(
    key,
    initialValue,
    createJSONStorage<T>(() => (clientStorage)),
  );
}
