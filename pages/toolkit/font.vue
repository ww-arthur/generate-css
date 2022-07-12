<template>
  <main-layout card-class="prototype-font">
    <template #card>
      <div
        class="dark:background-grey-shade-11 background-grey-tint-11 po-sticky to-0 mx-n10"
      >
        <div class="row py-1 ai-center mx-5">
          <div class="col-6 px-3">
            <a-input label="Sentence" v-model="displayText"></a-input>
          </div>
          <div class="col-3 px-3">
            <a-slider label="Size" v-model="fontSize" min="1" max="10">
              {{ fontSize }}
            </a-slider>
          </div>
        </div>
      </div>
      <div
        v-for="(value, weight) in fontWeights"
        :class="`fw-${weight}`"
        class="bw-bottom-1 border-grey-blend-5 my-2"
      >
        <span class="dark:text-primary-tint-5 text-primary-shade-5">
          fw-{{ weight }}
        </span>
        <div :class="`fs-${fontSize}`">
          {{ displayText }}
        </div>
      </div>
    </template>
    <template #options>
      <div class="fs-8 dark:text-primary-tint-9 text-primary-shade-9">
        Pick your font family
      </div>
      <div class="fs-4 pb-10 dark:text-primary-tint-8 text-primary-shade-9">
        Inform a Google font family to generate @font-faces for your project
      </div>

      <a-input
        :loading="loading"
        icon="format-font"
        v-model="config.fontName"
        label="Font family"
      ></a-input>
      <div class="fs-2" v-if="error">
        No font was found with this name, check
        <a
          href="https://fonts.google.com/"
          class="text-decoration-underline dark:text-primary-tint-8:hover text-primary-shade-8:hover"
        >
          fonts.google.com
        </a>
        for available fonts.
      </div>
      <div class="fw-6 fs-7 mt-10">
        Font sizes
      </div>
      <div class="fs-4 dark:text-primary-tint-8 text-primary-shade-8">
        Configure the font sizes that you'll use.
      </div>
      <div class="mt-5 lg:wi-25 md:wi-50 wi-50">
        <div v-for="(fontSize, key) in config.fontSizes">
          <a-input
            @update:modelValue="delayGenerateStyle"
            v-model="config.fontSizes[key]"
          >
            <template #prepend>
              <span
                style="border-style: solid; border-width: 0px;"
                class="fw-8 mr-3 1 border-primary"
              >
                {{ key }}
              </span>
            </template>
          </a-input>
        </div>
      </div>
    </template>
  </main-layout>
</template>
<script setup lang="ts">
import {
  generateUtilityClassArray,
  generateClasses,
  generateGoogleFontsLink,
  getCssFontWeights,
} from '@/config/functions'
const { $appendStyle } = useNuxtApp()

let error = ref(false)
let loading = ref(false)
let fontSize = ref(8)
let displayText = ref('The quick brown fox jumps over the lazy dog.')
onMounted(() => {
  fetchGoogleFont()
  generateStyle()
})

let config = useConfig()
let fontName = ref('Poppins')
watch(
  () => config.value.fontName,
  (newValue) => {
    if (!loading.value) {
      loading.value = true
    }
    debounceSearch()
  },
)
let fontCss = ref('')

const fontWeights = computed(() => {
  return getCssFontWeights(fontCss.value)
})
watch(
  () => fontWeights.value,
  () => generateStyle(),
)
watch(
  () => fontName.value,
  () => generateStyle(),
)
function generateStyle() {
  const fontUtilities = {
    fs: {
      properties: ['font-size'],
      values: config.value.fontSizes,
    },
    fw: {
      properties: ['font-weight'],
      values: fontWeights.value,
    },
  }
  const css = generateClasses(
    generateUtilityClassArray(fontUtilities).map(([className, content]) => {
      return [`prototype-font .${className}`, content]
    }),
  )
  $appendStyle(fontCss.value + css)
}
let delayGenerateStyle = debounce(() => {
  generateStyle()
}, 300)
function debounce(func, timeout = 300) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}
let debounceSearch = debounce(() => {
  fetchGoogleFont()
}, 1000)
async function fetchGoogleFont() {
  try {
    let fontFaces = await fetch(
      generateGoogleFontsLink(config.value.fontName, [
        100,
        200,
        300,
        400,
        500,
        600,
        700,
        800,
        900,
      ]),
    )

    fontCss.value = await fontFaces.text()
    fontName.value = config.value.fontName

    error.value = false
  } catch (err) {
    error.value = true
  } finally {
    loading.value = false
  }
}
</script>
<style>
.prototype-font {
  font-family: v-bind(fontName);
}
</style>
