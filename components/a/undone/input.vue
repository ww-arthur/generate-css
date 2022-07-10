<template>
  <div class="a-input-box ro-5" :class="`text-${color}-tint-3`">
    <slot name="prepend"></slot>
    <label
      class="a-input-label"
      :class="
        isFocused || val
          ? 'fs-2 a-input-label--active text-tertiary-tint-5'
          : 'fs-5 text-tertiary-tint-9'
      "
      ref="inputLabel"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </label>
    <input
      :type="type"
      @focus="focus()"
      @blur="blur()"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="`a-input py-3 text-tertiary-tint-9`"
      v-model="val"
    />
    <div class="a-bar ro-5 background-grey-shade-3"></div>
    <transition name="grow-x">
      <div
        v-show="isFocused"
        class="a-bar ro-5 background-tertiary transition"
      ></div>
    </transition>
  </div>
</template>
<script setup>
const emit = defineEmits(['blur'])
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  color: {
    type: String,
    default: 'grey',
  },
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  loading: {
    type: [Boolean, Number, String],
    default: true,
  },
})
let val = ref(props.modelValue)
let inputLabel = ref(null)
watch(
  () => props.modelValue,
  (newValue) => {
    val.value = newValue
  },
)

let isFocused = ref(false)
watch(
  () => isFocused.value,
  (newValue) => {
    if (isFocused.value) {
      animateLabel()
    }
  },
)
function focus() {
  console.log('focus')
  isFocused.value = true
}
function blur() {
  emit('blur')
  isFocused.value = false
}
function animateLabel() {
  const parentRect = inputLabel.value.parentElement.getBoundingClientRect()
  const labelRect = inputLabel.value.getBoundingClientRect()

  var x = parentRect.x - labelRect.x
  var y = parentRect.y - labelRect.y
  console.log({ x, y })
  inputLabel.value.animate(
    [
      {
        transform: `translate(${Math.floor(x)}px, ${Math.floor(y)}px)`,
      },

      {
        transform: `translate(0,  ${-Math.floor(parentRect.height)}px)`,
      },
    ],
    {
      duration: 2000,
      easing: 'ease-in-out',
    },
  )
  /* animation.onfinish = () => {
    element.style.overflow = defaultOverflow
    done()
  } */
}
</script>

<style>
.a-input-box {
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: start;
}
.a-input-label {
  pointer-events: none;
}

.a-input {
  padding: 0;
  outline: none;
  appearance: none;
  background-color: transparent;
  border-style: none;
  font: inherit;
  line-height: 20px;
  width: 100%;
  height: 100%;
}
.a-bar {
  position: absolute;
  height: 1px;
  z-index: 0;
  width: 100%;
}
</style>
