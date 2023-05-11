const initSwiperPhotos = () => {
  // eslint-disable-next-line no-undef, no-unused-vars
  const swiper = new Swiper('.coaches__swiper-container', {
    navigation: {
      nextEl: '.coaches__btn-next',
      prevEl: '.coaches__btn-prev',
    },
    loop: true,

    breakpoints: {
      319: {
        slidesPerView: 1,
        initialSlide: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
};

const initSwiperFeedback = () => {
  // eslint-disable-next-line no-undef, no-unused-vars
  const swiper = new Swiper('.feedback__list-wrapper', {
    navigation: {
      nextEl: '.feedback__btn-next',
      prevEl: '.feedback__btn-prev',
    },
    slidesPerView: 1,
    spaceBetween: -1,
  });
};

export {initSwiperPhotos, initSwiperFeedback};
