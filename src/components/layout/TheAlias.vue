<template>
   <div class="main__body__alias" @mouseenter="hover = true" @mouseleave="hover = false">
      <div class="main__body__alias--title">{{ alias.title }}</div>
      <div class="main__body__alias--syntax">
         <span class="main__body__alias--syntax--dolor">$&nbsp;</span>
         <span>git&nbsp;</span>
         <span class="main__body__alias--syntax--name">{{ alias.name }}</span>

         <template v-if="tdr && alias.tdrRest">
            <span>&nbsp;{{ alias.tdrRest }}</span>
            <copy-svg
               class="main__body__alias--syntax--copy-svg"
               :data-clipboard-text="alias.tdrSyntax"
               v-if="hover && !copy"
               @click="copyCode"
            />
         </template>
         <template v-else>
            <span v-if="alias.rest">&nbsp;{{ alias.rest }}</span>
            <copy-svg
               class="main__body__alias--syntax--copy-svg"
               :data-clipboard-text="alias.syntax"
               v-if="hover && !copy"
               @click="copyCode"
            />
         </template>

         <copied-svg v-if="hover && copy" class="main__body__alias--syntax--copied-svg" />
      </div>
   </div>
</template>

<script>
import Clipboard from 'clipboard';
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
         tdr: false,
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
   mounted() {
      new Clipboard('.main__body__alias--syntax--copy-svg');
   },
};
</script>
