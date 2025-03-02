import { Button, FormWrapper, H2, Paragraph, SubmitButton, Text, Theme, ThemeName, YStack } from '@my/ui'
import { WaveBackground } from '@my/ui/src/components/WaveBackground'
import { ChevronLeft } from '@tamagui/lucide-icons'
import { useThemeSetting } from 'app/provider/theme'
import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import { useEffect } from 'react'
import { FormProvider, useForm, useFormContext, useWatch } from 'react-hook-form'
import { createParam } from 'solito'
import { Link } from 'solito/link'
import { z } from 'zod'

const { useParams, useUpdateParams } = createParam<{ email?: string }>()

const ResetPasswordSchema = z.object({
  email: formFields.text.email().describe('Email // your@email.acme'),
})

export const ResetPasswordScreen = () => {
  const supabase = useSupabase()
  const { current: modeTheme } = useThemeSetting()
  const { params } = useParams()
  const updateParams = useUpdateParams()
  useEffect(() => {
    if (params?.email) {
      updateParams({ email: undefined }, { web: { replace: true } })
    }
  }, [params?.email, updateParams])

  const form = useForm<z.infer<typeof ResetPasswordSchema>>()

  async function resetPassword({ email }: z.infer<typeof ResetPasswordSchema>) {
    const { error } = await supabase.auth.resetPasswordForEmail(email)

    if (error) {
      const errorMessage = error?.message.toLowerCase()
      if (errorMessage.includes('email')) {
        form.setError('email', { type: 'custom', message: errorMessage })
      } else {
        form.setError('email', { type: 'custom', message: errorMessage })
      }
    }
  }

  return (
  <YStack theme={modeTheme as ThemeName} f={1} bg="$color1">
    <WaveBackground fill={"$red3"} flipX />
    <FormProvider {...form}>
      {form.formState.isSubmitSuccessful ? (
        <CheckYourEmail />
      ) : (
        <SchemaForm
          form={form}
          schema={ResetPasswordSchema}
          defaultValues={{
            email: params?.email || '',
          }}
          onSubmit={resetPassword}
          renderAfter={({ submit }) => {
            return (
              <>
                <Theme inverse>
                  <SubmitButton onPress={() => submit()} br="$10">
                    Send Link
                  </SubmitButton>
                </Theme>
                <SignInLink />
              </>
            )
          }}
        >
          {(fields) => (
            <>
              <YStack gap="$3" mb="$4">
                <H2 $sm={{ size: '$8' }}>Reset your password</H2>
                <Paragraph theme="alt1">
                  Type in your email and we&apos;ll send you a link to reset your password
                </Paragraph>
              </YStack>
              {Object.values(fields)}
            </>
          )}
        </SchemaForm>
      )}
    </FormProvider>
  </YStack>
  )
}

const CheckYourEmail = () => {
  const email = useWatch<z.infer<typeof ResetPasswordSchema>>({ name: 'email' })
  const { reset } = useFormContext()

  return (
    <FormWrapper>
      <FormWrapper.Body>
        <YStack gap="$3">
          <H2>Check Your Email</H2>
          <Paragraph theme="alt1">
            We&apos;ve sent you a reset link. Please check your email ({email}) and confirm it.
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

const SignInLink = () => {
  const email = useWatch<z.infer<typeof ResetPasswordSchema>>({ name: 'email' })

  return (
    <Link href={`/sign-in?${new URLSearchParams(email ? { email } : undefined)}`}>
      <Paragraph ta="center">
        Done resetting? <Text textDecorationLine="underline">Sign in</Text>
      </Paragraph>
    </Link>
  )
}
