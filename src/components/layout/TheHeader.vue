<template>
   <nav class="navbar" v-if="!mobileNav">
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
   <mobile-nav v-else v-model="active" />
</template>

<script>
import MobileNav from './MobileNav.vue';

export default {
   components: {
      MobileNav,
   },
   data() {
      return {
         active: 'basic',
         nitemt: false,
         nindit: false,
         mobileNav: false,
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
      myFunction(x) {
         if (x.matches) {
            this.mobileNav = true;
         } else {
            this.mobileNav = false;
         }
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
   watch: {
      mobileNav() {
         if (!this.mobileNav) {
            this.nitemt = false;
            this.nindit = false;
            setTimeout(() => {
               this.$refs.indicator.style.left = `${this.$refs[this.active].offsetLeft}px`;
               this.$refs.indicator.style.width = `${this.$refs[this.active].offsetWidth}px`;
               this.$refs[this.active].style.color = '#00ffff';
               setTimeout(() => {
                  this.nitemt = true;
                  this.nindit = true;
               }, 0);
            }, 0);
         }
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
      const x = window.matchMedia('(max-width: 600px)');
      this.myFunction(x);
      x.addListener(this.myFunction);
      if (!this.mobileNav) {
         this.$refs.indicator.style.left = `${this.$refs[this.active].offsetLeft}px`;
         this.$refs.indicator.style.width = `${this.$refs[this.active].offsetWidth}px`;
         this.$refs[this.active].style.color = '#00ffff';
         setTimeout(() => {
            this.nitemt = true;
            this.nindit = true;
         }, 0);
      }
   },
};
</script>
