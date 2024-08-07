// #html
/*
data-anchor (к ссылкам)
href поменять на айди
к секциям добавить айдишники
*/


function anchors() {

   document.addEventListener('click', (event) => {
      const eventTarget = event.target

      if (eventTarget.closest('[data-anchor]')) {
         // берем айди
         event.preventDefault()
         const id = eventTarget.getAttribute('href')
         const section = document.getElementById(id)

         // зыкрыть бургер
         document.querySelector('[data-burger-menu]').classList.remove('_active')
         document.querySelector('[data-burger-menu-shadow]').classList.remove('_active')
         document.querySelector('body').style.overflow = 'auto'

         // переходим по айди
         let offset = section.offsetTop - 170;
         if (offset <= 2) {
            offset = 0
         }
         window.scrollTo({
            top: offset,
            behavior: 'smooth'
         });
      }

   })

}
export { anchors }