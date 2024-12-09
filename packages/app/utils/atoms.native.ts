import { atom } from "jotai";
import { atomWithMMKV } from "./storage.native";


// Theming:
// - modeTheme is dark / light
// - colorTheme is orange / blue / etc.
export const colorThemeAtom = atomWithMMKV('colorTheme', "")

// Local user data:
export const localEmailAtom = atomWithMMKV('localEmail', "");
export const localPasswordAtom = atomWithMMKV('localPassword', "");
export const localFirstNameAtom = atomWithMMKV('localFirstName', "");
export const localLastNameAtom = atomWithMMKV('localLastName', "");
export const localAvatarAtom = atomWithMMKV('localAvatarURL', "");
export const localAboutAtom = atomWithMMKV('localAbout', "");
export const signedInAtom = atomWithMMKV('signedIn', false);

// Atom to store the globally selected day
export const selectedDayAtom = atom<string>(new Date().toISOString().split('T')[0]);
