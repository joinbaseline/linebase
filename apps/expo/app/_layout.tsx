import { Session } from '@supabase/supabase-js'
import { LocalProvider, Provider, loadThemePromise } from 'app/provider'
import { supabase } from 'app/utils/supabase/client.native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useCallback, useEffect, useState } from 'react'
import { LogBox, useColorScheme, View } from 'react-native'
import { useAtom } from 'jotai';
import { colorThemeAtom, modeThemeAtom, signedInAtom } from '@my/app/utils/atoms.native'
import { Theme, ThemeName } from '@my/ui'
import { useRouter } from "solito/router"
import { useThemeSetting } from '@my/app/provider/theme'

SplashScreen.preventAutoHideAsync()

LogBox.ignoreLogs(['Cannot update a component', 'You are setting the style'])

export default function HomeLayout() {
  const [fontLoaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
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

  const { current } = useThemeSetting()
  const [themeLoaded, setThemeLoaded] = useState(false);
  const [colorTheme, setColorTheme] = useAtom(colorThemeAtom);
  const [signedIn, setSignedIn] = useAtom(signedInAtom);
  const router = useRouter()

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
    if (!signedIn) {
      setTimeout(() => router.replace('/'), 200)
    }
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
        <Theme name={[current, colorTheme].filter(x => x !== "").join("_") as ThemeName}>
          <Stack />
        </Theme>
      </LocalProvider>
    </View>
  )
}
