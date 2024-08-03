import {
  Avatar,
  Button,
  H1,
  H2,
  Paragraph,
  ScrollView,
  Settings,
  ThemeName,
  XStack,
  YStack,
  getTokens,
} from '@my/ui'
import { WaveBackground } from '@my/ui/src/components/WaveBackground'
import { Box, Cog, Milestone, ShoppingCart, Users, CircleUser } from '@tamagui/lucide-icons'
import { modeThemeAtom } from 'app/utils/atoms.native'
import { useSafeAreaInsets } from 'app/utils/useSafeAreaInsets'
import { useUser } from 'app/utils/useUser'
import { useAtom } from 'jotai'
import { SolitoImage } from 'solito/image'
import { Link, useLink } from 'solito/link'

export function ProfileScreen() {
  const [modeTheme, _] = useAtom(modeThemeAtom)
  const { profile, avatarUrl } = useUser()
  const name = profile?.firstName
  const about = profile?.about

  const insets = useSafeAreaInsets()
  return (
    <ScrollView bg="$color1">
      <YStack
        maw={600}
        theme={modeTheme as ThemeName}
        bg="$color1"
        mx="auto"
        w="100%"
        f={1}
        pb={insets.bottom + 20}
      >
        <WaveBackground />
        <YStack gap="$4">
          <XStack gap="$2" jc="center" zi={10}>
            {avatarUrl ? (
              <Avatar circular size="$14">
                <SolitoImage
                  src={avatarUrl}
                  alt="your avatar"
                  width={getTokens().size['14'].val}
                  height={getTokens().size['14'].val}
                />
              </Avatar>): <CircleUser strokeWidth={0.3} size="$12" />
            }
          </XStack>
          <YStack gap="$2">
            {name ? (
              <H1 ta="center">{name}</H1>
            ) : (
              <Link href="/profile/edit?edit_name=1">
                <H2 ta="center">No Name</H2>
              </Link>
            )}

            {!!about && (
              <Paragraph theme="alt1" ta="center" size="$6">
                {about}
              </Paragraph>
            )}
          </YStack>
        </YStack>
        <YStack gap="$4" mt="$2">
          <Button mx="$4" themeInverse>{/*...useLink({ href: '/profile/edit' }) >*/} 
            Edit Profile
          </Button>
          <Settings>
            <Settings.Items>
              <Settings.Group>
                {/* dummy item - doesn't lead anywhere */}
                <Settings.Item icon={Box} accentTheme="green">
                  My Items
                </Settings.Item>
                {/* dummy item - doesn't lead anywhere */}
                <Settings.Item icon={Users} accentTheme="orange">
                  Refer Your Friends
                </Settings.Item>
                {/* dummy item - doesn't lead anywhere */}
                <Settings.Item icon={Milestone} accentTheme="blue">
                  Address Info
                </Settings.Item>
                {/* dummy item - doesn't lead anywhere */}
                <Settings.Item icon={ShoppingCart} accentTheme="blue">
                  Purchase History
                </Settings.Item>
                <Settings.Item {...useLink({ href: '/settings' })} icon={Cog}>
                  Settings
                </Settings.Item>
              </Settings.Group>
            </Settings.Items>
          </Settings>
        </YStack>
      </YStack>
    </ScrollView>
  )
}
