<template>
   <div class="main">
      <div class="main__header">BASIC</div>
      <div class="main__body">
         <div v-for="alias in aliases" :key="alias.name" class="main__body__alias">
            <div class="main__body__alias--title">{{ alias.title }}</div>
            <div class="main__body__alias--syntax">
               <span>$</span>
               <span>&nbsp;</span>
               <span>git</span>
               <span>&nbsp;</span>
               <span class="main__body__alias--syntax--name">{{ alias.name }}</span>
               <span>&nbsp;</span>
               <span>{{ alias.rest }}</span>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { basic } from '../vanilla/alias';

export default {
   computed: {
      aliases() {
         return basic;
      },
   },
};
</script>
