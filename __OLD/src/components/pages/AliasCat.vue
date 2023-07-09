<template>
   <teleport to="body">
      <div id="pre-loader" ref="preLoader"></div>
   </teleport>
   <div class="main">
      <div class="main__header">
         <h1 class="main__header--title">
            {{ aliasCat.toUpperCase() }}
         </h1>
         <div v-tooltip:left="'To diffirent Remote'" class="main__header--tdr-switch">
            <span>tdr</span>
            <on-off v-model="tdr" />
         </div>
      </div>
      <div class="main__body">
         <div class="main__body__container">
            <the-alias v-for="alias in aliases" :key="alias.name" :alias="alias" :tdr="tdr" />
         </div>
      </div>
   </div>
</template>

<script>
import * as allAlias from '../vanilla/alias';
import TheAlias from '../layout/TheAlias.vue';
import OnOff from '../utils/OnOff.vue';

export default {
   components: {
      TheAlias,
      OnOff,
   },
   props: ['aliasCat'],
   data() {
      return {
         tdr: false,
      };
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
   mounted() {
      setTimeout(() => {
         if (this.$refs.preLoader) {
            this.$refs.preLoader.classList.add('fade-out');
         }
         setTimeout(() => {
            if (this.$refs.preLoader) {
               this.$refs.preLoader.remove();
            }
         }, 500);
      }, 500);
   },
};
</script>
