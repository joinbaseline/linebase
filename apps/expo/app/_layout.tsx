import { Session } from '@supabase/supabase-js'
import { LocalProvider, loadThemePromise } from 'app/provider'
import { supabase } from 'app/utils/supabase/client.native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useCallback, useEffect, useState } from 'react'
import { LogBox, View } from 'react-native'
import { useAtom } from 'jotai';
import { signedInAtom } from '@my/app/utils/atoms.native'
import { useRouter } from "solito/router"

SplashScreen.preventAutoHideAsync()

LogBox.ignoreLogs(['Cannot update a component', 'You are setting the style'])

export default function HomeLayout() {
  const [fontLoaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterSemiBold: require('@tamagui/font-inter/otf/Inter-SemiBold.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    EBGaramond: require('@tamagui-google-fonts/eb-garamond/fonts/static/EBGaramond-Regular.ttf'),
    EBGaramondMedium: require('@tamagui-google-fonts/eb-garamond/fonts/static/EBGaramond-Medium.ttf'),
    EBGaramondSemiBold: require('@tamagui-google-fonts/eb-garamond/fonts/static/EBGaramond-SemiBold.ttf'),
    EBGaramondBold: require('@tamagui-google-fonts/eb-garamond/fonts/static/EBGaramond-Bold.ttf'),
    EBGaramondExtraBold: require('@tamagui-google-fonts/eb-garamond/fonts/static/EBGaramond-ExtraBold.ttf'),
    EBGaramondItalic: require('@tamagui-google-fonts/eb-garamond/fonts/static/EBGaramond-Italic.ttf'),
    EBGaramondMediumItalic: require('@tamagui-google-fonts/eb-garamond/fonts/static/EBGaramond-MediumItalic.ttf'),
    EBGaramondSemiBoldItalic: require('@tamagui-google-fonts/eb-garamond/fonts/static/EBGaramond-SemiBoldItalic.ttf'),
    EBGaramondBoldItalic: require('@tamagui-google-fonts/eb-garamond/fonts/static/EBGaramond-BoldItalic.ttf'),
    EBGaramondExtraBoldItalic: require('@tamagui-google-fonts/eb-garamond/fonts/static/EBGaramond-ExtraBoldItalic.ttf'),
  })

  const [themeLoaded, setThemeLoaded] = useState(false);
  const [sessionLoadAttempted, setSessionLoadAttempted] = useState(false)
  const [initialSession, setInitialSession] = useState<Session | null>(null)

  const checkLocalAuthSession = () => {
    setSessionLoadAttempted(true)
  }  

  const checkSupabaseAuthSession = () => {
    supabase.auth
      .getSession()
      .then(({ data }) => {
        if (data) {
          setInitialSession(data.session)
        }
      })
      .finally(() => {
        setSessionLoadAttempted(true)
      })
  }

  const checkAuthSession = () => {
    checkLocalAuthSession();
  }

  useEffect(() => {
    checkAuthSession();
  }, [])

  useEffect(() => {
    loadThemePromise.then(() => {
      setThemeLoaded(true)
    })
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded && sessionLoadAttempted) {
      await SplashScreen.hideAsync()
    }
  }, [fontLoaded, sessionLoadAttempted])

  if (!themeLoaded || !fontLoaded || !sessionLoadAttempted) {
    return null
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {/* When Supabase on, use actual Provider */}
      <LocalProvider initialSession={initialSession}>
        <Stack />
      </LocalProvider>
    </View>
  )
}
