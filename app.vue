<template>
  <div
    :class="`template`"
    class="text-white background-black-tint-1 wi-min-100vw he-min-100vh row ai-stretch jc-center md:px-10"
  >
    <div class="col-12 md:col-3">
      <div class="pt-10 px-5">
        <div class="fs-8 text-primary-tint-9">Pick a color</div>
        <div class="fs-5 pb-10 text-primary-tint-8">
          Generate a color scheme from a color
        </div>
      </div>
      <div class="px-10 pb-5">
        <a-input v-model="color.name" label="Name"></a-input>
        <div class="di-flex ai-center">
          <a-input
            v-model="color.hash"
            label="Color"
            class="fl-grow-1"
          ></a-input>
          <a-color-picker
            @blur="generateColors()"
            v-model="color.hash"
            label="Color"
            class="ml-4"
          ></a-color-picker>
        </div>
        <div class="mt-10">Color options</div>
        <a-row
          class="mt-2"
          cols="6 6 6 6"
          gutter="3"
          col-class="di-flex ai-center"
        >
          <template #0>
            <a-button
              @click="color.options.tints--"
              template="text"
              size="1"
              class="fl-shrink-0"
              rounded="4"
            >
              <a-icon icon="minus" color="white"></a-icon>
            </a-button>
            <a-input
              v-model="color.options.tints"
              type="number"
              label="Tints"
              class="fl-grow-1 mx-2 te-center"
            ></a-input>
            <a-button
              template="text"
              @click="color.options.tints++"
              size="1"
              rounded="4"
              class="fl-shrink-0"
            >
              <a-icon icon="plus" color="white"></a-icon>
            </a-button>
          </template>
          <template #1>
            <a-button
              @click="color.options.shades--"
              template="text"
              size="1"
              class="fl-shrink-0"
              rounded="4"
            >
              <a-icon icon="minus" color="white"></a-icon>
            </a-button>
            <a-input
              v-model="color.options.shades"
              type="number"
              label="Shades"
              class="fl-grow-1 mx-2"
            ></a-input>
            <a-button
              template="text"
              @click="color.options.shades++"
              size="1"
              rounded="4"
              class="fl-shrink-0"
            >
              <a-icon icon="plus" color="white"></a-icon>
            </a-button>
          </template>
          <template #2>
            <a-button
              @click="color.options.tones--"
              template="text"
              size="1"
              class="fl-shrink-0"
              rounded="4"
            >
              <a-icon icon="minus" color="white"></a-icon>
            </a-button>
            <a-input
              v-model="color.options.tones"
              type="number"
              label="Tones"
              class="fl-grow-1 mx-2"
            ></a-input>
            <a-button
              template="text"
              @click="color.options.tones++"
              size="1"
              rounded="4"
              class="fl-shrink-0"
            >
              <a-icon icon="plus" color="white"></a-icon>
            </a-button>
          </template>
          <template #3>
            <a-button
              @click="color.options.alphas--"
              template="text"
              size="1"
              class="fl-shrink-0"
              rounded="4"
            >
              <a-icon icon="minus" color="white"></a-icon>
            </a-button>
            <a-input
              v-model="color.options.alphas"
              type="number"
              label="Alphas"
              class="fl-grow-1 mx-2"
            ></a-input>
            <a-button
              template="text"
              @click="color.options.alphas++"
              size="1"
              rounded="4"
              class="fl-shrink-0"
            >
              <a-icon icon="plus" color="white"></a-icon>
            </a-button>
          </template>
        </a-row>

        <div class="di-flex fl-column ai-stretch mt-10">
          <p class="fw-2 fs-4 text-white-shade-2">
            We've generated a stilesheet for the color you've picked.
            <br />

            This will include
            <span class="fw-4 text-white">
              background, text, shadows, gradients,
            </span>
            and
            <span class="fw-4 text-white">borders</span>
            for each color variant.
          </p>
          <a-button
            template="safe"
            :color="color.name.toLowerCase()"
            size="4"
            @click="downloadStyle"
          >
            <a-icon icon="download" class="mr-2"></a-icon>
            Download CSS
          </a-button>
        </div>
      </div>
    </div>
    <div
      class="col-12 md:col-9 row background-black-tint-1 bloom-4-black-blend-6 elevated md:ro-5 ov-hidden my-10"
    >
      <div
        class="col-1 background-primary bloom-4-primary-blend-6"
        :class="`template:background-${color.name.toLocaleLowerCase()} template:bloom-4-${color.name.toLocaleLowerCase()}-blend-6`"
      ></div>
      <div class="col-11 di-flex fl-column jc-space-around pr-5">
        <div>
          <div class="ml-5 mt-3 fw-6 fs-6">Tints</div>
          <div class="ml-5 mb-3 fw-2 fs-4">
            Tints are generated by increasing the lightness of a color.
          </div>

          <div class="di-flex ro-right-5 ov-hidden">
            <div
              class="fl-grow-1"
              :class="`py-10 template:background-${name}`"
              v-for="(hash, name) in filterColors(colorsObject, 'tint')"
            ></div>
          </div>
        </div>
        <div>
          <div class="ml-5 mt-3 fw-6 fs-6">Shades</div>
          <div class="ml-5 mb-3 fw-2 fs-4">
            Shades are generated by decreasing the lightness of a color.
          </div>

          <div class="di-flex ro-right-5 ov-hidden">
            <div
              class="fl-grow-1"
              :class="`py-10 template:background-${name}`"
              v-for="(hash, name) in filterColors(colorsObject, 'shade')"
            ></div>
          </div>
        </div>
        <div>
          <div class="ml-5 mt-3 fw-6 fs-6">Tones</div>
          <div class="ml-5 mb-3 fw-2 fs-4">
            Tones are generated by decreasing the saturation of a color.
          </div>
          <div class="di-flex ro-right-5 ov-hidden">
            <div
              class="fl-grow-1"
              :class="`py-10 template:background-${name}`"
              v-for="(hash, name) in filterColors(colorsObject, 'tone')"
            ></div>
          </div>
        </div>
        <div class="my-4">
          <div class="ml-5 mt-3 fw-6 fs-6">Alphas</div>
          <div class="ml-5 mb-3 fw-2 fs-4">
            Alphas are generated by decreasing the opacity of a color.
          </div>
          <div class="di-flex ro-right-5 ov-hidden png-squares">
            <div
              style="z-index: 2;"
              class="fl-grow-1"
              :class="`py-10 template:background-${name}`"
              v-for="(hash, name) in filterColors(colorsObject, 'blend')"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  generateClasses,
  generateColorScheme,
  generateStyle,
  prefixClasses,
} from '@/config/functions'
import { generateColorValues, isValid } from '@/config/colors'
const { $appendStyle, $downloadStyle } = useNuxtApp()
/* generateStyle().then((css) => {
  if (process.client) {
    $appendStyle(css)
  }
}) */
onMounted(() => {
  generateColors()
})

