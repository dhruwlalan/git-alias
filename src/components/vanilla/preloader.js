const preloader = document.getElementById('pre-loader');

window.addEventListener('load', () => {
   setTimeout(() => {
      preloader.classList.add('fade-out');
      setTimeout(() => {
         preloader.remove();
      }, 1000);
   }, 500);
});
