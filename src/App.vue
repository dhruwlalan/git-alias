<template>
   <div class="container">
      <the-header />
      <div class="main">
         <div class="main__container">
            <div v-for="cat in cats" :key="cat" class="main__cat" :id="cat">
               <div class="main__cat--header">{{ cat.toUpperCase() }}</div>
               <div class="main__cat--body">
                  <div v-for="alias in aliases" :key="alias.alias">
                     <div v-if="alias.cat === cat">{{ alias.alias }} - {{ alias.syntax }}</div>
                  </div>
               </div>
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
         cats: ['commit'],
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
