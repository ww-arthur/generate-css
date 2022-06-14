<template>
  <div
    style="
      margin: -8px;
      background: #333333;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    "
  >
    <div
      style="
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
      "
    >
      <input
        type="color"
        v-model="color"
        style="height: 200px; width: 300px;"
      />
      <input
        style="width: 100%;"
        type="range"
        v-model="iterations"
        min="0"
        max="20"
        step="1"
      />
      <div>
        <button style="padding: 12px;" @click="generateColors()">
          Generate
        </button>

        <button style="padding: 12px;" @click="generateColors3()">
          rainbow
        </button>

        <button style="padding: 12px;" @click="colors = []">
          reset
        </button>
      </div>
    </div>
    <div
      style="
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        width: 60%;
        margin: 20px;
        border-radius: 20px;
        overflow: hidden;
      "
    >
      <div
        v-for="(colorSchemes, i) in colors"
        style="
          display: flex;
          flex-wrap: wrap;
          align-items: stretch;
          justify-content: stretch;
          flex-grow: 1;
        "
      >
        <div style="overflow: visible; width: 30px; height: 0px;">
          {{ i % 15 ? '' : i }}
        </div>
        <div
          v-for="color in colorSchemes"
          :style="` background-color:${color}; flex-grow:1 `"
        ></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { darken, lighten, hsvToHex, anyToHsva } from '@/config/colors'

function generateColors() {
  let colorsSchemes = [color.value]
  for (let i = 1; i < iterations.value; i++) {
    colorsSchemes.unshift(darken(color.value, i / iterations.value))
    colorsSchemes.push(lighten(color.value, i / iterations.value))
  }
  colors.value.push(colorsSchemes)
}
function generateColors3() {
  let hsvColor = anyToHsva(color.value)
  for (let i = 0; i <= 360; i++) {
    let colorsSchemes = []
    for (let j = 0; j <= iterations.value; j++) {
      colorsSchemes.unshift(
        darken(hsvToHex({ ...hsvColor, ...{ h: i } }), j / iterations.value),
      )
      colorsSchemes.push(
        lighten(hsvToHex({ ...hsvColor, ...{ h: i } }), j / iterations.value),
      )
    }
    colors.value.push(colorsSchemes)
  }
}

let color = ref('#ff0000ff')
let iterations = ref(12)
let colors = ref([])
/* 
const hsvValue = computed(() => {
  return anyToHsva(color.value)
}) */
</script>
