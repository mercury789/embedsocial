/* 
#html
data-menu-paste (к logo)
data-menu (к nav)

#html
*после nav
<button class="burger" data-burger-menu-open>
   <div class="burger__icon">
      <span></span>
      <span></span>
      <span></span>
   </div>
</button>
<div class="header-wrapper" data-burger-menu-shadow></div>
<div class="burgmenu" data-burger-menu>
   <div class="burgmenu-top">
      <a href="#" class="burgmenu-logo">
         <i class="burgmenu-logo__icon">@@include("../../../src/img/icons/modules/header/logo.svg")</i>
      </a>
      <button class="burgmenu-top__close" data-burger-menu-close>
         &#10006;
      </button>
   </div>
   <div class="burgmenu__body" data-burger-menu-body></div>
</div>

#scss

$burgmenu-media: 768.2px; // 768.2px\992.2px
$burgmenu-color: var(--color-blue); 
$burgmenu-color-close: var(--color-black); 

.header-wrapper {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: hsla(0, 0%, 0%, 0.2);
   opacity: 0;
   pointer-events: none;
   transition: opacity 0.3s;

   @media (max-width: $burgmenu-media) {
      &._active {
         opacity: 1;
         pointer-events: all;
      }
   }
}
.burger {
   width: 50px;
   height: 50px;
   // .burger__icon

   &__icon {
      width: 26px;
      height: 22px;
      position: relative;

      span {
         position: absolute;
         left: 0;

         width: 100%;
         height: 3.3px;
         background-color: $burgmenu-color;
         border-radius: 1px;

         top: 50%;
         transform: translateY(-50%);

         &:first-child {
            top: 0;
            transform: none;
         }

         &:last-child {
            top: auto;
            bottom: 0;
            transform: none;
         }
      }

      display: none;
      @media (max-width: $burgmenu-media) {
         display: block;
      }
   }
}
.burgmenu {
   overflow: auto;
   position: fixed;
   top: 0;
   right: -100%;
   height: 100%;
   background-color: var(--color-background);
   @include adaptiv-value("width", 450, 250); 

   transition: right 0.5s;

   @media (max-width: $burgmenu-media) {
      &._active {
         right: 0;
      }
   }

   // .burgmenu__body

   &__body {
      .header-menu__list {
         display: block;
      }
      .header-menu__link {
         padding: 15px;
         border-bottom: 1px solid $burgmenu-color;
         width: 100%;
      }
   }
}
.burgmenu-top {
   display: flex;
   padding: 16px;
   background-color: $burgmenu-color;

   display: flex;
   align-items: center;

   // .burgmenu-top__logo

   &__logo {
      @include adaptiv-value("width", 95, 85,);
      img {
         max-width: 100%;
      }
   }

   // .burgmenu-top__close

   &__close {
      display: flex;
      align-items: center;
      justify-content: end;

      font-size: 20px;
      width: 25px;
      height: 25px;
      border-radius: 3px;
      color: $burgmenu-color-close;
      flex: 1 1 auto;
   }
}
#js
   поменять set если надо
*/

function burgerMenu() {

   const set = {
      innerWidth: 769,
   }

   //  базисное
   const open = document.querySelector('[data-burger-menu-open]')
   const menu = document.querySelector('[data-menu]')
   const shadow = document.querySelector('[data-burger-menu-shadow]')
   const close = document.querySelector('[data-burger-menu-close]')
   const bodyburgerMenu = document.querySelector('[data-burger-menu-body]')
   const burgerMenu = document.querySelector('[data-burger-menu]')
   const body = document.querySelector('body')
   const menuPaste = document.querySelector('[data-menu-paste]')
    

   if (burgerMenu) {

      menu.style.display = "block"

      open.addEventListener('click', (event) => {
         // открыть
         burgerMenu.classList.add('_active')
         shadow.classList.add('_active')
         body.style.overflow = 'hidden'
      })
      close.addEventListener('click', (event) => {
         // зыкрыть
         burgerMenu.classList.remove('_active')
         shadow.classList.remove('_active')
         body.style.overflow = 'auto'

      })
      shadow.addEventListener('click', (event) => {
         // зыкрыть
         burgerMenu.classList.remove('_active')
         shadow.classList.remove('_active')
         body.style.overflow = 'auto'

      })

      // перекидывание меню
      if (window.innerWidth < set.innerWidth) {

         // добавить одноразово
         // console.log('нету добавить')
         const outerHTML = document.querySelector('[data-menu]').outerHTML
         document.querySelector('[data-menu]').remove()
         bodyburgerMenu.innerHTML = outerHTML
         bodyburgerMenu.classList.add('_active')


      } else {

         // убрать одноразово
         // console.log('есть убрать')
         const outerHTML = document.querySelector('[data-menu]').outerHTML
         document.querySelector('[data-menu]').remove()
         menuPaste.insertAdjacentHTML('afterend', outerHTML)
         bodyburgerMenu.classList.remove('_active')

      }


      // перекидывание меню
      window.addEventListener('resize', (event) => {
         if (window.innerWidth < set.innerWidth) {

            // добавить одноразово
            if (!document.querySelector('[data-burger-menu-body]._active')) {
               // console.log('нету добавить')
               const outerHTML = document.querySelector('[data-menu]').outerHTML
               document.querySelector('[data-menu]').remove()
               bodyburgerMenu.innerHTML = outerHTML
               bodyburgerMenu.classList.add('_active')
            }

         } else {

            // убрать одноразово
            if (document.querySelector('[data-burger-menu-body]._active')) {
               // console.log('есть убрать')

               const outerHTML = document.querySelector('[data-menu]').outerHTML
               document.querySelector('[data-menu]').remove()

               menuPaste.insertAdjacentHTML('afterend', outerHTML)

               bodyburgerMenu.classList.remove('_active')
            }


         }
      })

   }


}
export {
   burgerMenu,
}


