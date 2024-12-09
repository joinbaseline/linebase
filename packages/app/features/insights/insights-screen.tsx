import { WaveBackground } from '@my/ui/src/components/WaveBackground'
import { Container } from '@my/ui/src/components/Container'
import { AnxietyFactors } from './health/AnxietyFactors'
  
export const InsightsScreen = () => {
  return (
  <>
    <Container>
      <WaveBackground />
      <AnxietyFactors />
    </Container>
  </>
  )
}
