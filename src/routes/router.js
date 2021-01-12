import { createRouter, createWebHistory } from 'vue-router';

import BasicCard from '../components/cards/BasicCard.vue';
import BranchCard from '../components/cards/BranchCard.vue';
import CommitCard from '../components/cards/CommitCard.vue';
import FileCard from '../components/cards/FileCard.vue';
import LogCard from '../components/cards/LogCard.vue';
import RemoteCard from '../components/cards/RemoteCard.vue';
import TagCard from '../components/cards/TagCard.vue';

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
         component: BasicCard,
      },
      {
         name: 'basic',
         path: '/basic',
         component: BasicCard,
      },
      {
         name: 'commit',
         path: '/commit',
         component: CommitCard,
      },
      {
         name: 'file',
         path: '/file',
         component: FileCard,
      },
      {
         name: 'branch',
         path: '/branch',
         component: BranchCard,
      },
      {
         name: 'remote',
         path: '/remote',
         component: RemoteCard,
      },
      {
         name: 'tag',
         path: '/tag',
         component: TagCard,
      },
      {
         name: 'log',
         path: '/log',
         component: LogCard,
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
