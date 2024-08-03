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
  'hsl(206, 100%, 50.0%)',
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
  'hsl(206, 98.0%, 95.8%)',
  'hsl(210, 100%, 66.1%)',
  'hsl(209, 100%, 60.6%)',
  'hsl(211, 89.7%, 34.1%)',
  'hsl(211, 85.1%, 27.4%)',
  'hsl(212, 77.4%, 23.1%)',
  'hsl(213, 71.2%, 20.2%)',
  'hsl(214, 59.4%, 15.3%)',
  'hsl(216, 50.0%, 11.8%)',
  'hsl(212, 35.0%, 9.2%)',
  'hsl(0, 0%, 93.0%)',
  'hsl(0, 0%, 62.8%)',
  'hsl(0, 0%, 49.4%)',
  'hsl(0, 0%, 43.9%)',
  'hsl(0, 0%, 31.2%)',
  'hsl(0, 0%, 24.3%)',
  'hsl(0, 0%, 20.5%)',
  'hsl(0, 0%, 17.9%)',
  'hsl(0, 0%, 15.8%)',
  'hsl(0, 0%, 13.6%)',
  'hsl(0, 0%, 11.0%)',
  'hsl(0, 0%, 8.5%)',
  'hsl(137, 72.0%, 94.0%)',
  'hsl(151, 50.0%, 53.2%)',
  'hsl(151, 49.3%, 46.5%)',
  'hsl(151, 55.0%, 41.5%)',
  'hsl(151, 51.7%, 28.4%)',
  'hsl(153, 51.8%, 21.8%)',
  'hsl(154, 50.9%, 17.6%)',
  'hsl(154, 49.7%, 14.9%)',
  'hsl(154, 48.4%, 12.9%)',
  'hsl(155, 46.7%, 10.9%)',
  'hsl(155, 44.2%, 8.4%)',
  'hsl(146, 30.0%, 7.4%)',
  'hsl(24, 97.0%, 93.2%)',
  'hsl(24, 100%, 62.2%)',
  'hsl(24, 100%, 58.5%)',
  'hsl(24, 94.0%, 50.0%)',
  'hsl(25, 100%, 29.0%)',
  'hsl(24, 92.4%, 24.0%)',
  'hsl(24, 88.6%, 19.8%)',
  'hsl(24, 87.6%, 16.6%)',
  'hsl(25, 88.3%, 14.1%)',
  'hsl(26, 91.1%, 11.6%)',
  'hsl(28, 100%, 8.4%)',
  'hsl(30, 70.0%, 7.2%)',
  'hsl(322, 90.0%, 95.8%)',
  'hsl(325, 90.0%, 66.4%)',
  'hsl(323, 72.8%, 59.2%)',
  'hsl(322, 65.0%, 54.5%)',
  'hsl(322, 74.9%, 37.5%)',
  'hsl(321, 61.1%, 29.7%)',
  'hsl(321, 53.6%, 24.4%)',
  'hsl(320, 49.0%, 21.1%)',
  'hsl(320, 45.4%, 18.7%)',
  'hsl(319, 41.0%, 16.0%)',
  'hsl(319, 32.2%, 11.6%)',
  'hsl(318, 25.0%, 9.6%)',
  'hsl(279, 75.0%, 95.7%)',
  'hsl(275, 80.0%, 71.0%)',
  'hsl(273, 57.3%, 59.1%)',
  'hsl(272, 51.0%, 54.0%)',
  'hsl(272, 52.1%, 45.9%)',
  'hsl(275, 49.3%, 34.6%)',
  'hsl(277, 46.4%, 27.5%)',
  'hsl(279, 43.8%, 23.3%)',
  'hsl(280, 41.2%, 20.0%)',
  'hsl(281, 37.5%, 16.5%)',
  'hsl(283, 30.0%, 11.8%)',
  'hsl(284, 20.0%, 9.6%)',
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
  'hsl(53, 100%, 91.0%)',
  'hsl(48, 100%, 47.0%)',
  'hsl(54, 100%, 68.0%)',
  'hsl(53, 92.0%, 50.0%)',
  'hsl(50, 100%, 22.0%)',
  'hsl(49, 90.3%, 18.4%)',
  'hsl(49, 100%, 14.3%)',
  'hsl(47, 100%, 12.1%)',
  'hsl(45, 100%, 10.4%)',
  'hsl(45, 100%, 8.7%)',
  'hsl(46, 100%, 6.7%)',
  'hsl(45, 100%, 5.5%)',
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
  'rgba(0,0,0,0.3)',
  'rgba(0,0,0,0.2)',
  'hsla(24, 97.0%, 93.2%, 0)',
  'hsla(24, 97.0%, 93.2%, 0.25)',
  'hsla(24, 97.0%, 93.2%, 0.5)',
  'hsla(24, 97.0%, 93.2%, 0.75)',
  'hsla(25, 88.3%, 14.1%, 0)',
  'hsla(25, 88.3%, 14.1%, 0.25)',
  'hsla(25, 88.3%, 14.1%, 0.5)',
  'hsla(25, 88.3%, 14.1%, 0.75)',
  'hsla(53, 100%, 91.0%, 0)',
  'hsla(53, 100%, 91.0%, 0.25)',
  'hsla(53, 100%, 91.0%, 0.5)',
  'hsla(53, 100%, 91.0%, 0.75)',
  'hsla(45, 100%, 10.4%, 0)',
  'hsla(45, 100%, 10.4%, 0.25)',
  'hsla(45, 100%, 10.4%, 0.5)',
  'hsla(45, 100%, 10.4%, 0.75)',
  'hsla(137, 72.0%, 94.0%, 0)',
  'hsla(137, 72.0%, 94.0%, 0.25)',
  'hsla(137, 72.0%, 94.0%, 0.5)',
  'hsla(137, 72.0%, 94.0%, 0.75)',
  'hsla(154, 48.4%, 12.9%, 0)',
  'hsla(154, 48.4%, 12.9%, 0.25)',
  'hsla(154, 48.4%, 12.9%, 0.5)',
  'hsla(154, 48.4%, 12.9%, 0.75)',
  'hsla(206, 98.0%, 95.8%, 0)',
  'hsla(206, 98.0%, 95.8%, 0.25)',
  'hsla(206, 98.0%, 95.8%, 0.5)',
  'hsla(206, 98.0%, 95.8%, 0.75)',
  'hsla(214, 65.8%, 17.9%, 0)',
  'hsla(214, 65.8%, 17.9%, 0.25)',
  'hsla(214, 65.8%, 17.9%, 0.5)',
  'hsla(214, 65.8%, 17.9%, 0.75)',
  'hsla(279, 75.0%, 95.7%, 0)',
  'hsla(279, 75.0%, 95.7%, 0.25)',
  'hsla(279, 75.0%, 95.7%, 0.5)',
  'hsla(279, 75.0%, 95.7%, 0.75)',
  'hsla(280, 41.2%, 20.0%, 0)',
  'hsla(280, 41.2%, 20.0%, 0.25)',
  'hsla(280, 41.2%, 20.0%, 0.5)',
  'hsla(280, 41.2%, 20.0%, 0.75)',
  'hsla(322, 90.0%, 95.8%, 0)',
  'hsla(322, 90.0%, 95.8%, 0.25)',
  'hsla(322, 90.0%, 95.8%, 0.5)',
  'hsla(322, 90.0%, 95.8%, 0.75)',
  'hsla(320, 45.4%, 18.7%, 0)',
  'hsla(320, 45.4%, 18.7%, 0.25)',
  'hsla(320, 45.4%, 18.7%, 0.5)',
  'hsla(320, 45.4%, 18.7%, 0.75)',
  'hsla(351, 89.0%, 96.0%, 0)',
  'hsla(351, 89.0%, 96.0%, 0.25)',
  'hsla(351, 89.0%, 96.0%, 0.5)',
  'hsla(351, 89.0%, 96.0%, 0.75)',
  'hsla(356, 47.6%, 19.2%, 0)',
  'hsla(356, 47.6%, 19.2%, 0.25)',
  'hsla(356, 47.6%, 19.2%, 0.5)',
  'hsla(356, 47.6%, 19.2%, 0.75)',
  'hsla(0, 0%, 93.0%, 0)',
  'hsla(0, 0%, 93.0%, 0.25)',
  'hsla(0, 0%, 93.0%, 0.5)',
  'hsla(0, 0%, 93.0%, 0.75)',
  'hsla(0, 0%, 15.8%, 0)',
  'hsla(0, 0%, 15.8%, 0.25)',
  'hsla(0, 0%, 15.8%, 0.5)',
  'hsla(0, 0%, 15.8%, 0.75)',
  'hsla(30, 70.0%, 7.2%, 0)',
  'hsla(30, 70.0%, 7.2%, 0.25)',
  'hsla(30, 70.0%, 7.2%, 0.5)',
  'hsla(30, 70.0%, 7.2%, 0.75)',
  'hsla(24, 94.0%, 50.0%, 0)',
  'hsla(24, 94.0%, 50.0%, 0.25)',
  'hsla(24, 94.0%, 50.0%, 0.5)',
  'hsla(24, 94.0%, 50.0%, 0.75)',
  'hsla(45, 100%, 5.5%, 0)',
  'hsla(45, 100%, 5.5%, 0.25)',
  'hsla(45, 100%, 5.5%, 0.5)',
  'hsla(45, 100%, 5.5%, 0.75)',
  'hsla(53, 92.0%, 50.0%, 0)',
  'hsla(53, 92.0%, 50.0%, 0.25)',
  'hsla(53, 92.0%, 50.0%, 0.5)',
  'hsla(53, 92.0%, 50.0%, 0.75)',
  'hsla(146, 30.0%, 7.4%, 0)',
  'hsla(146, 30.0%, 7.4%, 0.25)',
  'hsla(146, 30.0%, 7.4%, 0.5)',
  'hsla(146, 30.0%, 7.4%, 0.75)',
  'hsla(151, 55.0%, 41.5%, 0)',
  'hsla(151, 55.0%, 41.5%, 0.25)',
  'hsla(151, 55.0%, 41.5%, 0.5)',
  'hsla(151, 55.0%, 41.5%, 0.75)',
  'hsla(212, 35.0%, 9.2%, 0)',
  'hsla(212, 35.0%, 9.2%, 0.25)',
  'hsla(212, 35.0%, 9.2%, 0.5)',
  'hsla(212, 35.0%, 9.2%, 0.75)',
  'hsla(206, 100%, 50.0%, 0)',
  'hsla(206, 100%, 50.0%, 0.25)',
  'hsla(206, 100%, 50.0%, 0.5)',
  'hsla(206, 100%, 50.0%, 0.75)',
  'hsla(284, 20.0%, 9.6%, 0)',
  'hsla(284, 20.0%, 9.6%, 0.25)',
  'hsla(284, 20.0%, 9.6%, 0.5)',
  'hsla(284, 20.0%, 9.6%, 0.75)',
  'hsla(272, 51.0%, 54.0%, 0)',
  'hsla(272, 51.0%, 54.0%, 0.25)',
  'hsla(272, 51.0%, 54.0%, 0.5)',
  'hsla(272, 51.0%, 54.0%, 0.75)',
  'hsla(318, 25.0%, 9.6%, 0)',
  'hsla(318, 25.0%, 9.6%, 0.25)',
  'hsla(318, 25.0%, 9.6%, 0.5)',
  'hsla(318, 25.0%, 9.6%, 0.75)',
  'hsla(322, 65.0%, 54.5%, 0)',
  'hsla(322, 65.0%, 54.5%, 0.25)',
  'hsla(322, 65.0%, 54.5%, 0.5)',
  'hsla(322, 65.0%, 54.5%, 0.75)',
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


