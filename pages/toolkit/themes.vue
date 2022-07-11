<template>
  <main-layout card-class="prototype-colors">
    <template #card>
      <main-add-color
        :current-color="currentColor"
        v-model="showColorEditor"
      ></main-add-color>

      <div
        v-for="(color, i) in colors"
        class="row background-grey-tint-15 dark:background-grey-shade-10 elevated ro-5 my-5 dark:bloom-2-grey-shade-14 bloom-2-grey-blend-8"
      >
        <div
          class="col-1 background-primary ro-left-5 elevated"
          :class="`prototype-colors:background-${color.name.toLocaleLowerCase()} `"
        ></div>
        <div class="col-5 pa-4 fs-6">
          <p>{{ color.name }}</p>
          <p>
            {{ color.hash }}
          </p>
        </div>
        <div class="col-6 di-flex ai-stretch">
          <div class="di-flex fl-column fl-grow-1">
            <div
              class="di-flex fl-grow-1"
              v-if="Object.keys(filterColors(colorsClasses[i], 'tint')).length"
            >
              <div
                class="fl-grow-1 theme-color-wrapper di-flex jc-center ai-center"
                :class="`prototype-colors:background-${name}`"
                v-for="(hash, name) in filterColors(colorsClasses[i], 'tint')"
              >
                <div
                  class="theme-color-hover te-center"
                  :class="
                    parseInt(hash.slice(1, 7), 16) > 10230527
                      ? 'text-grey-shade-15'
                      : 'text-grey-tint-15'
                  "
                >
                  {{ name }}
                </div>
              </div>
            </div>

            <div
              class="di-flex fl-grow-1"
              v-if="Object.keys(filterColors(colorsClasses[i], 'shade')).length"
            >
              <div
                class="fl-grow-1 theme-color-wrapper di-flex jc-center ai-center"
                :class="`prototype-colors:background-${name}`"
                v-for="(hash, name) in filterColors(colorsClasses[i], 'shade')"
              >
                <div
                  class="theme-color-hover te-center"
                  :class="
                    parseInt(hash.slice(1, 7), 16) > 10230527
                      ? 'text-grey-shade-15'
                      : 'text-grey-tint-15'
                  "
                >
                  {{ name }}
                </div>
              </div>
            </div>
            <div
              class="di-flex fl-grow-1"
              v-if="Object.keys(filterColors(colorsClasses[i], 'tone')).length"
            >
              <div
                class="fl-grow-1 theme-color-wrapper di-flex jc-center ai-center"
                :class="`prototype-colors:background-${name}`"
                v-for="(hash, name) in filterColors(colorsClasses[i], 'tone')"
              >
                <div
                  class="theme-color-hover te-center"
                  :class="
                    parseInt(hash.slice(1, 7), 16) > 10230527
                      ? 'text-grey-shade-15'
                      : 'text-grey-tint-15'
                  "
                >
                  {{ name }}
                </div>
              </div>
            </div>

            <div
              class="di-flex fl-grow-1 png-squares"
              v-if="Object.keys(filterColors(colorsClasses[i], 'blend')).length"
            >
              <div
                style="z-index: 2;"
                class="fl-grow-1 theme-color-wrapper di-flex jc-center ai-center"
                :class="`prototype-colors:background-${name}`"
                v-for="(hash, name) in filterColors(colorsClasses[i], 'blend')"
              >
                <div class="theme-color-hover te-center">
                  {{ name }}
                </div>
              </div>
            </div>
          </div>
          <div class="di-flex ai-stretch">
            <a-button
              @click="openColorEditor(i)"
              template="text"
              rounded="right-5"
            >
              <a-icon color="white">pencil</a-icon>
            </a-button>
          </div>
        </div>
      </div>
    </template>
    <template #options>
      <div class="fs-8 dark:text-primary-tint-9 text-primary-shade-9">
        Themes
      </div>
      <div class="fs-4 pb-5 dark:text-primary-tint-8 text-primary-shade-8">
        Lets you configure colors based on a theme.
      </div>

      <div v-for="(theme, i) in config.themes" class="di-flex fl-column">
        <div class="di-flex ai-center mt-1">
          <a-input
            label="Theme"
            icon="palette"
            :disabled="config.themes[i] === 'default'"
            v-model="config.themes[i]"
          ></a-input>
          <a-button
            :disabled="config.themes[i] === 'default'"
            size="2"
            color="red"
            class="ar-1 ml-2"
            template="text"
          >
            <a-icon size="3">delete</a-icon>
          </a-button>
        </div>
      </div>
      <a-button
        @click="addTheme()"
        template="text"
        rounded="3"
        class="wi-100"
        size="1"
      >
        <a-icon size="2" class="mr-1">plus</a-icon>
        Add theme
      </a-button>
      <div class="mt-5 fs-8 dark:text-primary-tint-9 text-primary-shade-9">
        Colors
      </div>
      <div class="fs-4 pb-5 dark:text-primary-tint-8 text-primary-shade-8">
        Add colors for your application.
      </div>
      <div v-for="(color, i) in colors">
        <div class="di-flex ai-center">
          <a-input
            @update:model-value="debounceGenerate(i)"
            icon="water"
            class="fl-grow-1"
            v-model="color.name"
            label="Name"
          ></a-input>
          <a-input
            @update:model-value="debounceGenerate(i)"
            v-model="color.hash"
            class="fl-grow-1"
            label="Color"
          ></a-input>
          <a-color-picker
            @update:model-value="debounceGenerate(i)"
            v-model="color.hash"
            label="Color"
            class="ml-4"
          ></a-color-picker>
          <a-button
            @click="deleteColor(i)"
            size="2"
            class="ar-1 ml-2"
            template="text"
            color="red"
          >
            <a-icon size="3">delete</a-icon>
          </a-button>
        </div>
      </div>
      <a-button
        @click="addColor()"
        template="text"
        rounded="3"
        class="wi-100"
        size="1"
      >
        <a-icon size="2" class="mr-1">plus</a-icon>
        Add color
      </a-button>
    </template>
  </main-layout>
