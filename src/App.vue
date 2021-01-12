<template>
   <div class="container">
      <the-header />
      <div v-for="cat in cats" :key="cat" class="main" :id="cat">
         <div class="main__header">{{ cat.toUpperCase() }}</div>
         <div class="main__body">
            <div v-for="alias in aliases" :key="alias.alias">
               <div v-if="alias.cat === cat">{{ alias.alias }} - {{ alias.syntax }}</div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
   components: {
      TheHeader,
   },
   data() {
      return {
         cats: ['basic'],
         allCats: ['basic', 'commit', 'file', 'branch', 'remote', 'tag', 'log'],
      };
   },
   computed: {
      aliases() {
         return this.$store.getters.aliases;
      },
   },
};
</script>