const n1 = t([[0, 0],[1, 1],[2, 2],[3, 3],[4, 4],[5, 5],[6, 6],[7, 7],[8, 8],[9, 9],[10, 10],[11, 11],[12, 12],[13, 13],[14, 14],[15, 15],[16, 16],[17, 17],[18, 18],[19, 19],[20, 20],[21, 21],[22, 6],[23, 5],[24, 7],[25, 7],[26, 9],[27, 8],[28, 10],[29, 9],[30, 17],[31, 16],[32, 17],[33, 16],[34, 18],[35, 14],[36, 19],[37, 22],[38, 23],[39, 24],[40, 0],[41, 25],[42, 26],[43, 27],[44, 28],[45, 1],[46, 29],[47, 30],[48, 31],[49, 32],[50, 33],[51, 34],[52, 35],[53, 36],[54, 37],[55, 38],[56, 39],[57, 40],[58, 41],[59, 42],[60, 43],[61, 44],[62, 45],[63, 46],[64, 47],[65, 48],[66, 49],[67, 50],[68, 51],[69, 52],[70, 53],[71, 54],[72, 55],[73, 56],[74, 57],[75, 58],[76, 59],[77, 60],[78, 61],[79, 62],[80, 63],[81, 64],[82, 65],[83, 66],[84, 67],[85, 68],[86, 69],[87, 70],[88, 71],[89, 72],[90, 73],[91, 74],[92, 75],[93, 76],[94, 77],[95, 78],[96, 79],[97, 80],[98, 81],[99, 82],[100, 83],[101, 84],[102, 85],[103, 86],[104, 87],[105, 88],[106, 89],[107, 90],[108, 91],[109, 92],[110, 93],[111, 94],[112, 95],[113, 96],[114, 97],[115, 98],[116, 99],[117, 100],[118, 101],[119, 102],[120, 103],[121, 104],[122, 105],[123, 106],[124, 107],[125, 108],[126, 109],[127, 110],[128, 111],[129, 112],[130, 113],[131, 114],[132, 115],[133, 116],[134, 116],[135, 117],[136, 117]])

export const light = n1
const n2 = t([[0, 1],[1, 0],[2, 18],[3, 19],[4, 20],[5, 21],[6, 118],[7, 119],[8, 120],[9, 121],[10, 122],[11, 123],[12, 124],[13, 125],[14, 126],[15, 127],[16, 128],[17, 6],[18, 2],[19, 3],[20, 4],[21, 5],[22, 118],[23, 119],[24, 21],[25, 21],[26, 121],[27, 122],[28, 120],[29, 121],[30, 6],[31, 128],[32, 6],[33, 128],[34, 2],[35, 126],[36, 3],[37, 31],[38, 30],[39, 29],[40, 1],[41, 28],[42, 27],[43, 26],[44, 25],[45, 0],[46, 24],[47, 23],[48, 22],[49, 43],[50, 42],[51, 41],[52, 40],[53, 39],[54, 38],[55, 37],[56, 36],[57, 35],[58, 34],[59, 33],[60, 32],[61, 55],[62, 54],[63, 53],[64, 52],[65, 51],[66, 50],[67, 49],[68, 48],[69, 47],[70, 46],[71, 45],[72, 44],[73, 67],[74, 66],[75, 65],[76, 64],[77, 63],[78, 62],[79, 61],[80, 60],[81, 59],[82, 58],[83, 57],[84, 56],[85, 79],[86, 78],[87, 77],[88, 76],[89, 75],[90, 74],[91, 73],[92, 72],[93, 71],[94, 70],[95, 69],[96, 68],[97, 91],[98, 90],[99, 89],[100, 88],[101, 87],[102, 86],[103, 85],[104, 84],[105, 83],[106, 82],[107, 81],[108, 80],[109, 103],[110, 102],[111, 101],[112, 100],[113, 99],[114, 98],[115, 97],[116, 96],[117, 95],[118, 94],[119, 93],[120, 92],[121, 115],[122, 114],[123, 113],[124, 112],[125, 111],[126, 110],[127, 109],[128, 108],[129, 107],[130, 106],[131, 105],[132, 104],[133, 129],[134, 129],[135, 130],[136, 130]])

