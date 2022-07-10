<template>
  <div class="di-flex ai-center">
    <a-button
      @click="val--"
      template="text"
      size="1"
      class="fl-shrink-0"
      rounded="4"
    >
      <a-icon icon="minus" color="white"></a-icon>
    </a-button>
    <a-input
      @update:modelValue="$emit('update:modelValue', $event)"
      v-model="val"
      type="number"
      :label="label"
      class="te-center fl-grow-1"
    ></a-input>
    <a-button
      template="text"
      @click="val++"
      size="1"
      rounded="4"
      class="fl-shrink-0"
    >
      <a-icon icon="plus" color="white"></a-icon>
    </a-button>
  </div>
</template>
<script setup>
const props = defineProps({
  modelValue: {
    type: Number,
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
})
let val = ref(props.modelValue)
watch(
  () => props.modelValue,
  (newValue) => {
    val.value = newValue
  },
)
</script>
