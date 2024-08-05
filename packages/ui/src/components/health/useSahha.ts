import { useEffect, useState } from 'react'
import Sahha, { SahhaEnvironment, SahhaSensor } from 'sahha-react-native'

const sahhaSettings = {
  environment: SahhaEnvironment.sandbox,
}

const appId = 'IJWAD2KHQJ6J87BKE80K88MFY302AGUV';
const appSecret = '8OxGL9waHuhX5R/BZsm9pEFrJL1w5pEFVwDGap8ojmk=';
const externalId = '154e4567-e83b-12d3-b456-426614174000';

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
    Sahha.configure(sahhaSettings, (error: string) => {
      if (error) {
        console.error(`Error: ${error}`)
      } else {
        console.log('configured')
      }
    })

    Sahha.authenticate(appId, appSecret, externalId, (error, success) => {
      console.log(`Sahha authentication success: ${success}`)
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
  }, [])
  return authenticated
}
