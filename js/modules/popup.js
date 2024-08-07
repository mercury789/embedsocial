// #scss 
/*
   % раскоментировать нужный в modules
*/
// #html
/*
   % раскоментировать нужный в modules
*/
// #html
/*
   % можно выбрать один из них или сразу оба
data-popup-open="sign-up"
data-popup-open="log-in"
*/
function popup() {

   // отступ
   function indent(elem) {

      const innerWidth = window.innerWidth
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      const widthHeader = innerWidth - scrollBarWidth

      const obj = {
         padding: {
            add: () => {
               elem.style.paddingRight = `${scrollBarWidth}px`
            },
            remove: () => {
               elem.style.paddingRight = `0px`
            },
         },
         width: {
            add: () => {
               elem.style.width = `${widthHeader}px`
            },
            remove: () => {
               elem.style.width = `100%`
            },
         },

      }
      return obj
   }

   const shadow = document.querySelector('[data-popup-shadow]')
   const body = document.querySelector('body')
   const header = document.querySelector('.header')

   // вкл
   document.addEventListener('click', (event) => {
      const eventTarget = event.target

      if (eventTarget.closest('[data-popup-open]')) {

         const att = eventTarget.getAttribute('data-popup-open')
         const unicPopup = document.querySelector(`[data-popup="${att}"]`)

         unicPopup.classList.add('_active')
         shadow.classList.add('_active')

         // отступы с офф скролом
         indent(body).padding.add()
         indent(header).width.add()
         document.querySelectorAll('[data-popup]').forEach((popup) => {
            indent(popup).padding.add()
         })
         body.style.overflowY = `hidden`

      }

   })

   // выкл
   document.addEventListener('click', (event) => {
      const eventTarget = event.target

      if (eventTarget.closest('[data-popup-close]')) {
         const unicPopup = eventTarget.closest('[data-popup]')

         unicPopup.classList.remove('_active')
         shadow.classList.remove('_active')

         // отступы с офф скролом
         indent(body).padding.remove()
         indent(header).width.remove()
         document.querySelectorAll('[data-popup]').forEach((popup) => {
            indent(popup).padding.remove()
         })
         body.style.overflowY = `auto`

      }

   })

   // выкл
   document.addEventListener('click', (event) => {
      const eventTarget = event.target

      if (eventTarget.hasAttribute('data-popup')) {
         const unicPopup = eventTarget

         unicPopup.classList.remove('_active')
         shadow.classList.remove('_active')

         // отступы с офф скролом
         indent(body).padding.remove()
         indent(header).width.remove()
         document.querySelectorAll('[data-popup]').forEach((popup) => {
            indent(popup).padding.remove()
         })
         body.style.overflowY = `auto`
      }

   })

   // resize
   window.addEventListener('resize', (event) => {
      header.style.width = `100%`
   })

   // change
   document.addEventListener('click', (event) => {
      const eventTarget = event.target

      if (eventTarget.closest('[data-popup-change]')) {

         eventTarget.closest('[data-popup]').classList.remove('_active')
         const att = eventTarget.getAttribute('data-popup-change')
         document.querySelector(`[data-popup="${att}"]`).classList.add('_active')

      }

   })


}
export { popup }
