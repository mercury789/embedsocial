function accordeons() {
   // #scss 
   /*
     [data-accordeon] {
        i {
           transition: transform 0.3s;
        }
        &._active {
           i {
              transform: rotate(180deg);
           }
        }
     }
     [data-accordeon-content] {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s;
     }
   */
   // #html 
  /*
      data-accordeons-body (уникализация)
      data-accordeon
      data-accordeon-button
      data-accordeon-content
   */

   const body = document.querySelector('[data-accordeon-body]')

   if (body) {

      const firstElem = document.querySelector('[data-accordeon-content]')
      firstElem.classList.add('_active')
      firstElem.style.maxHeight = firstElem.scrollHeight + 'px'
      firstElem.closest('[data-accordeon]').classList.add('_active')


      body.addEventListener('click', (event) => {
         const eventTarget = event.target

         if (eventTarget.closest('[data-accordeon-button]')) {

            const wrapper = eventTarget.closest('[data-accordeon]')
            const targetContent = wrapper.querySelector('[data-accordeon-content]')

            if (targetContent.classList.contains('_active')) {
               // если нажали на активный то свернуть его
               targetContent.classList.remove('_active')
               targetContent.style.maxHeight = '0'
               targetContent.closest('[data-accordeon]').classList.remove('_active')
            } else {
               // если нажали на не активный то свернуть активные
               const contents = body.querySelectorAll('[data-accordeon-content]')
               contents.forEach((content) => {
                  if (content === targetContent) {
                     // а таргет открыть
                     content.classList.add('_active')
                     content.style.maxHeight = content.scrollHeight + 'px'
                     content.closest('[data-accordeon]').classList.add('_active')

                  } else {
                     // то свернуть активные
                     content.classList.remove('_active')
                     content.style.maxHeight = '0'
                     content.closest('[data-accordeon]').classList.remove('_active')

                  }
               })
            }

         }

      })

      // корекция высоты при девтулзе
      window.addEventListener('resize', (event) => {
         const activeSpoiler = document.querySelector('.accordeon-content._active')
         if (activeSpoiler) {
            activeSpoiler.style.maxHeight = activeSpoiler.scrollHeight + 'px'
         }
      })

   }

}

export { accordeons }