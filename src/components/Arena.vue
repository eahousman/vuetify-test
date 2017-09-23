<template lang="pug">
  .arena
    h2 {{ msg }}

    v-container(fluid grid-list-lg)
      v-layout(row wrap v-for="item in [1,2,3,4]")
        v-flex(xs12)
          v-card.blue-grey.darken-2.white--text
            v-container(fluid grid-list-md)
              v-layout(row)
                v-flex(xs1)
                  v-card-media.white--text(src="https://vuetifyjs.com/static/doc-images/cards/docks.jpg" height="75px")
                v-flex(xs11)
                  v-card-title(primary-title)
                    .headline Header line

            v-card-actions.blue-grey.darken-3
              v-chip.primary.white--text
                v-avatar
                  v-icon account_circle
                | Testing
              v-chip.green.white--text
                v-avatar.green.darken-4 5
                | People

              v-spacer

              v-btn(icon dark v-tooltip:top="{ html: 'Favorite' }")
                v-icon favorite_border
              v-btn(icon dark v-tooltip:top="{ html: 'Edit' }")
                v-icon create
              v-btn(icon dark v-tooltip:top="{ html: 'Go' }")
                v-icon input

    v-container(fluid)
      .text-xs-center
        v-pagination(:length="6", v-model="currentPage")
</template>

<script>
  export default {
    name: 'Arena',
    data() {
      return {
        msg: 'Arena page',
        currentPage: 1
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
