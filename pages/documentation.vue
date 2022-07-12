<template>
  <div class="fl-grow-1 di-flex fl-column ov-auto ai-center">
    <div
      class="fl-grow-0 fl-shrink-1 di-flex col-12 md:col-8 lg:col-6 background-grey-blend-9 ro-bottom-4 ov-hidden"
    >
      <a-item
        v-ripple
        hide-text-mobile
        to="/documentation/utilities"
        icon="package"
        class="col ro-bottom-left-4"
      >
        Utilities
      </a-item>

      <a-item
        v-ripple
        hide-text-mobile
        to="/documentation/decoration"
        icon="brush"
        class="col ro-bottom-right-4"
      >
        Decoration
      </a-item>
    </div>
    <div class="fl-grow-1 ox-hidden oy-auto row jc-center wi-100">
      <div class="col-12 md:col-8 lg:col-6 mt-10">
        <NuxtPage></NuxtPage>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'documentation',
})
</script>
