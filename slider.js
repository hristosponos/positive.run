const swiper = new Swiper(".swiper", {
  slidesPerView: 4,      // Show 4 slides at once
  spaceBetween: 20,      // Gap between slides
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  autoplay: {
    delay: 3000,         // Auto-slide every 3 sec
    disableOnInteraction: true
  },
  grabCursor: true,      // Cursor turns into a grab hand
  breakpoints: {
    1200: { slidesPerView: 4 }, 
    850: { slidesPerView: 3 },
    100: { slidesPerView: 2 } 
  }
});