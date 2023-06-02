<template>
  <b-button
    block
    class="btn-settings bg-orange d-flex align-items-center justify-content-center"
    @click="$router.push(to)"
  >
    <slot></slot>
  </b-button>
</template>

<script>
export default {
  name: 'DefaultButton',
  props: {
    to: {
      type: String,
      default: '/',
    },
  },
}
</script>
