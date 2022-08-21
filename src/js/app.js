$(document).ready(function(){
    $('.slider_block').slick({
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="./img/left.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./img/rigiht.png" alt=""></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                  }
            }
        ]
    });
  });