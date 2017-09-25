<template lang="pug">
  v-app(light)
    v-navigation-drawer(temporary v-model="drawer")
      v-toolbar.transparent(flat)
        v-list.pa-0
          v-list-tile(avatar exact, :to="{ name: 'User' }")
            v-list-tile-avatar
              img(src="https://randomuser.me/api/portraits/men/85.jpg")
            v-list-tile-content
              v-list-tile-title John Doe

      v-list.pt-0
        v-divider
        v-list-tile(exact, v-for="item in items", :key="item.title", :to="{ name: item.route }")
          v-list-tile-action
            v-icon(medium) {{ item.icon }}
          v-list-tile-content
            v-list-tile-title {{ item.title }}

    v-toolbar(fixed)
      v-toolbar-side-icon(light @click.stop="drawer = !drawer")
      router-link.toolbar__title(tag="span", :to="{ name: 'Landing' }", style="cursor: pointer;") {{title}}

    main
      v-slide-y-transition(mode="out-in")
        router-view

    v-footer(fixed)
      v-spacer
      div Footnote
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
        items: [
          { title: 'Home', icon: 'home', route: 'Landing' },
          { title: 'Feed', icon: 'question_answer', route: 'Feed' },
          { title: 'Arena', icon: 'games', route: 'Arena' },
          { title: 'Wallet', icon: 'monetization_on', route: 'Wallet' }
        ],
        title: 'App Name'
      };
    }
  };
</script>
