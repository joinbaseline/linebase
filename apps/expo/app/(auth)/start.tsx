import { ThemeHeader } from '@my/ui/src/components/ThemeHeader'
import { StartScreen } from 'app/features/auth/start-screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true, header: () => <ThemeHeader />
        }}
      />
      <StartScreen />
    </>
  )
}
