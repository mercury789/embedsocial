function headerAnimation() {

   const headerCheck = document.querySelector('[data-header-animation]')

   if (headerCheck) {

      const body = document.querySelector('body')
      const header = document.querySelector('[data-header-animation]')

      // проскроллил пошла анимация, вернулся обратно анимация выключилась

      document.addEventListener('scroll', (event) => {
         const value = body.getBoundingClientRect().top

         if (value < 0) {
            header.classList.add('_active')
         } else {
            header.classList.remove('_active') 

         }
      })

   }


}

export { headerAnimation }
