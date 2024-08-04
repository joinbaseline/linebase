import { XStack, Text, ThemeName } from '@my/ui';
import { ChevronLeft } from '@tamagui/lucide-icons'
import { SCREEN_HEIGHT } from '@my/app/utils/Window.native';
import { ThemeToggle } from './ThemeToggle';
import { TouchableOpacity } from 'react-native';
import { useRouter } from "solito/router";
import { useThemeSetting } from '@my/app/provider/theme';

export const AuthHeader = ({title, noBack=false}: {title: string, noBack?: boolean}) => {
  const router = useRouter()
  const { current: modeTheme } = useThemeSetting()
  return (
    <XStack zi={1} theme={modeTheme as ThemeName} bg={"$color1"} px={"$4"} h={SCREEN_HEIGHT/10} ai="center" jc="space-between">
      <XStack f={1} jc="flex-start">
        {!noBack &&
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
        }
      </XStack>
      <Text col="$color1" themeInverse>{title}</Text>
      <XStack f={1} jc="flex-end">
        <ThemeToggle />
      </XStack>
    </XStack>
  );
};
