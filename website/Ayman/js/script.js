$(window).on("load",function () {

    // loading
    $('.pre-load').stop().animate({opacity:0}, 500, function(){
        $('.pre-load').css({'display':'none'});
        $('body').css({'overflow-y':'auto'});
    });


    // slider
    $('.slider-tabs').owlCarousel({
        loop: true,
        margin: 25,
        items:2,
        rtl: true,
        autoplay: false,
        // animate: true,
        navText: [
            "<i class='fa fa-angle-right' aria-hidden='true'></i>",
            "<i class='fa fa-angle-left' aria-hidden='true'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            750: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $('.slider-customer').owlCarousel({
        loop: true,
        margin: 25,
        items:2,
        rtl: true,
        autoplay: false,
        // animate: true,
        navText: [
            "<i class='fa fa-angle-right' aria-hidden='true'></i>",
            "<i class='fa fa-angle-left' aria-hidden='true'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            750: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    
    
    $(".click-nav").click(function () {
        $(this).toggleClass("active");
        $(".header--list__bottom .nav").toggleClass("active");
    });

    $(".header--list__bottom .nav ul li ").find("a").click(function() {
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
        },1500);
    });

    });
