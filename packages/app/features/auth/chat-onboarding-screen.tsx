import { useSafeAreaInsets } from 'app/utils/useSafeAreaInsets'
import {
  YStack,
  H2,
  View,
} from '@my/ui'
import { WaveBackground } from '@my/ui/src/components/WaveBackground'
import { useRouter } from 'solito/router'
import { ChatScreen } from './components/OnboardingChat'

const ChatOnboarding = ({ handleContinue=() => { return } }: {handleContinue?: () => void}) => {
  const safeAreaInsets = useSafeAreaInsets()
  const handleNext = () => {
    handleContinue();
  }

  return (
  <>
    <View
      f={1}
      bg="$color1"
      ov="hidden"
      pb={safeAreaInsets.bottom}
      pr={safeAreaInsets.right}
      pl={safeAreaInsets.left}
    >
      <WaveBackground flipX />

      {/* Two 50/50 evenly spaces YStacks, second one has content at the end */}
      <YStack f={1} jc="space-evenly">
        {/* This text should be  */}
        <YStack f={1/20} mb="$6" px="$5" jc="center" ai="center">
          <YStack gap="$2">
            <H2 style={{fontWeight: "600"}} als="center" ta="center" size="$8" ff="$body" col="$color12">
              Tell us more about you
            </H2>
          </YStack>
        </YStack>
        <YStack f={1} mb="$4" mx="$2">
          <ChatScreen />
        </YStack>
      </YStack>
    </View>
  </>
  )
}

export const ChatOnboardingScreen = () => {
  const router = useRouter()
  return <ChatOnboarding handleContinue={() => router.push('/sign-up')} />
}
