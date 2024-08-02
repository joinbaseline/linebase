import { Session } from '@supabase/supabase-js'
import { Provider, loadThemePromise } from 'app/provider'
import { supabase } from 'app/utils/supabase/client.native'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useCallback, useEffect, useState } from 'react'
import { LogBox, useColorScheme, View } from 'react-native'
import { useAtom } from 'jotai';
import { colorThemeAtom, modeThemeAtom } from '@my/app/utils/atoms.native'
import { Theme, ThemeName } from '@my/ui'

SplashScreen.preventAutoHideAsync()

LogBox.ignoreLogs(['Cannot update a component', 'You are setting the style'])

export default function HomeLayout() {
  const [fontLoaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  const colorScheme = useColorScheme();
  const [themeLoaded, setThemeLoaded] = useState(false);
  const [colorTheme, setColorTheme] = useAtom(colorThemeAtom);
  const [modeTheme, setModeTheme] = useAtom(modeThemeAtom);
  const [sessionLoadAttempted, setSessionLoadAttempted] = useState(false)
  const [initialSession, setInitialSession] = useState<Session | null>(null)

  useEffect(() => {
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
  }, [])

  useEffect(() => {
    loadThemePromise.then(() => {
      setModeTheme(colorScheme === "dark" ? "dark": "light")
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

  const themeName = [modeTheme, colorTheme].filter(x => x !== "").join("_") as ThemeName;
  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Provider initialSession={initialSession}>
        <Theme name={themeName}>
          <Stack />
        </Theme>
      </Provider>
    </View>
  )
}
