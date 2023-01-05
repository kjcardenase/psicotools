var swiper = new Swiper('.mySwiper', {
    slidesPerView: window.screen.width <= 780 ? 1 : 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    autoplay: {
        delay: 5000,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
