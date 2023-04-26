const initSwiper = () => {
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
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
};

export {initSwiper};
