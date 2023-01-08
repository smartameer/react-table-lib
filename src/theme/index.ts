import { ThemeModel } from '../types'

const DefaultTheme = {
  radius: 16,
  background: {
    default: '#ffffff',
    selected: '#efedfd',
    header: '#f5f5f5',
    shadow: '#f3f3f3',
  },
  color: {
    default: 'black',
    border: '#e1e1e1',
    header: 'black',
    selected: 'black',
    primary: '#4937ad',
  },
} as ThemeModel

export default DefaultTheme
