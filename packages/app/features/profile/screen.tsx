import {
  Avatar,
  Button,
  H1,
  H2,
  Paragraph,
  Settings,
  XStack,
  YStack,
  getTokens,
} from '@my/ui'
import Container from '@my/ui/src/components/Container'
import { WaveBackground } from '@my/ui/src/components/WaveBackground'
import { Box, Cog, Milestone, ShoppingCart, Users, CircleUser } from '@tamagui/lucide-icons'
import { useThemeSetting } from 'app/provider/theme'
import { useUser } from 'app/utils/useUser'
import { SolitoImage } from 'solito/image'
import { Link, useLink } from 'solito/link'

export function ProfileScreen() {
  const { profile, avatarUrl } = useUser()
  const editLink = useLink({ href: '/profile/edit' })
  const name = profile?.firstName
  const about = profile?.about

  return (
    <Container>
      <WaveBackground />
      <YStack f={1} gap="$4">
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
        <YStack f={1} gap="$4" mt="$2">
          <Button mx="$4" themeInverse onPress={editLink.onPress}>
            Edit Profile
          </Button>
          <Settings>
            <Settings.Items>
              <Settings.Group gap={1}>
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
    </Container>
  )
}
