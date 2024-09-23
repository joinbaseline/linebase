import { LoggingScreen } from '@my/app/features/logging/logging-screen'
import { AuthHeader } from '@my/ui/src/components/AuthHeader'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Screen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <AuthHeader />
        }}
      />
      <LoggingScreen />
    </SafeAreaView>
  )
}
