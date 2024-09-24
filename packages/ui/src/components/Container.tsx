import { ThemeName, YStack, YStackProps } from '@my/ui' // Import YStackProps
import { useSafeAreaInsets } from 'app/utils/useSafeAreaInsets'
import { useThemeSetting } from 'app/provider/theme'

interface CustomYStackProps extends YStackProps { // Extend YStackProps
  children: React.ReactNode;
}

export const Container = ({ children, ...props }: CustomYStackProps) => {
  const safeAreaInsets = useSafeAreaInsets();
  const { current: modeTheme } = useThemeSetting(); // Get modeTheme directly

  return (
    <YStack
      pr={safeAreaInsets.right}
      pl={safeAreaInsets.left}
      pb={safeAreaInsets.bottom}
      theme={modeTheme as ThemeName} // Use modeTheme directly
      f={1}
      bg="$color1"
      {...props} // Spread other props
    >
      {children}
    </YStack>
  )
}
