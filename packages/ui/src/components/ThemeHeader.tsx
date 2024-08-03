import { ThemeName, XStack } from '@my/ui';
import { ThemeToggle } from './ThemeToggle';
import { SCREEN_HEIGHT } from '@my/app/utils/Window.native';
import { modeThemeAtom } from '@my/app/utils/atoms.native';
import { useAtom } from "jotai";

export const ThemeHeader = () => {
  const [modeTheme, _] = useAtom(modeThemeAtom)
  return (
    <XStack theme={modeTheme as ThemeName} pos="absolute" t={0} r={0} px={"$4"} h={SCREEN_HEIGHT/8} ai="center" jc="flex-end">
      <ThemeToggle />
    </XStack>
  );
};
