<template>
  <div
    @pointerdown="teleportSlider"
    class="a-slider ar-1 canvas-sl py-2 ro-5"
    :style="` background-color: hsl(${colorHue}, 100%, 50%)`"
  >
    <div
      @pointerdown.stop="beginSliding"
      @pointerup="stopSliding"
      :style="`left: ${val.s * 100}%; top: ${(1 - val.l) * 100}%`"
      class="thumb-wrapper pa-3"
      :class="`ro-circle `"
    >
      <div
        :style="`border-width: 2px; border-style: solid; background-color: hsl(${colorHue}deg, ${(val.s as number * 100)}%, ${
          (val.l as number * 100)
        }%);`"
        class="thumb border-white"
        :class="`background-black-blend-9-gradient-bottom-right bloom-1-black-blend-6 ro-5 pa-3 `"
      ></div>
    </div>
    <div v-if="showMarker" class="marker thumb"></div>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])

const sliderProps = defineProps({
  modelValue: {
    type: Object,
    default: () => ({ s: 0, l: 0 }),
  },
  colorHue: {
    type: [Number, String],
    default: 0,
  },
})
let showMarker = ref(false)
function beginSliding(event) {
  let slider = event.target
  let rect = event.target.parentElement.getBoundingClientRect()
  slider.onpointermove = (event) => updateModelValue(event, rect)
  slider.setPointerCapture(event.pointerId)
}
function teleportSlider(event) {
  let slider = event.target.firstChild
  let rect = event.target.getBoundingClientRect()
  updateModelValue(event, rect)
  slider.onpointermove = (event) => updateModelValue(event, rect)
  slider.setPointerCapture(event.pointerId)
}

function stopSliding(event) {
  let slider = event.target
  slider.onpointermove = null
  showMarker.value = false

  slider.releasePointerCapture(event.pointerId)
}

let val = ref(sliderProps.modelValue)
watch(
  () => sliderProps.modelValue,
  (newValue) => {
    val.value = newValue
  },
)

let ticking = false
function updateModelValue(event, rect) {
  if (ticking) return
  requestAnimationFrame(() => {
    let positionX = (event.clientX - rect.left) / rect.width
    let positionY = (event.clientY - rect.top) / rect.height

    if (positionX <= 0 || positionX >= 1 || positionY <= 0 || positionY >= 1) {
      if (positionX <= 0) {
        val.value.s = 0
      } else if (positionX >= 1) {
        val.value.s = 1
      } else {
        val.value.s = positionX
      }
      if (positionY <= 0) {
        val.value.l = 1
      } else if (positionY >= 1) {
        val.value.l = 0
      } else {
        val.value.l = positionY < 0.52 && positionY > 0.48 ? 0.5 : 1 - positionY
      }
    } else {
      val.value.s = positionX
      val.value.l = positionY < 0.52 && positionY > 0.48 ? 0.5 : 1 - positionY
    }

    if (positionY < 0.52 && positionY > 0.48) {
      showMarker.value = true
    } else {
      showMarker.value = false
    }

    if (
      val.value.s !== sliderProps.modelValue.s ||
      val.value.l !== sliderProps.modelValue.l
    ) {
      emit('update:modelValue', val.value)
    }
    ticking = false
  })
  ticking = true
}
</script>
<style>
.canvas-sl {
  touch-action: none;
  user-select: none;

  background-image: linear-gradient(to top, #000000, #00000000 50%),
    linear-gradient(to bottom, #ffffffff, #00000000 50%),
    linear-gradient(to right, #808080ff, #00000000);
}
.thumb-wrapper {
  user-select: none;
  position: absolute;
  touch-action: none;
  transform: translate(-50%, -50%);
  top: 50%;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
}
.marker {
  position: absolute;
  touch-action: none;
  pointer-events: none;
  transform: translateY(-50%);
  top: 50%;
  left: 0;
  width: 100%;
  border-top: 2px dashed #00000050;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
}
.thumb-wrapper:hover > .thumb {
  transform: scale(1.1);
}
.thumb-wrapper:active > .thumb {
  transform: scale(1.6);
}
.thumb {
  transition: transform 0.3s ease-out;

  pointer-events: none;
  transform: scale(1);
}
</style>
