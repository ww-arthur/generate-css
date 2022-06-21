<template>
  <div class="a-card" :class="computedClasses">
    <slot></slot>
  </div>
</template>
<script setup>
const darkMode = useState('darkMode')
const props = defineProps({
  color: {
    type: String,
    default: 'purple',
  },
  rounded: {
    type: [String, Number],
    default: '4',
  },
  size: {
    type: [String, Number],
    default: '5',
  },
  template: {
    type: String,
    default: 'default',
  },
  loading: {
    type: [Boolean, Number, String],
    default: true,
  },
})
</script>
<script>
export default {
  data() {
    return {}
  },

  computed: {
    computedClasses() {
      return this.computeColors(
        this.template,
        this.darkMode ? 'dark' : 'light',
        this.color,
        this.rounded,
      )
    },
  },

  methods: {
    computeColors(template, mode, color, rounded) {
      let style = {
        default: {
          light: {
            bloom: `bloom-2-dark-alpha-7`,
            text: `text-dark-tint-1`,
            background: `background-light`,
          },
          dark: {
            bloom: `bloom-2-dark-alpha-7`,
            text: `text-light`,
            background: `background-dark-tint-1`,
          },
        },
        gradient: {
          light: {
            bloom: `bloom-1-dark-alpha-7 `,
            text: `text-${color}-tint-8 `,
            background: `background-${color}-tint-5-gradient-top-left background-${color}-shade-5`,
            border: ``,
          },
          dark: {
            bloom: `bloom-2-dark-alpha-7`,
            text: `text-${color}-tint-8 `,
            background: `background-${color}-tint-4-gradient-top-left background-${color}-shade-4`,
          },
        },
        glassy: {
          light: {
            bloom: `bloom-9-dark-alpha-1`,

            text: `text-${color}-shade-5`,
            background: `background-${color}-alpha-1`,
          },
          dark: {
            bloom: `bloom-4-light-alpha-1`,
            text: `text-${color}-tint-9`,
            background: `background-${color}-shade-9`,
          },
        },
        transparent: {
          light: {
            bloom: `bloom-1-dark-alpha-7`,
            text: `text-${color}-shade-5`,
            background: `background-${color}-alpha-10 `,
          },
          dark: {
            bloom: `bloom-2-dark-alpha-7`,
            text: `text-${color}-tint-5`,
            background: `background-${color}-alpha-9 `,
          },
        },
      }

      return Object.values({
        ...style[template][mode],
        ...{
          default: `ro-${rounded}`,
          border: style[template][mode].border
            ? 'gradient-border ' +
              style[template][mode].border
                .split(' ')
                .map((cls) => cls.concat('-before'))
                .join(' ')
            : '',
        },
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.a-card {
  overflow: hidden;
}
</style>
