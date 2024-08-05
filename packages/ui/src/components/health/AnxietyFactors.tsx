import React, { useEffect, useState } from 'react'
import moment, { MomentInput } from 'moment'
import { WebView } from 'react-native-webview'
import Sahha from 'sahha-react-native'

type AnxietyFactorsProps = {
  date?: MomentInput
}

export const AnxietyFactors: React.FC<AnxietyFactorsProps> = ({ date }) => {
  const [profileToken, setProfileToken] = useState<string>('')

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
  }, [])

  const uri = (
    'https://sandbox.webview.sahha.ai/score/anxiety/factors' +
    (date ? `?date=${moment(date).format('YYYY-MM-DD')}` : '')
  )
  return (
    <WebView
      source={{
        uri,
        headers: {
          Authorization: profileToken,
        },
      }}
      style={{ flex: 1 }}
    />
  )
}
