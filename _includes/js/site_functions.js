$(document).ready(function() {
    $('.post-slider').slick({
        slidesToShow: 3,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2,
                    dots: true
                }
            },{
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $(window).scroll(function() {
        var pageTop = $(window).scrollTop();
        var sectionTop = $('#benefits').position().top;
        if (sectionTop <= pageTop) {
            $('.nav-link.signup').addClass('active');
        } else {
            $('.nav-link.signup').removeClass('active');
        }
    });
    $('.nav-link.explore').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active')
        $('.explore-nav').slideToggle();
    });
});
