<template lang="pug">
  .about
    h2 {{ msg }}
</template>

<script>
  export default {
    name: 'About',
    data() {
      return {
        msg: 'About page'
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
