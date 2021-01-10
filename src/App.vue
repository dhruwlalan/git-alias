<template>
   <div class="container">
      <the-header />
      <div class="main">
         <div class="main__container">
            <div v-for="cat in cats" :key="cat" class="main__cat">
               <div>{{ cat.toUpperCase() }}</div>
               <div v-for="alias in aliases" :key="alias.alias">
                  <div v-if="alias.cat === cat">{{ alias.alias }} - {{ alias.syntax }}</div>
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
         cats: ['basic', 'commit', 'file', 'branch', 'remote', 'tag', 'log'],
      };
   },
   computed: {
      aliases() {
         return this.$store.getters.aliases;
      },
   },
};
</script>
