import { Avatar, ColorTokens, YStack, getTokenValue, validToken } from '@my/ui'
import { AuthHeader } from '@my/ui/src/components/AuthHeader'
import { WaveBackground } from '@my/ui/src/components/WaveBackground'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { Home, MessagesSquare, ActivitySquare, User } from '@tamagui/lucide-icons'
import { useUser } from 'app/utils/useUser'
import { Stack, Tabs } from 'expo-router'
import { SolitoImage } from 'solito/image'
import { useThemeSetting } from '@my/app/provider/theme'

const STROKE_WIDTH = 1;

export default function Layout() {
  const { current: modeTheme} = useThemeSetting()

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
          paddingTop: 5,
          marginBottom: 10,
        },
      }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            headerShown: true,
            header: () => <AuthHeader title="Home" noBack />,
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
          name="resources"
          options={{
            title: 'Resources',
            headerShown: true,
            header: () => <AuthHeader title="Resources" noBack />,
            tabBarIcon: ({ size, color }) => <MessagesSquare strokeWidth={STROKE_WIDTH} col={color as ColorTokens} size={size} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: true,
            header: () => <AuthHeader title="Profile" noBack />,
            tabBarIcon: ProfileTabIcon,
          }}
        />
      </Tabs>
    </>
  )
}

type TabBarIconProps = Parameters<Exclude<BottomTabNavigationOptions['tabBarIcon'], undefined>>[0]

const ProfileTabIcon = ({ color, size }: TabBarIconProps) => {
  const { avatarUrl } = useUser()
  return (
    <YStack bw={STROKE_WIDTH} boc={validToken(color)} br="$10">
      {avatarUrl !== "" ? (
        <Avatar circular p="$1" size={size}>
            <SolitoImage src={avatarUrl} alt="your avatar" width={size} height={size} />
        </Avatar>
      ): <User strokeWidth={STROKE_WIDTH} col={color as ColorTokens} size={size} />
      }
    </YStack>
  )
}
