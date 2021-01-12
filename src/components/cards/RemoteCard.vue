<template>
   <div class="main">
      <div class="main__header">REMOTE</div>
      <div class="main__body">
         <div v-for="alias in aliases" :key="alias.name">{{ alias.name }} - {{ alias.syntax }}</div>
      </div>
   </div>
</template>

<script>
import { remote } from '../vanilla/alias';

export default {
   computed: {
      aliases() {
         return remote;
      },
   },
};
</script>
