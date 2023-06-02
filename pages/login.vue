<template>
  <b-container fluid class="login">
    <LoginTemplate />
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Login',
  transition: 'login',
})
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #282828;
}

.login-enter-active,
.login-leave-active {
  transition: opacity 0.5s;
}
.login-enter,
.login-leave-active {
  opacity: 0;
}
</style>
