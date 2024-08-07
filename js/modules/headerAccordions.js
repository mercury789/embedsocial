// #scss
/*
[data-header-accordion] {
   &._active {
      .header-sublist {
         opacity: 1;
         pointer-events: auto;
      }
      .header-menu__icon {
         transform: rotate(180deg) translateY(50%);
      }
   }
}
.header-menu__item {
   @media (any-hover: hover) {
      transition: transform 0.3s;
      &:hover {
         .header-menu__icon {
            transform: rotate(180deg) translateY(50%);
         }
      }
   }
   &:first-child {
      .header-menu__link {
         padding-right: 15px;
      }
   }
}
.header-menu__link {
   @media (max-width: $md7) {
      padding: 15px;
      display: block;
      width: 0px;
   }

   display: flex;
   position: relative;
   
   .header-menu__icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0px;

      transition: transform 0.3s;

      @media (max-width: $md7) {
         right: 15px;
      }
   }
}
.header-menu__item {
   @media (any-hover: hover) {
      &:hover {
         .header-sublist {
            opacity: 1;
            pointer-events: auto;
         }
      }
   }
   @media (max-width: $md7) {
      display: block;
   }
}
.header-sublist {
   position: absolute;
   top: 80%;
   left: 0;
   padding: 10px;
   border-radius: 5px;
   background-color: var(--color-background);

   transition: opacity 0.3s;

   @media (min-width: 768.2px) {
      opacity: 0;
      pointer-events: none;
      box-shadow: 0px 1px 14px rgba(26, 10, 3, 0.05);
   }

   @media (max-width: 768.2px) {
      position: static;
      padding: 0;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
   }

   // .header-sublist__item

   &__item {
      cursor: pointer;
      @media (max-width: 768.2px) {
         border-bottom: 1px solid var(--color-background);
      }
   }

   // .header-sublist__link

   &__link {
      display: block;

      padding: 15px;
      border-radius: 3px;

      @media (any-hover: hover) {
         transition: background-color 0.3s;

         &:hover {
            color: var(--color-black);
            background-color: var(--color-main-light);
         }
      }
      @media (max-width: $md7) {
         background-color: var(--color-main-light);
      }
   }
}


*/

const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i)
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i)
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i)
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i)
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i)
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows()
      )
   } 
}


function headerAccordions() {

   const set = {
      innerWidth: 769,
   }

   function accordions() {

      const eventTarget = event.target

      if (eventTarget.closest('[data-header-accordion-button]')) {

         const wrapper = eventTarget.closest('[data-header-accordion]')
         const targetContent = wrapper.querySelector('[data-header-accordion-content]')

         if (targetContent.classList.contains('_active')) {
            // если нажали на активный то свернуть его
            targetContent.classList.remove('_active')
            targetContent.style.maxHeight = '0'
            targetContent.closest('[data-header-accordion]').classList.remove('_active')
         } else {
            // если нажали на не активный то свернуть активные
            const contents = document.querySelectorAll('[data-header-accordion-content]')
            contents.forEach((content) => {
               if (content === targetContent) {
                  // а таргет открыть
                  content.classList.add('_active')
                  content.style.maxHeight = content.scrollHeight + 'px'
                  content.closest('[data-header-accordion]').classList.add('_active')

               } else {
                  // то свернуть активные
                  content.classList.remove('_active')
                  content.style.maxHeight = '0'
                  content.closest('[data-header-accordion]').classList.remove('_active')

               }
            })
         }

      }

   }

   if (window.innerWidth < set.innerWidth) {
      document.addEventListener('click', accordions)
   } else {
      document.removeEventListener('click', accordions)

      const elems = document.querySelectorAll('[data-header-accordion-content]')
      elems.forEach((accordion) => {
         accordion.style.maxHeight = ''
      })

   }

   // корекция высоты при девтулзе
   window.addEventListener('resize', (event) => {

      const activeAccordion = document.querySelector('[data-header-accordion-content]._active')
      if (activeAccordion) {
         activeAccordion.style.maxHeight = activeAccordion.scrollHeight + 'px'
      }

      if (window.innerWidth < set.innerWidth) {
         document.addEventListener('click', accordions)
         document.removeEventListener('click', spoiler)

      } else {
         document.removeEventListener('click', accordions)

         if (isMobile.any()) {
            document.addEventListener('click', spoiler)
         }

         const elems = document.querySelectorAll('[data-header-accordion-content]')
         elems.forEach((elem) => {
            elem.style.maxHeight = ''

            // то свернуть активные
            elem.classList.remove('_active')
            elem.closest('[data-header-accordion]').classList.remove('_active')
         })



      }

   })

   if (window.innerWidth < set.innerWidth) {
      document.removeEventListener('click', spoiler)

   } else {

      if (isMobile.any()) {

         document.addEventListener('click', spoiler)
         console.log(1);
         
      }

   }


   function spoiler() {

      const eventTarget = event.target

      if (eventTarget.closest('[data-header-accordion]')) {

         if (!eventTarget.closest('[data-header-accordion]').classList.contains('_active')) {
            eventTarget.closest('[data-header-accordion]').classList.add('_active')
         } else {
            eventTarget.closest('[data-header-accordion]').classList.remove('_active')
         }
      } else {
         document.querySelector('[data-header-accordion]').classList.remove('_active')
      }


   }


}

export { headerAccordions }
