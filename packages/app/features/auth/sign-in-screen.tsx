import { H2, LoadingOverlay, Paragraph, SubmitButton, Text, Theme, ThemeName, YStack, isWeb } from '@my/ui'
import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import { useUser } from 'app/utils/useUser'
import { useEffect } from 'react'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import { createParam } from 'solito'
import { Link } from 'solito/link'
import { useRouter } from 'solito/router'
import { z } from 'zod'
import { useAtom } from 'jotai'

import { modeThemeAtom } from 'app/utils/atoms.native'
import { WaveBackground } from '@my/ui/src/components/WaveBackground'
import { SocialLogin } from './components/SocialLogin'

const { useParams, useUpdateParams } = createParam<{ email?: string }>()

const SignInSchema = z.object({
  email: formFields.text.email().describe('Email // Enter your email'),
  password: formFields.text.min(6).describe('Password // Enter your password'),
})

export const SignInScreen = () => {
  const [modeTheme, _] = useAtom(modeThemeAtom)
  const supabase = useSupabase()
  const router = useRouter()
  const { params } = useParams()
  const updateParams = useUpdateParams()
  useRedirectAfterSignIn()
  const { isLoadingSession } = useUser()
  useEffect(() => {
    // remove the persisted email from the url, mostly to not leak user's email in case they share it
    if (params?.email) {
      updateParams({ email: undefined }, { web: { replace: true } })
    }
  }, [params?.email, updateParams])
  const form = useForm<z.infer<typeof SignInSchema>>()

  async function signInWithEmail({ email, password }: z.infer<typeof SignInSchema>) {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      const errorMessage = error?.message.toLowerCase()
      if (errorMessage.includes('email')) {
        form.setError('email', { type: 'custom', message: errorMessage })
      } else if (errorMessage.includes('password')) {
        form.setError('password', { type: 'custom', message: errorMessage })
      } else {
        form.setError('password', { type: 'custom', message: errorMessage })
      }
    } else {
      router.replace('/')
    }
  }

  return (
  <YStack theme={modeTheme as ThemeName} f={1} bg="$color1">
    <WaveBackground fill={"$red3"} />
    <FormProvider {...form}>
      <SchemaForm
        form={form}
        schema={SignInSchema}
        defaultValues={{
          email: params?.email || '',
          password: '',
        }}
        onSubmit={signInWithEmail}
        props={{
          password: {
            afterElement: <ForgotPasswordLink />,
            secureTextEntry: true,
          },
        }}
        renderAfter={({ submit }) => {
          return (
            <>
              <SubmitButton themeInverse onPress={() => submit()} br="$10">
                Sign In
              </SubmitButton>
              <SignUpLink />
              {isWeb && <SocialLogin />}
            </>
          )
        }}
      >
        {(fields) => (
          <>
            <YStack ai="center" jc="center" gap="$2" mb="$4">
              <H2 als="center" verticalAlign={"center"} size="$7" ff="$body" col="$color12" $sm={{ size: '$8' }}>
                Sign in
              </H2>
              <Paragraph fow="200">Welcome back to Baseline</Paragraph>
            </YStack>
            {Object.values(fields)}
            {!isWeb && (
              <YStack mt="$4">
                {/*<SocialLogin />*/}
              </YStack>
            )}
          </>
        )}
      </SchemaForm>
      {/* this is displayed when the session is being updated - usually when the user is redirected back from an auth provider */}
      {isLoadingSession && <LoadingOverlay />}
    </FormProvider>
  </YStack>
  )
}

const SignUpLink = () => {
  const email = useWatch<z.infer<typeof SignInSchema>>({ name: 'email' })
  return (
    <Link href={`/sign-up?${new URLSearchParams(email ? { email } : undefined).toString()}`}>
      <Paragraph ta="center">
        Don&apos;t have an account? <Text textDecorationLine="underline">Sign up</Text>
      </Paragraph>
    </Link>
  )
}

const ForgotPasswordLink = () => {
  const email = useWatch<z.infer<typeof SignInSchema>>({ name: 'email' })

  return (
    <Link href={`/reset-password?${new URLSearchParams(email ? { email } : undefined)}`}>
      <Paragraph mt="$1" textDecorationLine="underline">
        Forgot your password?
      </Paragraph>
    </Link>
  )
}

// we use this hook here because this is the page we redirect unauthenticated users to
// if they authenticate on this page, this will redirect them to the home page
function useRedirectAfterSignIn() {
  const supabase = useSupabase()
  const router = useRouter()
  useEffect(() => {
    const signOutListener = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        router.replace('/')
      }
    })
    return () => {
      signOutListener.data.subscription.unsubscribe()
    }
  }, [supabase, router])
}