export const dark = n2
const n3 = t([[0, 68],[1, 79],[2, 131],[3, 132],[4, 133],[5, 134],[6, 56],[7, 57],[8, 58],[9, 59],[10, 60],[11, 61],[12, 62],[13, 63],[14, 64],[15, 65],[16, 66],[17, 67],[18, 135],[19, 136],[20, 137],[21, 138],[22, 56],[23, 134],[24, 57],[25, 57],[26, 59],[27, 58],[28, 60],[29, 59],[30, 67],[31, 66],[32, 67],[33, 66],[34, 135],[35, 64],[36, 136]])

export const light_orange = n3
const n4 = t([[0, 22],[1, 31],[2, 139],[3, 140],[4, 141],[5, 142],[6, 104],[7, 105],[8, 106],[9, 107],[10, 108],[11, 109],[12, 110],[13, 111],[14, 112],[15, 113],[16, 114],[17, 115],[18, 143],[19, 144],[20, 145],[21, 146],[22, 104],[23, 142],[24, 105],[25, 105],[26, 107],[27, 106],[28, 108],[29, 107],[30, 115],[31, 114],[32, 115],[33, 114],[34, 143],[35, 112],[36, 144]])

export const light_yellow = n4
const n5 = t([[0, 56],[1, 67],[2, 147],[3, 148],[4, 149],[5, 150],[6, 44],[7, 45],[8, 46],[9, 47],[10, 48],[11, 49],[12, 50],[13, 51],[14, 52],[15, 53],[16, 54],[17, 55],[18, 151],[19, 152],[20, 153],[21, 154],[22, 44],[23, 150],[24, 45],[25, 45],[26, 47],[27, 46],[28, 48],[29, 47],[30, 55],[31, 54],[32, 55],[33, 54],[34, 151],[35, 52],[36, 152]])

export const light_green = n5
const n6 = t([[0, 32],[1, 43],[2, 155],[3, 156],[4, 157],[5, 158],[6, 22],[7, 23],[8, 24],[9, 0],[10, 25],[11, 26],[12, 27],[13, 28],[14, 1],[15, 29],[16, 30],[17, 31],[18, 159],[19, 160],[20, 161],[21, 162],[22, 22],[23, 158],[24, 23],[25, 23],[26, 0],[27, 24],[28, 25],[29, 0],[30, 31],[31, 30],[32, 31],[33, 30],[34, 159],[35, 1],[36, 160]])

export const light_blue = n6
const n7 = t([[0, 92],[1, 103],[2, 163],[3, 164],[4, 165],[5, 166],[6, 80],[7, 81],[8, 82],[9, 83],[10, 84],[11, 85],[12, 86],[13, 87],[14, 88],[15, 89],[16, 90],[17, 91],[18, 167],[19, 168],[20, 169],[21, 170],[22, 80],[23, 166],[24, 81],[25, 81],[26, 83],[27, 82],[28, 84],[29, 83],[30, 91],[31, 90],[32, 91],[33, 90],[34, 167],[35, 88],[36, 168]])

export const light_purple = n7
const n8 = t([[0, 80],[1, 91],[2, 171],[3, 172],[4, 173],[5, 174],[6, 68],[7, 69],[8, 70],[9, 71],[10, 72],[11, 73],[12, 74],[13, 75],[14, 76],[15, 77],[16, 78],[17, 79],[18, 175],[19, 176],[20, 177],[21, 178],[22, 68],[23, 174],[24, 69],[25, 69],[26, 71],[27, 70],[28, 72],[29, 71],[30, 79],[31, 78],[32, 79],[33, 78],[34, 175],[35, 76],[36, 176]])

export const light_pink = n8
const n9 = t([[0, 104],[1, 115],[2, 179],[3, 180],[4, 181],[5, 182],[6, 92],[7, 93],[8, 94],[9, 95],[10, 96],[11, 97],[12, 98],[13, 99],[14, 100],[15, 101],[16, 102],[17, 103],[18, 183],[19, 184],[20, 185],[21, 186],[22, 92],[23, 182],[24, 93],[25, 93],[26, 95],[27, 94],[28, 96],[29, 95],[30, 103],[31, 102],[32, 103],[33, 102],[34, 183],[35, 100],[36, 184]])

export const light_red = n9
const n10 = t([[0, 44],[1, 55],[2, 187],[3, 188],[4, 189],[5, 190],[6, 32],[7, 33],[8, 34],[9, 35],[10, 36],[11, 37],[12, 38],[13, 39],[14, 40],[15, 41],[16, 42],[17, 43],[18, 191],[19, 192],[20, 193],[21, 194],[22, 32],[23, 190],[24, 33],[25, 33],[26, 35],[27, 34],[28, 36],[29, 35],[30, 43],[31, 42],[32, 43],[33, 42],[34, 191],[35, 40],[36, 192]])

export const light_gray = n10
const n11 = t([[0, 68],[1, 79],[2, 195],[3, 196],[4, 197],[5, 198],[6, 67],[7, 66],[8, 65],[9, 64],[10, 63],[11, 62],[12, 61],[13, 60],[14, 59],[15, 58],[16, 57],[17, 56],[18, 199],[19, 200],[20, 201],[21, 202],[22, 67],[23, 66],[24, 198],[25, 198],[26, 64],[27, 63],[28, 65],[29, 64],[30, 56],[31, 57],[32, 56],[33, 57],[34, 199],[35, 59],[36, 200]])

export const dark_orange = n11
const n12 = t([[0, 22],[1, 31],[2, 203],[3, 204],[4, 205],[5, 206],[6, 115],[7, 114],[8, 113],[9, 112],[10, 111],[11, 110],[12, 109],[13, 108],[14, 107],[15, 106],[16, 105],[17, 104],[18, 207],[19, 208],[20, 209],[21, 210],[22, 115],[23, 114],[24, 206],[25, 206],[26, 112],[27, 111],[28, 113],[29, 112],[30, 104],[31, 105],[32, 104],[33, 105],[34, 207],[35, 107],[36, 208]])

export const dark_yellow = n12
const n13 = t([[0, 56],[1, 67],[2, 211],[3, 212],[4, 213],[5, 214],[6, 55],[7, 54],[8, 53],[9, 52],[10, 51],[11, 50],[12, 49],[13, 48],[14, 47],[15, 46],[16, 45],[17, 44],[18, 215],[19, 216],[20, 217],[21, 218],[22, 55],[23, 54],[24, 214],[25, 214],[26, 52],[27, 51],[28, 53],[29, 52],[30, 44],[31, 45],[32, 44],[33, 45],[34, 215],[35, 47],[36, 216]])

