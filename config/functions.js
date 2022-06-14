export function addProperty(property, value) {
  return `${property}: ${value};`
}
export function addClass(name, content) {
  return `.${name} { ${content} }`
}
export function addPrefix(prefix) {
  return prefix === 'default' ? '' : `${prefix}-`
}
export function generateUtilityArray(
  iterations,
  unit = '',
  multiplier = 1,
  prefix = '',
) {
  let arr = []
  for (let i = 0; i < iterations; i++) {
    arr.push([`${prefix}${i}`, `${i * multiplier}${unit}`])
  }
  return Object.fromEntries(arr)
}

export function generateUtilities(utilitiesArray) {
  let style = ''
  function generate(utilities, prefix = '') {
    let classes = ''
    let content = ''
    if (Array.isArray(utilities)) {
      for (utility of utilities) {
        classes += generate(utility, `${prefix}-`)
      }
      return classes
    } else {
      if (Array.isArray(utilities.properties)) {
        if (Array.isArray(utilities.values)) {
          // properties and values are array of strings
          for (value of utilities.values) {
            content = ''
            for (property of utilities.properties) {
              content += this.addProperty(property, value)
            }
            classes += this.addClass(`.${prefix}${value}`, content)
          }
        } else {
          // property is an array of strings, values are object
          for ([key, value] of Object.entries(utilities.values)) {
            content = ''
            for (property of utilities.properties) {
              content += this.addProperty(property, value)
            }
            classes += this.addClass(`.${prefix}${key}`, content)
          }
        }
      } else {
        if (Array.isArray(utilities.values)) {
          // properties is an object values are array of strings
          for ([propertyPrefix, properties] of Object.entries(
            utilities.properties,
          )) {
            for (value of utilities.values) {
              content = ''
              for (property of properties) {
                content += this.addProperty(property, value)
              }
              classes += this.addClass(
                `.${prefix}${this.addPrefix(propertyPrefix)}${value}`,
                content,
              )
            }
          }
        } else {
          // property and values are objects
          for ([propertyPrefix, properties] of Object.entries(
            utilities.properties,
          )) {
            for ([key, value] of Object.entries(utilities.values)) {
              content = ''
              for (property of properties) {
                content += this.addProperty(property, value)
              }
              classes += this.addClass(
                `.${prefix}${this.addPrefix(propertyPrefix)}${key}`,
                content,
              )
            }
          }
        }
      }
    }
    return classes
  }
  for ([prefix, value] of Object.entries(utilitiesArray)) {
    console.log(value, prefix)
    style += generate(value, `${prefix}-`)
  }
  return style
}
export function generateColorScheme(
  name,
  colorHash,
  options = {
    tint: true,
    shade: true,
    alpha: true,
    tone: true,
    /*   background: true,
    text: true,
    border: true,
    bloom: true */
  },
) {
  let colorValues = [['default', colorHash]]

  if (options.tint) {
    colorValues.push(this.generateUtilityArray(10, '', 1, name))
  }
}
