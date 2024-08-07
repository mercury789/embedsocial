// (i) расположить в index.scss

// (i) addition
// .preloader {
//    background-color: var(--color-white);
//    position: fixed;
//    top: 0;
//    left: 0;
//    width: 100%;
//    height: 100%;
//    z-index: 5000;

//    &._close {
//       display: none;
//    }

//    // .preloader__body

//    &__body {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       height: 100%;

//       svg * {
//          fill: var(--color-main);
//       }
//    }
// }


// (i) расположить в index.js
// (i) добавить к body style="overflow-y: hidden;

// (i) addition
function preloaderFn() {
   
   const preloader = document.querySelector('[data-preloader]')
   setTimeout(() => {
      
      preloader.classList.add('_close')
   
      document.querySelector('body').style.paddingRight = `0px`
      document.querySelector('body').style.overflowY = `auto`
   
      // функции
      
   
   }, 1000)
   
}



export { preloaderFn }