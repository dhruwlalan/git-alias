<template>
   <nav class="navbar">
      <a class="navbar__nav-item n-active" href="#BASIC">BASIC</a>
      <a class="navbar__nav-item" href="#COMMIT-OPTIONS">COMMIT-OPTIONS</a>
      <a class="navbar__nav-item" href="#FILE-OPERATIONS">FILE-OPERATIONS</a>
      <a class="navbar__nav-item" href="#BRANCHING">BRANCHING</a>
      <a class="navbar__nav-item" href="#TAGS">TAGS</a>
      <a class="navbar__nav-item" href="#REMOTE">REMOTE</a>
      <a class="navbar__nav-item" href="#SHOW">SHOW</a>
   </nav>
</template>

<script>
export default {
   data() {
      return {};
   },
   computed: {
      aliases() {
         return this.$store.getters.aliases;
      },
   },
};
</script>
