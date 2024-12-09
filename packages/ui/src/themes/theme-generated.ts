type Theme = {
  accentBackground: string;
  accentColor: string;
  background0: string;
  background025: string;
  background05: string;
  background075: string;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;
  color11: string;
  color12: string;
  color0: string;
  color025: string;
  color05: string;
  color075: string;
  background: string;
  backgroundHover: string;
  backgroundPress: string;
  backgroundFocus: string;
  borderColor: string;
  borderColorHover: string;
  borderColorPress: string;
  borderColorFocus: string;
  color: string;
  colorHover: string;
  colorPress: string;
  colorFocus: string;
  colorTransparent: string;
  placeholderColor: string;
  outlineColor: string;
  mood0: string;
  mood1: string;
  mood2: string;
  mood3: string;
  mood4: string;
  mood5: string;
  mood6: string;
  mood7: string;
  mood8: string;
  mood9: string;
  mood10: string;
  moodbg0: string;
  moodbg1: string;
  moodbg2: string;
  moodbg3: string;
  moodbg4: string;
  moodbg5: string;
  moodbg6: string;
  moodbg7: string;
  moodbg8: string;
  moodbg9: string;
  moodbg10: string;
  blue1: string;
  blue2: string;
  blue3: string;
  blue4: string;
  blue5: string;
  blue6: string;
  blue7: string;
  blue8: string;
  blue9: string;
  blue10: string;
  blue11: string;
  blue12: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  gray8: string;
  gray9: string;
  gray10: string;
  gray11: string;
  gray12: string;
  green1: string;
  green2: string;
  green3: string;
  green4: string;
  green5: string;
  green6: string;
  green7: string;
  green8: string;
  green9: string;
  green10: string;
  green11: string;
  green12: string;
  orange1: string;
  orange2: string;
  orange3: string;
  orange4: string;
  orange5: string;
  orange6: string;
  orange7: string;
  orange8: string;
  orange9: string;
  orange10: string;
  orange11: string;
  orange12: string;
  pink1: string;
  pink2: string;
  pink3: string;
  pink4: string;
  pink5: string;
  pink6: string;
  pink7: string;
  pink8: string;
  pink9: string;
  pink10: string;
  pink11: string;
  pink12: string;
  purple1: string;
  purple2: string;
  purple3: string;
  purple4: string;
  purple5: string;
  purple6: string;
  purple7: string;
  purple8: string;
  purple9: string;
  purple10: string;
  purple11: string;
  purple12: string;
  red1: string;
  red2: string;
  red3: string;
  red4: string;
  red5: string;
  red6: string;
  red7: string;
  red8: string;
  red9: string;
  red10: string;
  red11: string;
  red12: string;
  yellow1: string;
  yellow2: string;
  yellow3: string;
  yellow4: string;
  yellow5: string;
  yellow6: string;
  yellow7: string;
  yellow8: string;
  yellow9: string;
  yellow10: string;
  yellow11: string;
  yellow12: string;
  shadowColor: string;
  shadowColorHover: string;
  shadowColorPress: string;
  shadowColorFocus: string;

}

function t(a: [number, number][]) {
  let res: Record<string,string> = {}
  for (const [ki, vi] of a) {
    res[ks[ki] as string] = vs[vi] as string
  }
  return res as Theme
}
const vs = [
  'hsl(210, 98.8%, 94.0%)',
  'hsl(214, 65.8%, 17.9%)',
  'rgba(255,255,255,0)',
  'rgba(255,255,255,0.25)',
  'rgba(255,255,255,0.5)',
  'rgba(255,255,255,0.75)',
  '#fff',
  '#f8f8f8',
  'hsl(0, 0%, 96.3%)',
  'hsl(0, 0%, 94.1%)',
  'hsl(0, 0%, 92.0%)',
  'hsl(0, 0%, 90.0%)',
  'hsl(0, 0%, 88.5%)',
  'hsl(0, 0%, 81.0%)',
  'hsl(0, 0%, 56.1%)',
  'hsl(0, 0%, 50.3%)',
  'hsl(0, 0%, 42.5%)',
  'hsl(0, 0%, 9.0%)',
  'rgba(10,10,10,0)',
  'rgba(10,10,10,0.25)',
  'rgba(10,10,10,0.5)',
  'rgba(10,10,10,0.75)',
  '#e2e3e7',
  '#FF6779',
  '#FF9A71',
  '#FED629',
  '#61EF70',
  '#5bfed1',
  '#f2f3f7',
  '#FFF0F2',
  '#FFF5F1',
  '#FFFBEA',
  '#EFFFF1',
  '#E9FCF9',
  'hsl(206, 100%, 99.2%)',
  'hsl(210, 100%, 98.0%)',
  'hsl(209, 100%, 96.5%)',
  'hsl(209, 95.0%, 90.1%)',
  'hsl(209, 81.2%, 84.5%)',
  'hsl(208, 77.5%, 76.9%)',
  'hsl(206, 81.9%, 65.3%)',
  'hsl(206, 100%, 50.0%)',
  'hsl(208, 100%, 47.3%)',
  'hsl(211, 100%, 43.2%)',
  'hsl(211, 100%, 15.0%)',
  'hsl(0, 0%, 99.0%)',
  'hsl(0, 0%, 97.3%)',
  'hsl(0, 0%, 95.1%)',
  'hsl(0, 0%, 93.0%)',
  'hsl(0, 0%, 90.9%)',
  'hsl(0, 0%, 88.7%)',
  'hsl(0, 0%, 85.8%)',
  'hsl(0, 0%, 78.0%)',
  'hsl(0, 0%, 52.3%)',
  'hsl(0, 0%, 43.5%)',
  'hsl(136, 50.0%, 98.9%)',
  'hsl(138, 62.5%, 96.9%)',
  'hsl(139, 55.2%, 94.5%)',
  'hsl(140, 48.7%, 91.0%)',
  'hsl(141, 43.7%, 86.0%)',
  'hsl(143, 40.3%, 79.0%)',
  'hsl(146, 38.5%, 69.0%)',
  'hsl(151, 40.2%, 54.1%)',
  'hsl(151, 55.0%, 41.5%)',
  'hsl(152, 57.5%, 37.6%)',
  'hsl(153, 67.0%, 28.5%)',
  'hsl(155, 40.0%, 14.0%)',
  'hsl(24, 70.0%, 99.0%)',
  'hsl(24, 83.3%, 97.6%)',
  'hsl(24, 100%, 95.3%)',
  'hsl(25, 100%, 92.2%)',
  'hsl(25, 100%, 88.2%)',
  'hsl(25, 100%, 82.8%)',
  'hsl(24, 100%, 75.3%)',
  'hsl(24, 94.5%, 64.3%)',
  'hsl(24, 94.0%, 50.0%)',
  'hsl(24, 100%, 46.5%)',
  'hsl(24, 100%, 37.0%)',
  'hsl(15, 60.0%, 17.0%)',
  'hsl(322, 100%, 99.4%)',
  'hsl(323, 100%, 98.4%)',
  'hsl(323, 86.3%, 96.5%)',
  'hsl(323, 78.7%, 94.2%)',
  'hsl(323, 72.2%, 91.1%)',
  'hsl(323, 66.3%, 86.6%)',
  'hsl(323, 62.0%, 80.1%)',
  'hsl(323, 60.3%, 72.4%)',
  'hsl(322, 65.0%, 54.5%)',
  'hsl(322, 63.9%, 50.7%)',
  'hsl(322, 75.0%, 46.0%)',
  'hsl(320, 70.0%, 13.5%)',
  'hsl(280, 65.0%, 99.4%)',
  'hsl(276, 100%, 99.0%)',
  'hsl(276, 83.1%, 97.0%)',
  'hsl(275, 76.4%, 94.7%)',
  'hsl(275, 70.8%, 91.8%)',
  'hsl(274, 65.4%, 87.8%)',
  'hsl(273, 61.0%, 81.7%)',
  'hsl(272, 60.0%, 73.5%)',
  'hsl(272, 51.0%, 54.0%)',
  'hsl(272, 46.8%, 50.3%)',
  'hsl(272, 50.0%, 45.8%)',
  'hsl(272, 66.0%, 16.0%)',
  'hsl(351, 89.0%, 96.0%)',
  'hsl(358, 100%, 69.5%)',
  'hsl(358, 85.3%, 64.0%)',
  'hsl(358, 75.0%, 59.0%)',
  'hsl(358, 65.0%, 40.4%)',
  'hsl(357, 60.2%, 31.8%)',
  'hsl(356, 55.2%, 25.9%)',
  'hsl(356, 51.1%, 21.9%)',
  'hsl(356, 47.6%, 19.2%)',
  'hsl(356, 43.4%, 16.4%)',
  'hsl(357, 34.4%, 12.0%)',
  'hsl(353, 23.0%, 9.8%)',
  'hsl(60, 54.0%, 98.5%)',
  'hsl(52, 100%, 95.5%)',
  'hsl(55, 100%, 90.9%)',
  'hsl(54, 100%, 86.6%)',
  'hsl(52, 97.9%, 82.0%)',
  'hsl(50, 89.4%, 76.1%)',
  'hsl(47, 80.4%, 68.0%)',
  'hsl(48, 100%, 46.1%)',
  'hsl(53, 92.0%, 50.0%)',
  'hsl(50, 100%, 48.5%)',
  'hsl(42, 100%, 29.0%)',
  'hsl(40, 55.0%, 13.5%)',
  'rgba(0,0,0,0.085)',
  'rgba(0,0,0,0.04)',
  '#050505',
  '#151515',
  '#191919',
  '#232323',
  '#282828',
  '#323232',
  '#424242',
  '#494949',
  '#545454',
  '#626262',
  '#a5a5a5',
  'hsl(212, 35.0%, 9.2%)',
  'hsl(216, 50.0%, 11.8%)',
  'hsl(214, 59.4%, 15.3%)',
  'hsl(213, 71.2%, 20.2%)',
  'hsl(212, 77.4%, 23.1%)',
  'hsl(211, 85.1%, 27.4%)',
  'hsl(211, 89.7%, 34.1%)',
  'hsl(209, 100%, 60.6%)',
  'hsl(210, 100%, 66.1%)',
  'hsl(206, 98.0%, 95.8%)',
  'hsl(0, 0%, 8.5%)',
  'hsl(0, 0%, 11.0%)',
  'hsl(0, 0%, 13.6%)',
  'hsl(0, 0%, 15.8%)',
  'hsl(0, 0%, 17.9%)',
  'hsl(0, 0%, 20.5%)',
  'hsl(0, 0%, 24.3%)',
  'hsl(0, 0%, 31.2%)',
  'hsl(0, 0%, 43.9%)',
  'hsl(0, 0%, 49.4%)',
  'hsl(0, 0%, 62.8%)',
  'hsl(146, 30.0%, 7.4%)',
  'hsl(155, 44.2%, 8.4%)',
  'hsl(155, 46.7%, 10.9%)',
  'hsl(154, 48.4%, 12.9%)',
  'hsl(154, 49.7%, 14.9%)',
  'hsl(154, 50.9%, 17.6%)',
  'hsl(153, 51.8%, 21.8%)',
  'hsl(151, 51.7%, 28.4%)',
  'hsl(151, 49.3%, 46.5%)',
  'hsl(151, 50.0%, 53.2%)',
  'hsl(137, 72.0%, 94.0%)',
  'hsl(30, 70.0%, 7.2%)',
  'hsl(28, 100%, 8.4%)',
  'hsl(26, 91.1%, 11.6%)',
  'hsl(25, 88.3%, 14.1%)',
  'hsl(24, 87.6%, 16.6%)',
  'hsl(24, 88.6%, 19.8%)',
  'hsl(24, 92.4%, 24.0%)',
  'hsl(25, 100%, 29.0%)',
  'hsl(24, 100%, 58.5%)',
  'hsl(24, 100%, 62.2%)',
  'hsl(24, 97.0%, 93.2%)',
  'hsl(318, 25.0%, 9.6%)',
  'hsl(319, 32.2%, 11.6%)',
  'hsl(319, 41.0%, 16.0%)',
  'hsl(320, 45.4%, 18.7%)',
  'hsl(320, 49.0%, 21.1%)',
  'hsl(321, 53.6%, 24.4%)',
  'hsl(321, 61.1%, 29.7%)',
  'hsl(322, 74.9%, 37.5%)',
  'hsl(323, 72.8%, 59.2%)',
  'hsl(325, 90.0%, 66.4%)',
  'hsl(322, 90.0%, 95.8%)',
  'hsl(284, 20.0%, 9.6%)',
  'hsl(283, 30.0%, 11.8%)',
  'hsl(281, 37.5%, 16.5%)',
  'hsl(280, 41.2%, 20.0%)',
  'hsl(279, 43.8%, 23.3%)',
  'hsl(277, 46.4%, 27.5%)',
  'hsl(275, 49.3%, 34.6%)',
  'hsl(272, 52.1%, 45.9%)',
  'hsl(273, 57.3%, 59.1%)',
  'hsl(275, 80.0%, 71.0%)',
  'hsl(279, 75.0%, 95.7%)',
  'hsl(45, 100%, 5.5%)',
  'hsl(46, 100%, 6.7%)',
  'hsl(45, 100%, 8.7%)',
  'hsl(45, 100%, 10.4%)',
  'hsl(47, 100%, 12.1%)',
  'hsl(49, 100%, 14.3%)',
  'hsl(49, 90.3%, 18.4%)',
  'hsl(50, 100%, 22.0%)',
  'hsl(54, 100%, 68.0%)',
  'hsl(48, 100%, 47.0%)',
  'hsl(53, 100%, 91.0%)',
  'rgba(0,0,0,0.3)',
  'rgba(0,0,0,0.2)',
  'hsla(24, 70.0%, 99.0%, 0)',
  'hsla(24, 70.0%, 99.0%, 0.25)',
  'hsla(24, 70.0%, 99.0%, 0.5)',
  'hsla(24, 70.0%, 99.0%, 0.75)',
  'hsla(24, 94.0%, 50.0%, 0)',
  'hsla(24, 94.0%, 50.0%, 0.25)',
  'hsla(24, 94.0%, 50.0%, 0.5)',
  'hsla(24, 94.0%, 50.0%, 0.75)',
  'hsla(60, 54.0%, 98.5%, 0)',
  'hsla(60, 54.0%, 98.5%, 0.25)',
  'hsla(60, 54.0%, 98.5%, 0.5)',
  'hsla(60, 54.0%, 98.5%, 0.75)',
  'hsla(53, 92.0%, 50.0%, 0)',
  'hsla(53, 92.0%, 50.0%, 0.25)',
  'hsla(53, 92.0%, 50.0%, 0.5)',
  'hsla(53, 92.0%, 50.0%, 0.75)',
  'hsla(136, 50.0%, 98.9%, 0)',
  'hsla(136, 50.0%, 98.9%, 0.25)',
  'hsla(136, 50.0%, 98.9%, 0.5)',
  'hsla(136, 50.0%, 98.9%, 0.75)',
  'hsla(151, 55.0%, 41.5%, 0)',
  'hsla(151, 55.0%, 41.5%, 0.25)',
  'hsla(151, 55.0%, 41.5%, 0.5)',
  'hsla(151, 55.0%, 41.5%, 0.75)',
  'hsla(206, 100%, 99.2%, 0)',
  'hsla(206, 100%, 99.2%, 0.25)',
  'hsla(206, 100%, 99.2%, 0.5)',
  'hsla(206, 100%, 99.2%, 0.75)',
  'hsla(206, 100%, 50.0%, 0)',
  'hsla(206, 100%, 50.0%, 0.25)',
  'hsla(206, 100%, 50.0%, 0.5)',
  'hsla(206, 100%, 50.0%, 0.75)',
  'hsla(280, 65.0%, 99.4%, 0)',
  'hsla(280, 65.0%, 99.4%, 0.25)',
  'hsla(280, 65.0%, 99.4%, 0.5)',
  'hsla(280, 65.0%, 99.4%, 0.75)',
  'hsla(272, 51.0%, 54.0%, 0)',
  'hsla(272, 51.0%, 54.0%, 0.25)',
  'hsla(272, 51.0%, 54.0%, 0.5)',
  'hsla(272, 51.0%, 54.0%, 0.75)',
  'hsla(322, 100%, 99.4%, 0)',
  'hsla(322, 100%, 99.4%, 0.25)',
  'hsla(322, 100%, 99.4%, 0.5)',
  'hsla(322, 100%, 99.4%, 0.75)',
  'hsla(322, 65.0%, 54.5%, 0)',
  'hsla(322, 65.0%, 54.5%, 0.25)',
  'hsla(322, 65.0%, 54.5%, 0.5)',
  'hsla(322, 65.0%, 54.5%, 0.75)',
  'hsla(351, 89.0%, 96.0%, 0)',
  'hsla(351, 89.0%, 96.0%, 0.25)',
  'hsla(351, 89.0%, 96.0%, 0.5)',
  'hsla(351, 89.0%, 96.0%, 0.75)',
  'hsla(356, 47.6%, 19.2%, 0)',
  'hsla(356, 47.6%, 19.2%, 0.25)',
  'hsla(356, 47.6%, 19.2%, 0.5)',
  'hsla(356, 47.6%, 19.2%, 0.75)',
  'hsla(0, 0%, 99.0%, 0)',
  'hsla(0, 0%, 99.0%, 0.25)',
  'hsla(0, 0%, 99.0%, 0.5)',
  'hsla(0, 0%, 99.0%, 0.75)',
  'hsla(0, 0%, 56.1%, 0)',
  'hsla(0, 0%, 56.1%, 0.25)',
  'hsla(0, 0%, 56.1%, 0.5)',
  'hsla(0, 0%, 56.1%, 0.75)',
  'hsla(30, 70.0%, 7.2%, 0)',
  'hsla(30, 70.0%, 7.2%, 0.25)',
  'hsla(30, 70.0%, 7.2%, 0.5)',
  'hsla(30, 70.0%, 7.2%, 0.75)',
  'hsla(45, 100%, 5.5%, 0)',
  'hsla(45, 100%, 5.5%, 0.25)',
  'hsla(45, 100%, 5.5%, 0.5)',
  'hsla(45, 100%, 5.5%, 0.75)',
  'hsla(146, 30.0%, 7.4%, 0)',
  'hsla(146, 30.0%, 7.4%, 0.25)',
  'hsla(146, 30.0%, 7.4%, 0.5)',
  'hsla(146, 30.0%, 7.4%, 0.75)',
  'hsla(212, 35.0%, 9.2%, 0)',
  'hsla(212, 35.0%, 9.2%, 0.25)',
  'hsla(212, 35.0%, 9.2%, 0.5)',
  'hsla(212, 35.0%, 9.2%, 0.75)',
  'hsla(284, 20.0%, 9.6%, 0)',
  'hsla(284, 20.0%, 9.6%, 0.25)',
  'hsla(284, 20.0%, 9.6%, 0.5)',
  'hsla(284, 20.0%, 9.6%, 0.75)',
  'hsla(318, 25.0%, 9.6%, 0)',
  'hsla(318, 25.0%, 9.6%, 0.25)',
  'hsla(318, 25.0%, 9.6%, 0.5)',
  'hsla(318, 25.0%, 9.6%, 0.75)',
  'hsla(353, 23.0%, 9.8%, 0)',
  'hsla(353, 23.0%, 9.8%, 0.25)',
  'hsla(353, 23.0%, 9.8%, 0.5)',
  'hsla(353, 23.0%, 9.8%, 0.75)',
  'hsla(358, 75.0%, 59.0%, 0)',
  'hsla(358, 75.0%, 59.0%, 0.25)',
  'hsla(358, 75.0%, 59.0%, 0.5)',
  'hsla(358, 75.0%, 59.0%, 0.75)',
  'hsla(0, 0%, 8.5%, 0)',
  'hsla(0, 0%, 8.5%, 0.25)',
  'hsla(0, 0%, 8.5%, 0.5)',
  'hsla(0, 0%, 8.5%, 0.75)',
  'hsla(0, 0%, 43.9%, 0)',
  'hsla(0, 0%, 43.9%, 0.25)',
  'hsla(0, 0%, 43.9%, 0.5)',
  'hsla(0, 0%, 43.9%, 0.75)',
  'rgba(0,0,0,0.5)',
  'rgba(0,0,0,0.8)',
]

