<template>
  <div class="fl-grow-1 di-flex fl-column ov-auto ai-center">
    <div
      class="fl-grow-0 fl-shrink-1 di-flex col-6 background-grey-blend-9 ro-bottom-4 ov-hidden"
    >
      <a-item
        v-ripple
        to="/docs/utilities"
        icon="package"
        class="col ro-bottom-left-4"
      >
        Utilities
      </a-item>

      <a-item
        v-ripple
        to="/docs/decoration"
        icon="brush"
        class="col ro-bottom-right-4"
      >
        Decoration
      </a-item>
    </div>
    <NuxtPage></NuxtPage>
  </div>
</template>
