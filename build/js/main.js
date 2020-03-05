//слайдер карточек в 1-м блоке
var cardsSlider = new Swiper ('.js-cards-slider', {
  simulateTouch: false,
  autoplay: true,
  speed: 800,
  disableOnInteraction: false,
  slidesPerView: 'auto',
  spaceBetween: 12,
  slidesOffsetBefore: 12,
  loop: true,
  breakpoints: {
    768: {
      spaceBetween: 25,
      slidesOffsetBefore: 48
    },
    1200: {
      spaceBetween: 30,
      slidesOffsetBefore: 72
    },
    1680: {
      spaceBetween: 30,
      slidesOffsetBefore: 120
    },
  }
});

//слайдер постов в 3-м блоке
var postsSlider = new Swiper ('.js-posts-slider', {
  simulateTouch: false,
  speed: 800,
  autoplay: true,
  disableOnInteraction: false,
  slidesPerView: 'auto',
  spaceBetween: 12,
  slidesOffsetBefore: 12,
  loop: true,
  pagination: {
    el: '.js-swiper-pagination',
  },
  breakpoints: {
    768: {
      navigation: {
        nextEl: '.js-swiper-button-next'
      },
      pagination: {
        el: '.js-swiper-pagination-2',
      },
      slidesOffsetBefore: 0,
      spaceBetween: 30
    },
    1200: {
      navigation: {
        nextEl: '.js-swiper-button-next'
      },
      pagination: {
        el: '.js-swiper-pagination-2',
      },
      slidesOffsetBefore: 0,
      spaceBetween: 30,
    },
    1680: {
      navigation: {
        nextEl: '.js-swiper-button-next'
      },
      pagination: {
        el: '.js-swiper-pagination-2',
      },
      slidesOffsetBefore: 0,
      spaceBetween: 30
    },
  }
});

//навешиваем класс для анимации затухания
postsSlider.on('slideNextTransitionStart', function () {
  if(window.innerWidth > 767) {
    var slide = postsSlider.slides[postsSlider.activeIndex - 1];
    slide.classList.add("fadeOut");
  }
});

//убираем класс для анимации затухания
postsSlider.on('slideNextTransitionEnd', function () {
  if(window.innerWidth > 767) {
    var slide = postsSlider.slides[postsSlider.activeIndex - 1];
    slide.classList.remove("fadeOut");
  }
});
