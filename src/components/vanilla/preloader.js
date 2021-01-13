export default () => {
   const loader = document.getElementById('pre-loader');
   window.addEventListener('load', () => {
      loader.remove();
   });
};
