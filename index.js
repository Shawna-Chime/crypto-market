$(document).ready(function () {
  $(".ri-menu-fill").click(function () {
    $(".mobile-menu").show();
    $(".mobile-menu").animate({ right: "0px" });
  });

  $(".ri-close-line").click(function () {
    $(".mobile-menu").hide();
  });

  $(".top-partners-slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<span class="arrow prev-arrow"></span>',
    nextArrow: '<span class="arrow next-arrow"></span>',
    responsive: [
      {
        breakpoint: 980,
        settings: {
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 559,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 407,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".roadmap-slider-container").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<i class="ri-arrow-left-line round-btn-primary"></i>',
    nextArrow: '<i class="ri-arrow-right-line round-btn-primary"></i>',
    responsive: [
      {
        breakpoint: 1074,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 813,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 486,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".our-partners-slider-container").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".press-us-slider-container").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});
