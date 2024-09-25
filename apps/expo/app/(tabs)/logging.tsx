import { LoggingScreen } from '@my/app/features/logging/logging-screen'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Screen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
      <LoggingScreen />
    </SafeAreaView>
  )
}
