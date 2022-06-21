<template>
  <button
    class="a-button elevated"
    v-ripple
    @click.prevent
    :class="computedClasses"
  >
    <div class="a-button-content">
      <slot></slot>
    </div>
  </button>
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
  size: {
    type: [String, Number],
    default: '3',
  },
  template: {
    type: String,
    default: 'default',
  },
})
function computeColors(template, color, size, rounded) {
  return `pa-${parseInt(
    size,
  )} ro-${rounded} fs-${size} fw-5 bloom-1-black-blend-7 bloom-2-black-blend-4:hover bloom-0-black:active  text-${color}-tint-8 text-light-hover background-${color}-tint-2-gradient-top-left background-${color}-shade-2`
}
console.log(props.color)
const computedClasses = computed(() => {
  return computeColors(props.template, props.color, props.size, props.rounded)
})
</script>

<style scoped>
.a-button {
  user-select: none;
  text-transform: uppercase;
  transition: all 0.25s ease-in;
}
.a-button:hover {
  transform: translate3d(0, -2px, 0);
}
.a-button:active {
  transition: all 0.15s ease-out;

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
  position: relative;
}
</style>
