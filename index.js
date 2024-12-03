$(document).ready(function () {
  $(".top-partners-slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<span class="arrow prev-arrow"></span>',
    nextArrow: '<span class="arrow next-arrow"></span>',
  });
  $(".roadmap-slider-container").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<i class="ri-arrow-left-line round-btn-primary"></i>',
    nextArrow: '<i class="ri-arrow-right-line round-btn-primary"></i>',
  });
  $(".our-partners-slider-container").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false,
  });
  $(".press-us-slider-container").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false,
  });
});
