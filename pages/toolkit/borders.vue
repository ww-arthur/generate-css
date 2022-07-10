<template>
  <main-layout card-class="prototype-borders">
    <template #card>
      <div class="fs-8 dark:text-primary-tint-9 text-primary-shade-9 mt-5">
        Rounded
      </div>
      <div class="fs-4 pb-10 dark:text-primary-tint-8 text-primary-shade-8">
        Border radius is commonly defined as rounded, the generated classes are
        in the format
        <span class="background-primary-blend-7 ro-2 px-1">ro-{value}</span>
        or
        <span class="background-primary-blend-7 ro-2 px-1">
          ro-{position}-{value}
        </span>
        .
      </div>

      <a-row :cols="borderRadiusCols" gutter="4">
        <template #default="{col}">
          <div
            class="background-grey wi-100 ar-1 di-flex ai-center jc-center"
            :class="`ro-${col.name}`"
          >
            <div
              :class="`ro-${col.name}`"
              class="pa-4 background-grey-shade-6 te-nowrap text-grey-tint-13"
            >
              {{ `ro-${col.name}` }}
            </div>
          </div>
        </template>
      </a-row>
      <div class="fs-8 dark:text-primary-tint-9 text-primary-shade-9 mt-10">
        Border width
      </div>
      <div class="fs-4 pb-10 dark:text-primary-tint-8 text-primary-shade-8">
        Border width classes must be combined with border color classes, they
        only define the width of the border. The generated classes are in the
        format
        <span class="background-primary-blend-7 ro-2 px-1">bw-{value}</span>
        or
        <span class="background-primary-blend-7 ro-2 px-1">
          bw-{position}-{value}
        </span>
        .
      </div>
      <div class="row mx-n4">
        <div class="col-6 md:col-4 lg:col-2 pa-4">
          <div
            class="background-grey ro-5 border-primary wi-100 ar-1 di-flex ai-center jc-center"
            :class="`bw-0`"
          >
            bw-0
          </div>
        </div>
        <div
          class="col-6 md:col-4 lg:col-2 pa-4"
          v-for="borderWidth in config.borderWidths.iterations"
        >
          <div
            class="background-grey ro-5 border-primary wi-100 ar-1 di-flex ai-center jc-center"
            :class="`bw-${borderWidth}`"
          >
            bw-{{ borderWidth }}
          </div>
        </div>
      </div>
    </template>

    <template #options>
      <div class="fs-8 dark:text-primary-tint-9 text-primary-shade-9">
        Border radius
      </div>
      <div class="fs-4 pb-5 dark:text-primary-tint-8 text-primary-shade-8">
        Border radius defines the 'roundiness' of an element
      </div>
      <div class="mt-5 lg:wi-25 md:wi-50 wi-50">
        <div
          v-for="key in Object.keys(config.borderRadius).filter(
            (key) => key !== 'pill' && key !== 'circle',
          )"
        >
          <a-input
            @update:model-value="generateStyle"
            v-model="config.borderRadius[key]"
          >
            <template #prepend>
              <span
                style="border-style: solid; border-width: 0px;"
                class="fw-8 mr-3 1 border-primary"
              >
                {{ key }}
              </span>
            </template>
          </a-input>
        </div>
      </div>
      <div class="fs-8 dark:text-primary-tint-9 text-primary-shade-9 mt-5">
        Border widths
      </div>
      <div class="fs-4 pb-5 dark:text-primary-tint-8 text-primary-shade-8">
        Select how many border classes your stylesheet will have.
      </div>
      <a-row cols="6 6">
        <template #0>
          <main-number-input
            label="Number of borders"
            v-model="config.borderWidths.iterations"
          ></main-number-input>
        </template>
        <template #1>
          <div class="di-flex ai-center">
            <a-input
              class="te-right mr-2"
              label="Multiplier"
              v-model="config.borderWidths.multiplier"
            ></a-input>
            <a-select-button
              v-model="config.borderWidths.unit"
              :items="borderWidthUnits"
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
import { generateUtilityClasses, generateClasses } from '@/config/functions'
import { generateUtilityValues } from '@/config/utilities'
const { $appendStyle } = useNuxtApp()
let borderWidthUnits = ref([
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

let config = useConfig()
const borderRadiusCols = computed(() =>
  Object.keys(config.value.borderRadius).map((name) => ({
    name,
    cols: 6,
    md: 4,
    lg: 2,
  })),
)

watch(
  () => config,
  () => {
    generateStyle()
  },
  { deep: true },
)
function generateStyle() {
  const utilities = {
    ro: {
      properties: {
        default: ['border-radius'],
        top: ['border-top-left-radius', 'border-top-right-radius'],
        right: ['border-top-right-radius', 'border-bottom-right-radius'],
        bottom: ['border-bottom-left-radius', 'border-bottom-right-radius'],
        left: ['border-top-left-radius', 'border-bottom-left-radius'],
        'top-left': ['border-top-left-radius'],
        'top-right': ['border-top-right-radius'],
        'bottom-right': ['border-bottom-right-radius'],
        'bottom-left': ['border-bottom-left-radius'],
      },
      values: config.value.borderRadius,
    },
    bw: {
      properties: {
        default: ['border-width'],
        top: ['border-top-width'],
        right: ['border-right-width'],
        bottom: ['border-bottom-width'],
        left: ['border-left-width'],
      },
      values: generateUtilityValues?.(
        config.value.borderWidths.iterations + 1,
        config.value.borderWidths.unit,
        config.value.borderWidths.multiplier,
      ),
    },
  }
  let prefixedClasses = generateUtilityClasses(utilities).map(
    ([className, content]) => {
      return [`prototype-borders .${className}`, content]
    },
  )
  const css = generateClasses(prefixedClasses)
  $appendStyle(css)
}
</script>
<style scoped></style>
