import { defineNuxtPlugin } from '#app'
type ScrollOptions = {
  speed: number
}

export default defineNuxtPlugin((nuxtApp) => {
  let rellaxDir = {
    mounted(el: HTMLElement, binding) {
      let ticking = false
      let scrollableElement = el.closest('.scroll-parent') || el.closest('div')

      function scroll(options: ScrollOptions) {
        if (ticking) return
        window.requestAnimationFrame(() => {
          var maxScroll = scrollableElement.getBoundingClientRect().height
          let relativePos = scrollableElement.scrollTop / maxScroll
          el.style.transform = `translate3d(0, ${
            relativePos * options.speed * 100
          }%, 0)`
          ticking = false
        })
        ticking = true
      }
      scrollableElement.addEventListener('scroll', () => {
        scroll(binding.value)
      })

      //binding.value?.created?.(scroll)
    },
    getSSRProps(binding) {
      // server-side implementation:
      // return the props to be rendered.
      // getSSRProps only receives the directive binding.
      return {
        id: binding.value,
      }
    },
  }
  nuxtApp.vueApp.directive('parallax', rellaxDir)
})
