import { FormWrapper, H2, H4, KVTable, Separator, SizableText, ThemeName, YStack, isWeb, styled } from '@my/ui'
import { useThemeSetting } from 'app/provider/theme'
import { useUser } from 'app/utils/useUser'
import { Link } from 'solito/link'

export const GeneralSettingsScreen = () => {
  const { user, profile } = useUser()
  const {current: modeTheme} = useThemeSetting()

  return (
  <YStack f={1} theme={modeTheme as ThemeName} bg="$color1">
    <FormWrapper>
      {isWeb && (
        <YStack px="$4" py="$4" pb="$2">
          <H2>General</H2>
        </YStack>
      )}
      <FormWrapper.Body mt="$2" gap="$10">
        <Section>
          <KVTable>
            <YStack gap="$4">
              <H4>Profile Data</H4>
              <Separator />
            </YStack>
            <KVTable.Row>
              <KVTable.Key>
                <SizableText fow="900">Name</SizableText>
              </KVTable.Key>
              <KVTable.Value gap="$4">
                <SizableText>{profile?.firstName}</SizableText>
                <Link href="/profile/edit">
                  <SizableText textDecorationLine="underline">Change</SizableText>
                </Link>
              </KVTable.Value>
            </KVTable.Row>
          </KVTable>
        </Section>

        <Section>
          <KVTable>
            <YStack gap="$4">
              <H4>Account Data</H4>
              <Separator />
            </YStack>
            <KVTable.Row>
              <KVTable.Key>
                <SizableText fow="900">Email</SizableText>
              </KVTable.Key>
              <KVTable.Value gap="$4">
                <SizableText>{user?.email}</SizableText>
                <Link href="/settings/change-email">
                  <SizableText textDecorationLine="underline">Change</SizableText>
                </Link>
              </KVTable.Value>
            </KVTable.Row>

            <KVTable.Row>
              <KVTable.Key>
                <SizableText fow="900">User ID</SizableText>
              </KVTable.Key>
              <KVTable.Value>
                <SizableText>{user?.id}</SizableText>
              </KVTable.Value>
            </KVTable.Row>
          </KVTable>
        </Section>
      </FormWrapper.Body>
    </FormWrapper>
  </YStack>
  )
}

const Section = styled(YStack, {
  boc: '$borderColor',
  bw: 1,
  p: '$4',
  br: '$4',
})
