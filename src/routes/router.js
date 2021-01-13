import { createRouter, createWebHistory } from 'vue-router';

import AliasCat from '../components/layout/AliasCat.vue';

const Router = createRouter({
   history: createWebHistory(),
   linkActiveClass: 'active-link',
   linkExactActiveClass: 'exact-active-link',
   scrollBehaviour(_to, _from, savedPosition) {
      if (savedPosition) {
         return savedPosition;
      }
      return { left: 0, top: 0 };
   },
   routes: [
      {
         name: 'home',
         path: '/',
         component: AliasCat,
         props: { aliasCat: 'basic' },
      },
      {
         name: 'basic',
         path: '/basic',
         component: AliasCat,
         props: { aliasCat: 'basic' },
      },
      {
         name: 'commit',
         path: '/commit',
         component: AliasCat,
         props: { aliasCat: 'commit' },
      },
      {
         name: 'file',
         path: '/file',
         component: AliasCat,
         props: { aliasCat: 'file' },
      },
      {
         name: 'branch',
         path: '/branch',
         component: AliasCat,
         props: { aliasCat: 'branch' },
      },
      {
         name: 'remote',
         path: '/remote',
         component: AliasCat,
         props: { aliasCat: 'remote' },
      },
      {
         name: 'tag',
         path: '/tag',
         component: AliasCat,
         props: { aliasCat: 'tag' },
      },
      {
         name: 'log',
         path: '/log',
         component: AliasCat,
         props: { aliasCat: 'log' },
      },
      {
         name: 'notFound',
         path: '/:catchAll(.*)*',
         props: false,
         redirect: '/',
      },
   ],
});

export default Router;
