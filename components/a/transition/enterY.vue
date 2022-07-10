<template>
  <transition name="enter-y">
    <slot></slot>
  </transition>
</template>
<style>
.enter-y-enter-to,
.enter-y-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.enter-y-enter-active {
  transition: all 0.2s ease-in-out;
}
.enter-y-leave-active {
  transition: all 0.2s ease-out;
}
.enter-y-leave-to,
.enter-y-enter-from {
  transform: translateY(10%);
  opacity: 0;
}
</style>
