<template>
  <main-layout card-class="prototype-cols">
    <template #card>
      <div class="fs-8 dark:text-primary-tint-9 text-primary-shade-9 mt-5">
        Columns
      </div>
      <div class="fs-4 pb-10 dark:text-primary-tint-8 text-primary-shade-8">
        The generated classes are in the format
        <span class="background-primary-blend-7 ro-2 px-1">
          col-{value}
        </span>
        .
      </div>
      <div class="bw-1 border-primary">
        <div class="row border-primary" v-for="col in config.cols">
          <div
            class="py-10 background-grey-blend-7 bw-1 border-primary fs-1 md:fs-4 di-flex ai-center jc-center"
            v-for="i in Math.floor(config.cols / col)"
            :class="`col-${col}`"
          >
            <span class="te-truncate">col-{{ col }}</span>
          </div>
          <div
            v-if="config.cols % col"
            :class="`col-${config.cols % col}`"
            class="py-10 background-grey-blend-7 bw-1 border-primary fs-1 md:fs-4 di-flex ai-center jc-center"
          >
            col-{{ config.cols % col }}
          </div>
        </div>
      </div>
    </template>
    <template #options>
      <div class="fs-8 pt-5 dark:text-primary-tint-9 text-primary-shade-9">
        Grid
      </div>
      <div class="fs-4 pb-10 dark:text-primary-tint-8 text-primary-shade-8">
        The grid system is based on CSS FlexBox.
        <br />
        Select how many columns each row will have.
      </div>
      <main-number-input
        label="Number of columns"
        v-model="config.cols"
      ></main-number-input>
    </template>
  </main-layout>
</template>
<script setup lang="ts">
import { generateColClassArray, generateClasses } from '@/config/functions'
const { $appendStyle } = useNuxtApp()

let config = useConfig()

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
  let prefixedClasses = generateColClassArray(config.value.cols).map(
    ([className, content]) => {
      return [`prototype-cols .${className}`, content]
    },
  )
  const css = generateClasses(prefixedClasses)
  $appendStyle(css)
}
</script>
<style scoped></style>
