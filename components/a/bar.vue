<template>
  <div class="a-bar ro-5 background-grey-blend-8">
    <a-transition-grow-x>
      <div
        v-show="show && !loading"
        :class="`background-${color}`"
        class="a-bar-indicator ro-5 transition"
      ></div>
    </a-transition-grow-x>
    <div
      v-show="loading"
      :class="`background-${color}`"
      class="a-loading-bar"
    ></div>
  </div>
</template>
<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'primary',
  },
  show: {
    type: [Boolean, Number, String],
    default: false,
  },

  loading: {
    type: [Boolean, Number, String],
    default: false,
  },
  height: {
    type: String,
    default: '1px',
  },
  width: {
    type: String,
    default: '100%',
  },
})
</script>

<style>
.a-bar {
  bottom: 0;
  height: v-bind(height);
  z-index: 0;
  width: v-bind(width);
  display: flex;
  justify-content: stretch;
  align-items: stretch;
}

.a-bar-indicator {
  min-height: 100%;
  width: 100%;
}
.a-loading-bar {
  position: absolute;
  min-height: 100%;
  animation: loading-bar 1s ease-in-out alternate infinite;
}
@keyframes loading-bar {
  from {
    width: 0;
    right: 100%;
  }
  50% {
    width: 100%;
    right: 0;
  }
  to {
    width: 0;
    right: 0;
  }
}
</style>
