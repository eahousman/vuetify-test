<template lang="pug">
  .feed
    h2 {{ msg }}
</template>

<script>
  export default {
    name: 'Feed',
    data() {
      return {
        msg: 'Feed page'
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
