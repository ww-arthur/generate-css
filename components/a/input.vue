<template>
  <div
    class="a-input-box ro-5"
    :class="`dark:text-${color}-tint-3 text-${color}-shade-3 ${
      disabled ? 'opacity-7' : ''
    }`"
  >
    <slot name="prepend">
      {{ prepend }}
      <a-icon v-if="icon" class="mr-2" color="color">{{ icon }}</a-icon>
    </slot>
    <div class="a-input-wrapper">
      <label
        class="a-input-label"
        :class="
          isFocused || val || val === 0
            ? 'fs-2 a-input-label--active dark:text-primary-tint-9 text-primary-shade-9'
            : 'fs-5 a-input-label--default dark:text-primary-tint-2 text-primary-shade-2'
        "
        ref="label"
      >
        <slot name="label">
          {{ label }}
        </slot>
      </label>
      <input
        :disabled="disabled"
        :type="type"
        @focus="focus()"
        @blur="blur()"
        @input="$emit('update:modelValue', val)"
        :class="`a-input py-2 px-0 dark:text-primary-tint-9 text-primary-shade-9`"
        v-model="val"
      />
    </div>
    <slot name="append">
      {{ append }}
    </slot>
    <a-bar
      class="po-absolute background-grey-shade-3"
      :show="isFocused"
      :loading="loading"
    ></a-bar>
  </div>
</template>
<script setup>
const emit = defineEmits(['update:modelValue', 'blur'])
const props = defineProps({
  modelValue: {
    type: [Number, String],
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
  prepend: {
    type: String,
    default: '',
  },
  append: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: [Boolean, Number, String],
    default: false,
  },
})
let val = ref(props.modelValue)
let isFocused = ref(false)

watch(
  () => props.modelValue,
  (newValue) => {
    val.value = newValue
    emit('update:modelValue', val.value)
  },
)
function focus() {
  isFocused.value = true
}
function blur() {
  isFocused.value = false
}
</script>

<style>
input {
  text-align: inherit;
}
.a-input-box {
  margin-top: 1rem;
  margin-bottom: 1rem;
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: nowrap;
}
.a-input-wrapper {
  position: relative;
  flex-grow: 1;
}
.a-input-label {
  width: 100%;
  pointer-events: none;
  transition: all 0.2s cubic-bezier(0, 0.53, 0.02, 0.97);
  transform: translate(0, -50%);
  position: absolute;
  left: 0;
}
.a-input-label--default {
  top: 50%;
}
.a-input-label--active {
  top: 0;
}
.a-input {
  padding: 0;
  outline: none;
  appearance: none;
  background-color: transparent;
  border-style: none;
  font: inherit;
  flex: 1 1 auto;
  line-height: 20px;
  width: 100%;
  height: 100%;
}
</style>
