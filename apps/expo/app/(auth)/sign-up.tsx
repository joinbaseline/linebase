import { AuthHeader } from '@my/ui/src/components/AuthHeader'
import { SignUpScreen } from 'app/features/auth/sign-up-screen'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Screen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <Stack.Screen
        options={{
          title: 'Sign Up',
          header: () => <AuthHeader title={"Sign up"} backHref="/onboarding" />
        }}
      />
      <SignUpScreen />
    </SafeAreaView>
  )
}
