import { AuthHeader } from '@my/ui/src/components/AuthHeader'
import { SignInScreen } from 'app/features/auth/sign-in-screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Sign In',
          header: () => <AuthHeader title="Sign in" backHref="/onboarding" />
        }}
      />
      <SignInScreen />
    </>
  )
}
