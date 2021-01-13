<template>
   <div
      class="main__body__alias"
      :style="bodyStyle"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
   >
      <div class="main__body__alias--title">{{ alias.title }}</div>
      <code-svg
         v-if="hover || focus"
         class="main__body__alias--code-svg"
         @click="showCode"
         :style="codeStyle"
      />
      <template v-if="!focus">
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
      </template>
      <template v-else>
         <template v-if="tdr && alias.tdrCommands">
            <div
               class="main__body__alias--syntax"
               v-for="command in alias.tdrCommands"
               :key="command"
            >
               <span class="main__body__alias--syntax--dolor">$&nbsp;</span>
               <span class="">{{ command }}</span>
            </div>
         </template>
         <template v-else>
            <div class="main__body__alias--syntax" v-for="command in alias.commands" :key="command">
               <span class="main__body__alias--syntax--dolor">$&nbsp;</span>
               <span class="">{{ command }}</span>
            </div>
         </template>
      </template>
   </div>
</template>

<script>
import Clipboard from 'clipboard';
import CopySvg from '../utils/CopySvg.vue';
import CopiedSvg from '../utils/CopiedSvg.vue';
import CodeSvg from '../utils/CodeSvg.vue';

export default {
   components: {
      CopySvg,
      CopiedSvg,
      CodeSvg,
   },
   props: ['alias', 'tdr'],
   data() {
      return {
         hover: false,
         copy: false,
         focus: false,
      };
   },
   methods: {
      copyCode() {
         this.copy = true;
         setTimeout(() => {
            this.copy = false;
         }, 1000);
      },
      showCode() {
         this.focus = !this.focus;
      },
   },
   computed: {
      bodyStyle() {
         if (this.focus) {
            return {
               backgroundColor: '#2e464a',
            };
         }
         return {};
      },
      codeStyle() {
         if (this.focus) {
            return {
               backgroundColor: 'rgb(34 40 49 / 50%)',
            };
         }
         return {};
      },
   },
   mounted() {
      new Clipboard('.main__body__alias--syntax--copy-svg');
   },
};
</script>
