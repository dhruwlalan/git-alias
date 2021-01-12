<template>
   <nav class="navbar">
      <div class="navbar__nav">
         <span class="navbar__nav--indicator" ref="indicator" />
         <a class="navbar__nav--item" ref="BASIC" @click="setActive">BASIC</a>
         <a class="navbar__nav--item" ref="COMMIT" @click="setActive">COMMIT</a>
         <a class="navbar__nav--item" ref="FILE" @click="setActive">FILE</a>
         <a class="navbar__nav--item" ref="BRANCH" @click="setActive">BRANCH</a>
         <a class="navbar__nav--item" ref="REMOTE" @click="setActive">REMOTE</a>
         <a class="navbar__nav--item" ref="TAG" @click="setActive">TAG</a>
         <a class="navbar__nav--item" ref="LOG" @click="setActive">LOG</a>
      </div>
   </nav>
</template>

<script>
export default {
   data() {
      return {
         active: '',
      };
   },
   methods: {
      setActive(e) {
         this.$refs[this.active].style.color = '#222831';
         this.$refs.indicator.style.left = `${e.target.offsetLeft}px`;
         this.$refs.indicator.style.width = `${e.target.offsetWidth}px`;
         e.target.style.color = '#00ffff';
         this.active = e.target.innerText;
         this.$router.push({ name: `${e.target.innerText.toLowerCase()}` });
      },
   },
   created() {
      const resource = document.documentURI.split('/').pop().toUpperCase();
      const cats = ['BASIC', 'COMMIT', 'FILE', 'BRANCH', 'REMOTE', 'TAG', 'LOG'];
      if (cats.includes(resource)) {
         this.active = resource;
      } else {
         this.active = 'BASIC';
      }
   },
   mounted() {
      this.$refs.indicator.style.left = `${this.$refs[this.active].offsetLeft}px`;
      this.$refs.indicator.style.width = `${this.$refs[this.active].offsetWidth}px`;
      this.$refs[this.active].style.color = '#00ffff';
   },
};
</script>
