<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    class="flui-logo wi-100 ov-visible"
    viewBox="0 0 112.32 112.32"
    xml:space="preserve"
  >
    <g
      :class="`transition background-${color}-tint-5 dark:background-${color}-tint-6`"
    >
      <g>
        <path
          class="flui-path"
          v-animate="lineAnimation"
          d="M112,4.9c-1.2-3.7-5.2-5.7-9-4.5L66.7,12.5c0,0-0.1,0-0.1,0.1c-0.1,0-0.2,0.1-0.3,0.1c-0.1,0-0.2,0.1-0.3,0.2
	c-0.1,0-0.2,0.1-0.2,0.1c-0.1,0.1-0.3,0.1-0.4,0.2c-0.1,0-0.1,0.1-0.2,0.1c-0.1,0.1-0.3,0.2-0.4,0.3c0,0-0.1,0.1-0.1,0.1
	c-0.1,0.1-0.3,0.2-0.4,0.3c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0.1-0.1,0.1-0.1,0.2c-0.1,0.1-0.2,0.2-0.3,0.4
	c-0.1,0.1-0.1,0.1-0.1,0.2c-0.1,0.1-0.2,0.2-0.2,0.4c0,0.1-0.1,0.2-0.1,0.2c-0.1,0.1-0.1,0.3-0.2,0.4c0,0.1-0.1,0.2-0.1,0.2
	c-0.1,0.1-0.1,0.3-0.2,0.4c0,0,0,0.1,0,0.1l-11,32.9l-32.9,11C9.8,63.7,3.2,70.6,0.9,79.4c-2.3,8.5-0.2,17.5,5.6,24
	c0.3,0.4,0.7,0.8,1.1,1.2c0.4,0.4,0.8,0.8,1.2,1.1c4.8,4.3,10.9,6.5,17.2,6.5c2.3,0,4.6-0.3,6.8-0.9c8.8-2.3,15.8-8.9,18.6-17.5
	l11-32.9l32.9-11c3.7-1.2,5.7-5.2,4.5-9c-1.2-3.7-5.2-5.7-9-4.5l-22.8,7.6l6.5-19.4l32.9-11C111.2,12.6,113.2,8.6,112,4.9z
	 M38.1,89.4c-1.4,4.1-4.7,7.2-8.9,8.3c-4,1.1-8,0.1-11-2.5c-0.2-0.2-0.4-0.4-0.6-0.6c-0.2-0.2-0.4-0.4-0.6-0.6c-2.7-3-3.6-7-2.5-11
	c1.1-4.2,4.2-7.5,8.3-8.9l22.8-7.6L38.1,89.4z"
        />
      </g>
    </g>
  </svg>
</template>
<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'primary',
  },
})
let lineAnimation = ref({
  animation: (el) => [
    {
      strokeDashoffset: el.getTotalLength(),
      strokeDasharray: el.getTotalLength(),
      strokeWidth: 0,
      fillOpacity: 0,
    },
    {
      strokeDashoffset: 0,
      strokeWidth: 2,
      fillOpacity: 0,
      offset: 0.9,
      strokeDasharray: el.getTotalLength(),
    },
    {
      strokeDashoffset: 0,
      strokeWidth: 0,
      fillOpacity: 1,
      strokeDasharray: el.getTotalLength(),
    },
  ],
  options: {
    duration: 4000,
    delay: 500,
    easing: 'ease-in-out',
    //direction: 'forwards',
    fill: 'forwards',
  },
})
</script>
<style scoped>
.flui-path {
  stroke-dashoffset: 0;
  stroke-dasharray: 0;
  fill-opacity: 0;
  stroke-width: 0;
  stroke: white;
}
</style>
