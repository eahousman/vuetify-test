<template lang="pug">
  .arena
    h2 {{ msg }}
</template>

<script>
  export default {
    name: 'Arena',
    data() {
      return {
        msg: 'Arena page'
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
