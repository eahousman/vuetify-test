<template lang="pug">
  .feed
    v-toolbar.primary(flat dark)
      v-toolbar-title(scroll-off-screen) {{pageTitle}}
</template>

<script>
  export default {
    name: 'Feed',
    data() {
      return {
        pageTitle: 'Feed'
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
