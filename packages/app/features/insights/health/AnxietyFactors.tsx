import React, { useEffect, useState } from 'react'
import moment, { MomentInput } from 'moment'
import { WebView } from 'react-native-webview'
import Sahha from 'sahha-react-native'
import { YStack } from 'tamagui'
import { useSahha } from './useSahha'

type AnxietyFactorsProps = {
  date?: MomentInput
}

export const AnxietyFactors: React.FC<AnxietyFactorsProps> = ({ date }) => {
  const [profileToken, setProfileToken] = useState<string>('')
  const authenticated = useSahha();

  useEffect(() => {
    Sahha.getProfileToken((error: string, token?: string) => {
      if (error) {
        console.error(`Error: ${error}`)
      } else if (token) {
        console.log(`Profile Token: ${token}`)
        setProfileToken(token)
      } else {
        console.log(`Profile Token: null`)
      }
    })
  }, [authenticated])

  const uri = (
    'https://sandbox.webview.sahha.ai/score/anxiety/factors' +
    (date ? `?date=${moment(date).format('YYYY-MM-DD')}` : '')
  )
  return (
    <YStack h={20} bg="green" f={1}>
      <WebView
        source={{
          uri,
          headers: {
            Authorization: profileToken,
          },
        }}
        style={{ flex: 1 }}
      />
    </YStack>
  )
}
