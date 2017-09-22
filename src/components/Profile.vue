<template lang="pug">
  .profile
    h2 {{ msg }}
</template>

<script>
  export default {
    name: 'profile',
    data() {
      return {
        msg: 'Profile page'
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
