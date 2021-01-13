<template>
   <nav class="navbar">
      <div class="navbar__nav">
         <span :class="indicatorClass" ref="indicator" />
         <a :class="itemClass" ref="BASIC" @click="setActive">BASIC</a>
         <a :class="itemClass" ref="COMMIT" @click="setActive">COMMIT</a>
         <a :class="itemClass" ref="FILE" @click="setActive">FILE</a>
         <a :class="itemClass" ref="BRANCH" @click="setActive">BRANCH</a>
         <a :class="itemClass" ref="REMOTE" @click="setActive">REMOTE</a>
         <a :class="itemClass" ref="TAG" @click="setActive">TAG</a>
         <a :class="itemClass" ref="LOG" @click="setActive">LOG</a>
      </div>
   </nav>
</template>

<script>
export default {
   data() {
      return {
         active: '',
         nitemt: false,
         nindit: false,
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
   computed: {
      indicatorClass() {
         return {
            'navbar__nav--indicator': true,
            'n-indi-t': this.nindit,
         };
      },
      itemClass() {
         return {
            'navbar__nav--item': true,
            'n-item-t': this.nitemt,
         };
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
      setTimeout(() => {
         this.nitemt = true;
         this.nindit = true;
      }, 0);
   },
};
</script>
