import { useSafeAreaInsets } from 'app/utils/useSafeAreaInsets'
import {
  YStack,
  View,
  Text,
} from '@my/ui'
import { WaveBackground } from '@my/ui/src/components/WaveBackground'
import { useRouter } from 'solito/router'
  
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
      <YStack f={1} ai="center" jc="flex-start">
        <Text fos="$8" fow="500">Insights</Text>
      </YStack>
    </View>
  </>
  )
}
