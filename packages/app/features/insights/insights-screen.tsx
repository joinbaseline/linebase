import {
  YStack,
  Text,
} from '@my/ui'
import { WaveBackground } from '@my/ui/src/components/WaveBackground'
import Container from '@my/ui/src/components/Container'
  
export const InsightsScreen = () => {
  return (
  <>
    <Container>
      <WaveBackground />
      <YStack f={1} ai="center" jc="flex-start">
        <Text fos="$8" fow="500">Insights</Text>
      </YStack>
    </Container>
  </>
  )
}
