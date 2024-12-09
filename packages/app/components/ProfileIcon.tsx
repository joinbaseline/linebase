import { Avatar, ColorTokens, YStack, validToken } from '@my/ui'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { User } from '@tamagui/lucide-icons'
import { STROKE_WIDTH } from 'app/utils/svg/constants'
import { useUser } from 'app/utils/useUser'
import { SolitoImage } from 'solito/image'

type TabBarIconProps = Parameters<Exclude<BottomTabNavigationOptions['tabBarIcon'], undefined>>[0] & {
  strokeWidth: number
}

export const ProfileTabIcon = ({ color, size, strokeWidth = STROKE_WIDTH }: TabBarIconProps) => {
  const { avatarUrl } = useUser()
  return (
    <YStack bw={strokeWidth} boc={validToken(color)} br={size}>
      {avatarUrl !== "" ? (
        <Avatar circular p="$1" size={size}>
            <SolitoImage src={avatarUrl} alt="your avatar" width={size} height={size} />
        </Avatar>
        ): <User strokeWidth={strokeWidth} col={color as ColorTokens} size={size} />
      }
    </YStack>
  )
}
