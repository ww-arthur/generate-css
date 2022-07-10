<template>
  <main-layout card-class="prototype-breakpoint">
    <template #card>
      <div class="fs-8 dark:text-primary-tint-9 text-primary-shade-9 mt-5">
        Viewport
      </div>
      <div class="fs-4 pb-10 dark:text-primary-tint-8 text-primary-shade-8">
        Resize this window to change the viewport.
      </div>
      <div class="fl-grow-1 di-flex ai-center jc-center fs-8">
        <span class="mr-3">Current viewport:</span>

        <div v-for="(breakpoint, i) in sortedBreakpoints">
          <span
            class="fs-8 fw-7 text-primary-shade-5 dark:primary-tint-5"
            :class="
              breakpoint.key !== 'default'
                ? `di-none ${breakpoint.key}:di-block ${
                    sortedBreakpoints[i + 1]
                      ? `${sortedBreakpoints[i + 1].key}:di-none`
                      : ''
                  }`
                : `di-block ${
                    sortedBreakpoints[i + 1]
                      ? `${sortedBreakpoints[i + 1].key}:di-none`
                      : ''
                  }`
            "
          >
            {{ breakpoint.key }}
          </span>
        </div>
      </div>
    </template>
    <template #options>
      <div class="fs-8 dark:text-primary-tint-9 text-primary-shade-9">
        Breakpoints
      </div>
      <div class="fs-4 pb-5 dark:text-primary-tint-8 text-primary-shade-8">
        Configure the sizing of each viewport.
      </div>
      <div v-for="(breakpoint, i) in breakpoints">
        <div class="di-flex ai-center mx-6">
          <a-input
            :disabled="breakpoint.key === 'default'"
            icon="arrow-expand-horizontal"
            class="fl-grow-1"
            v-model="breakpoint.key"
            label="Name"
          ></a-input>
          <a-input
            :disabled="breakpoint.key === 'default'"
            v-model="breakpoint.value"
            class="fl-grow-1"
            label="Min width"
            append="px"
          ></a-input>

          <a-button
            :disabled="breakpoint.key === 'default'"
            @click="deleteBreakpoint(i)"
            size="2"
            color="red"
            class="ar-1 ml-2"
            template="text"
          >
            <a-icon size="3">delete</a-icon>
          </a-button>
        </div>
      </div>
    </template>
  </main-layout>
</template>
<script setup lang="ts">
import {
  generateUtilityClasses,
  generateClasses,
  prefixClasses,
} from '@/config/functions'
import { generateUtilityValues } from '@/config/utilities'
const { $appendStyle } = useNuxtApp()

let config = useConfig()
let breakpoints = ref(
  Object.entries(config.value.gridBreakpoints).map(([key, value]) => ({
    key,
    value: value.replace('px', ''),
  })),
)
function deleteBreakpoint(index: number) {
  breakpoints.value.splice(index, 1)
}
const sortedBreakpoints = computed(() => {
  return [...breakpoints.value].sort((a, b) => {
    if (parseInt(a.value) > parseInt(b.value)) {
      return 1
    } else if (parseInt(a.value) < parseInt(b.value)) {
      return -1
    } else {
      return 0
    }
  })
})
watch(
  () => breakpoints,
  () => {
    config.value.gridBreakpoints = Object.fromEntries(
      sortedBreakpoints.value.map((b) => [b.key, b.value + 'px']),
    )
    generateStyle()
  },
  { deep: true },
)
function generateStyle() {
  const utilities = {
    di: {
      properties: ['display'],
      values: [
        'none',
        'inline',
        'inline-block',
        'block',
        'table',
        'table-row',
        'table-cell',
        'flex',
        'inline-flex',
      ],
    },
  }
  let css = ''
  for (var [bName, bValue] of Object.entries(config.value.gridBreakpoints)) {
    css += `@media(min-width: ${bValue}){
    ${generateClasses(
      prefixClasses(generateUtilityClasses(utilities), bName).map(
        ([className, content]) => {
          return [`prototype-breakpoint .${className}`, content]
        },
      ),
    )}
  }`
  }
  console.log(css)
  $appendStyle(css)
}
</script>
<style scoped></style>
