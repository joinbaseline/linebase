import { useQuery } from '@tanstack/react-query'

import { useSessionContext } from './supabase/useSessionContext'
import { useSupabase } from './supabase/useSupabase'
import { useAtom } from 'jotai'
import { localAboutAtom, localEmailAtom, localFirstNameAtom, localLastNameAtom } from './atoms.native'

function useProfile() {
  const { session } = useSessionContext()
  const user = session?.user
  const supabase = useSupabase()
  const { data, isLoading, refetch } = useQuery(['profile', user?.id], {
    queryFn: async () => {
      if (!user?.id) return null
      const { data, error } = await supabase.from('profiles').select('*').eq('id', user.id).single()
      if (error) {
        // no rows - edge case of user being deleted
        if (error.code === 'PGRST116') {
          await supabase.auth.signOut()
          return null
        }
        throw new Error(error.message)
      }
      return data
    },
  })

  return { data, isLoading, refetch }
}

export const useUser = () => {
  const { session, isLoading: isLoadingSession } = useSessionContext()
  // const { data: profile, refetch, isLoading: isLoadingProfile } = useProfile()

  const [localEmail, setLocalEmail] = useAtom(localEmailAtom);
  const [localFirstName, setLocalFirstName] = useAtom(localFirstNameAtom);
  const [localLastName, setLocalLastName] = useAtom(localLastNameAtom);
  const [localAbout, setLocalAbout] = useAtom(localAboutAtom);
  const [localAvatar, setLocalAvatar] = useAtom(localLastNameAtom);

  const user = session?.user || { id: "testID", email: localEmail }
  const profile = {
    email: localEmail,
    firstName: localFirstName,
    lastName: localLastName,
    about: localAbout
  }

  const avatarUrl = localAvatar;
  // const avatarUrl = (function () {
  //   if (profile?.avatar_url) return profile.avatar_url
  //   if (typeof user?.user_metadata.avatar_url === 'string') return user.user_metadata.avatar_url

  //   const params = new URLSearchParams()
  //   const name = profile?.name || user?.email || ''
  //   params.append('name', name)
  //   params.append('size', '256') // will be resized again by NextImage/SolitoImage
  //   return `https://ui-avatars.com/api.jpg?${params.toString()}`
  // })()

  return {
    session,
    user,
    profile,
    avatarUrl,
    // updateProfile: () => refetch(),
    isLoadingSession,
    // isLoadingProfile,
    // isLoading: isLoadingSession || isLoadingProfile,
  }
}
