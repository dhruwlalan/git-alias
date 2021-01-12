<template>
   <nav class="navbar">
      <div class="navbar__nav">
         <span class="navbar__nav--indicator" ref="indicator" />
         <router-link
            :to="{ name: 'basic' }"
            class="navbar__nav--item"
            ref="BASIC"
            @click="setActive"
            >BASIC</router-link
         >
         <router-link
            :to="{ name: 'commit' }"
            class="navbar__nav--item"
            ref="COMMIT"
            @click="setActive"
            >COMMIT</router-link
         >
         <router-link :to="{ name: 'file' }" class="navbar__nav--item" ref="FILE" @click="setActive"
            >FILE</router-link
         >
         <router-link
            :to="{ name: 'branch' }"
            class="navbar__nav--item"
            ref="BRANCH"
            @click="setActive"
            >BRANCH</router-link
         >
         <router-link
            :to="{ name: 'remote' }"
            class="navbar__nav--item"
            ref="REMOTE"
            @click="setActive"
            >REMOTE</router-link
         >
         <router-link :to="{ name: 'tag' }" class="navbar__nav--item" ref="TAG" @click="setActive"
            >TAG</router-link
         >
         <router-link :to="{ name: 'log' }" class="navbar__nav--item" ref="LOG" @click="setActive"
            >LOG</router-link
         >
      </div>
   </nav>
</template>

<script>
export default {
   data() {
      return {
         active: 'BASIC',
      };
   },
   methods: {
      setActive(e) {
         this.$refs[this.active].style.color = '#222831';
         this.$refs.indicator.style.left = `${e.target.offsetLeft}px`;
         this.$refs.indicator.style.width = `${e.target.offsetWidth}px`;
         e.target.style.color = '#00ffff';
         this.active = e.target.innerText;
      },
   },
   mounted() {
      this.$refs.indicator.style.left = `${this.$refs[this.active].offsetLeft}px`;
      this.$refs.indicator.style.width = `${this.$refs[this.active].offsetWidth}px`;
      this.$refs[this.active].style.color = '#00ffff';
   },
};
</script>