</template>
<script setup lang="ts">
import {
  generateClasses,
  generateColorScheme,
  generateStyle,
  prefixClasses,
} from '@/config/functions'
import { generateColorValues, isValid } from '@/config/colors'
const { $appendStyle } = useNuxtApp()
let timer: NodeJS.Timeout
function debounce(func: Function, wait = 1000) {
  clearTimeout(timer)
  timer = setTimeout(() => {
    func()
  }, wait)
}

let error = ref(false)
let loading = ref(false)
let fontSize = ref(5)
let showColorEditor = ref(false)
let config = useConfig()
let colors = useColors()
let colorsClasses = ref(
  colors.value.map((color) => {
    return generateColorValues(color)
  }),
)
function debounceGenerate(i: number) {
  debounce(() => {
    generateColors(i)
  }, 300)
}
function generateColors(i: number) {
  let color = colors.value[i]
  if (!color.name || !isValid(color.hash)) return
  colorsClasses.value[i] = generateColorValues(color)
  $appendStyle(
    generateClasses(
      prefixClasses(
        generateColorScheme(color),
        `prototype-colors .prototype-colors`,
      ),
    ),
    `color-${i}`,
  )
}
let currentColor = ref({})
let currentColorIndex = ref(0)
function openColorEditor(i: number) {
  showColorEditor.value = true
  currentColor.value = colors.value[i]
  currentColorIndex.value = i
}
function updateColor(color) {
  colors.value[currentColorIndex.value] = color
  generateColors(currentColorIndex.value)
}
function deleteColor(index: number) {
  colors.value.splice(index, 1)
}
function addColor() {
  colorsClasses.value.push([])
  colors.value.push({
    name: '',
    hash: '#000000',
    options: { tints: 10, shades: 10, tones: 10, alphas: 10 },
  })
  generateColors(colors.value.length - 1)
}
function addTheme() {
  config.value.themes.push('')
}
function filterColors(colorObject: object, key: string) {
  return Object.fromEntries(
    Object.entries(colorObject).filter(([property, value]) =>
      property.includes(key),
    ),
  )
}
onBeforeMount(() => {
  colors.value.forEach((color, i) => {
    $appendStyle(
      generateClasses(
        prefixClasses(
          generateColorScheme(color),
          `prototype-colors .prototype-colors`,
        ),
      ),
      `color-${i}`,
    )
  })
})
</script>
<style scoped>
.theme-color-wrapper {
  will-change: flex-basis;

  flex-basis: 1px;
  transition: flex-basis 0.3s;
}
.theme-color-wrapper:hover {
  flex-basis: 150px;
}
.theme-color-hover {
  width: 0;
  white-space: nowrap;
  will-change: opacity, width;

  transition: opacity 0.3s, width 0.5s;
  opacity: 0;
  overflow: hidden;
}
div:hover > .theme-color-hover {
  width: 150px;
  opacity: 1;
}
.png-squares {
  position: relative;
  background-repeat: repeat;
  background-color: #ccc;
  background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2"><path d="M1 2V0h1v1H0v1z" fill-opacity="0.3"/></svg>');
  background-size: 20px 20px;
}
</style>
