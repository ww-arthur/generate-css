<template>
  <a-row
    :class="reverse ? 'fl-row-reverse' : ''"
    cols="12 12"
    sm="11 11"
    md="10 10"
    lg="7 5"
    gutter="10"
  >
    <template #0>
      <div class="fs-9 fw-4"><slot name="header"></slot></div>
      <div class="fs-7 fw-2 mt-n4"><slot name="subheader"></slot></div>
      <div class="fs-5 fw-4 opacity-7 mt-8">
        <slot name="text"></slot>
      </div>
    </template>
    <template #1>
      <div
        class="wi-100 lg:ar-1 row ro-6 ov-hidden bloom-2-grey dark:bloom-3-grey-shade-15"
      >
        <slot name="content"></slot>
      </div>
    </template>
  </a-row>
</template>
<script setup lang="ts">
let props = defineProps({
  reverse: {
    type: Boolean,
    default: false,
  },
})
</script>
<style scoped></style>