const ks = [
'accentBackground',
'accentColor',
'background0',
'background025',
'background05',
'background075',
'color1',
'color2',
'color3',
'color4',
'color5',
'color6',
'color7',
'color8',
'color9',
'color10',
'color11',
'color12',
'color0',
'color025',
'color05',
'color075',
'background',
'backgroundHover',
'backgroundPress',
'backgroundFocus',
'borderColor',
'borderColorHover',
'borderColorPress',
'borderColorFocus',
'color',
'colorHover',
'colorPress',
'colorFocus',
'colorTransparent',
'placeholderColor',
'outlineColor',
'mood0',
'mood1',
'mood2',
'mood3',
'mood4',
'mood5',
'mood6',
'mood7',
'mood8',
'mood9',
'mood10',
'moodbg0',
'moodbg1',
'moodbg2',
'moodbg3',
'moodbg4',
'moodbg5',
'moodbg6',
'moodbg7',
'moodbg8',
'moodbg9',
'moodbg10',
'blue1',
'blue2',
'blue3',
'blue4',
'blue5',
'blue6',
'blue7',
'blue8',
'blue9',
'blue10',
'blue11',
'blue12',
'gray1',
'gray2',
'gray3',
'gray4',
'gray5',
'gray6',
'gray7',
'gray8',
'gray9',
'gray10',
'gray11',
'gray12',
'green1',
'green2',
'green3',
'green4',
'green5',
'green6',
'green7',
'green8',
'green9',
'green10',
'green11',
'green12',
'orange1',
'orange2',
'orange3',
'orange4',
'orange5',
'orange6',
'orange7',
'orange8',
'orange9',
'orange10',
'orange11',
'orange12',
'pink1',
'pink2',
'pink3',
'pink4',
'pink5',
'pink6',
'pink7',
'pink8',
'pink9',
'pink10',
'pink11',
'pink12',
'purple1',
'purple2',
'purple3',
'purple4',
'purple5',
'purple6',
'purple7',
'purple8',
'purple9',
'purple10',
'purple11',
'purple12',
'red1',
'red2',
'red3',
'red4',
'red5',
'red6',
'red7',
'red8',
'red9',
'red10',
'red11',
'red12',
'yellow1',
'yellow2',
'yellow3',
'yellow4',
'yellow5',
'yellow6',
'yellow7',
'yellow8',
'yellow9',
'yellow10',
'yellow11',
'yellow12',
'shadowColor',
'shadowColorHover',
'shadowColorPress',
'shadowColorFocus']


