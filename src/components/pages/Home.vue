<template>
   <div class="home">
      <div class="home__header">
         <img src="../../assets/images/mygit.png" alt="git-logo" class="home__header__logo" />
         <h1 class="home__header__title">Git Alias</h1>
      </div>
      <p class="home__description">Some simple aliases for commonly used git commands.</p>
      <div class="home__links">
         <a class="home__links--link" href="https://github.com/dhruwlalan/git-alias">
            <github-svg class="home__links--link--logo" />
            <p class="home__links--link--text">Github</p>
         </a>
         <a class="home__links--link" href="../../../git-config/.gitconfig" download=".gitconfig">
            <download-svg class="home__links--link--logo" />
            <p class="home__links--link--text">.gitconfig</p>
         </a>
         <div class="home__links--link" @click="$router.push({ name: 'basic' })">
            View All Aliases
         </div>
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
};
</script>
