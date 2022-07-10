<template>
  <div
    class="fl-grow-1 di-flex fl-column oy-auto ox-hidden scroll-parent po-relative"
  >
    <main-waves style="top 0; left: 0;"></main-waves>

    <a-row
      class="he-min-100vh"
      style="z-index: 2;"
      cols="12"
      sm="11"
      md="10"
      lg="9"
      xl="8"
      justify="center"
      align="center"
    >
      <a-row
        class="jc-center ac-center"
        cols="3 12"
        md="3 12"
        sm="3 12"
        lg="2 12"
      >
        <template #0>
          <logos-flui class="bloom-2-grey-shade-8"></logos-flui>
        </template>
        <template #1>
          <div
            class="lg:pa-20 di-flex fl-column jc-center ai-center po-relative mb-4 text-light"
          >
            <div
              class="md:fs-9 fs-8 fw-7 text-primary-tint-9 bloom-1-grey-shade-9"
            >
              Create a
              <span
                style="color: transparent !important;"
                class="background-primary-tint-2-gradient-bottom-right background-primary dark:background-primary-tint-7 bc-text fw-9"
              >
                unique
              </span>
              CSS Toolkit
            </div>
            <div class="md:fs-5 fw-5 te-center">
              Using our toolkit creator, you can customize every aspect of your
              CSS toolkit.
              <br />
              Then rapidly create an unique interface from scratch.
            </div>
            <a-row
              class="mt-20 fl-wrap jc-center wi-100"
              cols="12 12 12"
              sm="6 6 6"
              md="6 6 6"
              lg="4 4 4"
              gutter="4"
            >
              <template #2>
                <a-button
                  to="/docs/utilities"
                  class="wi-100"
                  color="primary"
                  template="text"
                >
                  <a-icon class="mr-2">file-document</a-icon>
                  <span>Documentation</span>
                </a-button>
              </template>
              <template #1>
                <a-button to="/guide" class="wi-100" color="primary">
                  <a-icon class="mr-2">play</a-icon>
                  <span>Get started</span>
                </a-button>
              </template>

              <template #0>
                <a-button
                  class="wi-100"
                  to="/toolkit/font"
                  color="primary"
                  template="glassy"
                >
                  <a-icon>water-plus</a-icon>
                  <span>Create toolkit</span>
                </a-button>
              </template>
            </a-row>
          </div>
        </template>
      </a-row>
    </a-row>
    <a-row
      cols="12 12 12 12 12"
      sm="10 10 10 10 10"
      md="8 8 8 8 8"
      justify="center"
      gutter="20"
    >
      <template #0>
        <main-landing-card>
          <template #header>
            <span
              class="text-grey-blend-7 bc-text background-primary-gradient-left background-red"
            >
              Complete color control
            </span>
          </template>
          <template #subheader>And consistent</template>
          <template #text>
            Making the right choice for colors is hard, and not being able to
            see how things will look before compiling makes it even harder.

            <div class="mt-5">
              We provide a way to visually config your interface before start
              coding.
            </div>
          </template>
          <template #content>
            <div class="wi-100 ar-1 di-flex fl-column">
              <div
                class="row my-2 ro-6 ov-hidden"
                v-for="color in ['primary', 'red', 'yellow', 'green']"
              >
                <div
                  v-for="tint in 9"
                  class="col ar-1"
                  :class="`background-${color}-tint-${10 - tint}`"
                ></div>
                <div class="col ar-1" :class="` background-${color}`"></div>

                <div
                  v-for="shade in 9"
                  class="col ar-1"
                  :class="`background-${color}-shade-${shade}`"
                ></div>
              </div>
            </div>
          </template>
        </main-landing-card>
      </template>
      <template #1>
        <main-landing-card reverse>
          <template #header>Google fonts included</template>
          <template #subheader>
            And easy to use
          </template>
          <template #text>
            Making the right choice for colors is hard, and not being able to
            see how things will look before compiling makes it even harder.

            <div class="mt-5">
              We provide a way to visually config your interface before start
              coding.
            </div>
          </template>
          <template #content>
            <div
              class="wi-100 ar-1 background-grey-blend-9"
              style="
                background-image: url(./Google-Fonts.svg);
                background-size: 100%;
              "
            ></div>
          </template>
        </main-landing-card>
      </template>
      <template #2>
        <main-landing-card>
          <template #header>Dark & Light theme</template>
          <template #subheader>
            Or any theme you want
          </template>
          <template #text>
            Dark themes are a
            <span class="fw-6">must-have</span>
            nowadays, but generally they are hard to develop and be consistent.
            <div class="mt-2">
              With
              <span class="text-primary-shade-3 dark:text-primary-tint-3 fw-6">
                Flui
              </span>
              you can add any number of themes you want!
            </div>
          </template>
          <template #content>
            <a-icon color="grey" size="100%">
              palette-advanced
            </a-icon>
          </template>
        </main-landing-card>
      </template>
      <template #3>
        <main-landing-card reverse>
          <template #header>Customizable grid system</template>
          <template #subheader>
            Rows and cols in the way you want
          </template>
          <template #text>
            Usually grid systems are divided in 12 different column sizes.
            <div class="mt-2">
              But what if you want to make a 20 column based grid system?
            </div>
            <div class="mt-2">
              With our toolkit generator, you can visualize how your columns
              will look!
            </div>
          </template>
          <template #content>
            <a-icon color="grey" size="100%">
              table-pivot
            </a-icon>
          </template>
        </main-landing-card>
      </template>
      <template #4>
        <main-landing-card>
          <template #header>Responsive</template>
          <template #subheader>
            Beautiful in every device
          </template>
          <template #text>
            All utility classes generated are mobile-first, and you can choose
            what utility you will use in each viewport.
            <br />
            This makes alignment and sizing easy for developers and acessible
            for users.
          </template>
          <template #content>
            <a-icon color="grey" size="100%">
              responsive
            </a-icon>
          </template>
        </main-landing-card>
      </template>
    </a-row>
  </div>
</template>
<script setup>
let words = ['design', 'development', 'other']
let currentWord = ref('design')
function changeWord() {
  let nextIndex = words.findIndex((word) => word === currentWord.value) + 1
  if (nextIndex && nextIndex < words.length) {
    currentWord.value = words[nextIndex]
  } else {
    currentWord.value = words[0]
  }
}
</script>
