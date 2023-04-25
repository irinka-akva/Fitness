const initSwiper = () => {
  const swiper = new Swiper('.coaches__swiper-container', {
    navigation: {
      nextEl: '.coaches__btn-prev',
      prevEl: '.coaches__btn-next',
    },
    slidesPerView: 4,
    loop: true,
  });
};

export {initSwiper};
