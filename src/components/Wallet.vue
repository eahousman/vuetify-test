<template lang="pug">
  .wallet
    h2 {{ msg }}
</template>

<script>
  export default {
    name: 'Wallet',
    data() {
      return {
        msg: 'Wallet page'
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