const n1 = t([[0, 0],[1, 1],[2, 2],[3, 3],[4, 4],[5, 5],[6, 6],[7, 7],[8, 8],[9, 9],[10, 10],[11, 11],[12, 12],[13, 13],[14, 14],[15, 15],[16, 16],[17, 17],[18, 18],[19, 19],[20, 20],[21, 21],[22, 6],[23, 5],[24, 7],[25, 7],[26, 9],[27, 8],[28, 10],[29, 9],[30, 17],[31, 16],[32, 17],[33, 16],[34, 18],[35, 14],[36, 19],[37, 22],[38, 23],[39, 23],[40, 24],[41, 24],[42, 25],[43, 25],[44, 26],[45, 26],[46, 27],[47, 27],[48, 28],[49, 29],[50, 29],[51, 30],[52, 30],[53, 31],[54, 31],[55, 32],[56, 32],[57, 33],[58, 33],[59, 34],[60, 35],[61, 36],[62, 0],[63, 37],[64, 38],[65, 39],[66, 40],[67, 41],[68, 42],[69, 43],[70, 44],[71, 45],[72, 46],[73, 47],[74, 48],[75, 49],[76, 50],[77, 51],[78, 52],[79, 14],[80, 53],[81, 54],[82, 17],[83, 55],[84, 56],[85, 57],[86, 58],[87, 59],[88, 60],[89, 61],[90, 62],[91, 63],[92, 64],[93, 65],[94, 66],[95, 67],[96, 68],[97, 69],[98, 70],[99, 71],[100, 72],[101, 73],[102, 74],[103, 75],[104, 76],[105, 77],[106, 78],[107, 79],[108, 80],[109, 81],[110, 82],[111, 83],[112, 84],[113, 85],[114, 86],[115, 87],[116, 88],[117, 89],[118, 90],[119, 91],[120, 92],[121, 93],[122, 94],[123, 95],[124, 96],[125, 97],[126, 98],[127, 99],[128, 100],[129, 101],[130, 102],[131, 103],[132, 104],[133, 105],[134, 106],[135, 107],[136, 108],[137, 109],[138, 110],[139, 111],[140, 112],[141, 113],[142, 114],[143, 115],[144, 116],[145, 117],[146, 118],[147, 119],[148, 120],[149, 121],[150, 122],[151, 123],[152, 124],[153, 125],[154, 126],[155, 127],[156, 127],[157, 128],[158, 128]])

export const light = n1
const n2 = t([[0, 1],[1, 0],[2, 18],[3, 19],[4, 20],[5, 21],[6, 129],[7, 130],[8, 131],[9, 132],[10, 133],[11, 134],[12, 135],[13, 136],[14, 137],[15, 138],[16, 139],[17, 6],[18, 2],[19, 3],[20, 4],[21, 5],[22, 129],[23, 130],[24, 21],[25, 21],[26, 132],[27, 133],[28, 131],[29, 132],[30, 6],[31, 139],[32, 6],[33, 139],[34, 2],[35, 137],[36, 3],[37, 22],[38, 23],[39, 23],[40, 24],[41, 24],[42, 25],[43, 25],[44, 26],[45, 26],[46, 27],[47, 27],[48, 28],[49, 29],[50, 29],[51, 30],[52, 30],[53, 31],[54, 31],[55, 32],[56, 32],[57, 33],[58, 33],[59, 140],[60, 141],[61, 142],[62, 1],[63, 143],[64, 144],[65, 145],[66, 146],[67, 41],[68, 147],[69, 148],[70, 149],[71, 150],[72, 151],[73, 152],[74, 153],[75, 154],[76, 155],[77, 156],[78, 157],[79, 158],[80, 159],[81, 160],[82, 48],[83, 161],[84, 162],[85, 163],[86, 164],[87, 165],[88, 166],[89, 167],[90, 168],[91, 63],[92, 169],[93, 170],[94, 171],[95, 172],[96, 173],[97, 174],[98, 175],[99, 176],[100, 177],[101, 178],[102, 179],[103, 75],[104, 180],[105, 181],[106, 182],[107, 183],[108, 184],[109, 185],[110, 186],[111, 187],[112, 188],[113, 189],[114, 190],[115, 87],[116, 191],[117, 192],[118, 193],[119, 194],[120, 195],[121, 196],[122, 197],[123, 198],[124, 199],[125, 200],[126, 201],[127, 99],[128, 202],[129, 203],[130, 204],[131, 114],[132, 113],[133, 112],[134, 111],[135, 110],[136, 109],[137, 108],[138, 107],[139, 106],[140, 105],[141, 104],[142, 103],[143, 205],[144, 206],[145, 207],[146, 208],[147, 209],[148, 210],[149, 211],[150, 212],[151, 123],[152, 213],[153, 214],[154, 215],[155, 216],[156, 216],[157, 217],[158, 217]])

export const dark = n2
const n3 = t([[0, 79],[1, 90],[2, 218],[3, 219],[4, 220],[5, 221],[6, 67],[7, 68],[8, 69],[9, 70],[10, 71],[11, 72],[12, 73],[13, 74],[14, 75],[15, 76],[16, 77],[17, 78],[18, 222],[19, 223],[20, 224],[21, 225],[22, 67],[23, 221],[24, 68],[25, 68],[26, 70],[27, 69],[28, 71],[29, 70],[30, 78],[31, 77],[32, 78],[33, 77],[34, 222],[35, 75],[36, 223]])

export const light_orange = n3
const n4 = t([[0, 22],[1, 27],[2, 226],[3, 227],[4, 228],[5, 229],[6, 115],[7, 116],[8, 117],[9, 118],[10, 119],[11, 120],[12, 121],[13, 122],[14, 123],[15, 124],[16, 125],[17, 126],[18, 230],[19, 231],[20, 232],[21, 233],[22, 115],[23, 229],[24, 116],[25, 116],[26, 118],[27, 117],[28, 119],[29, 118],[30, 126],[31, 125],[32, 126],[33, 125],[34, 230],[35, 123],[36, 231]])

export const light_yellow = n4
const n5 = t([[0, 67],[1, 78],[2, 234],[3, 235],[4, 236],[5, 237],[6, 55],[7, 56],[8, 57],[9, 58],[10, 59],[11, 60],[12, 61],[13, 62],[14, 63],[15, 64],[16, 65],[17, 66],[18, 238],[19, 239],[20, 240],[21, 241],[22, 55],[23, 237],[24, 56],[25, 56],[26, 58],[27, 57],[28, 59],[29, 58],[30, 66],[31, 65],[32, 66],[33, 65],[34, 238],[35, 63],[36, 239]])

export const light_green = n5
const n6 = t([[0, 45],[1, 17],[2, 242],[3, 243],[4, 244],[5, 245],[6, 34],[7, 35],[8, 36],[9, 0],[10, 37],[11, 38],[12, 39],[13, 40],[14, 41],[15, 42],[16, 43],[17, 44],[18, 246],[19, 247],[20, 248],[21, 249],[22, 34],[23, 245],[24, 35],[25, 35],[26, 0],[27, 36],[28, 37],[29, 0],[30, 44],[31, 43],[32, 44],[33, 43],[34, 246],[35, 41],[36, 247]])

export const light_blue = n6
const n7 = t([[0, 103],[1, 114],[2, 250],[3, 251],[4, 252],[5, 253],[6, 91],[7, 92],[8, 93],[9, 94],[10, 95],[11, 96],[12, 97],[13, 98],[14, 99],[15, 100],[16, 101],[17, 102],[18, 254],[19, 255],[20, 256],[21, 257],[22, 91],[23, 253],[24, 92],[25, 92],[26, 94],[27, 93],[28, 95],[29, 94],[30, 102],[31, 101],[32, 102],[33, 101],[34, 254],[35, 99],[36, 255]])

export const light_purple = n7
const n8 = t([[0, 91],[1, 102],[2, 258],[3, 259],[4, 260],[5, 261],[6, 79],[7, 80],[8, 81],[9, 82],[10, 83],[11, 84],[12, 85],[13, 86],[14, 87],[15, 88],[16, 89],[17, 90],[18, 262],[19, 263],[20, 264],[21, 265],[22, 79],[23, 261],[24, 80],[25, 80],[26, 82],[27, 81],[28, 83],[29, 82],[30, 90],[31, 89],[32, 90],[33, 89],[34, 262],[35, 87],[36, 263]])

export const light_pink = n8
const n9 = t([[0, 115],[1, 126],[2, 266],[3, 267],[4, 268],[5, 269],[6, 103],[7, 104],[8, 105],[9, 106],[10, 107],[11, 108],[12, 109],[13, 110],[14, 111],[15, 112],[16, 113],[17, 114],[18, 270],[19, 271],[20, 272],[21, 273],[22, 103],[23, 269],[24, 104],[25, 104],[26, 106],[27, 105],[28, 107],[29, 106],[30, 114],[31, 113],[32, 114],[33, 113],[34, 270],[35, 111],[36, 271]])

export const light_red = n9
const n10 = t([[0, 55],[1, 66],[2, 274],[3, 275],[4, 276],[5, 277],[6, 45],[7, 46],[8, 47],[9, 48],[10, 49],[11, 50],[12, 51],[13, 52],[14, 14],[15, 53],[16, 54],[17, 17],[18, 278],[19, 279],[20, 280],[21, 281],[22, 45],[23, 277],[24, 46],[25, 46],[26, 48],[27, 47],[28, 49],[29, 48],[30, 17],[31, 54],[32, 17],[33, 54],[34, 278],[35, 14],[36, 279]])

export const light_gray = n10
const n11 = t([[0, 79],[1, 90],[2, 282],[3, 283],[4, 284],[5, 285],[6, 172],[7, 173],[8, 174],[9, 175],[10, 176],[11, 177],[12, 178],[13, 179],[14, 75],[15, 180],[16, 181],[17, 182],[18, 222],[19, 223],[20, 224],[21, 225],[22, 172],[23, 173],[24, 285],[25, 285],[26, 175],[27, 176],[28, 174],[29, 175],[30, 182],[31, 181],[32, 182],[33, 181],[34, 222],[35, 75],[36, 223]])

export const dark_orange = n11
const n12 = t([[0, 22],[1, 27],[2, 286],[3, 287],[4, 288],[5, 289],[6, 205],[7, 206],[8, 207],[9, 208],[10, 209],[11, 210],[12, 211],[13, 212],[14, 123],[15, 213],[16, 214],[17, 215],[18, 230],[19, 231],[20, 232],[21, 233],[22, 205],[23, 206],[24, 289],[25, 289],[26, 208],[27, 209],[28, 207],[29, 208],[30, 215],[31, 214],[32, 215],[33, 214],[34, 230],[35, 123],[36, 231]])

export const dark_yellow = n12
const n13 = t([[0, 67],[1, 78],[2, 290],[3, 291],[4, 292],[5, 293],[6, 161],[7, 162],[8, 163],[9, 164],[10, 165],[11, 166],[12, 167],[13, 168],[14, 63],[15, 169],[16, 170],[17, 171],[18, 238],[19, 239],[20, 240],[21, 241],[22, 161],[23, 162],[24, 293],[25, 293],[26, 164],[27, 165],[28, 163],[29, 164],[30, 171],[31, 170],[32, 171],[33, 170],[34, 238],[35, 63],[36, 239]])

export const dark_green = n13
const n14 = t([[0, 45],[1, 17],[2, 294],[3, 295],[4, 296],[5, 297],[6, 140],[7, 141],[8, 142],[9, 1],[10, 143],[11, 144],[12, 145],[13, 146],[14, 41],[15, 147],[16, 148],[17, 149],[18, 246],[19, 247],[20, 248],[21, 249],[22, 140],[23, 141],[24, 297],[25, 297],[26, 1],[27, 143],[28, 142],[29, 1],[30, 149],[31, 148],[32, 149],[33, 148],[34, 246],[35, 41],[36, 247]])

export const dark_blue = n14
const n15 = t([[0, 103],[1, 114],[2, 298],[3, 299],[4, 300],[5, 301],[6, 194],[7, 195],[8, 196],[9, 197],[10, 198],[11, 199],[12, 200],[13, 201],[14, 99],[15, 202],[16, 203],[17, 204],[18, 254],[19, 255],[20, 256],[21, 257],[22, 194],[23, 195],[24, 301],[25, 301],[26, 197],[27, 198],[28, 196],[29, 197],[30, 204],[31, 203],[32, 204],[33, 203],[34, 254],[35, 99],[36, 255]])

