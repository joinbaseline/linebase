import React, { useEffect, useState } from 'react'
import moment, { MomentInput } from 'moment'
import { WebView } from 'react-native-webview'
import Sahha, { SahhaSensor, SahhaSensorStatus, SahhaScoreType } from 'sahha-react-native'
import { YStack, Button, Text } from 'tamagui'
import { useSahhaHook } from './useSahha'

type AnxietyFactorsProps = {
  date?: MomentInput
}

const sensors = [SahhaSensor.step_count, SahhaSensor.sleep, SahhaSensor.heart_rate]
const scores = [SahhaScoreType.activity, SahhaScoreType.mental_wellbeing, SahhaScoreType.sleep]

const useSensorStatus = () => {
    const [status, setStatus] = useState<SahhaSensorStatus>(SahhaSensorStatus.pending)
    useEffect(() => {
        Sahha.getSensorStatus(sensors, (error: string, value: SahhaSensorStatus) => {
            if (error) {
                console.error(`Error getting sensor status: ${error}`);
            } else {
                setStatus(value);
            }
        });
    }, []);
  return status;
}


export const AnxietyFactors: React.FC<AnxietyFactorsProps> = ({ date }) => {
  const [profileToken, setProfileToken] = useState<string>('');
  const [scoresData, setScoresData] = useState<any>(null);
  const status = useSensorStatus();
  const { loading: loadingAuthentication, authenticated } = useSahhaHook();

  const enableSensors = () => {
    Sahha.enableSensors(sensors, (error: string) => {
      if (error) {
        console.error(`Error enabling sensors: ${error}`);
      } else {
        console.log('Sensors enabled successfully');
      }
    });
  }

  useEffect(() => {
    Sahha.getProfileToken((error: string, token?: string) => {
      if (error) {
        console.error(`Error: ${error}`);
      } else if (token) {
        console.log(`Profile Token: ${token}`);
        setProfileToken(token);
      } else {
        console.log(`Profile Token: null`);
      }
    });
  }, [authenticated, status, profileToken]);

  const getScores = () => {
    Sahha.getScores(scores, (error: string, scores: any) => {
      if (error) {
        console.error(`Error getting scores: ${error}`);
      } else {
        setScoresData(scores);
      }
    });
  }

  useEffect(() => {
    if (authenticated) {
      getScores();
    }
  }, [authenticated]);

  const uri = (
    'https://sandbox.webview.sahha.ai/app' // +
    // (date ? `?date=${moment(date).format('YYYY-MM-DD')}` : '')
  );

  return (
    <YStack f={1}>
      <WebView
        source={{
          uri,
          headers: {
            Authorization: profileToken,
          },
        }}
        style={{ flex: 1 }}
      />
      {status === SahhaSensorStatus.disabled ? (
        <Button onPress={Sahha.openAppSettings}>Open Settings</Button>
      ) : (status !== SahhaSensorStatus.enabled && (
        <Button onPress={enableSensors}>Enable Sensors</Button>
      ))}
    </YStack>
  )
}
