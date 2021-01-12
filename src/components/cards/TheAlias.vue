<template>
   <div class="main__body__alias" @mouseenter="hover = true" @mouseleave="hover = false">
      <div class="main__body__alias--title">{{ alias.title }}</div>
      <div class="main__body__alias--syntax">
         <span>$</span>
         <span>&nbsp;</span>
         <span>git</span>
         <span>&nbsp;</span>
         <span class="main__body__alias--syntax--name">{{ alias.name }}</span>
         <span>&nbsp;</span>
         <span>{{ alias.rest }}</span>
         <copy-svg
            class="main__body__alias--syntax--copy-svg"
            v-if="hover && !copy"
            @click="copyCode"
         />
         <copied-svg v-if="hover && copy" class="main__body__alias--syntax--copied-svg" />
      </div>
   </div>
</template>

<script>
import CopySvg from '../utils/CopySvg.vue';
import CopiedSvg from '../utils/CopiedSvg.vue';

export default {
   components: {
      CopySvg,
      CopiedSvg,
   },
   props: ['alias'],
   data() {
      return {
         hover: false,
         copy: false,
      };
   },
   methods: {
      copyCode() {
         this.copy = true;
         setTimeout(() => {
            this.copy = false;
         }, 1000);
      },
   },
};
</script>
