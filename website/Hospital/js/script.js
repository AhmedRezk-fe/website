$(window).on("load", function () {

    // fancybox

    $("a.group").fancybox({
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'speedIn': 600,
        'speedOut': 200,
        'overlayShow': false
    });

    $('[data-fancybox="gallery"]').fancybox({
        // Options will go here
    });

    $('[data-fancybox]').fancybox({
        youtube: {
            controls: 0,
            showinfo: 0
        },
        vimeo: {
            color: 'f00'
        }
    });

    // loading
    $('.pre-load').stop().animate({
        opacity: 0
    }, 500, function () {
        $('.pre-load').css({
            'display': 'none'
        });
        $('body').css({
            'overflow-y': 'auto'
        });
    });

    // slider
    $('#slider-doctor').owlCarousel({
        loop: false,
        margin: 10,
        items: 1,
        rtl: true,
        autoplay: false,
        // animate: true,
        navText: [
            "<i class='fa fa-angle-right' aria-hidden='true'></i>",
            "<i class='fa fa-angle-left' aria-hidden='true'></i>"
        ],
        responsive: {
            500: {
                items: 1
            },
            750: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    $('.slider-cards').owlCarousel({
        loop: false,
        margin: 20,
        items: 1,
        rtl: true,
        autoplay: false,
        // animate: true,
        navText: [
            "<i class='fa fa-angle-right' aria-hidden='true'></i>",
            "<i class='fa fa-angle-left' aria-hidden='true'></i>"
        ],
        responsive: {
            500: {
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

    $('#slider-home').owlCarousel({
        loop: false,
        margin: 0,
        items: 2,
        rtl: true,
        autoplay: true,
        animate: true,
        animateOut: 'fadeOut',
        animateIn: 'zoomIn',
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

    $('#slider-testimonial').owlCarousel({
        loop: false,
        margin: 0,
        items: 2,
        rtl: true,
        autoplay: true,
        animate: true,
        animateOut: 'zoomOut',
        animateIn: 'zoomIn',
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

    // search
    $("#open-transparent").click(function () {
        $(".modil").fadeIn(500);
        $(".body").addClass("body-2");
        $(".modil form").addClass("form-top");
    });
    $(".search-background").click(function () {
        $(".modil").fadeOut(500);
        $(".body").removeClass("body-2");
        $(".modil form").removeClass("form-top");
    });

    $(".click-nav").click(function () {
        $(this).toggleClass("active");
        $(".header--list__bottom .nav").toggleClass("active");
    });

    // $(".header--list__bottom .nav ul li ").find("a").click(function() {
    //     var section = $(this).attr("href");
    //     $("html, body").animate({
    //         scrollTop: $(section).offset().top
    //     },1500);
    // });

    // nav 
    $(".click--nav").click(function () {
        $(this).toggleClass("open");
        $(".click--nav").toggleClass("active");
        $(".body-overlay").toggleClass("back");
        $(".nav").toggleClass("back");
        $('body').css({
            'overflow-y': 'hidden'
        });
    });


    $(".body-overlay").click(function () {
        $(".click--nav").removeClass("open");
        $(".click--nav").removeClass("active");
        $(".body-overlay").removeClass("back");
        $(".nav").removeClass("back");
        $('body').css({
            'overflow-y': 'auto'
        });
    });

    // departments
    $(".all-DEPARTMENt ul li").click(function () {
        $(".all-DEPARTMENt ul li").not(this).removeClass("active");
        $(this).addClass("active");
        var att = $(this).children().children().attr("class");
        $(".dep-icon i").attr("class", att);


        var att2 = $(this).attr("my-data");
        console.log(att2);
        var datah2 = $(att2).find(".h2").html();
        var datap = $(att2).find("p").html();

        $("section.DEPARTMENt .disease-des h2").html(datah2);

        $("section.DEPARTMENt .disease-des p").html(datap);


    })


});