export const dark_green = n13
const n14 = t([[0, 32],[1, 43],[2, 219],[3, 220],[4, 221],[5, 222],[6, 31],[7, 30],[8, 29],[9, 1],[10, 28],[11, 27],[12, 26],[13, 25],[14, 0],[15, 24],[16, 23],[17, 22],[18, 223],[19, 224],[20, 225],[21, 226],[22, 31],[23, 30],[24, 222],[25, 222],[26, 1],[27, 28],[28, 29],[29, 1],[30, 22],[31, 23],[32, 22],[33, 23],[34, 223],[35, 0],[36, 224]])

export const dark_blue = n14
const n15 = t([[0, 92],[1, 103],[2, 227],[3, 228],[4, 229],[5, 230],[6, 91],[7, 90],[8, 89],[9, 88],[10, 87],[11, 86],[12, 85],[13, 84],[14, 83],[15, 82],[16, 81],[17, 80],[18, 231],[19, 232],[20, 233],[21, 234],[22, 91],[23, 90],[24, 230],[25, 230],[26, 88],[27, 87],[28, 89],[29, 88],[30, 80],[31, 81],[32, 80],[33, 81],[34, 231],[35, 83],[36, 232]])

export const dark_purple = n15
const n16 = t([[0, 80],[1, 91],[2, 235],[3, 236],[4, 237],[5, 238],[6, 79],[7, 78],[8, 77],[9, 76],[10, 75],[11, 74],[12, 73],[13, 72],[14, 71],[15, 70],[16, 69],[17, 68],[18, 239],[19, 240],[20, 241],[21, 242],[22, 79],[23, 78],[24, 238],[25, 238],[26, 76],[27, 75],[28, 77],[29, 76],[30, 68],[31, 69],[32, 68],[33, 69],[34, 239],[35, 71],[36, 240]])

export const dark_pink = n16
const n17 = t([[0, 104],[1, 115],[2, 243],[3, 244],[4, 245],[5, 246],[6, 103],[7, 102],[8, 101],[9, 100],[10, 99],[11, 98],[12, 97],[13, 96],[14, 95],[15, 94],[16, 93],[17, 92],[18, 247],[19, 248],[20, 249],[21, 250],[22, 103],[23, 102],[24, 246],[25, 246],[26, 100],[27, 99],[28, 101],[29, 100],[30, 92],[31, 93],[32, 92],[33, 93],[34, 247],[35, 95],[36, 248]])

export const dark_red = n17
const n18 = t([[0, 44],[1, 55],[2, 251],[3, 252],[4, 253],[5, 254],[6, 43],[7, 42],[8, 41],[9, 40],[10, 39],[11, 38],[12, 37],[13, 36],[14, 35],[15, 34],[16, 33],[17, 32],[18, 255],[19, 256],[20, 257],[21, 258],[22, 43],[23, 42],[24, 254],[25, 254],[26, 40],[27, 39],[28, 41],[29, 40],[30, 32],[31, 33],[32, 32],[33, 33],[34, 255],[35, 35],[36, 256]])

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
const n25 = t([[30, 128],[31, 127],[32, 128],[33, 127]])

export const dark_alt1 = n25
const n26 = t([[30, 127],[31, 126],[32, 127],[33, 126]])

export const dark_alt2 = n26
const n27 = t([[22, 121],[23, 122],[24, 120],[25, 120],[26, 124],[27, 125],[29, 124],[28, 123]])

export const dark_active = n27
export const dark_surface3 = n27
export const dark_Button = n27
export const dark_SliderTrackActive = n27
export const dark_active_SliderTrackActive = n27
const n28 = t([[22, 119],[23, 120],[24, 118],[25, 118],[26, 122],[27, 123],[29, 122],[28, 121]])

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
const n29 = t([[22, 120],[23, 121],[24, 119],[25, 119],[26, 123],[27, 124],[29, 123],[28, 122]])

export const dark_surface2 = n29
export const dark_Checkbox = n29
export const dark_Switch = n29
export const dark_TooltipContent = n29
export const dark_RadioGroupItem = n29
const n30 = t([[22, 123],[23, 123],[24, 122],[25, 122],[26, 123],[27, 123],[29, 122],[28, 122]])

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
const n31 = t([[30, 66],[31, 65],[32, 66],[33, 65]])

export const light_orange_alt1 = n31
const n32 = t([[30, 65],[31, 64],[32, 65],[33, 64]])

export const light_orange_alt2 = n32
const n33 = t([[22, 59],[23, 58],[24, 60],[25, 60],[26, 62],[27, 61],[29, 62],[28, 63]])

export const light_orange_active = n33
export const light_orange_surface3 = n33
export const light_orange_Button = n33
export const light_orange_SliderTrackActive = n33
export const light_orange_active_SliderTrackActive = n33
const n34 = t([[22, 57],[23, 56],[24, 58],[25, 58],[26, 60],[27, 59],[29, 60],[28, 61]])

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
const n35 = t([[22, 58],[23, 57],[24, 59],[25, 59],[26, 61],[27, 60],[29, 61],[28, 62]])

export const light_orange_surface2 = n35
export const light_orange_Checkbox = n35
export const light_orange_Switch = n35
export const light_orange_TooltipContent = n35
export const light_orange_RadioGroupItem = n35
const n36 = t([[22, 61],[23, 61],[24, 62],[25, 62],[26, 61],[27, 61],[29, 62],[28, 62]])

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
const n37 = t([[30, 114],[31, 113],[32, 114],[33, 113]])

export const light_yellow_alt1 = n37
const n38 = t([[30, 113],[31, 112],[32, 113],[33, 112]])

export const light_yellow_alt2 = n38
const n39 = t([[22, 107],[23, 106],[24, 108],[25, 108],[26, 110],[27, 109],[29, 110],[28, 111]])

export const light_yellow_active = n39
export const light_yellow_surface3 = n39
export const light_yellow_Button = n39
export const light_yellow_SliderTrackActive = n39
export const light_yellow_active_SliderTrackActive = n39
const n40 = t([[22, 105],[23, 104],[24, 106],[25, 106],[26, 108],[27, 107],[29, 108],[28, 109]])

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
const n41 = t([[22, 106],[23, 105],[24, 107],[25, 107],[26, 109],[27, 108],[29, 109],[28, 110]])

export const light_yellow_surface2 = n41
export const light_yellow_Checkbox = n41
export const light_yellow_Switch = n41
export const light_yellow_TooltipContent = n41
export const light_yellow_RadioGroupItem = n41
const n42 = t([[22, 109],[23, 109],[24, 110],[25, 110],[26, 109],[27, 109],[29, 110],[28, 110]])

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
const n43 = t([[30, 54],[31, 53],[32, 54],[33, 53]])

export const light_green_alt1 = n43
const n44 = t([[30, 53],[31, 52],[32, 53],[33, 52]])

export const light_green_alt2 = n44
const n45 = t([[22, 47],[23, 46],[24, 48],[25, 48],[26, 50],[27, 49],[29, 50],[28, 51]])

export const light_green_active = n45
export const light_green_surface3 = n45
export const light_green_Button = n45
export const light_green_SliderTrackActive = n45
export const light_green_active_SliderTrackActive = n45
const n46 = t([[22, 45],[23, 44],[24, 46],[25, 46],[26, 48],[27, 47],[29, 48],[28, 49]])

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
const n47 = t([[22, 46],[23, 45],[24, 47],[25, 47],[26, 49],[27, 48],[29, 49],[28, 50]])

