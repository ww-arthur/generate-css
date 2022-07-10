<template>
  <div @pointerdown="teleportSlider" class="a-slider canvas-hue py-2 ro-5">
    <div
      @pointerdown.stop="beginSliding"
      @pointerup="stopSliding"
      :style="`left: ${val}%`"
      class="thumb-wrapper pa-3"
      :class="`ro-circle background-grey-blend-8:hover`"
    >
      <div
        :style="`background-color: hsl(${percentageToValue(
          val,
        )}deg, 100%, 50%);`"
        class="thumb transition"
        :class="`background-grey-blend-9-gradient-bottom-right bloom-2-grey-blend-4 ro-5 pa-3`"
      ></div>
    </div>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])

const sliderProps = defineProps({
  modelValue: {
    type: [Number, String],
    default: '',
  },
  min: {
    type: [String, Number],
    default: 0,
  },
  max: {
    type: [String, Number],
    default: 360,
  },
  color: {
    type: String,
    default: 'primary',
  },
  label: {
    type: String,
    default: '',
  },

  loading: {
    type: [Boolean, Number, String],
    default: true,
  },
})

function beginSliding(event) {
  let slider = event.target
  let rect = event.target.parentElement.getBoundingClientRect()
  slider.onpointermove = (event) => updateModelValue(event, rect)
  slider.setPointerCapture(event.pointerId)
}
function stopSliding(event) {
  let slider = event.target
  slider.onpointermove = null
  slider.releasePointerCapture(event.pointerId)
}
function teleportSlider(event) {
  let slider = event.target.firstChild
  let rect = event.target.getBoundingClientRect()
  updateModelValue(event, rect)
  slider.onpointermove = (event) => updateModelValue(event, rect)
  slider.setPointerCapture(event.pointerId)
}

let val = ref(valueToPercentage(sliderProps.modelValue))
watch(
  () => sliderProps.modelValue,
  (newValue) => {
    val.value = valueToPercentage(newValue)
  },
)

let ticking = false
function updateModelValue(event, rect) {
  if (ticking) return
  requestAnimationFrame(() => {
    let position = (event.clientX - rect.left) / rect.width
    if (position <= 0) {
      val.value = 0
      val.value !== sliderProps.modelValue &&
        emit('update:modelValue', sliderProps.min)
    } else if (position >= 1) {
      val.value = 100
      val.value !== sliderProps.modelValue &&
        emit('update:modelValue', sliderProps.max)
    } else {
      val.value = position * 100
      emit('update:modelValue', percentageToValue(val.value))
    }
    ticking = false
  })
  ticking = true
}
function valueToPercentage(value) {
  return (
    ((value - parseInt(sliderProps.min as string)) /
      (parseInt(sliderProps.max as string) -
        parseInt(sliderProps.min as string))) *
    100
  )
}
function percentageToValue(percentage) {
  return (
    (parseInt(sliderProps.max as string) -
      parseInt(sliderProps.min as string)) *
      (percentage * 0.01) +
    parseInt(sliderProps.min as string)
  )
}
</script>
<style>
.canvas-hue {
  user-select: none;
  background-image: linear-gradient(
    to right,
    #ff0000,
    #ffff00,
    #00ff00,
    #00ffff,
    #0000ff,
    #ff00ff,
    #ff0000
  );
}
.a-slider {
  position: relative;
  display: flex;
  align-items: center;
  overflow: visible;
}
.thumb-wrapper {
  position: absolute;
  touch-action: none;
  transition: transform 0.3s ease-out;
  transform: translate(-50%, -50%);
  top: 50%;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
}
.thumb-wrapper:active > .thumb {
  transform: scale(1.5);
}
.thumb {
  pointer-events: none;
  transform: scale(1);
}
</style>
