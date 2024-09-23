import { FullscreenSpinner, SubmitButton, Theme, YStack, useToastController } from '@my/ui'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { SchemaForm, formFields } from 'app/utils/SchemaForm'
import { useSupabase } from 'app/utils/supabase/useSupabase'
import { useUser } from 'app/utils/useUser'
import { createParam } from 'solito'
import { useRouter } from 'solito/router'
import { z } from 'zod'

import { api } from 'app/utils/api'
import Container from '@my/ui/src/components/Container'
import { ProfileTabIcon } from '@my/app/components/ProfileIcon'
import { STROKE_WIDTH } from '@my/app/utils/svg/constants'
import { UploadAvatar } from '@my/app/features/settings/components/upload-avatar'

const { useParams } = createParam<{ edit_name?: '1'; edit_about?: '1' }>()
export const EditProfileScreen = () => {
  const { profile, user } = useUser()

  if (!profile || !user?.id) {
    return <FullscreenSpinner />
  }
  return <EditProfileForm userId={user.id} initial={{ 
    name: profile.firstName,
    about: profile.about
  }} />
}

const ProfileSchema = z.object({
  name: formFields.text.describe('Name // John Doe'),
  about: formFields.textarea.describe('About // Tell us a bit about yourself'),
})

const EditProfileForm = ({
  initial,
  userId,
}: {
  initial: { name: string | null; about: string | null }
  userId: string
}) => {
  const { params } = useParams()
  const supabase = useSupabase()
  const toast = useToastController()
  const queryClient = useQueryClient()
  const router = useRouter()
  const apiUtils = api.useUtils()
  const mutation = useMutation({
    async mutationFn(data: z.infer<typeof ProfileSchema>) {
      await supabase
        .from('profiles')
        .update({ name: data.name, about: data.about })
        .eq('id', userId)
    },

    async onSuccess() {
      toast.show('Successfully updated!')
      await queryClient.invalidateQueries(['profile', userId])
      await apiUtils.greeting.invalidate()
      router.back()
    },
  })

  return (
    <Container>
    <SchemaForm
      schema={ProfileSchema}
      props={{
        name: {
          autoFocus: !!params?.edit_name,
        },
        about: {
          autoFocus: !!params?.edit_about,
        },
      }}
      defaultValues={{
        name: initial.name ?? '',
        about: initial.about ?? '',
      }}
      onSubmit={(values) => mutation.mutate(values)}
      renderAfter={({ submit }) => (
        <Theme inverse>
          <SubmitButton onPress={() => submit()}>Update Profile</SubmitButton>
        </Theme>
      )}
    >
      {(fields) => (
        <>
          <YStack mb="$10">
            <UploadAvatar>
              <ProfileTabIcon focused={false} color="black" size={128} strokeWidth={STROKE_WIDTH} />
            </UploadAvatar>
          </YStack>
          {Object.values(fields)}
        </>
      )}
    </SchemaForm>
  </Container>
  )
}
