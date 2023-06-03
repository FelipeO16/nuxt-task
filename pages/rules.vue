<template>
  <b-container fluid class="rules">
    <RulesTemplate />
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Rules',
  transition: 'rules',
})
</script>

<style scoped>
.rules {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #282828;
}

.rules-enter-active,
.rules-leave-active {
  transition: opacity 0.5s;
}
.rules-enter,
.rules-leave-active {
  opacity: 0;
}
</style>
