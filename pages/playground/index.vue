<template>
  <div class="fl-grow-1 ox-hidden oy-auto row jc-center wi-100">
    <div class="col-12 md:col-8 lg:col-6 mt-10">
      <div v-for="utility in utilities" class="my-10">
        <div class="fs-8">{{ utility.name }}</div>
        <div class="fs-5 fw-2 bw-bottom-1 border-grey-blend-6 pb-2 mb-2">
          Model:
          <span
            class="fs-4 background-primary-blend-7 text-primary-shade-7 dark:text-primary-tint-7 ro-3 px-1 mx-1"
          >
            {{ utility.prefix
            }}{{
              utility.selectProperties
                ? `${utility.removeDivider ? '' : '-'}{property}`
                : ''
            }}-{value}
          </span>
        </div>
        <div v-if="utility.selectProperties" class="fs-3 fw-2">
          Properties:
          <span
            v-for="prop in utility.properties"
            class="fs-2 background-red-blend-8 text-red-shade-8 dark:text-red-tint-8 ro-2 px-1 mx-1"
          >
            {{ prop.value }}: {{ prop.text }}
          </span>
        </div>
        <div class="fs-3 fw-2 te-truncate">
          Values:
          <span
            v-for="value in utility.values"
            class="fs-2 background-green-blend-8 text-green-shade-8 dark:text-green-tint-8 ro-2 px-1 mx-1"
          >
            <span v-if="value.value !== value.text">
              {{ value.value }}: {{ value.text }}
            </span>
            <span v-else>
              {{ value.value }}
            </span>
          </span>
        </div>
        <div class="fs-4 opacity-6 mt-4">
          {{ utility.description }}

          <a
            :href="utility.link"
            class="text-primary-shade-5 dark:text-primary-tint-5 dark:text-primary-tint-1:hover text-primary-shade-1:hover"
          >
            MDN reference
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useUtilities } from '@/config/utilities'
const { $formatUtilities } = useNuxtApp()

let utilities = ref()
onMounted(() => {
  utilities.value = $formatUtilities(useUtilities())
})
</script>