export const dark_purple = n15
const n16 = t([[0, 91],[1, 102],[2, 302],[3, 303],[4, 304],[5, 305],[6, 183],[7, 184],[8, 185],[9, 186],[10, 187],[11, 188],[12, 189],[13, 190],[14, 87],[15, 191],[16, 192],[17, 193],[18, 262],[19, 263],[20, 264],[21, 265],[22, 183],[23, 184],[24, 305],[25, 305],[26, 186],[27, 187],[28, 185],[29, 186],[30, 193],[31, 192],[32, 193],[33, 192],[34, 262],[35, 87],[36, 263]])

export const dark_pink = n16
const n17 = t([[0, 115],[1, 126],[2, 306],[3, 307],[4, 308],[5, 309],[6, 114],[7, 113],[8, 112],[9, 111],[10, 110],[11, 109],[12, 108],[13, 107],[14, 106],[15, 105],[16, 104],[17, 103],[18, 310],[19, 311],[20, 312],[21, 313],[22, 114],[23, 113],[24, 309],[25, 309],[26, 111],[27, 110],[28, 112],[29, 111],[30, 103],[31, 104],[32, 103],[33, 104],[34, 310],[35, 106],[36, 311]])

export const dark_red = n17
const n18 = t([[0, 55],[1, 66],[2, 314],[3, 315],[4, 316],[5, 317],[6, 150],[7, 151],[8, 152],[9, 153],[10, 154],[11, 155],[12, 156],[13, 157],[14, 158],[15, 159],[16, 160],[17, 48],[18, 318],[19, 319],[20, 320],[21, 321],[22, 150],[23, 151],[24, 317],[25, 317],[26, 153],[27, 154],[28, 152],[29, 153],[30, 48],[31, 160],[32, 48],[33, 160],[34, 318],[35, 158],[36, 319]])

export const dark_gray = n18
const n19 = t([[30, 16],[31, 15],[32, 16],[33, 15]])

export const light_alt1 = n19
const n20 = t([[30, 15],[31, 14],[32, 15],[33, 14]])

export const light_alt2 = n20
const n21 = t([[22, 9],[23, 8],[24, 10],[25, 10],[26, 12],[27, 11],[29, 12],[28, 13]])

export const light_active = n21
export const light_surface3 = n21
export const light_Button = n21
export const light_SliderTrackActive = n21
export const light_active_SliderTrackActive = n21
const n22 = t([[22, 7],[23, 6],[24, 8],[25, 8],[26, 10],[27, 9],[29, 10],[28, 11]])

export const light_surface1 = n22
export const light_ListItem = n22
export const light_SelectTrigger = n22
export const light_Card = n22
export const light_Progress = n22
export const light_TooltipArrow = n22
export const light_SliderTrack = n22
export const light_Input = n22
export const light_TextArea = n22
export const light_active_ListItem = n22
export const light_active_Progress = n22
export const light_active_TooltipArrow = n22
export const light_active_SliderTrack = n22
const n23 = t([[22, 8],[23, 7],[24, 9],[25, 9],[26, 11],[27, 10],[29, 11],[28, 12]])

export const light_surface2 = n23
export const light_Checkbox = n23
export const light_Switch = n23
export const light_TooltipContent = n23
export const light_RadioGroupItem = n23
const n24 = t([[22, 11],[23, 11],[24, 12],[25, 12],[26, 11],[27, 11],[29, 12],[28, 12]])

export const light_surface4 = n24
export const light_active_SelectTrigger = n24
export const light_active_Card = n24
export const light_active_Button = n24
export const light_active_Checkbox = n24
export const light_active_Switch = n24
export const light_active_TooltipContent = n24
export const light_active_RadioGroupItem = n24
export const light_active_Input = n24
export const light_active_TextArea = n24
const n25 = t([[30, 139],[31, 138],[32, 139],[33, 138]])

export const dark_alt1 = n25
const n26 = t([[30, 138],[31, 137],[32, 138],[33, 137]])

export const dark_alt2 = n26
const n27 = t([[22, 132],[23, 133],[24, 131],[25, 131],[26, 135],[27, 136],[29, 135],[28, 134]])

export const dark_active = n27
export const dark_surface3 = n27
export const dark_Button = n27
export const dark_SliderTrackActive = n27
export const dark_active_SliderTrackActive = n27
const n28 = t([[22, 130],[23, 131],[24, 129],[25, 129],[26, 133],[27, 134],[29, 133],[28, 132]])

export const dark_surface1 = n28
export const dark_ListItem = n28
export const dark_SelectTrigger = n28
export const dark_Card = n28
export const dark_Progress = n28
export const dark_TooltipArrow = n28
export const dark_SliderTrack = n28
export const dark_Input = n28
export const dark_TextArea = n28
export const dark_active_ListItem = n28
export const dark_active_Progress = n28
export const dark_active_TooltipArrow = n28
export const dark_active_SliderTrack = n28
const n29 = t([[22, 131],[23, 132],[24, 130],[25, 130],[26, 134],[27, 135],[29, 134],[28, 133]])

export const dark_surface2 = n29
export const dark_Checkbox = n29
export const dark_Switch = n29
export const dark_TooltipContent = n29
export const dark_RadioGroupItem = n29
const n30 = t([[22, 134],[23, 134],[24, 133],[25, 133],[26, 134],[27, 134],[29, 133],[28, 133]])

export const dark_surface4 = n30
export const dark_active_SelectTrigger = n30
export const dark_active_Card = n30
export const dark_active_Button = n30
export const dark_active_Checkbox = n30
export const dark_active_Switch = n30
export const dark_active_TooltipContent = n30
export const dark_active_RadioGroupItem = n30
export const dark_active_Input = n30
export const dark_active_TextArea = n30
const n31 = t([[30, 77],[31, 76],[32, 77],[33, 76]])

export const light_orange_alt1 = n31
const n32 = t([[30, 76],[31, 75],[32, 76],[33, 75]])

export const light_orange_alt2 = n32
const n33 = t([[22, 70],[23, 69],[24, 71],[25, 71],[26, 73],[27, 72],[29, 73],[28, 74]])

export const light_orange_active = n33
export const light_orange_surface3 = n33
export const light_orange_Button = n33
export const light_orange_SliderTrackActive = n33
export const light_orange_active_SliderTrackActive = n33
const n34 = t([[22, 68],[23, 67],[24, 69],[25, 69],[26, 71],[27, 70],[29, 71],[28, 72]])

export const light_orange_surface1 = n34
export const light_orange_ListItem = n34
export const light_orange_SelectTrigger = n34
export const light_orange_Card = n34
export const light_orange_Progress = n34
export const light_orange_TooltipArrow = n34
export const light_orange_SliderTrack = n34
export const light_orange_Input = n34
export const light_orange_TextArea = n34
export const light_orange_active_ListItem = n34
export const light_orange_active_Progress = n34
export const light_orange_active_TooltipArrow = n34
export const light_orange_active_SliderTrack = n34
const n35 = t([[22, 69],[23, 68],[24, 70],[25, 70],[26, 72],[27, 71],[29, 72],[28, 73]])

export const light_orange_surface2 = n35
export const light_orange_Checkbox = n35
export const light_orange_Switch = n35
export const light_orange_TooltipContent = n35
export const light_orange_RadioGroupItem = n35
const n36 = t([[22, 72],[23, 72],[24, 73],[25, 73],[26, 72],[27, 72],[29, 73],[28, 73]])

export const light_orange_surface4 = n36
export const light_orange_active_SelectTrigger = n36
export const light_orange_active_Card = n36
export const light_orange_active_Button = n36
export const light_orange_active_Checkbox = n36
export const light_orange_active_Switch = n36
export const light_orange_active_TooltipContent = n36
export const light_orange_active_RadioGroupItem = n36
export const light_orange_active_Input = n36
export const light_orange_active_TextArea = n36
const n37 = t([[30, 125],[31, 124],[32, 125],[33, 124]])

export const light_yellow_alt1 = n37
const n38 = t([[30, 124],[31, 123],[32, 124],[33, 123]])

export const light_yellow_alt2 = n38
const n39 = t([[22, 118],[23, 117],[24, 119],[25, 119],[26, 121],[27, 120],[29, 121],[28, 122]])

export const light_yellow_active = n39
export const light_yellow_surface3 = n39
export const light_yellow_Button = n39
export const light_yellow_SliderTrackActive = n39
export const light_yellow_active_SliderTrackActive = n39
const n40 = t([[22, 116],[23, 115],[24, 117],[25, 117],[26, 119],[27, 118],[29, 119],[28, 120]])

export const light_yellow_surface1 = n40
export const light_yellow_ListItem = n40
export const light_yellow_SelectTrigger = n40
export const light_yellow_Card = n40
export const light_yellow_Progress = n40
export const light_yellow_TooltipArrow = n40
export const light_yellow_SliderTrack = n40
export const light_yellow_Input = n40
export const light_yellow_TextArea = n40
export const light_yellow_active_ListItem = n40
export const light_yellow_active_Progress = n40
export const light_yellow_active_TooltipArrow = n40
export const light_yellow_active_SliderTrack = n40
const n41 = t([[22, 117],[23, 116],[24, 118],[25, 118],[26, 120],[27, 119],[29, 120],[28, 121]])

export const light_yellow_surface2 = n41
export const light_yellow_Checkbox = n41
export const light_yellow_Switch = n41
export const light_yellow_TooltipContent = n41
export const light_yellow_RadioGroupItem = n41
const n42 = t([[22, 120],[23, 120],[24, 121],[25, 121],[26, 120],[27, 120],[29, 121],[28, 121]])

export const light_yellow_surface4 = n42
export const light_yellow_active_SelectTrigger = n42
export const light_yellow_active_Card = n42
export const light_yellow_active_Button = n42
export const light_yellow_active_Checkbox = n42
export const light_yellow_active_Switch = n42
export const light_yellow_active_TooltipContent = n42
export const light_yellow_active_RadioGroupItem = n42
export const light_yellow_active_Input = n42
export const light_yellow_active_TextArea = n42
const n43 = t([[30, 65],[31, 64],[32, 65],[33, 64]])

export const light_green_alt1 = n43
const n44 = t([[30, 64],[31, 63],[32, 64],[33, 63]])

export const light_green_alt2 = n44
const n45 = t([[22, 58],[23, 57],[24, 59],[25, 59],[26, 61],[27, 60],[29, 61],[28, 62]])

export const light_green_active = n45
export const light_green_surface3 = n45
export const light_green_Button = n45
export const light_green_SliderTrackActive = n45
export const light_green_active_SliderTrackActive = n45
const n46 = t([[22, 56],[23, 55],[24, 57],[25, 57],[26, 59],[27, 58],[29, 59],[28, 60]])

export const light_green_surface1 = n46
export const light_green_ListItem = n46
export const light_green_SelectTrigger = n46
export const light_green_Card = n46
export const light_green_Progress = n46
export const light_green_TooltipArrow = n46
export const light_green_SliderTrack = n46
export const light_green_Input = n46
export const light_green_TextArea = n46
export const light_green_active_ListItem = n46
export const light_green_active_Progress = n46
export const light_green_active_TooltipArrow = n46
export const light_green_active_SliderTrack = n46
const n47 = t([[22, 57],[23, 56],[24, 58],[25, 58],[26, 60],[27, 59],[29, 60],[28, 61]])

export const light_green_surface2 = n47
export const light_green_Checkbox = n47
export const light_green_Switch = n47
export const light_green_TooltipContent = n47
export const light_green_RadioGroupItem = n47
const n48 = t([[22, 60],[23, 60],[24, 61],[25, 61],[26, 60],[27, 60],[29, 61],[28, 61]])

export const light_green_surface4 = n48
export const light_green_active_SelectTrigger = n48
export const light_green_active_Card = n48
export const light_green_active_Button = n48
export const light_green_active_Checkbox = n48
export const light_green_active_Switch = n48
export const light_green_active_TooltipContent = n48
export const light_green_active_RadioGroupItem = n48
export const light_green_active_Input = n48
export const light_green_active_TextArea = n48
const n49 = t([[30, 43],[31, 42],[32, 43],[33, 42]])

