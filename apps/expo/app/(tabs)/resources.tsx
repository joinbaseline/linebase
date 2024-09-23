import { ResourcesScreen } from '@my/app/features/home/resources'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ResScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
      <ResourcesScreen />
    </SafeAreaView>
  )
}
