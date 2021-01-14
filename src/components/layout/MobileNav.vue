<template>
   <nav class="m-navbar">
      <span :class="indicatorClass" ref="indicator" />
      <div class="m-navbar__nav">
         <a :class="itemClass" ref="BASIC" @click="setActive">BASIC</a>
         <a :class="itemClass" ref="FILE" @click="setActive">FILE</a>
         <a :class="itemClass" ref="LOG" @click="setActive">LOG</a>
         <a :class="itemClass" ref="TAG" @click="setActive">TAG</a>
      </div>
      <div class="m-navbar__nav">
         <a :class="itemClass" ref="COMMIT" @click="setActive">COMMIT</a>
         <a :class="itemClass" ref="REMOTE" @click="setActive">REMOTE</a>
         <a :class="itemClass" ref="BRANCH" @click="setActive">BRANCH</a>
      </div>
   </nav>
</template>

<script>
export default {
   props: ['modelValue'],
   emits: ['update:modelValue'],
   data() {
      return {
         active: '',
         nitemt: false,
         nindit: false,
      };
   },
   methods: {
      setActive(e) {
         const clientHeight = e.target.clientHeight;
         const clientWidth = e.target.clientWidth;
         const clientX = e.target.offsetLeft;
         const clientY = e.target.offsetTop;
         this.$refs[this.active].style.color = '#222831';
         this.$refs.indicator.style.left = `${clientX}px`;
         this.$refs.indicator.style.top = `${clientY}px`;
         this.$refs.indicator.style.height = `${clientHeight}px`;
         this.$refs.indicator.style.width = `${clientWidth}px`;
         e.target.style.color = '#00ffff';
         this.active = e.target.innerText;
         this.$emit('update:modelValue', this.active);
         this.$router.push({ name: `${e.target.innerText.toLowerCase()}` });
      },
   },
   computed: {
      indicatorClass() {
         return {
            'm-navbar__nav--indicator': true,
            'n-indi-t': this.nindit,
         };
      },
      itemClass() {
         return {
            'm-navbar__nav--item': true,
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
      const clientHeight = this.$refs[this.active].clientHeight;
      const clientWidth = this.$refs[this.active].clientWidth;
      const clientX = this.$refs[this.active].offsetLeft;
      const clientY = this.$refs[this.active].offsetTop;
      this.$refs.indicator.style.left = `${clientX}px`;
      this.$refs.indicator.style.top = `${clientY}px`;
      this.$refs.indicator.style.height = `${clientHeight}px`;
      this.$refs.indicator.style.width = `${clientWidth}px`;
      this.$refs[this.active].style.color = '#00ffff';
      setTimeout(() => {
         this.nitemt = true;
         this.nindit = true;
      }, 0);
   },
};
</script>
