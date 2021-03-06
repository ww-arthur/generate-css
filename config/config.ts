import { ColorValue } from './types'
let colors: Array<ColorValue> = [
  { name: 'orange', hash: '#dc793d ' },
  { name: 'yellow', hash: '#ffeb3b ' },
  { name: 'red', hash: '#dd2c00 ' },
  { name: 'green', hash: '#4caf50 ' },

  {
    name: 'grey',
    hash: '#808080',
    options: { tints: 15, shades: 15, tones: 0 },
  },
]
let config = {
  colors,
  themes: ['default', 'dark'],
  spacers: {
    iterations: 20,
    unit: 'px',
    multiplier: 4,
  },
  cols: 12,
  selectors: {
    default: '',
    hover: ':hover',
    active: ':active',
    focus: ':focus',
  },
  fontName: 'Poppins',
  fontWeights: {
    iterations: 9,
    unit: '',
    multiplier: 100,
  },

  fontSizes: {
    '1': '0.6rem',
    '2': '0.7rem',
    '3': '0.8rem',
    '4': '0.9rem',
    '5': '1rem',
    '6': '1.25rem',
    '7': '1.5rem',
    '8': '2rem',
    '9': '3rem',
  },
  borderRadius: {
    0: 0,
    '1': '2px',
    '2': '5px',
    '3': '7px',
    '4': '12px',
    '5': '19px',
    '6': '31px',
    '7': '50px',
    '8': '81px',
    '9': '131px',
    pill: '9999px',
    circle: '50%',
  },
  borderWidths: {
    iterations: 4,
    unit: 'px',
    multiplier: 1,
  },
  gridBreakpoints: {
    default: '0px',
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px',
  },
  gradientDirections: {
    radial: '',
    bottom: 'to bottom',
    'bottom-left': 'to bottom left',
    left: 'to left',
    'top-left': 'to top left',
    top: ' to top',
    'top-right': 'to top right',
    right: 'to right',
    'bottom-right': 'to bottom right',
  },
}
export default config
