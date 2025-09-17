/*=============== HIDE & SHOW PASSWORD ===============*/
const showHiddenPass = (password, eye) => {
   const input = document.getElementById(password),
         iconEye = document.getElementById(eye)

   iconEye.addEventListener('click', () => {
      input.type === 'password' ? input.type = 'text'
                                : input.type = 'password'

      iconEye.classList.toggle('ri-eye-off-line')
      iconEye.classList.toggle('ri-eye-line')
   })
}
showHiddenPass('loginPass','loginEye')

/*=============== SWIPER IMAGES ===============*/
const swiperLogin = new Swiper('.login__swiper', {
   loop: true,
   spaceBetween: '24',
   grabCursor: true,
   speed: 600,
   // effect: 'fade',

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
})
