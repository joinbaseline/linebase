import { atomWithMMKV } from "./storage.native";


// Theming:
// - modeTheme is dark / light
// - colorTheme is orange / blue / etc.
export const modeThemeAtom = atomWithMMKV('modeTheme', "")
export const colorThemeAtom = atomWithMMKV('colorTheme', "")