export const light_blue_alt1 = n49
const n50 = t([[30, 42],[31, 41],[32, 42],[33, 41]])

export const light_blue_alt2 = n50
const n51 = t([[22, 0],[23, 36],[24, 37],[25, 37],[26, 39],[27, 38],[29, 39],[28, 40]])

export const light_blue_active = n51
export const light_blue_surface3 = n51
export const light_blue_Button = n51
export const light_blue_SliderTrackActive = n51
export const light_blue_active_SliderTrackActive = n51
const n52 = t([[22, 35],[23, 34],[24, 36],[25, 36],[26, 37],[27, 0],[29, 37],[28, 38]])

export const light_blue_surface1 = n52
export const light_blue_ListItem = n52
export const light_blue_SelectTrigger = n52
export const light_blue_Card = n52
export const light_blue_Progress = n52
export const light_blue_TooltipArrow = n52
export const light_blue_SliderTrack = n52
export const light_blue_Input = n52
export const light_blue_TextArea = n52
export const light_blue_active_ListItem = n52
export const light_blue_active_Progress = n52
export const light_blue_active_TooltipArrow = n52
export const light_blue_active_SliderTrack = n52
const n53 = t([[22, 36],[23, 35],[24, 0],[25, 0],[26, 38],[27, 37],[29, 38],[28, 39]])

export const light_blue_surface2 = n53
export const light_blue_Checkbox = n53
export const light_blue_Switch = n53
export const light_blue_TooltipContent = n53
export const light_blue_RadioGroupItem = n53
const n54 = t([[22, 38],[23, 38],[24, 39],[25, 39],[26, 38],[27, 38],[29, 39],[28, 39]])

export const light_blue_surface4 = n54
export const light_blue_active_SelectTrigger = n54
export const light_blue_active_Card = n54
export const light_blue_active_Button = n54
export const light_blue_active_Checkbox = n54
export const light_blue_active_Switch = n54
export const light_blue_active_TooltipContent = n54
export const light_blue_active_RadioGroupItem = n54
export const light_blue_active_Input = n54
export const light_blue_active_TextArea = n54
const n55 = t([[30, 101],[31, 100],[32, 101],[33, 100]])

export const light_purple_alt1 = n55
const n56 = t([[30, 100],[31, 99],[32, 100],[33, 99]])

export const light_purple_alt2 = n56
const n57 = t([[22, 94],[23, 93],[24, 95],[25, 95],[26, 97],[27, 96],[29, 97],[28, 98]])

export const light_purple_active = n57
export const light_purple_surface3 = n57
export const light_purple_Button = n57
export const light_purple_SliderTrackActive = n57
export const light_purple_active_SliderTrackActive = n57
const n58 = t([[22, 92],[23, 91],[24, 93],[25, 93],[26, 95],[27, 94],[29, 95],[28, 96]])

export const light_purple_surface1 = n58
export const light_purple_ListItem = n58
export const light_purple_SelectTrigger = n58
export const light_purple_Card = n58
export const light_purple_Progress = n58
export const light_purple_TooltipArrow = n58
export const light_purple_SliderTrack = n58
export const light_purple_Input = n58
export const light_purple_TextArea = n58
export const light_purple_active_ListItem = n58
export const light_purple_active_Progress = n58
export const light_purple_active_TooltipArrow = n58
export const light_purple_active_SliderTrack = n58
const n59 = t([[22, 93],[23, 92],[24, 94],[25, 94],[26, 96],[27, 95],[29, 96],[28, 97]])

export const light_purple_surface2 = n59
export const light_purple_Checkbox = n59
export const light_purple_Switch = n59
export const light_purple_TooltipContent = n59
export const light_purple_RadioGroupItem = n59
const n60 = t([[22, 96],[23, 96],[24, 97],[25, 97],[26, 96],[27, 96],[29, 97],[28, 97]])

export const light_purple_surface4 = n60
export const light_purple_active_SelectTrigger = n60
export const light_purple_active_Card = n60
export const light_purple_active_Button = n60
export const light_purple_active_Checkbox = n60
export const light_purple_active_Switch = n60
export const light_purple_active_TooltipContent = n60
export const light_purple_active_RadioGroupItem = n60
export const light_purple_active_Input = n60
export const light_purple_active_TextArea = n60
const n61 = t([[30, 89],[31, 88],[32, 89],[33, 88]])

export const light_pink_alt1 = n61
const n62 = t([[30, 88],[31, 87],[32, 88],[33, 87]])

export const light_pink_alt2 = n62
const n63 = t([[22, 82],[23, 81],[24, 83],[25, 83],[26, 85],[27, 84],[29, 85],[28, 86]])

export const light_pink_active = n63
export const light_pink_surface3 = n63
export const light_pink_Button = n63
export const light_pink_SliderTrackActive = n63
export const light_pink_active_SliderTrackActive = n63
const n64 = t([[22, 80],[23, 79],[24, 81],[25, 81],[26, 83],[27, 82],[29, 83],[28, 84]])

export const light_pink_surface1 = n64
export const light_pink_ListItem = n64
export const light_pink_SelectTrigger = n64
export const light_pink_Card = n64
export const light_pink_Progress = n64
export const light_pink_TooltipArrow = n64
export const light_pink_SliderTrack = n64
export const light_pink_Input = n64
export const light_pink_TextArea = n64
export const light_pink_active_ListItem = n64
export const light_pink_active_Progress = n64
export const light_pink_active_TooltipArrow = n64
export const light_pink_active_SliderTrack = n64
const n65 = t([[22, 81],[23, 80],[24, 82],[25, 82],[26, 84],[27, 83],[29, 84],[28, 85]])

export const light_pink_surface2 = n65
export const light_pink_Checkbox = n65
export const light_pink_Switch = n65
export const light_pink_TooltipContent = n65
export const light_pink_RadioGroupItem = n65
const n66 = t([[22, 84],[23, 84],[24, 85],[25, 85],[26, 84],[27, 84],[29, 85],[28, 85]])

export const light_pink_surface4 = n66
export const light_pink_active_SelectTrigger = n66
export const light_pink_active_Card = n66
export const light_pink_active_Button = n66
export const light_pink_active_Checkbox = n66
export const light_pink_active_Switch = n66
export const light_pink_active_TooltipContent = n66
export const light_pink_active_RadioGroupItem = n66
export const light_pink_active_Input = n66
export const light_pink_active_TextArea = n66
const n67 = t([[30, 113],[31, 112],[32, 113],[33, 112]])

export const light_red_alt1 = n67
const n68 = t([[30, 112],[31, 111],[32, 112],[33, 111]])

export const light_red_alt2 = n68
const n69 = t([[22, 106],[23, 105],[24, 107],[25, 107],[26, 109],[27, 108],[29, 109],[28, 110]])

export const light_red_active = n69
export const light_red_surface3 = n69
export const light_red_Button = n69
export const light_red_SliderTrackActive = n69
export const light_red_active_SliderTrackActive = n69
const n70 = t([[22, 104],[23, 103],[24, 105],[25, 105],[26, 107],[27, 106],[29, 107],[28, 108]])

export const light_red_surface1 = n70
export const light_red_ListItem = n70
export const light_red_SelectTrigger = n70
export const light_red_Card = n70
export const light_red_Progress = n70
export const light_red_TooltipArrow = n70
export const light_red_SliderTrack = n70
export const light_red_Input = n70
export const light_red_TextArea = n70
export const light_red_active_ListItem = n70
export const light_red_active_Progress = n70
export const light_red_active_TooltipArrow = n70
export const light_red_active_SliderTrack = n70
const n71 = t([[22, 105],[23, 104],[24, 106],[25, 106],[26, 108],[27, 107],[29, 108],[28, 109]])

export const light_red_surface2 = n71
export const light_red_Checkbox = n71
export const light_red_Switch = n71
export const light_red_TooltipContent = n71
export const light_red_RadioGroupItem = n71
const n72 = t([[22, 108],[23, 108],[24, 109],[25, 109],[26, 108],[27, 108],[29, 109],[28, 109]])

export const light_red_surface4 = n72
export const light_red_active_SelectTrigger = n72
export const light_red_active_Card = n72
export const light_red_active_Button = n72
export const light_red_active_Checkbox = n72
export const light_red_active_Switch = n72
export const light_red_active_TooltipContent = n72
export const light_red_active_RadioGroupItem = n72
export const light_red_active_Input = n72
export const light_red_active_TextArea = n72
const n73 = t([[30, 54],[31, 53],[32, 54],[33, 53]])

export const light_gray_alt1 = n73
const n74 = t([[30, 53],[31, 14],[32, 53],[33, 14]])

export const light_gray_alt2 = n74
const n75 = t([[22, 48],[23, 47],[24, 49],[25, 49],[26, 51],[27, 50],[29, 51],[28, 52]])

export const light_gray_active = n75
export const light_gray_surface3 = n75
export const light_gray_Button = n75
export const light_gray_SliderTrackActive = n75
export const light_gray_active_SliderTrackActive = n75
const n76 = t([[22, 46],[23, 45],[24, 47],[25, 47],[26, 49],[27, 48],[29, 49],[28, 50]])

export const light_gray_surface1 = n76
export const light_gray_ListItem = n76
export const light_gray_SelectTrigger = n76
export const light_gray_Card = n76
export const light_gray_Progress = n76
export const light_gray_TooltipArrow = n76
export const light_gray_SliderTrack = n76
export const light_gray_Input = n76
export const light_gray_TextArea = n76
export const light_gray_active_ListItem = n76
export const light_gray_active_Progress = n76
export const light_gray_active_TooltipArrow = n76
export const light_gray_active_SliderTrack = n76
const n77 = t([[22, 47],[23, 46],[24, 48],[25, 48],[26, 50],[27, 49],[29, 50],[28, 51]])

export const light_gray_surface2 = n77
export const light_gray_Checkbox = n77
export const light_gray_Switch = n77
export const light_gray_TooltipContent = n77
export const light_gray_RadioGroupItem = n77
const n78 = t([[22, 50],[23, 50],[24, 51],[25, 51],[26, 50],[27, 50],[29, 51],[28, 51]])

export const light_gray_surface4 = n78
export const light_gray_active_SelectTrigger = n78
export const light_gray_active_Card = n78
export const light_gray_active_Button = n78
export const light_gray_active_Checkbox = n78
export const light_gray_active_Switch = n78
export const light_gray_active_TooltipContent = n78
export const light_gray_active_RadioGroupItem = n78
export const light_gray_active_Input = n78
export const light_gray_active_TextArea = n78
const n79 = t([[30, 181],[31, 180],[32, 181],[33, 180]])

export const dark_orange_alt1 = n79
const n80 = t([[30, 180],[31, 75],[32, 180],[33, 75]])

export const dark_orange_alt2 = n80
const n81 = t([[22, 175],[23, 176],[24, 174],[25, 174],[26, 178],[27, 179],[29, 178],[28, 177]])

export const dark_orange_active = n81
export const dark_orange_surface3 = n81
export const dark_orange_Button = n81
export const dark_orange_SliderTrackActive = n81
export const dark_orange_active_SliderTrackActive = n81
const n82 = t([[22, 173],[23, 174],[24, 172],[25, 172],[26, 176],[27, 177],[29, 176],[28, 175]])

export const dark_orange_surface1 = n82
export const dark_orange_ListItem = n82
export const dark_orange_SelectTrigger = n82
export const dark_orange_Card = n82
export const dark_orange_Progress = n82
export const dark_orange_TooltipArrow = n82
export const dark_orange_SliderTrack = n82
export const dark_orange_Input = n82
export const dark_orange_TextArea = n82
export const dark_orange_active_ListItem = n82
export const dark_orange_active_Progress = n82
export const dark_orange_active_TooltipArrow = n82
export const dark_orange_active_SliderTrack = n82
const n83 = t([[22, 174],[23, 175],[24, 173],[25, 173],[26, 177],[27, 178],[29, 177],[28, 176]])

