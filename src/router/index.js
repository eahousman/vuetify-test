import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/components/Landing';
import User from '@/components/User';
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
      path: '/user',
      name: 'User',
      component: User
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
