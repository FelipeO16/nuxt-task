<template>
  <b-col class="rules-header">
    <DefaultButton to="/" class="p-2">
      <b-icon-power aria-hidden="true"></b-icon-power>
      <span class="ml-1">Logout</span>
    </DefaultButton>
  </b-col>
</template>

<script>
import { BIconPower } from 'bootstrap-vue'
export default {
  components: {
    BIconPower,
  },
}
</script>

<style scoped></style>
