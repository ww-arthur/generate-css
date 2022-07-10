<template>
  <NuxtLink
    :to="toRoute.href"
    v-ripple
    class="item text-primary-tint-9 background-grey-blend-8:hover ro-pill po-relative ov-hidden row fl-column ai-center jc-center md:px-2 py-2 fl-wrap"
  >
    <!--  <div
      v-if="icon || $slots.icon"
      class="di-flex ai-center jc-center md:pa-1 mx-2 ar-1"
    >
      <slot name="icon" :attrs="iconAttrs">
        <a-icon v-if="icon" v-bind="iconAttrs">
          {{ icon }}
        </a-icon>
      </slot>
    </div> -->
    <div class="fs-4">
      <slot>
        {{ text }}
      </slot>
    </div>
    <a-bar
      :show="isActive"
      height="3px"
      width="30%"
      color="primary-shade-6"
    ></a-bar>
  </NuxtLink>
</template>
<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'white',
  },
  icon: {
    type: String,
    default: '',
  },
  iconSize: {
    type: [String, Number],
    default: '24px',
  },
  label: {
    type: String,
    default: '',
  },

  text: {
    type: String,
    default: '',
  },
  to: {
    type: [String, Object],
    defaul: '',
  },
  active: {
    type: Boolean,
    default: false,
  },
})
const route = useRoute()
const router = useRouter()
let toRoute = computed(() => {
  return props.to ? router.resolve(props.to) : {}
})
let tag = computed(() => {
  return props.to ? 'nuxt-link' : 'div'
})
let isActive = computed(() => {
  return (
    props.active ||
    toRoute.value.name?.split('-').some((name) => route.name?.includes(name))
  )
})

let iconAttrs = computed(() => ({
  size: props.iconSize,
  color: props.color,
}))
</script>
