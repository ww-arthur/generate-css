import { generateColorValues, generateColorGradients } from './colors'
import variables from './variables'
import { generateUtilityValues, useUtilities } from './utilities'
import { useDefault } from './default'
import { UtilityValues, UtilityObject, ColorValue } from './types'
export function addProperty(
  property: string,
  value: string | number,
  important = true,
) {
  return `${property}:${value} ${important ? '!important' : ''};`
}
export function addClass(name: string, content: string) {
  return `.${name}{${content}}`
}
export function generateClasses(classes: Array<Array<string>>) {
  let css = ''
  for (var [name, content] of classes) {
    css += addClass(name, content)
  }
  return css
}
export function addPrefix(prefix: string) {
  return prefix.includes('default') ? '' : `${prefix}-`
}
export function prefixClassArray(
  classes: Array<Array<string>>,
  prefix: string,
) {
  return classes.map((value) => [
    `${
      prefix.includes('default') ? '' : `${prefix}\\:`
    }${value[0]}`,
    value[1],
  ])
}
export function suffixClassArray(
  classes: Array<Array<string>>,
  suffix: string,
) {
  return classes.map((value) => [
    `${value[0]}${
      suffix.includes('default') ? '' : `\\:${suffix}`
    }`,
    value[1],
  ])
}
export function calculatePercentage(percentage: number) {
  return `${(percentage * 100).toFixed(6)}%`
}
export function generateGoogleFontsLink(
  name: string,
  fontWeights: Array<any>,
  italic = true,
) {
  let options = ''
  for (var weight of fontWeights) {
    options += `0,${weight};`
  }
  if (italic) {
    for (var weight of fontWeights) {
      options += `1,${weight};`
    }
  }
  options = options.slice(0, -1)
  return `https://fonts.googleapis.com/css2?family=${name.replace(' ', '+')}:${
    italic ? 'ital,' : ''
  }wght@${options}&display=swap`
}
export function getCssFontWeights(css: string) {
  let utilityValues = []
  for (let weight = 1; weight < 9; weight += 1) {
    if (css.includes(`font-weight: ${weight * 100};`)) {
      utilityValues.push([weight, weight * 100])
    }
  }
  return Object.fromEntries(utilityValues) as UtilityValues
}

