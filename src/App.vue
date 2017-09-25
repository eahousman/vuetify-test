<template lang="pug">
  v-app(light)
    v-navigation-drawer(permanent clipped :mini-variant="mini")
      v-list.pt-0
        v-list-tile(exact, v-for="item in items", :key="item.title", :to="{ name: item.route }")
          v-list-tile-action
            v-icon(medium) {{ item.icon }}
          v-list-tile-content
            v-list-tile-title {{ item.title }}
        v-list-tile(@click="mini = !mini")
          v-list-tile-action
            v-icon(medium) {{ mini ? 'chevron_right' : 'chevron_left' }}
          v-list-tile-content
            v-list-tile-title Collapse


    v-toolbar(fixed)
      v-toolbar-title {{title}}
      v-spacer
      router-link(tag="div", :to="{ name: 'User' }" style="cursor: pointer;")
        v-avatar
          img(src="https://randomuser.me/api/portraits/men/85.jpg")
        | John Doe

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
        mini: false,
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
