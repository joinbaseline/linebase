import { Button, YStack } from '@my/ui';
import { Sun, Moon, Computer } from '@tamagui/lucide-icons';
import { useAtom } from 'jotai';
import { modeThemeAtom } from '@my/app/utils/atoms.native';
import { TouchableOpacity } from 'react-native';

export const ThemeToggle = ({size=20, hasSystem=false}: {size?: number, hasSystem?: boolean}) => {
  const [modeTheme, setModeTheme] = useAtom(modeThemeAtom);

  const toggleTheme = () => {
    if (modeTheme === 'light') {
      setModeTheme('dark');
    // } else if (modeTheme === 'dark') {
    //   if (hasSystem) setModeTheme('system');
    //   else setModeTheme('light');
    } else {
      setModeTheme('light');
    }
  };

  return (
    <YStack>
      <TouchableOpacity onPress={toggleTheme}>
        {modeTheme === 'light' && <Sun size={size} />}
        {modeTheme === 'dark' && <Moon size={size} />}
        {modeTheme === 'system' && <Computer size={size} />}
      </TouchableOpacity>
    </YStack>
  );
};
