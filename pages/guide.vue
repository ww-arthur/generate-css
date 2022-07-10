<template>
  <div class="fl-grow-1 di-flex fl-column oy-auto ox-hidden">
    <a-row
      cols="12 12 12 12 12"
      sm="10 10 10 10 10"
      md="7 7 7 7 7"
      justify="center"
      gutter="10"
      class="mt-0"
    >
      <template #0>
        <div class="fs-8">
          How it works?
        </div>
        <div>
          We know how overwhelming and frustrating creating styles can be.
          <br />
          And we are here to fix this. Providing a way to visualize your styles
          before you start coding.
          <br />
          <br />
          You can start by
          <nuxt-link
            to="/toolkit/font"
            class="dark:text-primary-tint-4 text-primary-shade-4"
          >
            creating a toolkit
          </nuxt-link>
          .
          <br />
          There you will find configuration pages for: fonts, themes,
          breakpoints, grid, spacers, and borders.
          <br />
          Every aspect of your stylesheet can be edited, and after you are
          pleased with your styles, you can download a .css file to include in
          your project.
        </div>
      </template>
      <template #1>
        <div class="fs-8 fw-4">
          That's it for now!
        </div>
        <div class="fs-6 fw-2">
          This guide will soon be more complete, but while you wait,
          <nuxt-link
            to="/toolkit/font"
            class="dark:text-primary-tint-6 text-primary-shade-6"
          >
            take a look at the generator
          </nuxt-link>
          .
        </div>
      </template>
    </a-row>
  </div>
</template>
