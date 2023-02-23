$(document).ready(function () {
  $(".group").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrow: true,
    autoplay: true,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="chevron-back-outline"></ion-icon></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="chevron-forward-outline"></ion-icon></ion-icon></button>`,
  });
});
