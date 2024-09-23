import { useEffect, useState } from 'react'
import Sahha, { SahhaEnvironment, SahhaSensor } from 'sahha-react-native'

const sahhaSettings = {
  environment: SahhaEnvironment.sandbox,
}

const appId = process.env.EXPO_PUBLIC_SAHHA_APP_ID;
const appSecret = process.env.EXPO_PUBLIC_SAHHA_APP_SECRET;
const externalId = process.env.EXPO_PUBLIC_SAHHA_EXTERNAL_ID;

type AuthenticationType = {
  loading: boolean
  authenticated: boolean
}

export const useSahha = () => {
  const [authenticated, setAuthenticated] = useState<AuthenticationType>({
    loading: true,
    authenticated: false,
  })
  useEffect(() => {
    if (appId && appSecret && externalId) {
      Sahha.configure(sahhaSettings, (error: string) => {
        if (error) {
          console.error(`Error: ${error}`)
        } else {
          console.log('configured')
        }
      })

      Sahha.authenticate(appId, appSecret, externalId, (error, success) => {
        console.log(`Sahha authentication: ${error} ${success}`)
        setAuthenticated({ loading: false, authenticated: success })

        if (error) {
          console.log(`Sahha authentication error: ${error}`)
        }
      })

      Sahha.enableSensors([SahhaSensor.step_count, SahhaSensor.sleep], (error, status) => {
        console.log(`Sahha enable sensors success: ${!error}`)
        if (error) {
          console.log(`Sahha enable sensors error: ${error}`)
        }
      })
    }
  }, [])
  return authenticated
}
