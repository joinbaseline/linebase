import { ColorTokens, getTokenValue } from '@my/ui'
import { AuthHeader } from '@my/ui/src/components/AuthHeader'
import { WaveBackground } from '@my/ui/src/components/WaveBackground'
import { Home, ActivitySquare, PlusCircle, BookOpenText } from '@tamagui/lucide-icons'
import { Stack, Tabs } from 'expo-router'
import { useThemeSetting } from '@my/app/provider/theme'
import { ProfileTabIcon } from '@my/app/components/ProfileIcon'

const STROKE_WIDTH = 1.5;

export default function Layout() {
  const { resolvedTheme: modeTheme } = useThemeSetting()

  const getTintColor = () => {
    return "white"
  }
  const getInactiveTintColor = () => {
    return modeTheme === "light" ? getTokenValue("$color.black1") : getTokenValue("$color.black11")
  }
  const getBackgroundColor = () => {
    return modeTheme === "light" ? getTokenValue("$color.red2Light") : getTokenValue("$color.red2Dark")
  }
  return (
    <>
      <WaveBackground/>
      <Stack.Screen options={{headerShown: false}} />
      <Tabs screenOptions={{ 
        headerShown: false,
        tabBarInactiveTintColor: getInactiveTintColor(),
        tabBarActiveTintColor: getTintColor(),
        tabBarStyle: {
          backgroundColor: getBackgroundColor(),
        },
        tabBarIconStyle: {
          marginBottom: -5, // Move tab icons down by 5 units
        },
        tabBarLabelStyle: {
          marginBottom: -5
        }
      }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            headerShown: true,
            header: () => <AuthHeader noBack />,
            tabBarIcon: ({ size, color }) => <Home strokeWidth={STROKE_WIDTH} col={color as ColorTokens} size={size} />,
          }}
        />
        <Tabs.Screen
          name="insights"
          options={{
            title: 'Insights',
            headerShown: true,
            header: () => <AuthHeader title="Insights" noBack />,
            tabBarIcon: ({ size, color }) => <ActivitySquare strokeWidth={STROKE_WIDTH} col={color as ColorTokens} size={size} />,
          }}
        />
        <Tabs.Screen
          name="logging"
          options={{
            title: 'Log',
            headerShown: true,
            header: () => <AuthHeader title="Log" noBack />,
            tabBarIcon: ({ size, color }) => <PlusCircle strokeWidth={STROKE_WIDTH} col={color as ColorTokens} size={size + 7} />,
          }}
        />
        <Tabs.Screen
          name="resources"
          options={{
            title: 'Resources',
            headerShown: true,
            header: () => <AuthHeader title="Resources" noBack />,
            tabBarIcon: ({ size, color }) => <BookOpenText strokeWidth={STROKE_WIDTH} col={color as ColorTokens} size={size} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Settings',
            headerShown: true,
            header: () => <AuthHeader noBack />,
            tabBarIcon: ({ size, color, focused }) => <ProfileTabIcon focused={focused} strokeWidth={STROKE_WIDTH + 0.25} color={color} size={size} />,
          }}
        />
      </Tabs>
    </>
  )
}