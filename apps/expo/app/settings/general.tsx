import { AuthHeader } from '@my/ui/src/components/AuthHeader'
import { GeneralSettingsScreen } from 'app/features/settings/general-screen'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Screen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <Stack.Screen
        options={{
          title: 'General',
          header: () => <AuthHeader title="General" />
        }}
      />
      <GeneralSettingsScreen />
    </SafeAreaView>
  )
}
