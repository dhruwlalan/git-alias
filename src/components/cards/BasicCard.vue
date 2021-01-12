<template>
   <div class="main">
      <div class="main__header">BASIC</div>
      <div class="main__body">
         <the-alias v-for="alias in aliases" :key="alias.name" :alias="alias" />
      </div>
   </div>
</template>

<script>
import { basic } from '../vanilla/alias';
import TheAlias from './TheAlias.vue';

export default {
   components: {
      TheAlias,
   },
   computed: {
      aliases() {
         return basic;
      },
   },
};
</script>
