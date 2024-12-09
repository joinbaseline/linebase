import { useUser } from 'app/utils/useUser'
import { useEffect, useState } from 'react'
import Sahha, { SahhaEnvironment } from 'sahha-react-native'
import Constants from 'expo-constants'

const sahhaSettings = {
  environment: SahhaEnvironment.sandbox,
}

const appId = Constants?.expoConfig?.extra?.EXPO_PUBLIC_SAHHA_APP_ID
const appSecret = Constants.expoConfig?.extra?.EXPO_PUBLIC_SAHHA_APP_SECRET

type AuthenticationType = {
  loading: boolean
  authenticated: boolean
}

export const useSahhaHook = () => {
  const [status, setStatus] = useState<AuthenticationType>({
    loading: true,
    authenticated: false,
  })
  const user = useUser()
  const externalId = 'test-id-2' // user?.user?.id

  const authenticate = () => {
    if (appId && appSecret && externalId) {
      console.log('Authenticating...', appId, appSecret, externalId)
      Sahha.authenticate(appId, appSecret, externalId, (error, success) => {
        console.log(`Sahha authentication: ${error} ${success}`)
        setStatus({ loading: false, authenticated: success })
        if (error) {
          console.log(`Sahha authentication error: ${error}`)
        }
      })
    }
  }

  useEffect(() => {
    Sahha.configure(sahhaSettings, (error: string, success: boolean) => {
      if (error) {
        console.error(`Error: ${error}`)
      } else {
        console.log('Sahha configuration success:', success)
        Sahha.isAuthenticated((error, success) => {
          console.log(`Sahha isAuthenticated: ${error} ${success}`)
          setStatus({ loading: false, authenticated: success })
          if (!status.authenticated || !success) {
            authenticate()
          }
        })
      }
    })
  }, [])

  return { ...status, authenticate }
}
