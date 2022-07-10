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
      downloadConfig: (data: string) => {
        let jsonData = JSON.stringify(data)
        const element = document.createElement('a')
        element.setAttribute(
          'href',
          'data:application/download;charset=utf-8,' +
            encodeURIComponent(jsonData),
        )
        element.setAttribute('download', 'config.json')
        element.style.display = 'none'
        document.body.appendChild(element)
        element.click()
        document.body.removeChild(element)
      },
      debounce: (func: Function, timeout = 300) => {
        let timer: NodeJS.Timeout
        return (...args) => {
          clearTimeout(timer)
          timer = setTimeout(() => {
            func.apply(this, args)
          }, timeout)
        }
      },
    },
  }
})