export const dark_orange_surface2 = n83
export const dark_orange_Checkbox = n83
export const dark_orange_Switch = n83
export const dark_orange_TooltipContent = n83
export const dark_orange_RadioGroupItem = n83
const n84 = t([[22, 177],[23, 177],[24, 176],[25, 176],[26, 177],[27, 177],[29, 176],[28, 176]])

export const dark_orange_surface4 = n84
export const dark_orange_active_SelectTrigger = n84
export const dark_orange_active_Card = n84
export const dark_orange_active_Button = n84
export const dark_orange_active_Checkbox = n84
export const dark_orange_active_Switch = n84
export const dark_orange_active_TooltipContent = n84
export const dark_orange_active_RadioGroupItem = n84
export const dark_orange_active_Input = n84
export const dark_orange_active_TextArea = n84
const n85 = t([[30, 214],[31, 213],[32, 214],[33, 213]])

export const dark_yellow_alt1 = n85
const n86 = t([[30, 213],[31, 123],[32, 213],[33, 123]])

export const dark_yellow_alt2 = n86
const n87 = t([[22, 208],[23, 209],[24, 207],[25, 207],[26, 211],[27, 212],[29, 211],[28, 210]])

export const dark_yellow_active = n87
export const dark_yellow_surface3 = n87
export const dark_yellow_Button = n87
export const dark_yellow_SliderTrackActive = n87
export const dark_yellow_active_SliderTrackActive = n87
const n88 = t([[22, 206],[23, 207],[24, 205],[25, 205],[26, 209],[27, 210],[29, 209],[28, 208]])

export const dark_yellow_surface1 = n88
export const dark_yellow_ListItem = n88
export const dark_yellow_SelectTrigger = n88
export const dark_yellow_Card = n88
export const dark_yellow_Progress = n88
export const dark_yellow_TooltipArrow = n88
export const dark_yellow_SliderTrack = n88
export const dark_yellow_Input = n88
export const dark_yellow_TextArea = n88
export const dark_yellow_active_ListItem = n88
export const dark_yellow_active_Progress = n88
export const dark_yellow_active_TooltipArrow = n88
export const dark_yellow_active_SliderTrack = n88
const n89 = t([[22, 207],[23, 208],[24, 206],[25, 206],[26, 210],[27, 211],[29, 210],[28, 209]])

export const dark_yellow_surface2 = n89
export const dark_yellow_Checkbox = n89
export const dark_yellow_Switch = n89
export const dark_yellow_TooltipContent = n89
export const dark_yellow_RadioGroupItem = n89
const n90 = t([[22, 210],[23, 210],[24, 209],[25, 209],[26, 210],[27, 210],[29, 209],[28, 209]])

export const dark_yellow_surface4 = n90
export const dark_yellow_active_SelectTrigger = n90
export const dark_yellow_active_Card = n90
export const dark_yellow_active_Button = n90
export const dark_yellow_active_Checkbox = n90
export const dark_yellow_active_Switch = n90
export const dark_yellow_active_TooltipContent = n90
export const dark_yellow_active_RadioGroupItem = n90
export const dark_yellow_active_Input = n90
export const dark_yellow_active_TextArea = n90
const n91 = t([[30, 170],[31, 169],[32, 170],[33, 169]])

export const dark_green_alt1 = n91
const n92 = t([[30, 169],[31, 63],[32, 169],[33, 63]])

export const dark_green_alt2 = n92
const n93 = t([[22, 164],[23, 165],[24, 163],[25, 163],[26, 167],[27, 168],[29, 167],[28, 166]])

export const dark_green_active = n93
export const dark_green_surface3 = n93
export const dark_green_Button = n93
export const dark_green_SliderTrackActive = n93
export const dark_green_active_SliderTrackActive = n93
const n94 = t([[22, 162],[23, 163],[24, 161],[25, 161],[26, 165],[27, 166],[29, 165],[28, 164]])

export const dark_green_surface1 = n94
export const dark_green_ListItem = n94
export const dark_green_SelectTrigger = n94
export const dark_green_Card = n94
export const dark_green_Progress = n94
export const dark_green_TooltipArrow = n94
export const dark_green_SliderTrack = n94
export const dark_green_Input = n94
export const dark_green_TextArea = n94
export const dark_green_active_ListItem = n94
export const dark_green_active_Progress = n94
export const dark_green_active_TooltipArrow = n94
export const dark_green_active_SliderTrack = n94
const n95 = t([[22, 163],[23, 164],[24, 162],[25, 162],[26, 166],[27, 167],[29, 166],[28, 165]])

export const dark_green_surface2 = n95
export const dark_green_Checkbox = n95
export const dark_green_Switch = n95
export const dark_green_TooltipContent = n95
export const dark_green_RadioGroupItem = n95
const n96 = t([[22, 166],[23, 166],[24, 165],[25, 165],[26, 166],[27, 166],[29, 165],[28, 165]])

export const dark_green_surface4 = n96
export const dark_green_active_SelectTrigger = n96
export const dark_green_active_Card = n96
export const dark_green_active_Button = n96
export const dark_green_active_Checkbox = n96
export const dark_green_active_Switch = n96
export const dark_green_active_TooltipContent = n96
export const dark_green_active_RadioGroupItem = n96
export const dark_green_active_Input = n96
export const dark_green_active_TextArea = n96
const n97 = t([[30, 148],[31, 147],[32, 148],[33, 147]])

export const dark_blue_alt1 = n97
const n98 = t([[30, 147],[31, 41],[32, 147],[33, 41]])

export const dark_blue_alt2 = n98
const n99 = t([[22, 1],[23, 143],[24, 142],[25, 142],[26, 145],[27, 146],[29, 145],[28, 144]])

export const dark_blue_active = n99
export const dark_blue_surface3 = n99
export const dark_blue_Button = n99
export const dark_blue_SliderTrackActive = n99
export const dark_blue_active_SliderTrackActive = n99
const n100 = t([[22, 141],[23, 142],[24, 140],[25, 140],[26, 143],[27, 144],[29, 143],[28, 1]])

export const dark_blue_surface1 = n100
export const dark_blue_ListItem = n100
export const dark_blue_SelectTrigger = n100
export const dark_blue_Card = n100
export const dark_blue_Progress = n100
export const dark_blue_TooltipArrow = n100
export const dark_blue_SliderTrack = n100
export const dark_blue_Input = n100
export const dark_blue_TextArea = n100
export const dark_blue_active_ListItem = n100
export const dark_blue_active_Progress = n100
export const dark_blue_active_TooltipArrow = n100
export const dark_blue_active_SliderTrack = n100
const n101 = t([[22, 142],[23, 1],[24, 141],[25, 141],[26, 144],[27, 145],[29, 144],[28, 143]])

export const dark_blue_surface2 = n101
export const dark_blue_Checkbox = n101
export const dark_blue_Switch = n101
export const dark_blue_TooltipContent = n101
export const dark_blue_RadioGroupItem = n101
const n102 = t([[22, 144],[23, 144],[24, 143],[25, 143],[26, 144],[27, 144],[29, 143],[28, 143]])

export const dark_blue_surface4 = n102
export const dark_blue_active_SelectTrigger = n102
export const dark_blue_active_Card = n102
export const dark_blue_active_Button = n102
export const dark_blue_active_Checkbox = n102
export const dark_blue_active_Switch = n102
export const dark_blue_active_TooltipContent = n102
export const dark_blue_active_RadioGroupItem = n102
export const dark_blue_active_Input = n102
export const dark_blue_active_TextArea = n102
const n103 = t([[30, 203],[31, 202],[32, 203],[33, 202]])

export const dark_purple_alt1 = n103
const n104 = t([[30, 202],[31, 99],[32, 202],[33, 99]])

export const dark_purple_alt2 = n104
const n105 = t([[22, 197],[23, 198],[24, 196],[25, 196],[26, 200],[27, 201],[29, 200],[28, 199]])

export const dark_purple_active = n105
export const dark_purple_surface3 = n105
export const dark_purple_Button = n105
export const dark_purple_SliderTrackActive = n105
export const dark_purple_active_SliderTrackActive = n105
const n106 = t([[22, 195],[23, 196],[24, 194],[25, 194],[26, 198],[27, 199],[29, 198],[28, 197]])

export const dark_purple_surface1 = n106
export const dark_purple_ListItem = n106
export const dark_purple_SelectTrigger = n106
export const dark_purple_Card = n106
export const dark_purple_Progress = n106
export const dark_purple_TooltipArrow = n106
export const dark_purple_SliderTrack = n106
export const dark_purple_Input = n106
export const dark_purple_TextArea = n106
export const dark_purple_active_ListItem = n106
export const dark_purple_active_Progress = n106
export const dark_purple_active_TooltipArrow = n106
export const dark_purple_active_SliderTrack = n106
const n107 = t([[22, 196],[23, 197],[24, 195],[25, 195],[26, 199],[27, 200],[29, 199],[28, 198]])

export const dark_purple_surface2 = n107
export const dark_purple_Checkbox = n107
export const dark_purple_Switch = n107
export const dark_purple_TooltipContent = n107
export const dark_purple_RadioGroupItem = n107
const n108 = t([[22, 199],[23, 199],[24, 198],[25, 198],[26, 199],[27, 199],[29, 198],[28, 198]])

export const dark_purple_surface4 = n108
export const dark_purple_active_SelectTrigger = n108
export const dark_purple_active_Card = n108
export const dark_purple_active_Button = n108
export const dark_purple_active_Checkbox = n108
export const dark_purple_active_Switch = n108
export const dark_purple_active_TooltipContent = n108
export const dark_purple_active_RadioGroupItem = n108
export const dark_purple_active_Input = n108
export const dark_purple_active_TextArea = n108
const n109 = t([[30, 192],[31, 191],[32, 192],[33, 191]])

export const dark_pink_alt1 = n109
const n110 = t([[30, 191],[31, 87],[32, 191],[33, 87]])

export const dark_pink_alt2 = n110
const n111 = t([[22, 186],[23, 187],[24, 185],[25, 185],[26, 189],[27, 190],[29, 189],[28, 188]])

export const dark_pink_active = n111
export const dark_pink_surface3 = n111
export const dark_pink_Button = n111
export const dark_pink_SliderTrackActive = n111
export const dark_pink_active_SliderTrackActive = n111
const n112 = t([[22, 184],[23, 185],[24, 183],[25, 183],[26, 187],[27, 188],[29, 187],[28, 186]])

export const dark_pink_surface1 = n112
export const dark_pink_ListItem = n112
export const dark_pink_SelectTrigger = n112
export const dark_pink_Card = n112
export const dark_pink_Progress = n112
export const dark_pink_TooltipArrow = n112
export const dark_pink_SliderTrack = n112
export const dark_pink_Input = n112
export const dark_pink_TextArea = n112
export const dark_pink_active_ListItem = n112
export const dark_pink_active_Progress = n112
export const dark_pink_active_TooltipArrow = n112
export const dark_pink_active_SliderTrack = n112
const n113 = t([[22, 185],[23, 186],[24, 184],[25, 184],[26, 188],[27, 189],[29, 188],[28, 187]])

export const dark_pink_surface2 = n113
export const dark_pink_Checkbox = n113
export const dark_pink_Switch = n113
export const dark_pink_TooltipContent = n113
export const dark_pink_RadioGroupItem = n113
const n114 = t([[22, 188],[23, 188],[24, 187],[25, 187],[26, 188],[27, 188],[29, 187],[28, 187]])

