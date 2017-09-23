<template lang="pug">
  .user
    h2 {{ msg }}
</template>

<script>
  export default {
    name: 'user',
    data() {
      return {
        msg: 'User page'
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
