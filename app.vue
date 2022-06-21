<template>
  <div
    class="background-primary-shade-9 wi-min-100vw he-min-100vh di-flex ai-center jc-center"
  >
    <div class="col-4 background-black-tint-1 elevated ro-5">
      <div class="pa-10">
        <div class="fs-8 pb-10 text-primary-tint-9">Pick a color</div>
        <div class="di-flex ai-center">
          <a-input v-model="color" label="Color" class="fl-grow-1"></a-input>
          <a-color-picker
            v-model="color"
            label="Color"
            class="ml-4"
          ></a-color-picker>
        </div>
        <a-row cols="4 4 4" gutter="2">
          <template #0>
            <a-button><a-icon icon="plus"></a-icon></a-button>
            <a-input></a-input>
          </template>
          <template #1><a-input></a-input></template>
          <template #2><a-input></a-input></template>
        </a-row>

        <div class="di-flex jc-end mt-10">
          <a-button size="5" @click="generateColors">Generate</a-button>
        </div>
      </div>
    </div>

    <!--   <div class="di-flex jc-center al-center">
           <div
          class="pa-10 background-primary background-primary-shade-6:hover bloom-1-dark:hover ro-6"
          style="
            box-shadow: inset 0px -1px 1px #0000002f, inset 0px 1px 0px #ffffff0f;
          "
        ></div> 
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
        <div
          :title="key"
          v-for="(color, key) in colorSchemes"
          :style="` background-color:${color}; flex-grow:1 `"
        ></div>
      </div> 
    </div>-->
  </div>
</template>
<script setup lang="ts">
import {
  generateClasses,
  generateColorScheme,
  generateStyle,
  prefixClasses,
} from '@/config/functions'
import { optionalCallExpression } from '@babel/types'
const { $appendStyle } = useNuxtApp()
/* generateStyle().then((css) => {
  if (process.client) {
    $appendStyle(css)
  }
}) */
/* onMounted(() => {
  generateStyle()
}) */
let options = reactive({
  tints: 10,
  shades: 10,
  alphas: 10,
  tones: 10,
})
let color = ref('#8f00ff')
function generateColors() {
  let colors = generateColorScheme({
    name: 'test',
    hash: color.value,
    options: options,
  })
  $appendStyle(generateClasses(prefixClasses(colors, `default .default`)))

  /*   generateStyle().then((css) => {
    $appendStyle(css)
  }) */
}
</script>
