<template>
  <main-layout card-class="prototype-spacer">
    <template #card>
      <div class="fs-8 dark:text-primary-tint-9 text-primary-shade-9 mt-5">
        Margins and paddings
      </div>
      <div class="fs-4 pb-10 dark:text-primary-tint-8 text-primary-shade-8">
        The generated classes are in the format
        <span class="background-primary-blend-7 ro-2 px-1">
          m{direction}-{value}
        </span>
        &nbsp;for margin classes, and
        <span class="background-primary-blend-7 ro-2 px-1">
          p{direction}-{value}
        </span>
        &nbsp; for padding classes.
      </div>
      <main-spacers-visualization
        :iterations="config.spacers.iterations"
      ></main-spacers-visualization>
    </template>
    <template #options>
      <div class="fs-8 dark:text-primary-tint-9 text-primary-shade-9">
        Spacers
      </div>
      <div class="fs-4 pb-10 dark:text-primary-tint-8 text-primary-shade-8">
        Spacers adjust sizing and spacing between elements.
        <br />
        They are used to generate margin and padding utilities.
      </div>
      <a-row cols="6 6">
        <template #0>
          <main-number-input
            label="Number of spacers"
            v-model="config.spacers.iterations"
          ></main-number-input>
        </template>
        <template #1>
          <div class="di-flex ai-center">
            <a-input
              class="te-right mr-2"
              label="Multiplier"
              v-model="config.spacers.multiplier"
            ></a-input>
            <a-select-button
              v-model="config.spacers.unit"
              :items="spacersUnits"
              color="primary"
              class="mb-2"
              button-rounded="0 ro-right-4"
              label="Unit"
            ></a-select-button>
          </div>
        </template>
      </a-row>
    </template>
  </main-layout>
</template>
<script setup lang="ts">
import { generateUtilityClassArray, generateClasses } from '@/config/functions'
import { generateUtilityValues } from '@/config/utilities'
const { $appendStyle } = useNuxtApp()

let config = useConfig()
let spacersUnits = ref([
  {
    value: 'px',
  },
  {
    value: 'rem',
  },
  {
    value: 'em',
  },
  {
    value: '%',
  },
])
watch(
  () => config,
  () => {
    if (process.client) {
      generateStyle()
    }
  },
  { deep: true, immediate: true },
)
function generateStyle() {
  const utilities = {
    m: {
      removeDivider: true,
      properties: {
        a: ['margin'],
        x: ['margin-right', 'margin-left'],
        y: ['margin-top', 'margin-bottom'],
        t: ['margin-top'],
        r: ['margin-right'],
        b: ['margin-bottom'],
        l: ['margin-left'],
      },
      values: generateUtilityValues(
        config.value.spacers.iterations + 1,
        config.value.spacers.unit,
        config.value.spacers.multiplier,
      ),
    },
    p: {
      removeDivider: true,
      properties: {
        a: ['padding'],
        x: ['padding-right', 'padding-left'],
        y: ['padding-top', 'padding-bottom'],
        t: ['padding-top'],
        r: ['padding-right'],
        b: ['padding-bottom'],
        l: ['padding-left'],
      },
      values: generateUtilityValues(
        config.value.spacers.iterations + 1,
        config.value.spacers.unit,
        config.value.spacers.multiplier,
      ),
    },
  }
  let prefixedClasses = generateUtilityClassArray(utilities).map(
    ([className, content]) => {
      return [`prototype-spacer .${className}`, content]
    },
  )
  const css = generateClasses(prefixedClasses)
  $appendStyle(css)
}
</script>
<style scoped></style>
