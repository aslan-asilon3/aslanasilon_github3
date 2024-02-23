
// Card Carousel 1
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 24,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    
  },
  navigation: {
    nextEl: ".arrow-container-r1",
    prevEl: ".arrow-container-l1",
  },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
        },
        780: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 4,
        }
    },
});

// Card Carousel 2

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 24,
  loop: false,
  pagination: {
    el: ".swiper-pagination2",
    
  },
  navigation: {
    nextEl: ".arrow-container-r2",
    prevEl: ".arrow-container-l2",
  },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
        },
        780: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 4,
        }
    },
});

// Card Carousel 3

var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 24,
  loop: false,
  pagination: {
    el: ".swiper-pagination3",
    
  },
  navigation: {
    nextEl: ".arrow-container-r3",
    prevEl: ".arrow-container-l3",
  },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
        },
        780: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 4,
        }
    },
});