export const dark_pink_surface4 = n114
export const dark_pink_active_SelectTrigger = n114
export const dark_pink_active_Card = n114
export const dark_pink_active_Button = n114
export const dark_pink_active_Checkbox = n114
export const dark_pink_active_Switch = n114
export const dark_pink_active_TooltipContent = n114
export const dark_pink_active_RadioGroupItem = n114
export const dark_pink_active_Input = n114
export const dark_pink_active_TextArea = n114
const n115 = t([[30, 104],[31, 105],[32, 104],[33, 105]])

export const dark_red_alt1 = n115
const n116 = t([[30, 105],[31, 106],[32, 105],[33, 106]])

export const dark_red_alt2 = n116
const n117 = t([[22, 111],[23, 110],[24, 112],[25, 112],[26, 108],[27, 107],[29, 108],[28, 109]])

export const dark_red_active = n117
export const dark_red_surface3 = n117
export const dark_red_Button = n117
export const dark_red_SliderTrackActive = n117
export const dark_red_active_SliderTrackActive = n117
const n118 = t([[22, 113],[23, 112],[24, 114],[25, 114],[26, 110],[27, 109],[29, 110],[28, 111]])

export const dark_red_surface1 = n118
export const dark_red_ListItem = n118
export const dark_red_SelectTrigger = n118
export const dark_red_Card = n118
export const dark_red_Progress = n118
export const dark_red_TooltipArrow = n118
export const dark_red_SliderTrack = n118
export const dark_red_Input = n118
export const dark_red_TextArea = n118
export const dark_red_active_ListItem = n118
export const dark_red_active_Progress = n118
export const dark_red_active_TooltipArrow = n118
export const dark_red_active_SliderTrack = n118
const n119 = t([[22, 112],[23, 111],[24, 113],[25, 113],[26, 109],[27, 108],[29, 109],[28, 110]])

export const dark_red_surface2 = n119
export const dark_red_Checkbox = n119
export const dark_red_Switch = n119
export const dark_red_TooltipContent = n119
export const dark_red_RadioGroupItem = n119
const n120 = t([[22, 109],[23, 109],[24, 110],[25, 110],[26, 109],[27, 109],[29, 110],[28, 110]])

export const dark_red_surface4 = n120
export const dark_red_active_SelectTrigger = n120
export const dark_red_active_Card = n120
export const dark_red_active_Button = n120
export const dark_red_active_Checkbox = n120
export const dark_red_active_Switch = n120
export const dark_red_active_TooltipContent = n120
export const dark_red_active_RadioGroupItem = n120
export const dark_red_active_Input = n120
export const dark_red_active_TextArea = n120
const n121 = t([[30, 160],[31, 159],[32, 160],[33, 159]])

export const dark_gray_alt1 = n121
const n122 = t([[30, 159],[31, 158],[32, 159],[33, 158]])

export const dark_gray_alt2 = n122
const n123 = t([[22, 153],[23, 154],[24, 152],[25, 152],[26, 156],[27, 157],[29, 156],[28, 155]])

export const dark_gray_active = n123
export const dark_gray_surface3 = n123
export const dark_gray_Button = n123
export const dark_gray_SliderTrackActive = n123
export const dark_gray_active_SliderTrackActive = n123
const n124 = t([[22, 151],[23, 152],[24, 150],[25, 150],[26, 154],[27, 155],[29, 154],[28, 153]])

export const dark_gray_surface1 = n124
export const dark_gray_ListItem = n124
export const dark_gray_SelectTrigger = n124
export const dark_gray_Card = n124
export const dark_gray_Progress = n124
export const dark_gray_TooltipArrow = n124
export const dark_gray_SliderTrack = n124
export const dark_gray_Input = n124
export const dark_gray_TextArea = n124
export const dark_gray_active_ListItem = n124
export const dark_gray_active_Progress = n124
export const dark_gray_active_TooltipArrow = n124
export const dark_gray_active_SliderTrack = n124
const n125 = t([[22, 152],[23, 153],[24, 151],[25, 151],[26, 155],[27, 156],[29, 155],[28, 154]])

export const dark_gray_surface2 = n125
export const dark_gray_Checkbox = n125
export const dark_gray_Switch = n125
export const dark_gray_TooltipContent = n125
export const dark_gray_RadioGroupItem = n125
const n126 = t([[22, 155],[23, 155],[24, 154],[25, 154],[26, 155],[27, 155],[29, 154],[28, 154]])

export const dark_gray_surface4 = n126
export const dark_gray_active_SelectTrigger = n126
export const dark_gray_active_Card = n126
export const dark_gray_active_Button = n126
export const dark_gray_active_Checkbox = n126
export const dark_gray_active_Switch = n126
export const dark_gray_active_TooltipContent = n126
export const dark_gray_active_RadioGroupItem = n126
export const dark_gray_active_Input = n126
export const dark_gray_active_TextArea = n126
const n127 = t([[30, 7],[31, 6],[32, 8],[33, 8],[22, 17],[23, 16],[24, 17],[25, 16],[26, 15],[27, 14],[29, 13],[28, 12]])

export const light_SwitchThumb = n127
export const light_SliderThumb = n127
export const light_Tooltip = n127
export const light_ProgressIndicator = n127
const n128 = t([[22, 322]])

export const light_SheetOverlay = n128
export const light_DialogOverlay = n128
export const light_ModalOverlay = n128
export const light_orange_SheetOverlay = n128
export const light_orange_DialogOverlay = n128
export const light_orange_ModalOverlay = n128
export const light_yellow_SheetOverlay = n128
export const light_yellow_DialogOverlay = n128
export const light_yellow_ModalOverlay = n128
export const light_green_SheetOverlay = n128
export const light_green_DialogOverlay = n128
export const light_green_ModalOverlay = n128
export const light_blue_SheetOverlay = n128
export const light_blue_DialogOverlay = n128
export const light_blue_ModalOverlay = n128
export const light_purple_SheetOverlay = n128
export const light_purple_DialogOverlay = n128
export const light_purple_ModalOverlay = n128
export const light_pink_SheetOverlay = n128
export const light_pink_DialogOverlay = n128
export const light_pink_ModalOverlay = n128
export const light_red_SheetOverlay = n128
export const light_red_DialogOverlay = n128
export const light_red_ModalOverlay = n128
export const light_gray_SheetOverlay = n128
export const light_gray_DialogOverlay = n128
export const light_gray_ModalOverlay = n128
export const light_active_SheetOverlay = n128
export const light_active_DialogOverlay = n128
export const light_active_ModalOverlay = n128
export const light_orange_active_SheetOverlay = n128
export const light_orange_active_DialogOverlay = n128
export const light_orange_active_ModalOverlay = n128
export const light_yellow_active_SheetOverlay = n128
export const light_yellow_active_DialogOverlay = n128
export const light_yellow_active_ModalOverlay = n128
export const light_green_active_SheetOverlay = n128
export const light_green_active_DialogOverlay = n128
export const light_green_active_ModalOverlay = n128
export const light_blue_active_SheetOverlay = n128
export const light_blue_active_DialogOverlay = n128
export const light_blue_active_ModalOverlay = n128
export const light_purple_active_SheetOverlay = n128
export const light_purple_active_DialogOverlay = n128
export const light_purple_active_ModalOverlay = n128
export const light_pink_active_SheetOverlay = n128
export const light_pink_active_DialogOverlay = n128
export const light_pink_active_ModalOverlay = n128
export const light_red_active_SheetOverlay = n128
export const light_red_active_DialogOverlay = n128
export const light_red_active_ModalOverlay = n128
export const light_gray_active_SheetOverlay = n128
export const light_gray_active_DialogOverlay = n128
export const light_gray_active_ModalOverlay = n128
const n129 = t([[30, 130],[31, 131],[32, 129],[33, 129],[22, 6],[23, 139],[24, 6],[25, 139],[26, 138],[27, 137],[29, 136],[28, 135]])

export const dark_SwitchThumb = n129
export const dark_SliderThumb = n129
export const dark_Tooltip = n129
export const dark_ProgressIndicator = n129
const n130 = t([[22, 323]])

export const dark_SheetOverlay = n130
export const dark_DialogOverlay = n130
export const dark_ModalOverlay = n130
export const dark_orange_SheetOverlay = n130
export const dark_orange_DialogOverlay = n130
export const dark_orange_ModalOverlay = n130
export const dark_yellow_SheetOverlay = n130
export const dark_yellow_DialogOverlay = n130
export const dark_yellow_ModalOverlay = n130
export const dark_green_SheetOverlay = n130
export const dark_green_DialogOverlay = n130
export const dark_green_ModalOverlay = n130
export const dark_blue_SheetOverlay = n130
export const dark_blue_DialogOverlay = n130
export const dark_blue_ModalOverlay = n130
export const dark_purple_SheetOverlay = n130
export const dark_purple_DialogOverlay = n130
export const dark_purple_ModalOverlay = n130
export const dark_pink_SheetOverlay = n130
export const dark_pink_DialogOverlay = n130
export const dark_pink_ModalOverlay = n130
export const dark_red_SheetOverlay = n130
export const dark_red_DialogOverlay = n130
export const dark_red_ModalOverlay = n130
export const dark_gray_SheetOverlay = n130
export const dark_gray_DialogOverlay = n130
export const dark_gray_ModalOverlay = n130
export const dark_active_SheetOverlay = n130
export const dark_active_DialogOverlay = n130
export const dark_active_ModalOverlay = n130
export const dark_orange_active_SheetOverlay = n130
export const dark_orange_active_DialogOverlay = n130
export const dark_orange_active_ModalOverlay = n130
export const dark_yellow_active_SheetOverlay = n130
export const dark_yellow_active_DialogOverlay = n130
export const dark_yellow_active_ModalOverlay = n130
export const dark_green_active_SheetOverlay = n130
export const dark_green_active_DialogOverlay = n130
export const dark_green_active_ModalOverlay = n130
export const dark_blue_active_SheetOverlay = n130
export const dark_blue_active_DialogOverlay = n130
export const dark_blue_active_ModalOverlay = n130
export const dark_purple_active_SheetOverlay = n130
export const dark_purple_active_DialogOverlay = n130
export const dark_purple_active_ModalOverlay = n130
export const dark_pink_active_SheetOverlay = n130
export const dark_pink_active_DialogOverlay = n130
export const dark_pink_active_ModalOverlay = n130
export const dark_red_active_SheetOverlay = n130
export const dark_red_active_DialogOverlay = n130
export const dark_red_active_ModalOverlay = n130
export const dark_gray_active_SheetOverlay = n130
export const dark_gray_active_DialogOverlay = n130
export const dark_gray_active_ModalOverlay = n130
const n131 = t([[30, 68],[31, 67],[32, 69],[33, 69],[22, 78],[23, 77],[24, 78],[25, 77],[26, 76],[27, 75],[29, 74],[28, 73]])

export const light_orange_SwitchThumb = n131
export const light_orange_SliderThumb = n131
export const light_orange_Tooltip = n131
export const light_orange_ProgressIndicator = n131
const n132 = t([[30, 116],[31, 115],[32, 117],[33, 117],[22, 126],[23, 125],[24, 126],[25, 125],[26, 124],[27, 123],[29, 122],[28, 121]])

export const light_yellow_SwitchThumb = n132
export const light_yellow_SliderThumb = n132
export const light_yellow_Tooltip = n132
export const light_yellow_ProgressIndicator = n132
const n133 = t([[30, 56],[31, 55],[32, 57],[33, 57],[22, 66],[23, 65],[24, 66],[25, 65],[26, 64],[27, 63],[29, 62],[28, 61]])

export const light_green_SwitchThumb = n133
export const light_green_SliderThumb = n133
export const light_green_Tooltip = n133
export const light_green_ProgressIndicator = n133
const n134 = t([[30, 35],[31, 34],[32, 36],[33, 36],[22, 44],[23, 43],[24, 44],[25, 43],[26, 42],[27, 41],[29, 40],[28, 39]])

