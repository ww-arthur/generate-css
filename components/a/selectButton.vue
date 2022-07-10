<template>
  <div class="a-select-box">
    <a-button
      class="wi-min-100 he-min-100"
      @click="focus()"
      :rounded="buttonRounded"
      :color="color"
      :template="template"
    >
      <div class="di-flex jc-space-between wi-100 ai-center">
        <slot v-if="selected.text || selected.value" :selected="selected">
          {{ selected.text || selected.value }}
        </slot>
        <slot v-else name="notFound">
          Select
        </slot>
        <a-icon
          size="24px"
          :light="`${color}-shade-6`"
          :dark="`${color}-tint-6`"
          class="mr-2"
        >
          chevron-down
        </a-icon>
      </div>
    </a-button>
    <a-transition-grow-y>
      <div
        v-show="isFocused"
        class="a-select-items"
        :class="`ro-${rounded} background-${color}-shade-9`"
      >
        <div
          class="po-relative ov-hidden"
          v-for="(item, i) in items"
          :key="item.value"
          v-ripple
          @click="input(item, i)"
        >
          <slot name="item" :item="item">
            <a-item
              :icon="item.icon"
              :color="(item.color || 'grey')"
              :label="item.label"
              :text="item.text || item.value"
            >
              {{ (item.text || item.value) }}
            </a-item>
          </slot>
        </div>
      </div>
    </a-transition-grow-y>
  </div>
</template>
<script setup>
const darkMode = useState('darkMode')
const props = defineProps({
  modelValue: {
    type: [String, Object],
    default: '',
  },
  color: {
    type: String,
    default: 'primary',
  },
  mode: {
    type: String,
    default: 'filled',
  },
  rounded: {
    type: String,
    default: '5',
  },
  buttonRounded: {
    type: String,
    default: '5',
  },
  template: {
    type: String,
    default: 'default',
  },

  items: {
    type: Array,
    default: () => [],
  },
})
</script>
<script>
export default {
  data() {
    return {
      isFocused: false,
      selected: {
        text: '',
        value: '',
      },
      itemsCmp: this.items,
    }
  },
  methods: {
    /*     onEnter(el, done) {
      this.$anime({
        targets: el,
        duration: 400,
        easing: 'easeOutCirc',
        opacity: [0, 1],
        rotateX: ['-90deg', '0deg'],
        complete: done,
      })
    },
    onLeave(el, done) {
      this.$anime({
        targets: el,
        duration: 400,
        easing: 'easeInCirc',
        opacity: [1, 0],
        rotateX: ['0deg', '-90deg'],
        complete: done,
      })
    }, */
    focus() {
      this.isFocused = !this.isFocused
    },
    input(item, i) {
      this.selected = item
      this.isFocused = false
      this.$emit('update:modelValue', item.value ?? item)
    },
  },
  mounted() {
    this.selected =
      this.items.find((item) => item.value === this.modelValue) ??
      this.modelValue
  },
  watch: {
    items: {
      handler: function () {
        this.itemsCmp = this.items
      },
      deep: true,
    },
  },
}
</script>
<style>
.a-select-box {
  position: relative;
  perspective-origin: 50% 50%;
  perspective: 300px;
  transform-style: preserve-3d;
  z-index: 10;
}
.a-select-box input {
  z-index: 1;
}
.a-select-items {
  cursor: pointer;
  position: absolute;
  flex-direction: column;
  min-width: 100%;
  z-index: -1;
  transform-origin: top center;
  top: calc(100% - 24px);
  padding-top: 24px;
  padding-bottom: 8px;
}
</style>
