<template>
  <div class="col-12 md:col-8 di-flex ai-center">
    <a-row
      class="ai-center"
      cols="12 12"
      md="6 6"
      col-class="di-flex jc-center ai-center"
    >
      <template #0>
        <div
          class="col-12 pa-10 ma-10 bloom-3-grey-blend-5 background-grey-tint-1 elevated ro-5"
        >
          <main-saturation-lightness-picker
            :color-hue="colorHue"
            v-model="colorSL"
          ></main-saturation-lightness-picker>

          <main-hue-slider
            class="mt-4"
            min="0"
            max="360"
            v-model="colorHue"
          ></main-hue-slider>
        </div>
      </template>
      <template #1>
        <div
          class="wi-100 ma-10 md:wi-75 ar-1 te-uppercase ro-5 di-flex jc-center ai-center fs-7 elevated bloom-3-grey-blend-5"
          :class="
            parseInt(colorHex.slice(1, 7), 16) > 10230527
              ? 'text-grey-shade-15'
              : 'text-grey-tint-15'
          "
          :style="`background-color: ${colorHex};`"
        >
          {{ colorHex }}
        </div>
      </template>
    </a-row>
  </div>
</template>
<script setup lang="ts">
import { hslaToHex } from '@/config/colors'
const canvas = ref(null)
let width = ref('400px')
let height = ref('400px')

let colorHue = ref(50)
let colorSL = ref({ s: 1, l: 0.5 })
let colorHex = computed(() => {
  return hslaToHex({
    h: colorHue.value,
    s: colorSL.value.s,
    l: colorSL.value.l,
  })
})
/* let ticking = false
function draw() {
  if (ticking) return

  window.requestAnimationFrame(() => {
    var ctx = canvas.value.getContext('2d')
      for (var i = 0; i < 360; i++) {
    ctx.fillStyle = `hsl(${i}, 100%, 50%)`
    ctx.fillRect(i, 0, 1, 100)
  }
    for (var s = 0; s < 400; s++) {
      for (var l = 0; l < 400; l++) {
        ctx.fillStyle = `hsl(${colorHue.value}, ${s * 0.25}%, ${l * 0.25}%)`
        ctx.fillRect(s, l, 1, 1)
      }
    }
    ticking = false
  })
  ticking = true
} */
</script>
<style></style>
