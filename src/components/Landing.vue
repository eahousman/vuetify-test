<template lang="pug">
  .landing
    h2 {{ msg }}
</template>

<script>
export default {
  name: 'landing',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
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
