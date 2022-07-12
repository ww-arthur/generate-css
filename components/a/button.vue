<template>
  <component
    :is="to ? 'router-link' : 'button'"
    :to="to"
    class="a-button elevated"
    v-ripple
    @click.prevent
    :disabled="disabled"
    :class="computedClasses"
  >
    <div class="a-button-content">
      <slot></slot>
    </div>
  </component>
</template>
<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'primary',
  },
  rounded: {
    type: [String, Number],
    default: '5',
  },
  to: {
    type: [String, Object],
    defaul: '',
  },
  size: {
    type: [String, Number],
    default: '3',
  },
  template: {
    type: String,
    default: 'default',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
function computeColors(template, color, size, rounded) {
  let templates = {
    default: `bloom-1-grey-blend-7 bloom-2-grey-blend-4:hover bloom-0-grey:active 
     text-${color}-shade-8 text-grey-shade-14:hover
     background-${color}-gradient-top-left background-${color}-tint-5
     dark:bloom-1-grey-shade-14 dark:bloom-2-grey-shade-14:hover dark:bloom-0-grey:active 
     dark:text-${color}-tint-8 dark:text-${color}-tint-9:hover 
     dark:background-${color}-gradient-top-left dark:background-${color}-shade-5`,
    glassy: `bloom-1-grey-blend-7 bloom-2-grey-blend-4:hover bloom-0-grey:active 
     text-${color}-shade-8 text-${color}-shade-9:hover 
     background-${color}-blend-7-gradient-top-left background-${color}-blend-9
     dark:bloom-1-grey-shade-14 dark:bloom-2-grey-shade-14:hover dark:bloom-0-grey:active
     dark:text-${color}-tint-8 dark:text-${color}-tint-9:hover`,
    text: ` bloom-0-grey:active 
     text-${color}-shade-3 text-${color}-shade-2-hover
      dark:bloom-2-grey-shade-14:hover dark:bloom-0-grey:active
     dark:text-${color}-tint-3 dark:text-${color}-tint-2-hover`,
  }
  return `pa-${parseInt(size)} ro-${rounded} fs-${size} fw-5 ${
    templates[template]
  }`
}
const computedClasses = computed(() => {
  return computeColors(props.template, props.color, props.size, props.rounded)
})
</script>

<style scoped>
.a-button {
  user-select: none;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease-in;
  backdrop-filter: blur(4px);
}
.a-button:hover {
  transform: translate3d(0, -1px, 0);
}
.a-button:disabled {
  pointer-events: none;
  filter: grayscale(70%);
  box-shadow: none;
}
.a-button:active {
  transform: translate3d(0, 0, 0);
}
.a-button-content {
  display: flex;
  text-decoration: none;
  text-shadow: none;
  filter: none;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}
</style>
