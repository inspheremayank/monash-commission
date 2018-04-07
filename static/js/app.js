

var start = $('.header').offset().top;

$.event.add(window, "scroll", function () {
    var p = $(window).scrollTop();
    if (p > start) {
        $('.header').addClass('header__fixed');
    } else {
        $('.header').removeClass('header__fixed');
    }
});
$(".navigation-section .open-menu").on('click', function() {
   $(this).toggleClass('active');
   $(this).next('ul').toggleClass('active');
});
$(document).ready(function () {
    $('.content__section-heading, .text__dotdot').ellipsis({
        responsive: true,
        lines: 2
    });
});
$('.article__main-content figure').each(function () {
    if ($(this).attr('style') !== undefined) {
        
    } else {
        $(this).after('<div class="clearfix"></div>');
    }
});

$('.article__main-content figure figcaption').each(function(){
    if (!$(this).text().trim().length > 0) {
        $(this).addClass("d-none");
    }
});
var slider = $('.mainSlide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    infinite: true,
    arrows: false,
    dots: true,
    responsive: [
    {
      breakpoint: 767,
      settings: {
        dots: false,
        arrows: true
      }
    }
    ]
});