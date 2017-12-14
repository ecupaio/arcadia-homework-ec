//Vid Embed
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];

firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 var player;


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
            $('.nav-link.signup, .biz-signup').addClass('active');
        } else {
            $('.nav-link.signup, .biz-signup').removeClass('active');
        }

    });
    //Close mobile nav
    var windowWidth = $(window).width();
    $(window).resize(function() {
        if (windowWidth >= 1024) {
            $('.menu-nav, body').removeClass('active');
        }
    });
    //Nav Menu
    $('.nav-link.menu').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.menu-nav').slideToggle('300');
    });
    //Nav menu mobile
    $('.menu-toggle').click(function() {
        if (windowWidth <= 1024) {
            $('.menu-nav').addClass('active');
        } else {
            $('.menu-nav').slideDown('300').addClass('active');
        }

        $('body').addClass('active');
    });
    $('.close-menu, .menu-nav').click(function (e) {
        var targetClass = $(e.target).attr('class');

        if (targetClass.indexOf('fa-times') > -1 || targetClass.indexOf('close-menu') > -1 ) {
            $('body, .menu-nav').removeClass('active');
            $('.menu-nav').slideUp('300');

        }

    });
    $('.nav-col-head').click(function() {
        $(this).find('.nav-col-toggle').toggleClass('active');
        $(this).next('.nav-col-list').slideToggle('300').toggleClass('active');
    });
    //Play vid
    $('.benefit-vid').click(function() {
        $('.vid-overlay').addClass('active');
        var vidId = $(this).data('vid');

        player = new YT.Player('vid-player', {
            height: '360',
            width: '640',
            videoId: vidId,
            playerVars: {
                controls: 0,
                rel: 0,
                autoplay: 1
            }

         });
    });
    $('.close-vid').click(function() {
        $('.vid-overlay').removeClass('active');
        player.destroy();
    });

});