export function generateUtilityClassArray(utilitiesObject: object) {
  let style = []
  function generate(utilities: UtilityObject, prefix = '') {
    let classes = []
    let content = ''
    if (Array.isArray(utilities)) {
      for (var utility of utilities) {
        classes.push(...generate(utility, `${prefix}`))
      }
      return classes
    } else {
      if (Array.isArray(utilities.properties)) {
        if (Array.isArray(utilities.values)) {
          // Properties: Array
          // Values: Array
          for (var value of utilities.values) {
            content = ''
            for (var property of utilities.properties) {
              content += addProperty(property, value)
            }
            classes.push([`${prefix}${value}`, content])
          }
        } else {
          // Properties: Array
          // Values: Object
          for (var [key, value] of Object.entries(utilities.values)) {
            content = ''
            for (var [i, property] of utilities.properties.entries()) {
              if (Array.isArray(value)) {
                content += addProperty(property, value[i])
              } else {
                content += addProperty(property, value)
              }
            }
            classes.push([`${prefix}${key}`, content])
          }
        }
      } else {
        if (Array.isArray(utilities.values)) {
          // Properties: Object
          // Values: Array
          for (var [propertyPrefix, properties] of Object.entries(
            utilities.properties,
          )) {
            for (value of utilities.values) {
              content = ''
              for (property of properties) {
                content += addProperty(property, value)
              }
              classes.push([
                `${prefix}${addPrefix(propertyPrefix)}${value}`,
                content,
              ])
            }
          }
        } else {
          // Properties: Object
          // Values: Object
          for ([propertyPrefix, properties] of Object.entries(
            utilities.properties,
          )) {
            for ([key, value] of Object.entries(utilities.values)) {
              content = ''
              for (property of properties) {
                content += addProperty(property, value)
              }
              classes.push([
                `${prefix}${addPrefix(propertyPrefix)}${key}`,
                content,
              ])
            }
          }
        }
      }
    }
    return classes
  }
  for (var [prefix, value] of Object.entries(utilitiesObject)) {
    style.push(...generate(value, value.removeDivider ? prefix : `${prefix}-`))
  }
  return style
}
export function generateColorClassArray(
  colorValues: Object,
  options = { background: true, text: true, border: true },
) {
  let classes = []
  for (var [key, value] of Object.entries(colorValues)) {
    if (options.background) {
      classes.push([
        `background-${key}`,
        `background-color: ${value} !important; fill: ${value} !important;`,
      ])
    }
    if (options.text) {
      classes.push([`text-${key}`, `color: ${value} !important;`])
    }
    if (options.border) {
      classes.push([
        `border-${key}`,
        `border-color: ${value} !important; border-style: solid; border-width: 0px;`,
      ])
    }
  }
  return classes
}
export function generateGradientClassArray(colorValues: Object) {
  let classes = []
  for (var [key, value] of Object.entries(colorValues)) {
    classes.push([
      `background-${key}`,
      `background-image: ${value} !important;`,
    ])
  }
  return classes
}
export function generateBloomClassArray(
  colorValues: Object,
  iterations: number,
) {
  let classes = []
  for (let i = 0; i <= iterations; i++) {
    for (var [key, value] of Object.entries(colorValues)) {
      classes.push([
        `bloom-${i}-${key}`,
        `filter: drop-shadow(0px ${Math.round(i)}px ${Math.round(
          i * i * 0.7,
        )}px  ${value})`,
      ])
    }
  }
  return classes
}
export function generateColorScheme(color: ColorValue) {
  let classes = []
  let colorValues = generateColorValues(color)
  classes.push(...generateColorClassArray(colorValues))
  classes.push(
    ...generateGradientClassArray(generateColorGradients(colorValues)),
  )
  classes.push(...generateBloomClassArray(colorValues, 5))
  return classes
}
export function generateColClassArray(iterations: number) {
  let content = addProperty('flex', '1 0 0%')
  let classes = [['col', content]]

  for (let i = 1; i <= iterations; i++) {
    content = ''
    content += addProperty('flex', `0 0 ${calculatePercentage(i / iterations)}`)
    content += addProperty('width', `${calculatePercentage(i / iterations)}`)
    content += addProperty(
      'max-width',
      `${calculatePercentage(i / iterations)}`,
    )
    classes.push([`col-${i}`, content])
  }
  return classes
}

export async function generateStyle(options = variables) {
  let utilities = useUtilities()
  let css = useDefault(options)
  let classes = []
  try {
    let res = await fetch(
      generateGoogleFontsLink(
        options.fontName,
        Object.values(options.fontWeights),
      ),
    )

    const fontFaces = await res.text()
    css += fontFaces
    options.fontWeights = getCssFontWeights(fontFaces)
    //Colors
    for (var theme of options.themes) {
      let colorClasses = []
      let opacityClasses = []
      for (var color of options.colors) {
        colorClasses.push(...generateColorScheme(color))
      }
      let selectorClasses = []
      for (var [sName, sSelector] of Object.entries(options.selectors)) {
        selectorClasses.push(
          ...suffixClassArray(colorClasses, `${sName}${sSelector}`),
        )
        opacityClasses.push(
          ...suffixClassArray(
            generateUtilityClassArray({
              opacity: {
                properties: ['opacity'],
                values: generateUtilityValues(10, '', 0.1),
              },
            }),
            `${sName}${sSelector}`,
          ),
        )
      }
      classes.push(...opacityClasses)
      classes.push(...prefixClassArray(selectorClasses, `${theme} .${theme}`))
    }
    css += generateClasses(classes)

    // Responsive utilities
    for (var [bName, bValue] of Object.entries(options.gridBreakpoints)) {
      css += `@media(min-width: ${bValue}){
    ${generateClasses(
      prefixClassArray(generateUtilityClassArray(utilities), bName),
    )}
    ${generateClasses(
      prefixClassArray(generateColClassArray(options.cols), bName),
    )}
  }`
    }
  } catch (err) {
    console.log(err)
  }
  return css
}
