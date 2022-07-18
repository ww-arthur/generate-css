<template>
  <div :class="computedClasses">
    <slot />
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  colors: {
    type: Object,
    default: {},
  },
  utils: {
    type: Object,
    default: {},
  },
})
function prefixClasses(prefix: string, classes: Array<string>) {
  return classes.map((value) => [
    `${prefix.includes('default') ? '' : `${prefix}:`}${value}`,
  ])
}
function objectToPrefixedString(obj: Object) {
  return Object.entries(obj)
    .map(([prefix, value]) => {
      return prefixClasses(
        prefix,
        value.split(' ').filter((v) => v),
      ).join(' ')
    })
    .join(' ')
}
let computedClasses = computed(() => {
  return `${objectToPrefixedString(props.colors)} ${objectToPrefixedString(
    props.utils,
  )}`
})
</script>
<!-- <script setup>
import config from '@/flui.config.json'
const props = defineProps({
  ...Object.fromEntries(
    config.themes.map((theme) => [theme, { type: String, default: 'a' }]),
  ),
})
let attrs = useAttrs()
let computedClasses = computed(() => {
  return Object.keys(attrs)
})
</script> -->
<style lang="scss" scoped></style>
