<template>
  <a-div
    v-bind="$attrs"
    class="item po-relative ov-hidden row ai-center jc-space-between px-2 py-3 fl-wrap"
    :class="`background-${color}-alpha-9-hover bloom-2-${color}-alpha-7-hover`"
  >
    <a-div class="di-flex ai-center jc-center pa-1 mx-2 ar-1">
      <slot name="icon" :attrs="iconAttrs">
        <a-icon v-if="icon" v-bind="iconAttrs">
          {{ icon }}
        </a-icon>
      </slot>
    </a-div>
    <div class="po-relative fl-grow-1 te-left">
      <div class="fs-1 po-absolute mt-n3 opacity-8">
        <slot name="label">
          {{ label }}
        </slot>
      </div>
      <div class="fs-4">
        <slot>
          {{ text }}
        </slot>
      </div>
    </div>
    <slot name="end"></slot>
  </a-div>
</template>
<script setup>
const darkMode = useState('darkMode')
const props = defineProps({
  light: {
    type: [String, Object, Array],
    default: '',
  },
  dark: {
    type: [String, Object, Array],
    default: '',
  },
  color: {
    type: String,
    default: 'grey',
  },
  icon: {
    type: String,
    default: '',
  },
  iconSize: {
    type: [String, Number],
    default: '24px',
  },
  label: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
})
</script>
<script>
export default {
  data() {
    return {
      iconAttrs: {
        size: this.iconSize,
        color: this.color,
        light: `${this.color}-shade-4`,
        dark: `${this.color}-tint-4`,
      },
    }
  },
  computed: {
    computedClasses() {
      return this.darkMode ? this.dark : this.light
    },
  },

}
</script>
<style lang="scss" scoped>
.item {
  transition: background 0.25s ease-in;
}
</style>
