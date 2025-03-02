import { AuthHeader } from '@my/ui/src/components/AuthHeader'
import { SignInScreen } from 'app/features/auth/sign-in-screen'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Screen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <Stack.Screen
        options={{
          title: 'Sign In',
          header: () => <AuthHeader title="Sign in" backHref="/onboarding" />
        }}
      />
      <SignInScreen />
    </SafeAreaView>
  )
}
