<template>
   <div class="main">
      <div class="main__header">BRANCH</div>
      <div class="main__body">
         <div v-for="alias in aliases" :key="alias.name" class="main__body__alias">
            <div class="main__body__alias--title">{{ alias.title }}</div>
            <div class="main__body__alias--syntax">
               <div>$ {{ alias.syntax }}</div>
               <div v-if="alias.tdrSyntax">$ {{ alias.tdrSyntax }}</div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { branch } from '../vanilla/alias';

export default {
   computed: {
      aliases() {
         return branch;
      },
   },
};
</script>