export const light_green_surface2 = n47
export const light_green_Checkbox = n47
export const light_green_Switch = n47
export const light_green_TooltipContent = n47
export const light_green_RadioGroupItem = n47
const n48 = t([[22, 49],[23, 49],[24, 50],[25, 50],[26, 49],[27, 49],[29, 50],[28, 50]])

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
const n49 = t([[30, 30],[31, 29],[32, 30],[33, 29]])

export const light_blue_alt1 = n49
const n50 = t([[30, 29],[31, 1],[32, 29],[33, 1]])

export const light_blue_alt2 = n50
const n51 = t([[22, 0],[23, 24],[24, 25],[25, 25],[26, 27],[27, 26],[29, 27],[28, 28]])

export const light_blue_active = n51
export const light_blue_surface3 = n51
export const light_blue_Button = n51
export const light_blue_SliderTrackActive = n51
export const light_blue_active_SliderTrackActive = n51
const n52 = t([[22, 23],[23, 22],[24, 24],[25, 24],[26, 25],[27, 0],[29, 25],[28, 26]])

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
const n53 = t([[22, 24],[23, 23],[24, 0],[25, 0],[26, 26],[27, 25],[29, 26],[28, 27]])

export const light_blue_surface2 = n53
export const light_blue_Checkbox = n53
export const light_blue_Switch = n53
export const light_blue_TooltipContent = n53
export const light_blue_RadioGroupItem = n53
const n54 = t([[22, 26],[23, 26],[24, 27],[25, 27],[26, 26],[27, 26],[29, 27],[28, 27]])

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
const n55 = t([[30, 90],[31, 89],[32, 90],[33, 89]])

export const light_purple_alt1 = n55
const n56 = t([[30, 89],[31, 88],[32, 89],[33, 88]])

export const light_purple_alt2 = n56
const n57 = t([[22, 83],[23, 82],[24, 84],[25, 84],[26, 86],[27, 85],[29, 86],[28, 87]])

export const light_purple_active = n57
export const light_purple_surface3 = n57
export const light_purple_Button = n57
export const light_purple_SliderTrackActive = n57
export const light_purple_active_SliderTrackActive = n57
const n58 = t([[22, 81],[23, 80],[24, 82],[25, 82],[26, 84],[27, 83],[29, 84],[28, 85]])

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
const n59 = t([[22, 82],[23, 81],[24, 83],[25, 83],[26, 85],[27, 84],[29, 85],[28, 86]])

export const light_purple_surface2 = n59
export const light_purple_Checkbox = n59
export const light_purple_Switch = n59
export const light_purple_TooltipContent = n59
export const light_purple_RadioGroupItem = n59
const n60 = t([[22, 85],[23, 85],[24, 86],[25, 86],[26, 85],[27, 85],[29, 86],[28, 86]])

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
const n61 = t([[30, 78],[31, 77],[32, 78],[33, 77]])

export const light_pink_alt1 = n61
const n62 = t([[30, 77],[31, 76],[32, 77],[33, 76]])

export const light_pink_alt2 = n62
const n63 = t([[22, 71],[23, 70],[24, 72],[25, 72],[26, 74],[27, 73],[29, 74],[28, 75]])

export const light_pink_active = n63
export const light_pink_surface3 = n63
export const light_pink_Button = n63
export const light_pink_SliderTrackActive = n63
export const light_pink_active_SliderTrackActive = n63
const n64 = t([[22, 69],[23, 68],[24, 70],[25, 70],[26, 72],[27, 71],[29, 72],[28, 73]])

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
const n65 = t([[22, 70],[23, 69],[24, 71],[25, 71],[26, 73],[27, 72],[29, 73],[28, 74]])

export const light_pink_surface2 = n65
export const light_pink_Checkbox = n65
export const light_pink_Switch = n65
export const light_pink_TooltipContent = n65
export const light_pink_RadioGroupItem = n65
const n66 = t([[22, 73],[23, 73],[24, 74],[25, 74],[26, 73],[27, 73],[29, 74],[28, 74]])

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
const n67 = t([[30, 102],[31, 101],[32, 102],[33, 101]])

export const light_red_alt1 = n67
const n68 = t([[30, 101],[31, 100],[32, 101],[33, 100]])

export const light_red_alt2 = n68
const n69 = t([[22, 95],[23, 94],[24, 96],[25, 96],[26, 98],[27, 97],[29, 98],[28, 99]])

export const light_red_active = n69
export const light_red_surface3 = n69
export const light_red_Button = n69
export const light_red_SliderTrackActive = n69
export const light_red_active_SliderTrackActive = n69
const n70 = t([[22, 93],[23, 92],[24, 94],[25, 94],[26, 96],[27, 95],[29, 96],[28, 97]])

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
const n71 = t([[22, 94],[23, 93],[24, 95],[25, 95],[26, 97],[27, 96],[29, 97],[28, 98]])

export const light_red_surface2 = n71
export const light_red_Checkbox = n71
export const light_red_Switch = n71
export const light_red_TooltipContent = n71
export const light_red_RadioGroupItem = n71
const n72 = t([[22, 97],[23, 97],[24, 98],[25, 98],[26, 97],[27, 97],[29, 98],[28, 98]])

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
const n73 = t([[30, 42],[31, 41],[32, 42],[33, 41]])

export const light_gray_alt1 = n73
const n74 = t([[30, 41],[31, 40],[32, 41],[33, 40]])

export const light_gray_alt2 = n74
const n75 = t([[22, 35],[23, 34],[24, 36],[25, 36],[26, 38],[27, 37],[29, 38],[28, 39]])

export const light_gray_active = n75
export const light_gray_surface3 = n75
export const light_gray_Button = n75
export const light_gray_SliderTrackActive = n75
export const light_gray_active_SliderTrackActive = n75
const n76 = t([[22, 33],[23, 32],[24, 34],[25, 34],[26, 36],[27, 35],[29, 36],[28, 37]])

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
const n77 = t([[22, 34],[23, 33],[24, 35],[25, 35],[26, 37],[27, 36],[29, 37],[28, 38]])

export const light_gray_surface2 = n77
export const light_gray_Checkbox = n77
export const light_gray_Switch = n77
export const light_gray_TooltipContent = n77
export const light_gray_RadioGroupItem = n77
const n78 = t([[22, 37],[23, 37],[24, 38],[25, 38],[26, 37],[27, 37],[29, 38],[28, 38]])

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
const n79 = t([[30, 57],[31, 58],[32, 57],[33, 58]])

export const dark_orange_alt1 = n79
const n80 = t([[30, 58],[31, 59],[32, 58],[33, 59]])

export const dark_orange_alt2 = n80
const n81 = t([[22, 64],[23, 63],[24, 65],[25, 65],[26, 61],[27, 60],[29, 61],[28, 62]])

export const dark_orange_active = n81
export const dark_orange_surface3 = n81
export const dark_orange_Button = n81
export const dark_orange_SliderTrackActive = n81
export const dark_orange_active_SliderTrackActive = n81
const n82 = t([[22, 66],[23, 65],[24, 67],[25, 67],[26, 63],[27, 62],[29, 63],[28, 64]])

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
const n83 = t([[22, 65],[23, 64],[24, 66],[25, 66],[26, 62],[27, 61],[29, 62],[28, 63]])

