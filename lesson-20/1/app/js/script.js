// $('.js-main-slider').slick();

$('.js-main-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay: true,
    // autoplaySpeed: 1000,
    arrows: true,
    prevArrow: '<button type="button" class="my-arrow-prev">1</button>',
    nextArrow: '<button type="button" class="my-arrow-next">2</button>',
    dots: true,
    dotsClass: 'my-dots',
    // infinite: false,
    draggable: false,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                draggable: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                draggable: true,
            }
        },
    ]
  });