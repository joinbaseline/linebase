import { useSafeAreaInsets } from 'app/utils/useSafeAreaInsets'
import {
  XStack,
  YStack,
  Button,
  H2,
  View,
  Paragraph,
} from '@my/ui'
import { ChevronRight } from '@tamagui/lucide-icons'
import { WaveBackground } from '@my/ui/src/components/WaveBackground'
import { useRouter } from 'solito/router'
import { AnxietyFactors } from '@my/ui/src/components/health/AnxietyFactors'
  
export const InsightsScreen = () => {
  const router = useRouter()
  const safeAreaInsets = useSafeAreaInsets()

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
      <WaveBackground />
      {/* Two 50/50 evenly spaces YStacks, first one has anxiety insights */}
      <YStack f={1} jc="space-evenly">
        {/* This text should be  */}
        <YStack f={1/2} px="$5" jc="center" ai="center">
          <YStack ai="center" jc="center" gap="$2">
            <AnxietyFactors />
          </YStack>
        </YStack>
        <YStack f={1/2} jc="flex-end">
        </YStack>
      </YStack>
    </View>
  </>
  )
}