export const dark_orange_surface2 = n83
export const dark_orange_Checkbox = n83
export const dark_orange_Switch = n83
export const dark_orange_TooltipContent = n83
export const dark_orange_RadioGroupItem = n83
const n84 = t([[22, 62],[23, 62],[24, 63],[25, 63],[26, 62],[27, 62],[29, 63],[28, 63]])

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
const n85 = t([[30, 105],[31, 106],[32, 105],[33, 106]])

export const dark_yellow_alt1 = n85
const n86 = t([[30, 106],[31, 107],[32, 106],[33, 107]])

export const dark_yellow_alt2 = n86
const n87 = t([[22, 112],[23, 111],[24, 113],[25, 113],[26, 109],[27, 108],[29, 109],[28, 110]])

export const dark_yellow_active = n87
export const dark_yellow_surface3 = n87
export const dark_yellow_Button = n87
export const dark_yellow_SliderTrackActive = n87
export const dark_yellow_active_SliderTrackActive = n87
const n88 = t([[22, 114],[23, 113],[24, 115],[25, 115],[26, 111],[27, 110],[29, 111],[28, 112]])

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
const n89 = t([[22, 113],[23, 112],[24, 114],[25, 114],[26, 110],[27, 109],[29, 110],[28, 111]])

export const dark_yellow_surface2 = n89
export const dark_yellow_Checkbox = n89
export const dark_yellow_Switch = n89
export const dark_yellow_TooltipContent = n89
export const dark_yellow_RadioGroupItem = n89
const n90 = t([[22, 110],[23, 110],[24, 111],[25, 111],[26, 110],[27, 110],[29, 111],[28, 111]])

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
const n91 = t([[30, 45],[31, 46],[32, 45],[33, 46]])

export const dark_green_alt1 = n91
const n92 = t([[30, 46],[31, 47],[32, 46],[33, 47]])

export const dark_green_alt2 = n92
const n93 = t([[22, 52],[23, 51],[24, 53],[25, 53],[26, 49],[27, 48],[29, 49],[28, 50]])

export const dark_green_active = n93
export const dark_green_surface3 = n93
export const dark_green_Button = n93
export const dark_green_SliderTrackActive = n93
export const dark_green_active_SliderTrackActive = n93
const n94 = t([[22, 54],[23, 53],[24, 55],[25, 55],[26, 51],[27, 50],[29, 51],[28, 52]])

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
const n95 = t([[22, 53],[23, 52],[24, 54],[25, 54],[26, 50],[27, 49],[29, 50],[28, 51]])

export const dark_green_surface2 = n95
export const dark_green_Checkbox = n95
export const dark_green_Switch = n95
export const dark_green_TooltipContent = n95
export const dark_green_RadioGroupItem = n95
const n96 = t([[22, 50],[23, 50],[24, 51],[25, 51],[26, 50],[27, 50],[29, 51],[28, 51]])

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
const n97 = t([[30, 23],[31, 24],[32, 23],[33, 24]])

export const dark_blue_alt1 = n97
const n98 = t([[30, 24],[31, 0],[32, 24],[33, 0]])

export const dark_blue_alt2 = n98
const n99 = t([[22, 1],[23, 28],[24, 29],[25, 29],[26, 26],[27, 25],[29, 26],[28, 27]])

export const dark_blue_active = n99
export const dark_blue_surface3 = n99
export const dark_blue_Button = n99
export const dark_blue_SliderTrackActive = n99
export const dark_blue_active_SliderTrackActive = n99
const n100 = t([[22, 30],[23, 29],[24, 31],[25, 31],[26, 28],[27, 27],[29, 28],[28, 1]])

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
const n101 = t([[22, 29],[23, 1],[24, 30],[25, 30],[26, 27],[27, 26],[29, 27],[28, 28]])

export const dark_blue_surface2 = n101
export const dark_blue_Checkbox = n101
export const dark_blue_Switch = n101
export const dark_blue_TooltipContent = n101
export const dark_blue_RadioGroupItem = n101
const n102 = t([[22, 27],[23, 27],[24, 28],[25, 28],[26, 27],[27, 27],[29, 28],[28, 28]])

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
const n103 = t([[30, 81],[31, 82],[32, 81],[33, 82]])

export const dark_purple_alt1 = n103
const n104 = t([[30, 82],[31, 83],[32, 82],[33, 83]])

export const dark_purple_alt2 = n104
const n105 = t([[22, 88],[23, 87],[24, 89],[25, 89],[26, 85],[27, 84],[29, 85],[28, 86]])

export const dark_purple_active = n105
export const dark_purple_surface3 = n105
export const dark_purple_Button = n105
export const dark_purple_SliderTrackActive = n105
export const dark_purple_active_SliderTrackActive = n105
const n106 = t([[22, 90],[23, 89],[24, 91],[25, 91],[26, 87],[27, 86],[29, 87],[28, 88]])

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
const n107 = t([[22, 89],[23, 88],[24, 90],[25, 90],[26, 86],[27, 85],[29, 86],[28, 87]])

export const dark_purple_surface2 = n107
export const dark_purple_Checkbox = n107
export const dark_purple_Switch = n107
export const dark_purple_TooltipContent = n107
export const dark_purple_RadioGroupItem = n107
const n108 = t([[22, 86],[23, 86],[24, 87],[25, 87],[26, 86],[27, 86],[29, 87],[28, 87]])

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
const n109 = t([[30, 69],[31, 70],[32, 69],[33, 70]])

export const dark_pink_alt1 = n109
const n110 = t([[30, 70],[31, 71],[32, 70],[33, 71]])

export const dark_pink_alt2 = n110
const n111 = t([[22, 76],[23, 75],[24, 77],[25, 77],[26, 73],[27, 72],[29, 73],[28, 74]])

export const dark_pink_active = n111
export const dark_pink_surface3 = n111
export const dark_pink_Button = n111
export const dark_pink_SliderTrackActive = n111
export const dark_pink_active_SliderTrackActive = n111
const n112 = t([[22, 78],[23, 77],[24, 79],[25, 79],[26, 75],[27, 74],[29, 75],[28, 76]])

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
const n113 = t([[22, 77],[23, 76],[24, 78],[25, 78],[26, 74],[27, 73],[29, 74],[28, 75]])

export const dark_pink_surface2 = n113
export const dark_pink_Checkbox = n113
export const dark_pink_Switch = n113
export const dark_pink_TooltipContent = n113
export const dark_pink_RadioGroupItem = n113
const n114 = t([[22, 74],[23, 74],[24, 75],[25, 75],[26, 74],[27, 74],[29, 75],[28, 75]])

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
const n115 = t([[30, 93],[31, 94],[32, 93],[33, 94]])

export const dark_red_alt1 = n115
const n116 = t([[30, 94],[31, 95],[32, 94],[33, 95]])

export const dark_red_alt2 = n116
const n117 = t([[22, 100],[23, 99],[24, 101],[25, 101],[26, 97],[27, 96],[29, 97],[28, 98]])

export const dark_red_active = n117
export const dark_red_surface3 = n117
export const dark_red_Button = n117
export const dark_red_SliderTrackActive = n117
export const dark_red_active_SliderTrackActive = n117
const n118 = t([[22, 102],[23, 101],[24, 103],[25, 103],[26, 99],[27, 98],[29, 99],[28, 100]])

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
const n119 = t([[22, 101],[23, 100],[24, 102],[25, 102],[26, 98],[27, 97],[29, 98],[28, 99]])

export const dark_red_surface2 = n119
export const dark_red_Checkbox = n119
export const dark_red_Switch = n119
export const dark_red_TooltipContent = n119
export const dark_red_RadioGroupItem = n119
const n120 = t([[22, 98],[23, 98],[24, 99],[25, 99],[26, 98],[27, 98],[29, 99],[28, 99]])

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
const n121 = t([[30, 33],[31, 34],[32, 33],[33, 34]])

