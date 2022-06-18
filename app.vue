<template>
  <div class="background-primary-shade-9 wi-min-100vw he-min-100vh ai-stretch">
    <div class="col-1 text-light" @click="generateColors()">Teste</div>
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
import { generateStyle } from '@/config/functions'
const { $appendStyle } = useNuxtApp()
generateStyle().then((css) => {
  if (process.browser) {
    $appendStyle(css)
  }
})
function generateColors() {
  generateStyle().then((css) => {
    $appendStyle(css)
  })
}
</script>
