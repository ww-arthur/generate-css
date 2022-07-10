<template>
  <transition name="grow-x">
    <slot></slot>
  </transition>
</template>
<style>
.grow-x-enter-to,
.grow-x-leave-from {
  width: 100% !important;
}

.grow-x-leave-to,
.grow-x-enter-from {
  width: 0 !important;
}
</style>
