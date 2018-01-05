//Youtube API Async load
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
$(document).ready(function() {
    //Intro Animation
    var slidesLength = $('.intro-slide').length;
    var titleDelay = slidesLength * 1500;
    $('.intro-slide').each(function(i,obj) {
        setTimeout(function() {
            $(obj).addClass('active');
            setTimeout(function() {
               $(obj).removeClass('active');
           }, 1000);
       }, 1500*i);
    });
    setTimeout(function() {
       $('.intro-title').addClass('active');
    }, titleDelay);
    //Post Slider
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
    //Show Signup link
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
        windowWidth = $(window).width();
        if (windowWidth >= 1024) {
            $('body').removeClass('active');
                $('.header-nav .nav-col-list').show();
        } else {
            $('.header-nav .nav-col-list').hide();
            $('.header-nav .nav-col-list, .nav-col-toggle').removeClass('active');
        }
    });
    //Nav Menu
    $('.nav-link.menu').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.menu-nav').toggleClass('active');
    });
    //Nav menu mobile
    $('.menu-toggle').click(function() {
        if (windowWidth <= 1024) {
            $('.menu-nav').addClass('active');
        } else {
            $('.menu-nav').addClass('active');
        }
        $('body').addClass('active');
    });
    function closeMobileMenu() {
        $('body, .menu-nav, .nav-link.menu').removeClass('active');

    }
    $('.close-menu').click(function (e) {
        closeMobileMenu();
    });
    $('.menu-nav').click(function(e) {
        var targetClass = $(e.target).attr('class');
        if (targetClass.indexOf('menu-nav') > -1 ) {
            closeMobileMenu();
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
            host: 'https://www.youtube.com',
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
    //Language Toggle
    $('.lang-select').click(function() {
        $(this).toggleClass('active');
        $(this).next('.lang-options').slideToggle('300');
    });
});
