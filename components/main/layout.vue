<template>
  <div class="di-flex fl-grow-1 ov-hidden fl-row">
    <div
      :class="cardClass"
      class="col-12 md:col-8 di-flex fl-column md:ro-right-5 ov-hidden background-grey-tint-14 dark:background-grey-shade-12 dark:bloom-3-grey-shade-14 bloom-3-grey-blend-8 my-5 elevated"
    >
      <div class="ox-hidden oy-auto fl-grow-1 px-10 di-flex fl-column">
        <slot name="card"></slot>
      </div>
    </div>
    <div
      :class="optionsClass"
      class="col-12 md:col-4 di-flex fl-column ov-hidden"
    >
      <div class="oy-auto ox-hidden fl-grow-1 pt-5 px-5">
        <slot name="options"></slot>
        <div
          class="dark:background-grey-shade-13-gradient-bottom background-grey-tint-12-gradient-bottom pa-5 mx-n5 po-sticky bo-0"
        >
          <slot name="optionsFooter">
            <a-row cols="12 12" md="6 6" gutter="2">
              <template #0>
                <a-button
                  class="wi-100"
                  size="3"
                  template="glassy"
                  @click="downloadConfig"
                >
                  <a-icon icon="download" class="mr-2"></a-icon>
                  Download Config
                </a-button>
              </template>
              <template #1>
                <a-button class="wi-100" size="3" @click="downloadStyle">
                  <a-icon icon="download" class="mr-2"></a-icon>
                  Download CSS
                </a-button>
              </template>
            </a-row>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { generateStyle } from '@/config/functions'
import { generateUtilityValues } from '@/config/utilities'
const { $downloadStyle, $downloadConfig } = useNuxtApp()

let props = defineProps({
  cardClass: {
    type: String,
    default: '',
  },
  optionsClass: {
    type: String,
    default: '',
  },
})
let config = useConfig()
let colors = useColors()
const variables = computed(() => {
  return {
    ...config.value,
    ...{
      colors: colors.value,
      spacers: generateUtilityValues(
        config.value.spacers.iterations + 1,
        config.value.spacers.unit,
        config.value.spacers.multiplier,
      ),
      negativeSpacers: generateUtilityValues(
        config.value.spacers.iterations + 1,
        config.value.spacers.unit,
        -config.value.spacers.multiplier,
        'n',
      ),
      fontWeights: generateUtilityValues(
        config.value.fontWeights.iterations,
        config.value.fontWeights.unit,
        config.value.fontWeights.multiplier,
        '',
        1,
      ),
      borderWidths: generateUtilityValues(
        config.value.borderWidths.iterations,
        config.value.borderWidths.unit,
      ),
    },
  }
})

function downloadConfig() {
  $downloadConfig(config.value)
}
function downloadStyle() {
  generateStyle(variables.value).then((css) => {
    $downloadStyle(css)
  })
}
</script>
<style scoped></style>
