import { getVariableValue } from 'tamagui'
import { createInterFont } from '@tamagui/font-inter'
import { createEbGaramondFont } from '@tamagui-google-fonts/eb-garamond'

const headingSize = {
  1: 11,
  2: 12,
  3: 13,
  4: 14,
  true: 14,
  5: 16,
  6: 18,
  7: 20,
  8: 23,
  9: 30,
  10: 46,
  11: 55,
  12: 62,
  13: 72,
  14: 80,
  15: 92,
  16: 100,
}

export const headingFont = createEbGaramondFont(
  {
    size: Object.fromEntries(Object.entries(headingSize).map(([k, v]) => [k, getVariableValue(v)])),
    lineHeight: Object.fromEntries(
      Object.entries(headingSize).map(([k, v]) => [k, getVariableValue(v) + 4])
    ),
    transform: {
      1: 'none',
    },
    weight: {
      3: '500',
      4: '700',
    },
    face: {
      700: { normal: 'EBGaramondBold' },
    },
  },
  {

    sizeSize: (size) => size,
    sizeLineHeight: (fontSize) => fontSize + 4,
  }
)

export const bodyFont = createInterFont(
  {
    face: {
      300: { normal: 'InterSemiBold' },
      400: { normal: 'InterBold' },
    },
  },
  {
    sizeSize: (size) => Math.round(size * 1.1),
    sizeLineHeight: (size) => size + 5,
  }
)
