export default defineNuxtPlugin(() => {
  return {
    provide: {
      appendStyle: (css: string) => {
        let generatedStyle = document.getElementById('generated')
        if (generatedStyle) {
          generatedStyle.innerText = css
        } else {
          let head = document.head || document.getElementsByTagName('head')[0]
          let style = document.createElement('style')
          style.id = 'generated'
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
    },
  }
})
