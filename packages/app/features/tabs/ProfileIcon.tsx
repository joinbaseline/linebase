import { Avatar, ColorTokens, YStack, validToken } from '@my/ui'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { User } from '@tamagui/lucide-icons'
import { useUser } from 'app/utils/useUser'
import { SolitoImage } from 'solito/image'
import { STROKE_WIDTH } from './Constants'

type TabBarIconProps = Parameters<Exclude<BottomTabNavigationOptions['tabBarIcon'], undefined>>[0]

export const ProfileTabIcon = ({ color, size }: TabBarIconProps) => {
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
