<template>
  <div class="a-app" :class="darkMode ? `dark` : ''">
    <div
      class="template dark:text-grey-tint-15 text-primary-shade-9 dark:background-grey-shade-13 background-grey-tint-13 wi-min-100vw he-min-100vh wi-max-100vw he-max-100vh ov-auto di-flex fl-column"
    >
      <main-header></main-header>
      <slot></slot>
    </div>
    <div class="a-app-overlay"></div>
  </div>
</template>
<script setup lang="ts">
let darkMode = useDarkmode()
watch(darkMode, (dark) => {
  localStorage.setItem('theme', dark ? 'dark' : 'light')
})
onMounted(() => {
  const theme = localStorage.getItem('theme')
  if (theme) {
    if (theme === 'dark') {
      darkMode.value = true
    } else {
      darkMode.value = false
    }
  } else if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    darkMode.value = true
    localStorage.setItem('theme', 'dark')
  }
})
</script>
<style></style>
