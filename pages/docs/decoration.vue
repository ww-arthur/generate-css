<template>
  <div class="fl-grow-1 ov-hidden row jc-center wi-100">
    <div class="col-6 mt-10">
      <div class="fs-8">
        Utilities
      </div>
      <div class="opacity-8">
        Decoration classes gives you full control of all colors in your
        application.
        <br />
        All decoration classes have selectors, and can be suffixed by
        <span class="background-primary-blend-7 ro-2 px-1">
          {decoration}-{value}:{selector}
        </span>
        .
        <div class="fs-3 my-2">
          Example:
          <span class="background-primary-blend-7 ro-2 px-1">
            background-primary background-primary-shade-8:hover
          </span>
          class means this element will get darker when hovered.
        </div>

        <div class="di-flex jc-center ai-center">
          <div
            class="pa-10 ro-4 transition background-primary background-primary-shade-8:hover"
          ></div>
        </div>
        <br />
        <br />
        Decoration classes gives you full controll of all colors in your
        application. And they are written in a non-abbreviated way, making it
        easier to understand what is going on with every div in your
        application.
        <br />
        Properties: background, text, bloom, and border.
      </div>

      <div class="fs-8 fw-4 mt-9">
        That's it for now!
      </div>
      <div class="fs-6 fw-2">
        Documentation will soon be more complete, but while you wait,
        <nuxt-link
          to="/toolkit/font"
          class="dark:text-primary-tint-6 text-primary-shade-6"
        >
          take a look at the generator
        </nuxt-link>
        .
      </div>
    </div>
  </div>
</template>
