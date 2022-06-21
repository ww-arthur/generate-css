<template>
  <svg
    class="icon ov-visible"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
    xml:space="preserve"
  >
    <g>
      <path
        :class="`sw-${strokeWidth} stroke-${strokeColor} background-${color}`"
        :d="iconPath"
      />
    </g>
  </svg>
</template>
<script setup>
const darkMode = useState('darkMode')

const props = defineProps({
  icon: {
    type: String,
    default: 'square-rounded',
  },
  color: {
    type: String,
    default: '',
  },
  outline: {
    type: [Boolean, Number, String],
    default: false,
  },
  strokeColor: {
    type: String,
    default: '',
  },
  strokeWidth: {
    type: String,
    default: '1',
  },
  size: {
    type: [String, Number],
    default: 2,
  },
})
</script>
<script>
export default {
  computed: {
    iconPath() {
      return `${this.$icon.get(
        this.$slots.default?.()?.[0]?.children ?? this.icon,
      )}`
    },
    fillOpacity() {
      return this.outline ? 0 : 1
    },

    actualSize() {
      return isNaN(this.size) ? this.size : parseInt(this.size) * 3 * 6 + 'px'
    },
  },
}
</script>
<style scoped>
.icon {
  aspect-ratio: 1;
  stroke-linecap: round;
  fill-opacity: v-bind(fillOpacity);
  width: v-bind(actualSize);
  height: auto;
}
</style>
