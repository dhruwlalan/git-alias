<template>
   <div class="main">
      <div class="main__header">TAG</div>
      <div class="main__body">
         <div v-for="alias in aliases" :key="alias.name">{{ alias.name }} - {{ alias.syntax }}</div>
      </div>
   </div>
</template>

<script>
import { tag } from '../vanilla/alias';

export default {
   computed: {
      aliases() {
         return tag;
      },
   },
};
</script>
