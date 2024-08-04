import {
  Button,
  FormWrapper,
  H2,
  Paragraph,
  SubmitButton,
  Text,
  ThemeName,
  XStack,
  YStack,
  isWeb,
} from '@my/ui'
import { ChevronLeft, ChevronRight } from '@tamagui/lucide-icons'
import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import { useEffect } from 'react'
import { FormProvider, useForm, useFormContext, useWatch } from 'react-hook-form'
import { createParam } from 'solito'
import { Link } from 'solito/link'
import { z } from 'zod'
import { useAtom } from 'jotai'

import { localEmailAtom, localFirstNameAtom, localLastNameAtom, localPasswordAtom, modeThemeAtom } from 'app/utils/atoms.native'
import { WaveBackground } from '@my/ui/src/components/WaveBackground'
import { SocialLogin } from './components/SocialLogin'
import { useRouter } from 'solito/router'
import { useThemeSetting } from 'app/provider/theme'

const { useParams, useUpdateParams } = createParam<{ email?: string }>()

const SignUpSchema = z.object({
  name: formFields.text.min(2).describe('Name // Pete Bloggs'),
  email: formFields.text.email().describe('Email // your@email.acme'),
  password: formFields.text.min(6).describe('Password // Choose a password'),
})

export const SignUpScreen = () => {
  const supabase = useSupabase()
  const { current: modeTheme } = useThemeSetting()

  const [localEmail, setLocalEmail] = useAtom(localEmailAtom)
  const [localPassword, setLocalPassword] = useAtom(localPasswordAtom);
  const [localFirstName, setLocalFirstName] = useAtom(localFirstNameAtom);
  const [localLastName, setLocalLastName] = useAtom(localLastNameAtom);

  const localSignup = (email: string, password: string, first_name?: string, last_name?: string) => {
    setLocalEmail(email)
    setLocalPassword(password)
    setLocalFirstName(first_name || "")
    setLocalLastName(last_name || "")
  }

  const updateParams = useUpdateParams()
  const { params } = useParams()

  useEffect(() => {
    if (params?.email) {
      updateParams({ email: undefined }, { web: { replace: true } })
    }
  }, [params?.email, updateParams])

  const form = useForm<z.infer<typeof SignUpSchema>>()

  const supabaseSignup = async (email: string, password: string, first_name?: string, last_name?: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        // To take user's name, other info
        data: {
          first_name,
          last_name,
        },
      },
    })

    if (error) {
      const errorMessage = error?.message.toLowerCase()
      if (errorMessage.includes('email')) {
        form.setError('email', { type: 'custom', message: errorMessage })
      } else if (errorMessage.includes('password')) {
        form.setError('password', { type: 'custom', message: errorMessage })
      } else if (errorMessage.includes('name')) {
        form.setError('name', { type: 'custom', message: errorMessage })
      } else {
        form.setError('password', { type: 'custom', message: errorMessage })
      }
    }
  }

  async function signUpWithEmail({ email, password, name }: z.infer<typeof SignUpSchema>) {
    const [ first_name, last_name ] = name.trim().split(" ");
    localSignup(email, password, first_name, last_name)
    // await supabaseSignup(email, password, first_name, last_name);
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
  const router = useRouter()
  const email = useWatch<z.infer<typeof SignUpSchema>>({ name: 'email' })
  // const { reset } = useFormContext()

  const goToLogin = () => {
    router.push(`/sign-in?${new URLSearchParams(email ? { email } : undefined).toString()}`)
  }

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
        <XStack jc="flex-end">
          <Button iconAfter={ChevronRight} themeInverse br="$10" onPress={goToLogin}>
            Continue
          </Button>
        </XStack>
      </FormWrapper.Footer>
    </FormWrapper>
  )
}
