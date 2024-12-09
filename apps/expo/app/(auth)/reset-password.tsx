import { AuthHeader } from '@my/ui/src/components/AuthHeader'
import { ResetPasswordScreen } from 'app/features/auth/reset-password-screen'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Reset Password',
          header: () => <AuthHeader title="Reset Password" />
        }}
      />
      <ResetPasswordScreen />
    </>
  )
}
