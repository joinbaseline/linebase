import { YStack } from '@my/ui';
import { Sun, Moon, Computer } from '@tamagui/lucide-icons';
import { TouchableOpacity } from 'react-native';
import { useThemeSetting } from '@my/app/provider/theme';


export const ThemeToggle = ({size=20}: {size?: number}) => {
  const { current, toggle } = useThemeSetting()
  return (
    <YStack>
      <TouchableOpacity onPress={toggle}>
        {current?.toLowerCase() === 'light' && <Sun size={size} />}
        {current?.toLowerCase() === 'dark' && <Moon size={size} />}
        {current?.toLowerCase() === 'system' && <Computer size={size} />}
      </TouchableOpacity>
    </YStack>
  );
};
