$(document).ready(function() {
    $('.post-slider').slick({
        slidesToShow: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidestoShow: 2
                }
            },{
                breakpoint: 480,
                settings: {
                    slidestoShow: 1
                }
            }
        ]
    });
});
