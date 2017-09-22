import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/components/Landing';
import Profile from '@/components/Profile';
import Feed from '@/components/Feed';
import Arena from '@/components/Arena';
import Wallet from '@/components/Wallet';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    }, {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }, {
      path: '/feed',
      name: 'Feed',
      component: Feed
    }, {
      path: '/arena',
      name: 'Arena',
      component: Arena
    }, {
      path: '/wallet',
      name: 'Wallet',
      component: Wallet
    }
  ]
});
