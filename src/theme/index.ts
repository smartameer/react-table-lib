import { ThemeModel } from '../types'

const DefaultTheme = {
  radius: 16,
  background: {
    default: '#ffffff',
    selected: '#efedfd',
    header: '#ececec',
    shadow: '#f3f3f3',
  },
  color: {
    default: 'black',
    border: '#e1e1e1',
    header: 'black',
    selected: 'black',
  },
} as ThemeModel

export default DefaultTheme
