<template>
  <v-app light>
    <v-navigation-drawer temporary v-model="drawer" overflow absolute>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar exact :to="{ name: 'Profile' }">
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>John Doe</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0">
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" exact :to="{ name: item.route }">
          <v-list-tile-action>
            <v-icon medium>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" light></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>

    <main>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <router-view></router-view>
        </v-slide-y-transition>
      </v-container>
    </main>

    <v-footer fixed>
      <v-spacer></v-spacer>
      <div>Decision Lab&trade;</div>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'home', route: 'Landing' },
          { title: 'Feed', icon: 'question_answer', route: 'Feed' },
          { title: 'Arena', icon: 'games', route: 'Arena' },
          { title: 'Wallet', icon: 'monetization_on', route: 'Wallet' }
        ],
        title: "Greg's Best Idea Ever"
      };
    }
  };
</script>
