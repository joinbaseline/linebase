import { modeThemeAtom } from '@my/app/utils/atoms.native'
import { Avatar, ColorTokens, YStack, getTokenValue, validToken } from '@my/ui'
import { AuthHeader } from '@my/ui/src/components/AuthHeader'
import { WaveBackground } from '@my/ui/src/components/WaveBackground'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { Home, Globe, MessagesSquare, ActivitySquare, User } from '@tamagui/lucide-icons'
import { useUser } from 'app/utils/useUser'
import { Stack, Tabs } from 'expo-router'
import { SolitoImage } from 'solito/image'
import { useAtom } from "jotai"

export default function Layout() {
  const [ modeTheme, _ ] = useAtom(modeThemeAtom)
  const getTintColor = () => {
    return "white"
  }
  return (
    <>
      <WaveBackground/>
      <Stack.Screen options={{headerShown: false}} />
      <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: getTintColor() }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            headerShown: true,
            header: () => <AuthHeader title="Home" noBack />,
            tabBarIcon: ({ size, color }) => <Home col={color as ColorTokens} size={size} />,
          }}
        />
        <Tabs.Screen
          name="insights"
          options={{
            title: 'Insights',
            headerShown: true,
            header: () => <AuthHeader title="Insights" noBack />,
            tabBarIcon: ({ size, color }) => <ActivitySquare col={color as ColorTokens} size={size} />,
          }}
        />
        <Tabs.Screen
          name="resources"
          options={{
            title: 'Resources',
            headerShown: true,
            header: () => <AuthHeader title="Resources" noBack />,
            tabBarIcon: ({ size, color }) => <MessagesSquare col={color as ColorTokens} size={size} />,
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
    <YStack bw="$1" boc={validToken(color)} br="$10">
      {avatarUrl !== "" ? (
        <Avatar circular p="$1" size={size}>
            <SolitoImage src={avatarUrl} alt="your avatar" width={size} height={size} />
        </Avatar>
      ): <User col={color as ColorTokens} size={size} />
      }
    </YStack>
  )
}
