import Swiper, { Pagination, Navigation, EffectCreative } from 'swiper';

if (window.innerWidth <= 576) {
  const benefits = new Swiper('.benefits', {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 150,
    width: 280,

    pagination: {
      el: '.benefits__pagination',
      clickable: true,
    },
  });

  const courses = new Swiper('.courses__grid', {
    modules: [Pagination],
    slidesPerView: 2,
    direction: 'vertical',
    spaceBetween: 40,
    pagination: {
      el: '.courses__pagination',
      clickable: true,
    },
  });
}

const block = new Swiper('.block__slider', {
  modules: [Pagination, Navigation, EffectCreative],
  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
    el: '.block__pagination',
    clickable: true,
  },

  breakpoints: {
    1280: {
      width: 454,
      navigation: {
        nextEl: '.block__btn--next',
        prevEl: '.block__btn--prev',
      },
    },
  },
});

const feedback = new Swiper('.feedback__slider', {
  modules: [Pagination, Navigation, EffectCreative],
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  // width: 580,
  pagination: {
    el: '.feedbacks__pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.feedbacks__btn--next',
    prevEl: '.feedbacks__btn--prev',
  },

  // breakpoints: {
  //   1280: {
  //     // width: 640,
  //     navigation: {
  //       nextEl: '.feedbacks__btn--next',
  //       prevEl: '.feedbacks__btn--prev',
  //     },
  //   },
  // },
});
