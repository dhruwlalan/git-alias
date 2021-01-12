import { createStore } from 'vuex';
import aliases from '../alias';

const Store = createStore({
   state() {
      return {};
   },
   mutations: {},
   getters: {
      aliases() {
         return aliases;
      },
   },
   actions: {},
});

export default Store;
