<template>
   <div class="container">
      <the-header v-if="this.$route.name !== 'home'" />
      <router-view></router-view>
   </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
   components: {
      TheHeader,
   },
};
</script>
