import { useSafeAreaInsets } from 'app/utils/useSafeAreaInsets'
import {
  XStack,
  YStack,
  Button,
  H1,
  H2,
  ThemeName,
  View,
} from '@my/ui'
import { ChevronRight } from '@tamagui/lucide-icons'
import { WaveBackground } from '@my/ui/src/components/WaveBackground'
import { useRouter } from 'solito/router'
import { useThemeSetting } from 'app/provider/theme'
import { SkipButton } from './components/Skip'

export const Start = ({ handleContinue }: {handleContinue: () => void}) => {
  const safeAreaInsets = useSafeAreaInsets()
  const { current: modeTheme } = useThemeSetting()

  return (
  <>
    <View
      f={1}
      bg="$color1"
      ov="hidden"
      theme={modeTheme as ThemeName}
      pb={safeAreaInsets.bottom}
      pr={safeAreaInsets.right}
      pt={safeAreaInsets.top}
      pl={safeAreaInsets.left}
    >
      <WaveBackground />
      <YStack f={1} jc="space-evenly">
        <YStack f={1/2} p="$5" jc="center" ai="center">
          <YStack ai='flex-start' mr="$7">
            <H1 mb={-8} maxFontSizeMultiplier={1} size="$13" col="$color12">
              Baseline
            </H1>
            <H2 maw="80%" maxFontSizeMultiplier={1.5} mx="$2" size="$7" ff="$body" col="$color12">Live better with bipolar</H2>
          </YStack>
        </YStack>
        <YStack f={1} jc="flex-end">
          <XStack jc="space-between" mb="$4" ai="center" p="$5" gap="$5">
            <Button
              elevate
              pressStyle={{
                bg: '$color5',
                boc: '$color5',
              }}
              themeInverse
              bg="$color1"
              size="$5"
              f={1}
              br="$10"
              onPress={() => handleContinue()}
              iconAfter={ChevronRight}
            >
              <Button.Text ml="$4" col="$color" fow={"200"}>Get Started</Button.Text>
            </Button>
          </XStack>
          <SkipButton />
        </YStack>
      </YStack>
    </View>
  </>
  )
}

export const StartScreen = () => {
  const router = useRouter()
  return <Start handleContinue={() => router.push('/onboarding')} />
}
