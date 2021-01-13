<template>
   <div class="main">
      <div class="main__header">{{ aliasCat.toUpperCase() }}</div>
      <div class="main__body">
         <div class="main__body__container">
            <the-alias v-for="alias in aliases" :key="alias.name" :alias="alias" />
         </div>
      </div>
   </div>
</template>

<script>
import * as allAlias from '../vanilla/alias';
import TheAlias from './TheAlias.vue';

export default {
   props: ['aliasCat'],
   components: {
      TheAlias,
   },
   computed: {
      aliases() {
         switch (this.aliasCat) {
            case 'basic':
               return allAlias.basic;
            case 'commit':
               return allAlias.commit;
            case 'file':
               return allAlias.file;
            case 'branch':
               return allAlias.branch;
            case 'remote':
               return allAlias.remote;
            case 'tag':
               return allAlias.tag;
            case 'log':
               return allAlias.log;
            default:
               return allAlias.basic;
         }
      },
   },
};
</script>
