<template>
   <div class="main">
      <div class="main__header">COMMIT</div>
      <div class="main__body">
         <div v-for="alias in aliases" :key="alias.name">{{ alias.name }} - {{ alias.syntax }}</div>
      </div>
   </div>
</template>

<script>
import { commit } from '../vanilla/alias';

export default {
   computed: {
      aliases() {
         return commit;
      },
   },
};
</script>
