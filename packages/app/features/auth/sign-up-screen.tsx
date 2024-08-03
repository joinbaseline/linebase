import {
  Button,
  FormWrapper,
  H2,
  Paragraph,
  SubmitButton,
  Text,
  ThemeName,
  YStack,
  isWeb,
} from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import { useEffect } from 'react'
import { FormProvider, useForm, useFormContext, useWatch } from 'react-hook-form'
import { createParam } from 'solito'
import { Link } from 'solito/link'
import { z } from 'zod'
import { useAtom } from 'jotai'

import { modeThemeAtom } from 'app/utils/atoms.native'
import { WaveBackground } from '@my/ui/src/components/WaveBackground'
import { SocialLogin } from './components/SocialLogin'

const { useParams, useUpdateParams } = createParam<{ email?: string }>()

const SignUpSchema = z.object({
  email: formFields.text.email().describe('Email // your@email.acme'),
  password: formFields.text.min(6).describe('Password // Choose a password'),
})

export const SignUpScreen = () => {
  const [modeTheme, _] = useAtom(modeThemeAtom)
  const supabase = useSupabase()
  const updateParams = useUpdateParams()
  const { params } = useParams()

  useEffect(() => {
    if (params?.email) {
      updateParams({ email: undefined }, { web: { replace: true } })
    }
  }, [params?.email, updateParams])

  const form = useForm<z.infer<typeof SignUpSchema>>()

  async function signUpWithEmail({ email, password }: z.infer<typeof SignUpSchema>) {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        // To take user's name other info
        data: {
          // first_name: firstName, // coming from state
          // last_name: lastName,
        },
      },
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
    }
  }

  return (
  <YStack theme={modeTheme as ThemeName} f={1} bg="$color1">
    <WaveBackground />
    <FormProvider {...form}>
      {form.formState.isSubmitSuccessful ? (
        <CheckYourEmail />
      ) : (
        <SchemaForm
          form={form}
          schema={SignUpSchema}
          defaultValues={{
            email: params?.email || '',
            password: '',
          }}
          props={{
            password: {
              secureTextEntry: true,
            },
          }}
          onSubmit={signUpWithEmail}
          renderAfter={({ submit }) => (
            <>
              <SubmitButton themeInverse onPress={() => submit()} br="$10">
                Sign Up
              </SubmitButton>
              <SignInLink />
              {isWeb && <SocialLogin />}
            </>
          )}
        >
          {(fields) => (
            <>
              <YStack ai="center" jc="center" gap="$2" mb="$4">
                <H2 als="center" verticalAlign={"center"} size="$7" ff="$body" col="$color12" $sm={{ size: '$8' }}>
                  Welcome to Baseline
                </H2>
                <Paragraph fow="200" >Create your account</Paragraph>
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
      )}
    </FormProvider>
  </YStack>
  )
}

const SignInLink = () => {
  const email = useWatch<z.infer<typeof SignUpSchema>>({ name: 'email' })

  return (
    <Link href={`/sign-in?${new URLSearchParams(email ? { email } : undefined).toString()}`}>
      <Paragraph ta="center" mt="$2">
        Already signed up? <Text textDecorationLine="underline">Sign in</Text>
      </Paragraph>
    </Link>
  )
}

const CheckYourEmail = () => {
  const email = useWatch<z.infer<typeof SignUpSchema>>({ name: 'email' })
  const { reset } = useFormContext()

  return (
    <FormWrapper>
      <FormWrapper.Body>
        <YStack gap="$3">
          <H2>Check Your Email</H2>
          <Paragraph theme="alt1">
            We&apos;ve sent you a confirmation link. Please check your email ({email}) and confirm
            it.
          </Paragraph>
        </YStack>
      </FormWrapper.Body>
      <FormWrapper.Footer>
        <Button themeInverse icon={ChevronLeft} br="$10" onPress={() => reset()}>
          Back
        </Button>
      </FormWrapper.Footer>
    </FormWrapper>
  )
}
