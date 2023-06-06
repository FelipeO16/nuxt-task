<template>
  <div class="error-404">
    <h1>You are not logged in.</h1>
    <a href="/">Return to home page...</a>
  </div>
</template>
<script>
export default {
  name: 'Error',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
