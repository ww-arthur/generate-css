<template>
  <div class="fl-grow-1 di-flex fl-column ov-auto">
    <div class="fl-grow-0 di-flex">
      <a-item
        hide-text-mobile
        v-ripple
        to="/toolkit/font"
        icon="format-font"
        class="col-2 ro-bottom-right-4"
      >
        Font
      </a-item>
      <a-item
        hide-text-mobile
        v-ripple
        to="/toolkit/themes"
        icon="palette"
        class="col-2 ro-bottom-4"
      >
        Themes
      </a-item>
      <a-item
        hide-text-mobile
        v-ripple
        to="/toolkit/breakpoints"
        icon="responsive"
        class="col-2 ro-bottom-4"
      >
        Breakpoints
      </a-item>
      <a-item
        hide-text-mobile
        v-ripple
        to="/toolkit/grid"
        icon="grid-large"
        class="col-2 ro-bottom-4"
      >
        Grid
      </a-item>
      <a-item
        hide-text-mobile
        v-ripple
        to="/toolkit/spacers"
        icon="ruler"
        class="col-2 ro-bottom-4"
      >
        Spacers
      </a-item>
      <a-item
        hide-text-mobile
        v-ripple
        to="/toolkit/borders"
        icon="border-style"
        class="col-2 ro-bottom-left-4"
      >
        Borders
      </a-item>
    </div>
    <NuxtPage></NuxtPage>
  </div>
</template>
