<template>
  <div class="fl-grow-1 ov-hidden row jc-center wi-100">
    <div class="col-6 mt-10">
      <div class="fs-8">
        Utilities
      </div>
      <div class="opacity-8">
        Utilities are classes that involve
        <strong>length, positioning</strong>
        and
        <strong>alignment</strong>
        .
        <br />
        All utility classes are responsive, and can be prefixed by
        <span class="background-primary-blend-7 ro-2 px-1">
          {viewport}:{utility}-{value}
        </span>
        .
        <div class="fs-3 mt-1">
          Example:
          <span class="background-primary-blend-7 ro-2 px-1">
            po-static md:po-absolute
          </span>
          class means this element will be static in smaller viewports, and
          absolute in bigger viewports.
        </div>

        <br />
        <br />
        Because they are often used in groups, and we like to keep our code
        clean, they are abbreviated for better readability.
        <br />
        Also, they are standardized, so that you
        <strong>dont need to memorize all utility classes</strong>
        .
        <br />
        The abbreviation works in this way:
        <br />
        If a Css property has only one word, the first two letters are used,
        followed by the value.
        <br />
        So
        <span
          class="px-1 ro-2 background-red-blend-8 dark:text-yellow-tint-7 text-yellow-shade-6"
        >
          position: absolute;
        </span>
        becomes
        <span
          class="px-1 ro-2 background-red-blend-8 dark:text-yellow-tint-7 text-yellow-shade-6"
        >
          po-absolute
        </span>
        <br />
        If a Css property has two words, the first letter of each word are used.
        <br />
        So
        <span
          class="px-1 ro-2 background-red-blend-8 dark:text-yellow-tint-7 text-yellow-shade-6"
        >
          justify-content: center;
        </span>
        becomes
        <span
          class="px-1 ro-2 background-red-blend-8 dark:text-yellow-tint-7 text-yellow-shade-6"
        >
          jc-center
        </span>
        <br />
      </div>
      <div class="fs-7">Caveats</div>
      <div class="opacity-8">
        Nothing is perfect, and we need to talk about max-width/heigth and
        min-width/heigth . These classes you are going to have to memorize, but
        don't worry.
        <br />
        <span
          class="px-1 ro-2 background-red-blend-8 dark:text-yellow-tint-7 text-yellow-shade-6"
        >
          max-width: 100%;
        </span>
        becomes
        <span
          class="px-1 ro-2 background-red-blend-8 dark:text-yellow-tint-7 text-yellow-shade-6"
        >
          wi-max-100
        </span>
        .
        <br />
        <span
          class="px-1 ro-2 background-red-blend-8 dark:text-yellow-tint-7 text-yellow-shade-6"
        >
          max-heigth: 100%;
        </span>
        becomes
        <span
          class="px-1 ro-2 background-red-blend-8 dark:text-yellow-tint-7 text-yellow-shade-6"
        >
          he-max-100
        </span>
        .
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
