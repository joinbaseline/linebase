import { XStack, Text, ThemeName } from '@my/ui';
import { ChevronLeft } from '@tamagui/lucide-icons'
import { SCREEN_HEIGHT } from '@my/app/utils/Window.native';
import { ThemeToggle } from './ThemeToggle';
import { TouchableOpacity } from 'react-native';
import { useRouter } from "solito/router";
import { useAtom } from "jotai";
import { modeThemeAtom } from '@my/app/utils/atoms.native';

export const AuthHeader = ({title}: {title: string}) => {
  const router = useRouter()
  const [modeTheme, _] = useAtom(modeThemeAtom)
  return (
    <XStack theme={modeTheme as ThemeName} bg={"$color1"} px={"$4"} h={SCREEN_HEIGHT/8} ai="center" jc="space-between">
      <XStack f={1} jc="flex-start">
        <TouchableOpacity onPress={() => router.back()}>
          <ChevronLeft
            hoverStyle={{
              bg: '$backgroundHover'
            }}
            pressStyle={{
              bg: '$backgroundPress'
            }}
          />
        </TouchableOpacity>
      </XStack>
      <Text col="$color1" themeInverse>{title}</Text>
      <XStack f={1} jc="flex-end">
        <ThemeToggle />
      </XStack>
    </XStack>
  );
};
