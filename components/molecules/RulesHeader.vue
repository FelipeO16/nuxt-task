<template>
  <b-col class="rules-header">
    <DefaultButton to="/" class="p-2">
      <b-icon icon="power" aria-hidden="true"></b-icon>
      <span class="ml-1">Logout</span>
    </DefaultButton>
  </b-col>
</template>

<script>
import { BIcon, BIconPower } from 'bootstrap-vue'
export default {
  components: {
    BIcon,
    BIconPower,
  },
}
</script>

<style scoped></style>
