import 'dotenv/config'
import type { ExpoConfig } from '@expo/config'

const defineConfig = (): ExpoConfig => ({
  name: 'baseline: bipolar care',
  slug: 'baseline',
  jsEngine: 'hermes',
  scheme: 'baseline',
  version: '1.0.2',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'cover',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
    url: 'https://u.expo.dev/25ed117e-1782-4c05-aa22-7cfad5664026',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.bipolar.baseline.mobile',
    infoPlist: {
      usesNonExemptEncryption: false,
      NSHealthShareUsageDescription: 'This app would like access to your health activity for analysis',
    },
    entitlements: {
      'com.apple.developer.healthkit': true,
      'com.apple.developer.healthkit.access': true,
      'com.apple.developer.healthkit.background-delivery': true,
    },
  },
  android: {
    softwareKeyboardLayoutMode: 'pan',
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
    package: 'com.bipolar.baseline.mobile',
    permissions: ['android.permission.RECORD_AUDIO'],
  },
  web: {
    favicon: './assets/favicon.png',
    bundler: 'metro',
  },
  plugins: [
    [
      'expo-notifications',
      {
        icon: './assets/icon.png',
        color: '#ffffff',
      },
    ],
    [
      'expo-image-picker',
      {
        photosPermission: 'The app accesses your photos to let you share them with your friends.',
      },
    ],
    [
      'expo-build-properties',
      {
        android: {
          enableProguardInReleaseBuilds: true,
          enableShrinkResourcesInReleaseBuilds: true,
        },
        ios: {
          deploymentTarget: '15.0',
        },
      },
    ],
    'expo-apple-authentication',
    'expo-router',
    'expo-build-properties',
    'expo-font',
  ],
  extra: {
    router: {
      origin: false,
    },
    eas: {
      projectId: '25ed117e-1782-4c05-aa22-7cfad5664026',
    },
  },
  runtimeVersion: {
    policy: 'appVersion',
  },
  owner: 'baselinemobile',
})

export default defineConfig
