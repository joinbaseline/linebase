import { AuthHeader } from '@my/ui/src/components/AuthHeader'
import { ChatOnboardingScreen } from 'app/features/auth/chat-onboarding-screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <AuthHeader />
        }}
      />
      <ChatOnboardingScreen />
    </>
  )
}