export const dark_gray_alt1 = n121
const n122 = t([[30, 34],[31, 35],[32, 34],[33, 35]])

export const dark_gray_alt2 = n122
const n123 = t([[22, 40],[23, 39],[24, 41],[25, 41],[26, 37],[27, 36],[29, 37],[28, 38]])

export const dark_gray_active = n123
export const dark_gray_surface3 = n123
export const dark_gray_Button = n123
export const dark_gray_SliderTrackActive = n123
export const dark_gray_active_SliderTrackActive = n123
const n124 = t([[22, 42],[23, 41],[24, 43],[25, 43],[26, 39],[27, 38],[29, 39],[28, 40]])

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
const n125 = t([[22, 41],[23, 40],[24, 42],[25, 42],[26, 38],[27, 37],[29, 38],[28, 39]])

export const dark_gray_surface2 = n125
export const dark_gray_Checkbox = n125
export const dark_gray_Switch = n125
export const dark_gray_TooltipContent = n125
export const dark_gray_RadioGroupItem = n125
const n126 = t([[22, 38],[23, 38],[24, 39],[25, 39],[26, 38],[27, 38],[29, 39],[28, 39]])

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
const n128 = t([[22, 259]])

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
const n129 = t([[30, 119],[31, 120],[32, 118],[33, 118],[22, 6],[23, 128],[24, 6],[25, 128],[26, 127],[27, 126],[29, 125],[28, 124]])

export const dark_SwitchThumb = n129
export const dark_SliderThumb = n129
export const dark_Tooltip = n129
export const dark_ProgressIndicator = n129
const n130 = t([[22, 260]])

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
const n131 = t([[30, 57],[31, 56],[32, 58],[33, 58],[22, 67],[23, 66],[24, 67],[25, 66],[26, 65],[27, 64],[29, 63],[28, 62]])

export const light_orange_SwitchThumb = n131
export const light_orange_SliderThumb = n131
export const light_orange_Tooltip = n131
export const light_orange_ProgressIndicator = n131
const n132 = t([[30, 105],[31, 104],[32, 106],[33, 106],[22, 115],[23, 114],[24, 115],[25, 114],[26, 113],[27, 112],[29, 111],[28, 110]])

export const light_yellow_SwitchThumb = n132
export const light_yellow_SliderThumb = n132
export const light_yellow_Tooltip = n132
export const light_yellow_ProgressIndicator = n132
const n133 = t([[30, 45],[31, 44],[32, 46],[33, 46],[22, 55],[23, 54],[24, 55],[25, 54],[26, 53],[27, 52],[29, 51],[28, 50]])

export const light_green_SwitchThumb = n133
export const light_green_SliderThumb = n133
export const light_green_Tooltip = n133
export const light_green_ProgressIndicator = n133
const n134 = t([[30, 23],[31, 22],[32, 24],[33, 24],[22, 31],[23, 30],[24, 31],[25, 30],[26, 29],[27, 1],[29, 28],[28, 27]])

export const light_blue_SwitchThumb = n134
export const light_blue_SliderThumb = n134
export const light_blue_Tooltip = n134
export const light_blue_ProgressIndicator = n134
const n135 = t([[30, 81],[31, 80],[32, 82],[33, 82],[22, 91],[23, 90],[24, 91],[25, 90],[26, 89],[27, 88],[29, 87],[28, 86]])

export const light_purple_SwitchThumb = n135
export const light_purple_SliderThumb = n135
export const light_purple_Tooltip = n135
export const light_purple_ProgressIndicator = n135
const n136 = t([[30, 69],[31, 68],[32, 70],[33, 70],[22, 79],[23, 78],[24, 79],[25, 78],[26, 77],[27, 76],[29, 75],[28, 74]])

export const light_pink_SwitchThumb = n136
export const light_pink_SliderThumb = n136
export const light_pink_Tooltip = n136
export const light_pink_ProgressIndicator = n136
const n137 = t([[30, 93],[31, 92],[32, 94],[33, 94],[22, 103],[23, 102],[24, 103],[25, 102],[26, 101],[27, 100],[29, 99],[28, 98]])

export const light_red_SwitchThumb = n137
export const light_red_SliderThumb = n137
export const light_red_Tooltip = n137
export const light_red_ProgressIndicator = n137
const n138 = t([[30, 33],[31, 32],[32, 34],[33, 34],[22, 43],[23, 42],[24, 43],[25, 42],[26, 41],[27, 40],[29, 39],[28, 38]])

export const light_gray_SwitchThumb = n138
export const light_gray_SliderThumb = n138
export const light_gray_Tooltip = n138
export const light_gray_ProgressIndicator = n138
const n139 = t([[30, 66],[31, 65],[32, 67],[33, 67],[22, 56],[23, 57],[24, 56],[25, 57],[26, 58],[27, 59],[29, 60],[28, 61]])

export const dark_orange_SwitchThumb = n139
export const dark_orange_SliderThumb = n139
export const dark_orange_Tooltip = n139
export const dark_orange_ProgressIndicator = n139
const n140 = t([[30, 114],[31, 113],[32, 115],[33, 115],[22, 104],[23, 105],[24, 104],[25, 105],[26, 106],[27, 107],[29, 108],[28, 109]])

export const dark_yellow_SwitchThumb = n140
export const dark_yellow_SliderThumb = n140
export const dark_yellow_Tooltip = n140
export const dark_yellow_ProgressIndicator = n140
const n141 = t([[30, 54],[31, 53],[32, 55],[33, 55],[22, 44],[23, 45],[24, 44],[25, 45],[26, 46],[27, 47],[29, 48],[28, 49]])

export const dark_green_SwitchThumb = n141
export const dark_green_SliderThumb = n141
export const dark_green_Tooltip = n141
export const dark_green_ProgressIndicator = n141
const n142 = t([[30, 30],[31, 29],[32, 31],[33, 31],[22, 22],[23, 23],[24, 22],[25, 23],[26, 24],[27, 0],[29, 25],[28, 26]])

export const dark_blue_SwitchThumb = n142
export const dark_blue_SliderThumb = n142
export const dark_blue_Tooltip = n142
export const dark_blue_ProgressIndicator = n142
const n143 = t([[30, 90],[31, 89],[32, 91],[33, 91],[22, 80],[23, 81],[24, 80],[25, 81],[26, 82],[27, 83],[29, 84],[28, 85]])

export const dark_purple_SwitchThumb = n143
export const dark_purple_SliderThumb = n143
export const dark_purple_Tooltip = n143
export const dark_purple_ProgressIndicator = n143
const n144 = t([[30, 78],[31, 77],[32, 79],[33, 79],[22, 68],[23, 69],[24, 68],[25, 69],[26, 70],[27, 71],[29, 72],[28, 73]])

export const dark_pink_SwitchThumb = n144
export const dark_pink_SliderThumb = n144
export const dark_pink_Tooltip = n144
export const dark_pink_ProgressIndicator = n144
const n145 = t([[30, 102],[31, 101],[32, 103],[33, 103],[22, 92],[23, 93],[24, 92],[25, 93],[26, 94],[27, 95],[29, 96],[28, 97]])

