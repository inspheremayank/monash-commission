(function () {
    
    /***********************************/
    /* Sidebar Slide in on top */
    /**********************************/

    $('.header__main__navigation').children().clone().appendTo('.standalone-menu');
    $('.header__main__icons--list .menu').on('click', function (event) {
        event.preventDefault();
        $('body').addClass('noscroll');
        $('.responsive-standalone').addClass('navigation-active');
        $('.responsive-standalone-close').addClass('open');
        $(".responsive-standalone-overlay").animate({
            "opacity": "toggle"
        }, {
            duration: 500
        }, function () {
            $(".responsive-standalone-overlay").fadeIn();
        });
        return false;
    });
    $('.responsive-standalone-close').on('click', function (event) {
        event.preventDefault();
        $('body').removeClass('noscroll');
        $(this).removeClass('open');
        $('.responsive-standalone').removeClass('navigation-active');
        $(".responsive-standalone-overlay").hide();
        return false;
    });
    $(".responsive-standalone-overlay").on('click', function () {
        $('.responsive-standalone-close').removeClass('open');
        $('.responsive-standalone').removeClass('navigation-active');
        $(".responsive-standalone-overlay").hide();
        $('body').removeClass('noscroll');
    });
    $('.responsive-standalone li.dropdown').on('click', function () {
        $(this).addClass('active').children('.sub-menu').slideToggle();
    });
    
    //Function for header fix
    function scrollHeight() {
        if ($(window).width() > 992) {
            $(".header__main").sticky({
                topSpacing: 0
            });
        }
        ;
    };
    //Function for card text truncate
    $('.content__section__head--heading, .text__dotdot').ellipsis({
        responsive: true
    });
    $('.card__view-full .content__section__head--heading').ellipsis({
        responsive: true,
        lines: 2
    });
    function truncate() {
        if ($(window).width() < 768) {
            $('.text__dotdot').ellipsis({
                responsive: true,
                lines: 3
            });
            $('.content__section__head--heading').ellipsis({
                responsive: true,
                lines: 2
            });
        };

    };
    scrollHeight();
    truncate();
    $(window).resize(function () {
        scrollHeight();
        truncate();
    });
    
    // Function for search icon
    $('.header__main__icons--list .searchBtn').on('click', function() {
        var searchBox = $(this).parent('.header__main__icons--list').prev('.header__main__icons--search-box');
        if(searchBox.hasClass('active')) {
            searchBox.removeClass('active');
        } else {
            searchBox.addClass('active');
        };
    });
    
    $('.closeBtn').click(function(e) {
        e.preventDefault();
        $('.header__main__icons--search-box').removeClass('active');
    });
    
    $('.textSearch').click(function(e) {
        e.preventDefault();
        var searchTerm = $('#textSearchBox').val().trim();
        if (!searchTerm) {
            return false;
        } else {
            window.location = encodeURI('/search?s=' + searchTerm);
        }
    });
    
    $('#headerSearchForm').keypress(function (e) {
        if (e.which == 13) {
            e.preventDefault();
            e.stopPropagation();
            var searchTerm = $('#textSearchBox').val().trim();
            $('#textSearchBox').val(searchTerm);
            if (!searchTerm) {
                return false;
            } else {
                window.location = encodeURI('/search?s=' + searchTerm);
            }
        }
    });

    //Function for article page figure
    $('.article__main-content figure').each(function () {
        if ($(this).attr('style') !== undefined) {

        } else {
            $(this).after('<div class="clearfix"></div>');
        }
    });
    //Function for article page figure
    $('.article__main-content figure figcaption').each(function () {
        if (!$(this).text().trim().length > 0) {
            $(this).addClass("d-none");
        }
    });

    //Function for article page slider
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
})(jQuery);
