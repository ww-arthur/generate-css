<template>
  <div class="fl-grow-1 ox-hidden oy-auto row jc-center wi-100">
    <a-div
      :colors="{
        default: 'background-grey-shade-1',
        dark: 'background-grey-tint-1',
      }"
      :utils="{ default: 'col-12 pa-10', md: 'col-8 pa-20', lg: 'col-4 pa-5' }"
    ></a-div>
  </div>
</template>
<script setup lang="ts">
import { useUtilities } from '@/config/utilities'

let config = useConfig()
let colorProperties = ref(['background', 'text', 'bloom', 'border'])
let colorModes = ref(['tint', 'shade', 'tone', 'blend'])
let colorGradients = ref([
  'top',
  'left',
  'bottom',
  'right',
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
  'radial',
])
const { $formatUtilities } = useNuxtApp()

let utilities = ref([])
onMounted(() => {
  utilities.value = $formatUtilities(useUtilities())
})
function generateElement() {
  return {
    colors: Object.fromEntries(config.value.themes.map((t) => [t, ''])),
    utils: config.value.gridBreakpoints,
  }
}
let elements = ref([])
</script>
