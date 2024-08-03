import { Button, YStack } from '@my/ui';
import { Sun, Moon, Computer } from '@tamagui/lucide-icons';
import { useAtom } from 'jotai';
import { modeThemeAtom } from '@my/app/utils/atoms.native';
import { TouchableOpacity } from 'react-native';

export const useThemeToggle = () => {
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

  return {
    toggle: toggleTheme,
    current: modeTheme,
    currentLabel: modeTheme.charAt(0).toUpperCase() + modeTheme.slice(1)
  }
}

export const ThemeToggle = ({size=20, hasSystem=false}: {size?: number, hasSystem?: boolean}) => {
  const { current, toggle } = useThemeToggle()
  return (
    <YStack>
      <TouchableOpacity onPress={toggle}>
        {current === 'light' && <Sun size={size} />}
        {current === 'dark' && <Moon size={size} />}
        {current === 'system' && <Computer size={size} />}
      </TouchableOpacity>
    </YStack>
  );
};
