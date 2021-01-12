<template>
   <nav class="navbar">
      <div class="navbar__nav">
         <span class="navbar__nav--active-indicator" ref="activeIndicator" />
         <span class="navbar__nav--hover-indicator" ref="hoverIndicator" />
         <a
            class="navbar__nav--item"
            href="#BASIC"
            ref="BASIC"
            @click="setActive"
            @mouseenter="hoverin"
            @mouseleave="hoverout"
            >BASIC</a
         >
         <a
            class="navbar__nav--item"
            href="#COMMIT-OPTIONS"
            ref="COMMIT-OPTIONS"
            @click="setActive"
            @mouseenter="hoverin"
            @mouseleave="hoverout"
            >COMMIT-OPTIONS</a
         >
         <a
            class="navbar__nav--item"
            href="#FILE-OPERATIONS"
            ref="FILE-OPERATIONS"
            @click="setActive"
            @mouseenter="hoverin"
            @mouseleave="hoverout"
            >FILE-OPERATIONS</a
         >
         <a
            class="navbar__nav--item"
            href="#BRANCHING"
            ref="BRANCHING"
            @click="setActive"
            @mouseenter="hoverin"
            @mouseleave="hoverout"
            >BRANCHING</a
         >
         <a
            class="navbar__nav--item"
            href="#TAGS"
            ref="TAGS"
            @click="setActive"
            @mouseenter="hoverin"
            @mouseleave="hoverout"
            >TAGS</a
         >
         <a
            class="navbar__nav--item"
            href="#REMOTE"
            ref="REMOTE"
            @click="setActive"
            @mouseenter="hoverin"
            @mouseleave="hoverout"
            >REMOTE</a
         >
         <a
            class="navbar__nav--item"
            href="#SHOW"
            ref="SHOW"
            @click="setActive"
            @mouseenter="hoverin"
            @mouseleave="hoverout"
            >SHOW</a
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
         this.$refs.activeIndicator.style.left = `${e.target.offsetLeft}px`;
         this.$refs.activeIndicator.style.width = `${e.target.offsetWidth}px`;
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
      this.$refs.activeIndicator.style.left = `${this.$refs[this.active].offsetLeft}px`;
      this.$refs.activeIndicator.style.width = `${this.$refs[this.active].offsetWidth}px`;
      this.$refs[this.active].style.color = '#00ffff';
   },
};
</script>
