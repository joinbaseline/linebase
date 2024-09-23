import { KeyboardAvoidingView, Platform } from 'react-native'
import {
  YStack,
  H2,
} from '@my/ui'
import { WaveBackground } from '@my/ui/src/components/WaveBackground'
import { useRouter } from 'solito/router'
import { ChatScreen } from './components/OnboardingChat'
import Container from '@my/ui/src/components/Container'

const ChatOnboarding = ({ handleContinue=() => { return } }: {handleContinue?: () => void}) => {
  return (
    <Container>
      <WaveBackground flipX />
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <YStack f={1} jc="space-evenly">
          <YStack f={1/10} px="$5" jc="center" ai="center">
            <YStack gap="$2">
              <H2 zi={10} style={{fontWeight: "600"}} als="center" ta="center" size="$8" ff="$body" col="$color12">
                Tell us more about you
              </H2>
            </YStack>
          </YStack>
          <YStack f={1} mb="$3" mx="$2">
            <ChatScreen />
          </YStack>
        </YStack>
      </KeyboardAvoidingView>
    </Container>
  )
}

export const ChatOnboardingScreen = () => {
  const router = useRouter()
  return <ChatOnboarding handleContinue={() => router.push('/sign-up')} />
}
