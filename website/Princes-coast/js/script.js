/*console*/
    $(document).ready(function ($) {
	   "use strict";
    // fance_box
    $(".import-news__slider").click(function () {
        $(".video-all").fadeIn(200);
        var video=$(this).attr('data-video');
        $(".video-3").html('<iframe class="iframe" id="myVideo" width="" height="" src="'+video+'" frameborder="0" allowfullscreen=""> </iframe>');
            $(".video-3").fadeIn(200);
    });
    $(".video-all .click-head").click(function(){
        $(".video-all").fadeOut(200);
        $("#myVideo"). removeAttr("src");
    });

    // scroll top
    $('.scrool--top a').click(function(){
        $('html, body').animate({scrollTop:0}, 1000);
        return false;
    });
    
    // slider
    $('#owl-carousel-1').owlCarousel({
        loop: true,
        margin: 15,
        rtl: true,
        autoplay: true,
        animate: true,
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

    $('#owl-carousel-2').owlCarousel({
        loop: true,
        margin: 0,
        rtl: true,
        autoplay: true,
        // animateIn: 'flipOutY',
        // animateOut: 'flipInX',
        animate: true,
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
        $('.owl-carousel-4').owlCarousel({
        items:1,
        rtl : true,
        margin:0,
        autoplay: true,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
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
    $('.owl-carousel-5').owlCarousel({
        loop: true,
        margin: 0,
        items:6,
        rtl: true,
        autoplay: false,
        animate: true,
        navText: [
            "<i class='fa fa-angle-right' aria-hidden='true'></i>",
            "<i class='fa fa-angle-left' aria-hidden='true'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            750: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });


    $('#owl-carousel-3').owlCarousel({
        loop: true,
        margin: 10,
        items:4,
        rtl: true,
        autoplay: true,
        animate: true,
        navText: [
            "<i class='fa fa-angle-right' aria-hidden='true'></i>",
            "<i class='fa fa-angle-left' aria-hidden='true'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            750: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    // scroll-top

    window.onscroll = function() {myFunction()};
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky && screen.width > 660) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
    $("nav").find("a").click(function() {
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
    },1500);
});

    // if () {
    //     function myFunction() {
    //       if (window.pageYOffset >= sticky) {
    //         header.classList.remove("sticky");
    //       } else {
    //         header.classList.remove("sticky");
    //       }
    //     }
    //     $("nav").find("a").click(function() {
    //         var section = $(this).attr("href");
    //         $("html, body").animate({
    //             scrollTop: $(section).offset().top
    //     },1500);
    // });
    // }   else {
        
    // }

    // mix-it-up

    $(".mix-it-up--top-tap.mix-it-up--top-tap-1").click(function() {
        $(".mix-it-up--top-tap.mix-it-up--top-tap-2").removeClass("activ");
        $(this).addClass("activ");
        $(".mix-it-ups.mix-it-up--bottom--1").addClass("activ");
        $(".mix-it-ups.mix-it-up--bottom--2").removeClass("activ");
    });
    $(".mix-it-up--top-tap.mix-it-up--top-tap-2").click(function() {
        $(".mix-it-up--top-tap.mix-it-up--top-tap-1").removeClass("activ");
        $(this).addClass("activ");
        $(".mix-it-ups.mix-it-up--bottom--2").addClass("activ");
        $(".mix-it-ups.mix-it-up--bottom--1").removeClass("activ");
    });

    // map

    $(".click-about--map").click(function() {
        $(".about__map").toggleClass("show");
        $(this).toggleClass("rotat")
    });

    // nav

    $(".click-nav").click(function () {
        $("header .header__m .header__m--list nav").fadeToggle(500)
    });

    // calinder

    $(function(){
        $("ul#ticker01").liScroll();
    });
    $(function(){
        $("ul#ticker01").liScroll({travelocity: 0.15});
    });

    // upload image
    $(".input-file").change(function(){
        var input = (this);
        var image = $(this).siblings('.input-image');
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
             image.attr('src', e.target.result);
             console.log(this);
         }
         reader.readAsDataURL(input.files[0]);
     }
 });

    });