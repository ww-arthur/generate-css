import { UtilityObject } from '@/config/types'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      appendStyle: (css: string, id = 'generated') => {
        let generatedStyle = document.getElementById(id)
        if (generatedStyle) {
          generatedStyle.innerText = css
        } else {
          let head = document.head || document.getElementsByTagName('head')[0]
          let style = document.createElement('style')
          style.id = id
          style.appendChild(document.createTextNode(css))
          head.appendChild(style)
        }
        /* 
        const element = document.createElement('a')
        element.setAttribute(
          'href',
          'data:application/download;charset=utf-8,' + encodeURIComponent(css),
        )
        element.setAttribute('download', 'style.css')
        element.style.display = 'none'
        document.body.appendChild(element)
        element.click()
        document.body.removeChild(element) */
      },
      downloadStyle: (css: string) => {
        const element = document.createElement('a')
        element.setAttribute(
          'href',
          'data:application/download;charset=utf-8,' + encodeURIComponent(css),
        )
        element.setAttribute('download', 'style.css')
        element.style.display = 'none'
        document.body.appendChild(element)
        element.click()
        document.body.removeChild(element)
      },
      downloadConfig: (data: object) => {
        let jsonData = JSON.stringify(data)
        const element = document.createElement('a')
        element.setAttribute(
          'href',
          'data:application/download;charset=utf-8,' +
            encodeURIComponent(jsonData),
        )
        element.setAttribute('download', 'flui.config.json')
        element.style.display = 'none'
        document.body.appendChild(element)
        element.click()
        document.body.removeChild(element)
      },

      formatUtilities: (utilitiesObject: object) => {
        let utilitiesArray = []
        function generate(utilities: UtilityObject, prefix = '') {
          let formattedUtilities = []
          if (Array.isArray(utilities)) {
            for (var utility of utilities) {
              formattedUtilities.push(...generate(utility, `${prefix}`))
            }
            return formattedUtilities
          } else {
            if (Array.isArray(utilities.properties)) {
              if (Array.isArray(utilities.values)) {
                // Properties: Array
                // Values: Array
                formattedUtilities.push({
                  ...utilities,
                  ...{
                    properties: utilities.properties.map((prop) => ({
                      text: prop,
                      value: prop,
                    })),
                    values: utilities.values.map((value) => ({
                      text: value,
                      value,
                    })),
                    prefix,
                  },
                })
              } else {
                // Properties: Array
                // Values: Object
                formattedUtilities.push({
                  ...utilities,
                  ...{
                    properties: utilities.properties.map((prop) => ({
                      text: prop,
                      value: prop,
                    })),

                    values: Object.entries(utilities.values).map(
                      ([key, value]) => ({
                        text: value,
                        value: key,
                      }),
                    ),
                    prefix,
                  },
                })
              }
            } else {
              if (Array.isArray(utilities.values)) {
                // Properties: Object
                // Values: Array
                formattedUtilities.push({
                  ...utilities,
                  ...{
                    properties: Object.entries(
                      utilities.properties,
                    ).map(([key, value]) => ({ text: value[0], value: key })),
                    values: utilities.values.map((value) => ({
                      text: value,
                      value,
                    })),
                    prefix,
                    selectProperties: true,
                  },
                })
              } else {
                // Properties: Object
                // Values: Object
                formattedUtilities.push({
                  ...utilities,
                  ...{
                    properties: Object.entries(
                      utilities.properties,
                    ).map(([key, value]) => ({ text: value[0], value: key })),
                    values: Object.entries(utilities.values).map(
                      ([key, value]) => ({
                        text: value,
                        value: key,
                      }),
                    ),
                    prefix,
                    selectProperties: true,
                  },
                })
              }
            }

            return formattedUtilities
          }
        }
        for (var [prefix, value] of Object.entries(utilitiesObject)) {
          utilitiesArray.push(...generate(value, prefix))
        }
        return utilitiesArray
      },
    },
  }
})