export const dark_red_SwitchThumb = n145
export const dark_red_SliderThumb = n145
export const dark_red_Tooltip = n145
export const dark_red_ProgressIndicator = n145
const n146 = t([[30, 42],[31, 41],[32, 43],[33, 43],[22, 32],[23, 33],[24, 32],[25, 33],[26, 34],[27, 35],[29, 36],[28, 37]])

export const dark_gray_SwitchThumb = n146
export const dark_gray_SliderThumb = n146
export const dark_gray_Tooltip = n146
export const dark_gray_ProgressIndicator = n146
const n147 = t([[30, 7],[31, 6],[32, 8],[33, 8],[22, 15],[23, 14],[24, 15],[25, 14],[26, 13],[27, 12],[29, 11],[28, 10]])

export const light_active_SwitchThumb = n147
export const light_active_SliderThumb = n147
export const light_active_Tooltip = n147
export const light_active_ProgressIndicator = n147
const n148 = t([[30, 119],[31, 120],[32, 118],[33, 118],[22, 127],[23, 126],[24, 127],[25, 126],[26, 125],[27, 124],[29, 123],[28, 122]])

export const dark_active_SwitchThumb = n148
export const dark_active_SliderThumb = n148
export const dark_active_Tooltip = n148
export const dark_active_ProgressIndicator = n148
const n149 = t([[30, 57],[31, 56],[32, 58],[33, 58],[22, 65],[23, 64],[24, 65],[25, 64],[26, 63],[27, 62],[29, 61],[28, 60]])

export const light_orange_active_SwitchThumb = n149
export const light_orange_active_SliderThumb = n149
export const light_orange_active_Tooltip = n149
export const light_orange_active_ProgressIndicator = n149
const n150 = t([[30, 105],[31, 104],[32, 106],[33, 106],[22, 113],[23, 112],[24, 113],[25, 112],[26, 111],[27, 110],[29, 109],[28, 108]])

export const light_yellow_active_SwitchThumb = n150
export const light_yellow_active_SliderThumb = n150
export const light_yellow_active_Tooltip = n150
export const light_yellow_active_ProgressIndicator = n150
const n151 = t([[30, 45],[31, 44],[32, 46],[33, 46],[22, 53],[23, 52],[24, 53],[25, 52],[26, 51],[27, 50],[29, 49],[28, 48]])

export const light_green_active_SwitchThumb = n151
export const light_green_active_SliderThumb = n151
export const light_green_active_Tooltip = n151
export const light_green_active_ProgressIndicator = n151
const n152 = t([[30, 23],[31, 22],[32, 24],[33, 24],[22, 29],[23, 1],[24, 29],[25, 1],[26, 28],[27, 27],[29, 26],[28, 25]])

export const light_blue_active_SwitchThumb = n152
export const light_blue_active_SliderThumb = n152
export const light_blue_active_Tooltip = n152
export const light_blue_active_ProgressIndicator = n152
const n153 = t([[30, 81],[31, 80],[32, 82],[33, 82],[22, 89],[23, 88],[24, 89],[25, 88],[26, 87],[27, 86],[29, 85],[28, 84]])

export const light_purple_active_SwitchThumb = n153
export const light_purple_active_SliderThumb = n153
export const light_purple_active_Tooltip = n153
export const light_purple_active_ProgressIndicator = n153
const n154 = t([[30, 69],[31, 68],[32, 70],[33, 70],[22, 77],[23, 76],[24, 77],[25, 76],[26, 75],[27, 74],[29, 73],[28, 72]])

export const light_pink_active_SwitchThumb = n154
export const light_pink_active_SliderThumb = n154
export const light_pink_active_Tooltip = n154
export const light_pink_active_ProgressIndicator = n154
const n155 = t([[30, 93],[31, 92],[32, 94],[33, 94],[22, 101],[23, 100],[24, 101],[25, 100],[26, 99],[27, 98],[29, 97],[28, 96]])

export const light_red_active_SwitchThumb = n155
export const light_red_active_SliderThumb = n155
export const light_red_active_Tooltip = n155
export const light_red_active_ProgressIndicator = n155
const n156 = t([[30, 33],[31, 32],[32, 34],[33, 34],[22, 41],[23, 40],[24, 41],[25, 40],[26, 39],[27, 38],[29, 37],[28, 36]])

export const light_gray_active_SwitchThumb = n156
export const light_gray_active_SliderThumb = n156
export const light_gray_active_Tooltip = n156
export const light_gray_active_ProgressIndicator = n156
const n157 = t([[30, 66],[31, 65],[32, 67],[33, 67],[22, 58],[23, 59],[24, 58],[25, 59],[26, 60],[27, 61],[29, 62],[28, 63]])

export const dark_orange_active_SwitchThumb = n157
export const dark_orange_active_SliderThumb = n157
export const dark_orange_active_Tooltip = n157
export const dark_orange_active_ProgressIndicator = n157
const n158 = t([[30, 114],[31, 113],[32, 115],[33, 115],[22, 106],[23, 107],[24, 106],[25, 107],[26, 108],[27, 109],[29, 110],[28, 111]])

export const dark_yellow_active_SwitchThumb = n158
export const dark_yellow_active_SliderThumb = n158
export const dark_yellow_active_Tooltip = n158
export const dark_yellow_active_ProgressIndicator = n158
const n159 = t([[30, 54],[31, 53],[32, 55],[33, 55],[22, 46],[23, 47],[24, 46],[25, 47],[26, 48],[27, 49],[29, 50],[28, 51]])

export const dark_green_active_SwitchThumb = n159
export const dark_green_active_SliderThumb = n159
export const dark_green_active_Tooltip = n159
export const dark_green_active_ProgressIndicator = n159
const n160 = t([[30, 30],[31, 29],[32, 31],[33, 31],[22, 24],[23, 0],[24, 24],[25, 0],[26, 25],[27, 26],[29, 27],[28, 28]])

export const dark_blue_active_SwitchThumb = n160
export const dark_blue_active_SliderThumb = n160
export const dark_blue_active_Tooltip = n160
export const dark_blue_active_ProgressIndicator = n160
const n161 = t([[30, 90],[31, 89],[32, 91],[33, 91],[22, 82],[23, 83],[24, 82],[25, 83],[26, 84],[27, 85],[29, 86],[28, 87]])

export const dark_purple_active_SwitchThumb = n161
export const dark_purple_active_SliderThumb = n161
export const dark_purple_active_Tooltip = n161
export const dark_purple_active_ProgressIndicator = n161
const n162 = t([[30, 78],[31, 77],[32, 79],[33, 79],[22, 70],[23, 71],[24, 70],[25, 71],[26, 72],[27, 73],[29, 74],[28, 75]])

export const dark_pink_active_SwitchThumb = n162
export const dark_pink_active_SliderThumb = n162
export const dark_pink_active_Tooltip = n162
export const dark_pink_active_ProgressIndicator = n162
const n163 = t([[30, 102],[31, 101],[32, 103],[33, 103],[22, 94],[23, 95],[24, 94],[25, 95],[26, 96],[27, 97],[29, 98],[28, 99]])

export const dark_red_active_SwitchThumb = n163
export const dark_red_active_SliderThumb = n163
export const dark_red_active_Tooltip = n163
export const dark_red_active_ProgressIndicator = n163
const n164 = t([[30, 42],[31, 41],[32, 43],[33, 43],[22, 34],[23, 35],[24, 34],[25, 35],[26, 36],[27, 37],[29, 38],[28, 39]])

export const dark_gray_active_SwitchThumb = n164
export const dark_gray_active_SliderThumb = n164
export const dark_gray_active_Tooltip = n164
export const dark_gray_active_ProgressIndicator = n164