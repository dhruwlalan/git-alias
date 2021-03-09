<template>
   <div class="home">
      <div class="home__header">
         <img src="../../assets/images/mygit.png" alt="git-logo" class="home__header__logo" />
         <h1 class="home__header__title">Git Alias</h1>
      </div>
      <p class="home__description">Human friendly aliases for commonly used git commands.</p>
      <div class="home__links">
         <div class="home__links--row">
            <a class="home__links--link" href="https://github.com/dhruwlalan/git-alias">
               <github-svg class="home__links--link--logo" />
               <p class="home__links--link--text">Github</p>
            </a>
            <a class="home__links--link" :href="href" download="gitconfig.txt">
               <download-svg class="home__links--link--logo" />
               <p class="home__links--link--text">gitconfig</p>
            </a>
         </div>
         <router-link class="home__links--link" :to="{ name: 'basic' }">View Aliases</router-link>
      </div>
   </div>
</template>

<script>
import GithubSvg from '../utils/GithubSvg.vue';
import DownloadSvg from '../utils/DownloadSvg.vue';

export default {
   components: {
      GithubSvg,
      DownloadSvg,
   },
   data() {
      return {
         href: '',
      };
   },
   async created() {
      const result = await fetch(
         'https://raw.githubusercontent.com/dhruwlalan/git-alias/master/git-config/.gitconfig',
      );
      const text = await result.text();
      this.href = `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`;
   },
};
</script>
