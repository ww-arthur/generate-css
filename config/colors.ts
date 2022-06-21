import { ColorObject, hslaObject, ColorValue } from './types'

export function lighten(color: String, percentage: number) {
  let hslColor = anyToHsla(color)
  hslColor.l = hslColor.l + (1 - hslColor.l) * percentage
  hslColor.l = hslColor.l > 1 ? 1 : hslColor.l

  return hslaToHex(hslColor)
}
export function darken(color: String, percentage: number) {
  let hslColor = anyToHsla(color)
  hslColor.l = hslColor.l - percentage * hslColor.l

  return hslaToHex(hslColor)
}
export function saturation(color: String, percentage: number) {
  let hslColor = anyToHsla(color)
  hslColor.s = 1 - (percentage > 1 ? 1 : percentage)

  return hslaToHex(hslColor)
}
export function blend(color: String, percentage: number) {
  let hslColor = anyToHsla(color)
  hslColor.a = hslColor.a - percentage * hslColor.a
  hslColor.a = hslColor.a > 1 ? 1 : hslColor.a

  return hslaToHex(hslColor)
}
export function anyToHsla(color: String) {
  let colorObject: ColorObject
  let hslColor: hslaObject
  if (color.includes('#')) {
    if (color.length === 4 || color.length === 5) {
      colorObject = {
        r: parseInt(color.slice(1, 2) + color.slice(1, 2), 16) / 255,
        g: parseInt(color.slice(2, 3) + color.slice(2, 3), 16) / 255,
        b: parseInt(color.slice(3, 4) + color.slice(3, 4), 16) / 255,
        a: color.slice(4, 5)
          ? parseInt(color.slice(4, 5) + color.slice(4, 5), 16) / 255
          : 1,
      }
    } else if (color.length === 7 || color.length === 9) {
      colorObject = {
        r: parseInt(color.slice(1, 3), 16) / 255,
        g: parseInt(color.slice(3, 5), 16) / 255,
        b: parseInt(color.slice(5, 7), 16) / 255,
        a: color.slice(8, 10) ? parseInt(color.slice(7, 9), 16) / 255 : 1,
      }
    } else {
      console.error('Invalid color Hex')
      return hslColor
    }
  } else if (color.includes('rgb')) {
    let colors = color.replace(/\s|rgb\(|rgba\(|\)/g, '').split(',')
    colorObject = {
      r: parseInt(colors[0]) / 255,
      g: parseInt(colors[1]) / 255,
      b: parseInt(colors[2]) / 255,
      a: colors[3] ? parseFloat(colors[3]) : 1,
    }
  }

  let cmin = Math.min(colorObject.r, colorObject.g, colorObject.b)
  let cmax = Math.max(colorObject.r, colorObject.g, colorObject.b)
  let delta = cmax - cmin
  let h = 0
  let s = 0
  let l = 0

  // calculate hue
  // no difference
  if (delta == 0) h = 0
  // red is max
  else if (cmax == colorObject.r)
    h = ((colorObject.g - colorObject.b) / delta) % 6
  // green is max
  else if (cmax == colorObject.g)
    h = (colorObject.b - colorObject.r) / delta + 2
  // blue is max
  else h = (colorObject.r - colorObject.g) / delta + 4

  h = Math.round(h * 60)

  // make negative hues positive behind 360°
  if (h < 0) h += 360

  // calculate lightness
  l = (cmax + cmin) / 2

  // calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))

  // multiply l and s by 100

  hslColor = {
    h,
    s,
    l,
    a: colorObject.a,
  }
  return hslColor
}
export function decimal256ToHex(number: number) {
  return Math.round(number).toString(16).padStart(2, '0')
}
export function hslaToHex(color: hslaObject) {
  let c = (1 - Math.abs(2 * color.l - 1)) * color.s
  let x = c * (1 - Math.abs(((color.h / 60) % 2) - 1))
  let m = color.l - c / 2
  let r = 0
  let g = 0
  let b = 0

  if (0 <= color.h && color.h < 60) {
    r = c
    g = x
    b = 0
  } else if (60 <= color.h && color.h < 120) {
    r = x
    g = c
    b = 0
  } else if (120 <= color.h && color.h < 180) {
    r = 0
    g = c
    b = x
  } else if (180 <= color.h && color.h < 240) {
    r = 0
    g = x
    b = c
  } else if (240 <= color.h && color.h < 300) {
    r = x
    g = 0
    b = c
  } else if (300 <= color.h && color.h < 360) {
    r = c
    g = 0
    b = x
  }
  r = Math.round((r + m) * 255)
  g = Math.round((g + m) * 255)
  b = Math.round((b + m) * 255)
  return `#${decimal256ToHex(r)}${decimal256ToHex(g)}${decimal256ToHex(
    b,
  )}${decimal256ToHex(color.a * 255)}`
}

export function generateColorValues(color: ColorValue) {
  console.log(color)
  let colorValues = [[color.name, color.hash]]
  colorValues.push(
    ...Object.entries(
      generateColorObject(
        color.hash,
        `${color.name}-tint-`,
        color.options?.tints ?? 10,
        lighten,
      ),
    ),
  )
  colorValues.push(
    ...Object.entries(
      generateColorObject(
        color.hash,
        `${color.name}-shade-`,
        color.options?.shades ?? 10,
        darken,
      ),
    ),
  )
  colorValues.push(
    ...Object.entries(
      generateColorObject(
        color.hash,
        `${color.name}-tone-`,
        color.options?.tones ?? 10,
        saturation,
      ),
    ),
  )
  colorValues.push(
    ...Object.entries(
      generateColorObject(
        color.hash,
        `${color.name}-blend-`,
        color.options?.alphas ?? 10,
        blend,
      ),
    ),
  )
  return Object.fromEntries(colorValues)
}
export function generateColorGradients(
  colorValues: object,
  options = {
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
) {
  let gradientValues = []
  for (var [dName, dValue] of Object.entries(options)) {
    for (var [cName, cValue] of Object.entries(colorValues)) {
      if (dValue) {
        gradientValues.push([
          `${cName}-gradient-${dName}`,
          `linear-gradient(${dValue}, ${blend(cValue, 1)}, ${cValue} 130% )`,
        ])
      } else {
        gradientValues.push([
          `${cName}-gradient-${dName}`,
          `radial-gradient(${cValue}, ${blend(cValue, 1)} 130% )`,
        ])
      }
    }
  }

  return Object.fromEntries(gradientValues)
}
export function generateColorObject(
  color: String,
  prefix = '',
  iterations = 1,
  f: Function,
) {
  let arr = []
  for (let i = 1; i <= iterations; i++) {
    arr.push([`${prefix}${i}`, `${f(color, i / iterations)}`])
  }
  return Object.fromEntries(arr)
}
