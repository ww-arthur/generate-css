<template>
  <div>
    <div class="fs-8 bw-bottom-1 border-grey-blend-6">
      Decoration
    </div>
    <div class="fs-7 fw-6 pb-2 mb-2">
      Colors
    </div>
    <div class="mb-3">
      <div class="fs-5 fw-3 bw-bottom-1 border-grey-blend-6 pb-2 mb-2">
        Model:
        <span
          class="fs-4 background-primary-blend-7 text-primary-shade-7 dark:text-primary-tint-7 ro-3 pa-1 mx-1"
        >
          {property}?-{value}-{color}?-{mode}?-{value}?-gradient-{direction}
        </span>
      </div>
      <div class="fs-3 fw-3">
        Properties
        <span
          v-for="property in properties"
          class="fs-2 background-red-blend-8 text-red-shade-8 dark:text-red-tint-8 ro-2 px-1 mx-1"
        >
          {{ property }}
        </span>
      </div>
      <div class="fs-3 fw-3 te-truncate">
        Modes:
        <span
          v-for="mode in modes"
          class="fs-2 background-green-blend-8 text-green-shade-8 dark:text-green-tint-8 ro-2 px-1 mx-1"
        >
          {{ mode }}
        </span>
      </div>
      <div class="fs-3 fw-3 te-truncate">
        Gradients:
        <span
          v-for="gradient in gradients"
          class="fs-2 background-grey-blend-8 text-grey-shade-8 dark:text-grey-tint-8 ro-2 px-1 mx-1"
        >
          {{ gradient }}
        </span>
      </div>

      <div class="mt-3 fs-6 mt-9">Properties</div>
      <div
        v-for="property in properties"
        class="bw-2 pa-2 my-2 ro-4"
        :class="`${property === 'bloom' ? 'bloom-2' : property}-primary-tone-6`"
      >
        {{ property === 'bloom' ? 'bloom-2' : property }}-primary-tone-6
      </div>
      <div class="mt-3 fs-6 mt-9">Modes</div>
      <div class="row mx-n4">
        <div v-for="mode in modes" class="fs-1 col-6 md:col-3 pa-4">
          background-primary-{{ mode }}-6

          <div
            class="pa-5 ar-1 wi-100"
            :class="`background-primary-${mode}-8 ro-4`"
          ></div>
        </div>
      </div>
      <div class="mt-3 fs-6 mt-9">Gradients</div>
      <div class="row mx-n4">
        <div v-for="gradient in gradients" class="fs-1 col-6 md:col-4 pa-4">
          background-primary-gradient-{{ gradient }}

          <div
            class="pa-5 ar-1 wi-100"
            :class="`background-primary-gradient-${gradient} bw-2 border-primary ro-4`"
          ></div>
        </div>
      </div>
      <div class="mt-3 fs-6 mt-9">Bloom</div>
      <div class="row mx-n4">
        <div v-for="bloom in 5" class="fs-1 col-6 md:col-4 lg:col-2 pa-4">
          bloom-{{ bloom }}-primary

          <div
            class="pa-5 ar-1 wi-100"
            :class="`background-grey bloom-${bloom}-primary ro-4`"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  title: 'Decoration',
  key: 'decoration',
})
let properties = ref(['background', 'text', 'bloom', 'border'])
let modes = ref(['tint', 'shade', 'tone', 'blend'])
let gradients = ref([
  'top',
  'left',
  'bottom',
  'right',
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
  'radial',
])
</script>
