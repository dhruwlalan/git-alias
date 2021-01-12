<template>
   <nav class="navbar">
      <div class="navbar__nav">
         <span class="navbar__nav--indicator" ref="indicator" />
         <a
            class="navbar__nav--item"
            href="#basic"
            ref="BASIC"
            @click="setActive"
            @mouseenter="hoverin"
            @mouseleave="hoverout"
            >BASIC</a
         >
         <a
            class="navbar__nav--item"
            href="#commit"
            ref="COMMIT"
            @click="setActive"
            @mouseenter="hoverin"
            @mouseleave="hoverout"
            >COMMIT</a
         >
         <a
            class="navbar__nav--item"
            href="#file"
            ref="FILE"
            @click="setActive"
            @mouseenter="hoverin"
            @mouseleave="hoverout"
            >FILE</a
         >
         <a
            class="navbar__nav--item"
            href="#branch"
            ref="BRANCHING"
            @click="setActive"
            @mouseenter="hoverin"
            @mouseleave="hoverout"
            >BRANCHING</a
         >
         <a
            class="navbar__nav--item"
            href="#remote"
            ref="REMOTE"
            @click="setActive"
            @mouseenter="hoverin"
            @mouseleave="hoverout"
            >REMOTE</a
         >
         <a
            class="navbar__nav--item"
            href="#tag"
            ref="TAG"
            @click="setActive"
            @mouseenter="hoverin"
            @mouseleave="hoverout"
            >TAG</a
         >
         <a
            class="navbar__nav--item"
            href="#log"
            ref="LOG"
            @click="setActive"
            @mouseenter="hoverin"
            @mouseleave="hoverout"
            >LOG</a
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
      hoverin(e) {
         this.$refs.hoverIndicator.style.left = `${e.target.offsetLeft}px`;
         this.$refs.hoverIndicator.style.width = `${e.target.offsetWidth}px`;
      },
      hoverout(e) {
         this.$refs.hoverIndicator.style.left = `${this.$refs[this.active].offsetLeft}px`;
         this.$refs.hoverIndicator.style.width = `${this.$refs[this.active].offsetWidth}px`;
      },
   },
   mounted() {
      this.$refs.indicator.style.left = `${this.$refs[this.active].offsetLeft}px`;
      this.$refs.indicator.style.width = `${this.$refs[this.active].offsetWidth}px`;
      this.$refs[this.active].style.color = '#00ffff';
   },
};
</script>
