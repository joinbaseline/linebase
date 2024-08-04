import { ThemeName, XStack } from '@my/ui';
import { ThemeToggle } from './ThemeToggle';
import { SCREEN_HEIGHT } from '@my/app/utils/Window.native';
import { useThemeSetting } from '@my/app/provider/theme';

export const ThemeHeader = () => {
  const { current: modeTheme } = useThemeSetting()
  return (
    <XStack theme={modeTheme as ThemeName} pos="absolute" t={0} r={0} px={"$4"} h={SCREEN_HEIGHT/8} ai="center" jc="flex-end">
      <ThemeToggle />
    </XStack>
  );
};