export const light_blue_SwitchThumb = n134
export const light_blue_SliderThumb = n134
export const light_blue_Tooltip = n134
export const light_blue_ProgressIndicator = n134
const n135 = t([[30, 92],[31, 91],[32, 93],[33, 93],[22, 102],[23, 101],[24, 102],[25, 101],[26, 100],[27, 99],[29, 98],[28, 97]])

export const light_purple_SwitchThumb = n135
export const light_purple_SliderThumb = n135
export const light_purple_Tooltip = n135
export const light_purple_ProgressIndicator = n135
const n136 = t([[30, 80],[31, 79],[32, 81],[33, 81],[22, 90],[23, 89],[24, 90],[25, 89],[26, 88],[27, 87],[29, 86],[28, 85]])

export const light_pink_SwitchThumb = n136
export const light_pink_SliderThumb = n136
export const light_pink_Tooltip = n136
export const light_pink_ProgressIndicator = n136
const n137 = t([[30, 104],[31, 103],[32, 105],[33, 105],[22, 114],[23, 113],[24, 114],[25, 113],[26, 112],[27, 111],[29, 110],[28, 109]])

export const light_red_SwitchThumb = n137
export const light_red_SliderThumb = n137
export const light_red_Tooltip = n137
export const light_red_ProgressIndicator = n137
const n138 = t([[30, 46],[31, 45],[32, 47],[33, 47],[22, 17],[23, 54],[24, 17],[25, 54],[26, 53],[27, 14],[29, 52],[28, 51]])

export const light_gray_SwitchThumb = n138
export const light_gray_SliderThumb = n138
export const light_gray_Tooltip = n138
export const light_gray_ProgressIndicator = n138
const n139 = t([[30, 173],[31, 174],[32, 172],[33, 172],[22, 182],[23, 181],[24, 182],[25, 181],[26, 180],[27, 75],[29, 179],[28, 178]])

export const dark_orange_SwitchThumb = n139
export const dark_orange_SliderThumb = n139
export const dark_orange_Tooltip = n139
export const dark_orange_ProgressIndicator = n139
const n140 = t([[30, 206],[31, 207],[32, 205],[33, 205],[22, 215],[23, 214],[24, 215],[25, 214],[26, 213],[27, 123],[29, 212],[28, 211]])

export const dark_yellow_SwitchThumb = n140
export const dark_yellow_SliderThumb = n140
export const dark_yellow_Tooltip = n140
export const dark_yellow_ProgressIndicator = n140
const n141 = t([[30, 162],[31, 163],[32, 161],[33, 161],[22, 171],[23, 170],[24, 171],[25, 170],[26, 169],[27, 63],[29, 168],[28, 167]])

export const dark_green_SwitchThumb = n141
export const dark_green_SliderThumb = n141
export const dark_green_Tooltip = n141
export const dark_green_ProgressIndicator = n141
const n142 = t([[30, 141],[31, 142],[32, 140],[33, 140],[22, 149],[23, 148],[24, 149],[25, 148],[26, 147],[27, 41],[29, 146],[28, 145]])

export const dark_blue_SwitchThumb = n142
export const dark_blue_SliderThumb = n142
export const dark_blue_Tooltip = n142
export const dark_blue_ProgressIndicator = n142
const n143 = t([[30, 195],[31, 196],[32, 194],[33, 194],[22, 204],[23, 203],[24, 204],[25, 203],[26, 202],[27, 99],[29, 201],[28, 200]])

export const dark_purple_SwitchThumb = n143
export const dark_purple_SliderThumb = n143
export const dark_purple_Tooltip = n143
export const dark_purple_ProgressIndicator = n143
const n144 = t([[30, 184],[31, 185],[32, 183],[33, 183],[22, 193],[23, 192],[24, 193],[25, 192],[26, 191],[27, 87],[29, 190],[28, 189]])

export const dark_pink_SwitchThumb = n144
export const dark_pink_SliderThumb = n144
export const dark_pink_Tooltip = n144
export const dark_pink_ProgressIndicator = n144
const n145 = t([[30, 113],[31, 112],[32, 114],[33, 114],[22, 103],[23, 104],[24, 103],[25, 104],[26, 105],[27, 106],[29, 107],[28, 108]])

export const dark_red_SwitchThumb = n145
export const dark_red_SliderThumb = n145
export const dark_red_Tooltip = n145
export const dark_red_ProgressIndicator = n145
const n146 = t([[30, 151],[31, 152],[32, 150],[33, 150],[22, 48],[23, 160],[24, 48],[25, 160],[26, 159],[27, 158],[29, 157],[28, 156]])

export const dark_gray_SwitchThumb = n146
export const dark_gray_SliderThumb = n146
export const dark_gray_Tooltip = n146
export const dark_gray_ProgressIndicator = n146
const n147 = t([[30, 7],[31, 6],[32, 8],[33, 8],[22, 15],[23, 14],[24, 15],[25, 14],[26, 13],[27, 12],[29, 11],[28, 10]])

export const light_active_SwitchThumb = n147
export const light_active_SliderThumb = n147
export const light_active_Tooltip = n147
export const light_active_ProgressIndicator = n147
const n148 = t([[30, 130],[31, 131],[32, 129],[33, 129],[22, 138],[23, 137],[24, 138],[25, 137],[26, 136],[27, 135],[29, 134],[28, 133]])

export const dark_active_SwitchThumb = n148
export const dark_active_SliderThumb = n148
export const dark_active_Tooltip = n148
export const dark_active_ProgressIndicator = n148
const n149 = t([[30, 68],[31, 67],[32, 69],[33, 69],[22, 76],[23, 75],[24, 76],[25, 75],[26, 74],[27, 73],[29, 72],[28, 71]])

export const light_orange_active_SwitchThumb = n149
export const light_orange_active_SliderThumb = n149
export const light_orange_active_Tooltip = n149
export const light_orange_active_ProgressIndicator = n149
const n150 = t([[30, 116],[31, 115],[32, 117],[33, 117],[22, 124],[23, 123],[24, 124],[25, 123],[26, 122],[27, 121],[29, 120],[28, 119]])

export const light_yellow_active_SwitchThumb = n150
export const light_yellow_active_SliderThumb = n150
export const light_yellow_active_Tooltip = n150
export const light_yellow_active_ProgressIndicator = n150
const n151 = t([[30, 56],[31, 55],[32, 57],[33, 57],[22, 64],[23, 63],[24, 64],[25, 63],[26, 62],[27, 61],[29, 60],[28, 59]])

export const light_green_active_SwitchThumb = n151
export const light_green_active_SliderThumb = n151
export const light_green_active_Tooltip = n151
export const light_green_active_ProgressIndicator = n151
const n152 = t([[30, 35],[31, 34],[32, 36],[33, 36],[22, 42],[23, 41],[24, 42],[25, 41],[26, 40],[27, 39],[29, 38],[28, 37]])

export const light_blue_active_SwitchThumb = n152
export const light_blue_active_SliderThumb = n152
export const light_blue_active_Tooltip = n152
export const light_blue_active_ProgressIndicator = n152
const n153 = t([[30, 92],[31, 91],[32, 93],[33, 93],[22, 100],[23, 99],[24, 100],[25, 99],[26, 98],[27, 97],[29, 96],[28, 95]])

export const light_purple_active_SwitchThumb = n153
export const light_purple_active_SliderThumb = n153
export const light_purple_active_Tooltip = n153
export const light_purple_active_ProgressIndicator = n153
const n154 = t([[30, 80],[31, 79],[32, 81],[33, 81],[22, 88],[23, 87],[24, 88],[25, 87],[26, 86],[27, 85],[29, 84],[28, 83]])

export const light_pink_active_SwitchThumb = n154
export const light_pink_active_SliderThumb = n154
export const light_pink_active_Tooltip = n154
export const light_pink_active_ProgressIndicator = n154
const n155 = t([[30, 104],[31, 103],[32, 105],[33, 105],[22, 112],[23, 111],[24, 112],[25, 111],[26, 110],[27, 109],[29, 108],[28, 107]])

export const light_red_active_SwitchThumb = n155
export const light_red_active_SliderThumb = n155
export const light_red_active_Tooltip = n155
export const light_red_active_ProgressIndicator = n155
const n156 = t([[30, 46],[31, 45],[32, 47],[33, 47],[22, 53],[23, 14],[24, 53],[25, 14],[26, 52],[27, 51],[29, 50],[28, 49]])

export const light_gray_active_SwitchThumb = n156
export const light_gray_active_SliderThumb = n156
export const light_gray_active_Tooltip = n156
export const light_gray_active_ProgressIndicator = n156
const n157 = t([[30, 173],[31, 174],[32, 172],[33, 172],[22, 180],[23, 75],[24, 180],[25, 75],[26, 179],[27, 178],[29, 177],[28, 176]])

export const dark_orange_active_SwitchThumb = n157
export const dark_orange_active_SliderThumb = n157
export const dark_orange_active_Tooltip = n157
export const dark_orange_active_ProgressIndicator = n157
const n158 = t([[30, 206],[31, 207],[32, 205],[33, 205],[22, 213],[23, 123],[24, 213],[25, 123],[26, 212],[27, 211],[29, 210],[28, 209]])

export const dark_yellow_active_SwitchThumb = n158
export const dark_yellow_active_SliderThumb = n158
export const dark_yellow_active_Tooltip = n158
export const dark_yellow_active_ProgressIndicator = n158
const n159 = t([[30, 162],[31, 163],[32, 161],[33, 161],[22, 169],[23, 63],[24, 169],[25, 63],[26, 168],[27, 167],[29, 166],[28, 165]])

export const dark_green_active_SwitchThumb = n159
export const dark_green_active_SliderThumb = n159
export const dark_green_active_Tooltip = n159
export const dark_green_active_ProgressIndicator = n159
const n160 = t([[30, 141],[31, 142],[32, 140],[33, 140],[22, 147],[23, 41],[24, 147],[25, 41],[26, 146],[27, 145],[29, 144],[28, 143]])

export const dark_blue_active_SwitchThumb = n160
export const dark_blue_active_SliderThumb = n160
export const dark_blue_active_Tooltip = n160
export const dark_blue_active_ProgressIndicator = n160
const n161 = t([[30, 195],[31, 196],[32, 194],[33, 194],[22, 202],[23, 99],[24, 202],[25, 99],[26, 201],[27, 200],[29, 199],[28, 198]])

export const dark_purple_active_SwitchThumb = n161
export const dark_purple_active_SliderThumb = n161
export const dark_purple_active_Tooltip = n161
export const dark_purple_active_ProgressIndicator = n161
const n162 = t([[30, 184],[31, 185],[32, 183],[33, 183],[22, 191],[23, 87],[24, 191],[25, 87],[26, 190],[27, 189],[29, 188],[28, 187]])

export const dark_pink_active_SwitchThumb = n162
export const dark_pink_active_SliderThumb = n162
export const dark_pink_active_Tooltip = n162
export const dark_pink_active_ProgressIndicator = n162
const n163 = t([[30, 113],[31, 112],[32, 114],[33, 114],[22, 105],[23, 106],[24, 105],[25, 106],[26, 107],[27, 108],[29, 109],[28, 110]])

export const dark_red_active_SwitchThumb = n163
export const dark_red_active_SliderThumb = n163
export const dark_red_active_Tooltip = n163
export const dark_red_active_ProgressIndicator = n163
const n164 = t([[30, 151],[31, 152],[32, 150],[33, 150],[22, 159],[23, 158],[24, 159],[25, 158],[26, 157],[27, 156],[29, 155],[28, 154]])

export const dark_gray_active_SwitchThumb = n164
export const dark_gray_active_SliderThumb = n164
export const dark_gray_active_Tooltip = n164
export const dark_gray_active_ProgressIndicator = n164