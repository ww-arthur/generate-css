interface ColorObject {
  r: number
  g: number
  b: number
  a: number
}
interface HsvaObject {
  h: number
  s: number
  v: number
  a: number
}
/* export function generateColorArray(iterations = 0, prefix = '', color:String, f = (color) => color) {
  let arr = []
  for (let i = 0; i < iterations; i++) {
    arr.push([`${prefix}${i}`, `${i * multiplier}${unit}`])
  }
  return Object.fromEntries(arr)
}
 */
export function lighten(color: String, percentage: number) {
  let hsvColor = anyToHsva(color)
  let x = hsvColor.s
  let y = 1 - hsvColor.v
  let r = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
  let teta = Math.atan(x / y)
  teta = isNaN(teta) ? 0 : teta
  r = r * (1 - percentage)
  y = 1 - r * Math.cos(teta)
  x = r * Math.sin(teta)

  hsvColor.s = x
  hsvColor.v = y

  return hsvaToHex(hsvColor)
}

export function darken(color: String, percentage: number) {
  let hsvColor = anyToHsva(color)
  if (hsvColor.s + hsvColor.v > 1) {
    let x = 1 - hsvColor.s
    let y = hsvColor.v
    let r = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
    let teta = Math.atan(x / y)
    console.log(hsvColor)
    console.log({ x, y, r, teta })
    teta = isNaN(teta) ? 0 : teta
    r = r * (1 - percentage)
    y = r * Math.cos(teta)
    x = 1 - r * Math.sin(teta)

    hsvColor.s = x
    hsvColor.v = y
  } else {
    let hsvColor = anyToHsva(color)
    let x = hsvColor.s
    let y = 1 - hsvColor.v
    let r = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
    let teta = Math.atan(x / y)
    teta = isNaN(teta) ? 0 : teta
    let maxR = 1 / Math.cos(teta)
    r = r + (maxR - r) * percentage

    // r = r * (1 - percentage)
    y = 1 - r * Math.cos(teta)
    x = r * Math.sin(teta)

    hsvColor.s = x
    hsvColor.v = y

    return hsvaToHex(hsvColor)
  }
  return hsvaToHex(hsvColor)
}
export function anyToHsva(color: String) {
  let colorObject: ColorObject
  let hsvColor: HsvaObject
  if (color.includes('#')) {
    if (color.length === 4 || color.length === 5) {
      colorObject = {
        r: parseInt(color.slice(1, 2) + color.slice(1, 2), 16),
        g: parseInt(color.slice(2, 3) + color.slice(2, 3), 16),
        b: parseInt(color.slice(3, 4) + color.slice(3, 4), 16),
        a: color.slice(4, 5)
          ? parseInt(color.slice(4, 5) + color.slice(4, 5), 16) / 255
          : 1,
      }
    } else if (color.length === 7 || color.length === 9) {
      colorObject = {
        r: parseInt(color.slice(1, 3), 16),
        g: parseInt(color.slice(3, 5), 16),
        b: parseInt(color.slice(5, 7), 16),
        a: color.slice(8, 10) ? parseInt(color.slice(7, 9), 16) / 255 : 1,
      }
    } else {
      console.error('Invalid color Hex')
      return hsvColor
    }
  } else if (color.includes('rgb')) {
    let colors = color.replace(/\s|rgb\(|rgba\(|\)/g, '').split(',')
    colorObject = {
      r: parseInt(colors[0]),
      g: parseInt(colors[1]),
      b: parseInt(colors[2]),
      a: colors[3] ? parseFloat(colors[3]) : 1,
    }
  }
  let max = Math.max(colorObject.r, colorObject.g, colorObject.b)
  let min = Math.min(colorObject.r, colorObject.g, colorObject.b)
  let v = max / 255
  let s = min === max ? 0 : 1 - min / max

  let h =
    (180 *
      Math.acos(
        (colorObject.r - 0.5 * colorObject.g - 0.5 * colorObject.b) /
          Math.sqrt(
            Math.pow(colorObject.r, 2) +
              Math.pow(colorObject.g, 2) +
              Math.pow(colorObject.b, 2) -
              (colorObject.r * colorObject.g +
                colorObject.r * colorObject.b +
                colorObject.g * colorObject.b),
          ),
      )) /
    Math.PI
  if (colorObject.b > colorObject.g) {
    h = 360 - h
  }
  hsvColor = {
    h: isNaN(h) ? 0 : h,
    s,
    v,
    a: colorObject.a,
  }
  return hsvColor
}
export function decimal256ToHex(number: number) {
  return Math.round(number).toString(16).padStart(2, '0')
}
export function hsvaToHex(color: HsvaObject) {
  let f = (n, k = (n + color.h / 60) % 6) =>
    color.v - color.v * color.s * Math.max(Math.min(k, 4 - k, 1), 0)

  return `#${decimal256ToHex(f(5) * 255)}${decimal256ToHex(
    f(3) * 255,
  )}${decimal256ToHex(f(1) * 255)}${decimal256ToHex(color.a * 255)}`
}
