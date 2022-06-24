export interface ColorObject {
  r: number
  g: number
  b: number
  a: number
}
export interface hslaObject {
  h: number
  s: number
  l: number
  a?: number
}
export interface ColorValueOptions {
  tints?: number
  shades?: number
  alphas?: number
  tones?: number
}
export interface ColorValue {
  name: String
  hash: String
  options?: ColorValueOptions | null
}
export type UtilityObject = {
  [key: string]: { properties: any; values: any } | object
}
