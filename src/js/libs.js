import Swiper, { Pagination, Navigation, EffectCreative } from 'swiper';

if (window.innerWidth <= 576) {
  const benefits = new Swiper('.benefits', {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 150,
    width: 280,

    pagination: {
      el: '.benefits__pagination',
      clickable: true
    },
  });

  const courses = new Swiper('.courses__grid', {
    modules: [Pagination],
    slidesPerView: 2,
    direction: 'vertical',
    spaceBetween: 40,
    pagination: {
      el: '.courses__pagination',
      clickable: true
    },
  });
}

const block = new Swiper('.block__slider', {
  modules: [Pagination, Navigation, EffectCreative],
  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
    el: '.block__pagination',
    clickable: true
  },

  breakpoints: {
    1280: {
      width: 454,
      navigation: {
        nextEl: '.block__btn--next',
        prevEl: '.block__btn--prev',
      },
    }
  }
});