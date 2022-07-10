<template>
  <div class="fl-grow-1 di-flex fl-wrap ai-stretch jc-center">
    <div class="di-flex fl-column ai-center ml-6">
      <div
        v-for="spacer in iterations + 1"
        style="margin-bottom: 1px; min-height: 15px;"
        class="fl-grow-1 di-flex ai-stretch"
      >
        <div
          class="po-relative background-yellow-tone-1"
          :class="`pl-${spacer - 1}`"
        >
          <span
            class="po-absolute fs-1 te-nowrap pr-1"
            style="top: 50%; left: 0; transform: translate(-100%, -50%);"
          >
            pl-{{ spacer - 1 }}
          </span>
        </div>
        <div
          class="po-relative background-yellow-tone-3"
          :class="`pr-${spacer - 1}`"
        >
          <span
            class="po-absolute fs-1 te-nowrap pl-1"
            style="top: 50%; right: 0; transform: translate(100%, -50%);"
          >
            pr-{{ spacer - 1 }}
          </span>
        </div>
      </div>
    </div>
    <div class="di-flex ai-center fl-wrap ml-6 fl-grow-1 wi-max-100">
      <div
        v-for="spacer in iterations + 1"
        style="margin-right: 1px; min-width: 21px;"
        class="fl-grow-1"
      >
        <div
          class="po-relative background-yellow-tone-1"
          :class="`pt-${spacer - 1}`"
        >
          <span
            class="po-absolute fs-1 te-nowrap"
            style="top: 0; left: 50%; transform: translate(-50%, -100%);"
          >
            pt-{{ spacer - 1 }}
          </span>
        </div>
        <div
          class="po-relative background-yellow-tone-3"
          :class="`pb-${spacer - 1}`"
        >
          <span
            class="po-absolute fs-1 te-nowrap"
            style="bottom: 0; left: 50%; transform: translate(-50%, 100%);"
          >
            pb-{{ spacer - 1 }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  iterations: {
    type: Number,
    default: 0,
  },
})
</script>
<style></style>
