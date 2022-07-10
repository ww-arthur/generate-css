import { defineNuxtPlugin } from '#app'
type AnimationBinding = {
  value: {
    animation: Function
    options: KeyframeAnimationOptions
  }
}
export default defineNuxtPlugin((nuxtApp) => {
  let animate = {
    mounted(el: HTMLElement, binding: AnimationBinding) {
      el.animate(binding.value.animation(el), binding.value.options)
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
  nuxtApp.vueApp.directive('animate', animate)
})