let options = reactive({
  tints: 10,
  shades: 10,
  alphas: 10,
  tones: 10,
})
watch(options, () => {
  generateColors()
})
let color = ref({ name: 'Primary', hash: '#8f00ff', options })
let colorsObject = ref({})

function filterColors(colorObject: object, key: string) {
  return Object.fromEntries(
    Object.entries(colorObject).filter(([property, value]) =>
      property.includes(key),
    ),
  )
}

function generateColors() {
  if (!color.value.name || !isValid(color.value.hash)) return
  colorsObject.value = generateColorValues(color.value)
  let colors = generateColorScheme(color.value)
  $appendStyle(generateClasses(prefixClasses(colors, `template .template`)))
  /*   generateStyle().then((css) => {
    $appendStyle(css)
  }) */
}
function downloadStyle() {
  if (!color.value.name || !isValid(color.value.hash)) return
  colorsObject.value = generateColorValues(color.value)
  let colors = generateColorScheme(color.value)
  $downloadStyle(generateClasses(colors))
  /*   generateStyle().then((css) => {
    $appendStyle(css)
  }) */
}
</script>
<style>
.png-squares {
  position: relative;
  background-repeat: repeat;
  background-color: #aaa;
  background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path d="M1 2V0h1v1H0v1z" fill-opacity="0.2"/></svg>');
  background-size: 20px 20px;
}
</style>
