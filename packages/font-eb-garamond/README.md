# Prerequisite
First install the dependencies running `yarn install`, then make sure to build the package using `yarn build` and add the package as a dependency to the package/app you want to consume it from (could be the `app` or `ui` package) like so:
```
"dependencies": {
  "@tamagui-google-fonts/eb-garamond": "*"
}
```
## Usage
### Expo
  
Add this to the root of your file:
    
```ts
import { useFonts } from 'expo-font'

export default function App() {
  const [loaded] = useFonts({
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
// ...
```

## Web

Get the font's script (`<link>` or `@import`) and add it to `<head>` from [here](https://fonts.google.com/specimen/EB+Garamond)


## Next.js Font (next/font/google)

Import the font from `next/font/google` and give it a variable name in your `_app.tsx` like so:

```ts
import { EbGaramond } from 'next/font/google' // the casing might differ

const font = EbGaramond({
  variable: '--my-font',
})
```

Add the variable style in `_app.tsx`:

```tsx
<div className={font.variable}>
  {*/ ...rest of your _app.tsx tree */}
</div>
```

Then go to the generated font package and update `family` with the variable.

So, change it from:
```ts
return createFont({
    family: isWeb
      ? '"EB Garamond", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
      : 'EB Garamond',
```

To:
```ts
return createFont({
    family: isWeb
      ? 'var(--my-font), -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
      : 'EB Garamond',
```


## Usage in config

```ts
import { createEbGaramondFont } from '@tamagui-google-fonts/eb-garamond' 

export const myFont = createEbGaramondFont(
  {
    face: {
    "400": {
        "normal": "EBGaramond",
        "italic": "EBGaramondItalic"
    },
    "500": {
        "normal": "EBGaramondMedium",
        "italic": "EBGaramondMediumItalic"
    },
    "600": {
        "normal": "EBGaramondSemiBold",
        "italic": "EBGaramondSemiBoldItalic"
    },
    "700": {
        "normal": "EBGaramondBold",
        "italic": "EBGaramondBoldItalic"
    },
    "800": {
        "normal": "EBGaramondExtraBold",
        "italic": "EBGaramondExtraBoldItalic"
    }
}
        },
  {
    // customize the size and line height scaling to your own needs
    // sizeSize: (size) => Math.round(size * 1.1),
    // sizeLineHeight: (size) => size + 5,
  }
)
```

NOTE: these instructions are auto-generated and might not be accurate with some fonts since not all fonts share the same conventions. you may need to edit them out to get them to work.
