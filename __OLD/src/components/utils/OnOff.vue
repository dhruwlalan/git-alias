<template>
   <div class="onoff" @click="$emit('update:modelValue', !modelValue)">
      <div class="onoff__track" :class="trackClass"></div>
      <div class="onoff__thumb" :class="thumbClass"></div>
   </div>
</template>

<script>
export default {
   props: ['modelValue'],
   emits: ['update:modelValue'],
   computed: {
      trackClass() {
         return {
            'onoff__track--off': !this.modelValue,
            'onoff__track--on': this.modelValue,
         };
      },
      thumbClass() {
         return {
            'onoff__thumb--off': !this.modelValue,
            'onoff__thumb--on': this.modelValue,
         };
      },
   },
};
</script>
