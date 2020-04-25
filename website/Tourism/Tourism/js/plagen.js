$(document).ready(function ($) {
	"use strict";
     $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        rtl: true,
        autoplay: true,
        nav: true,
        pagination: true,
        autoplayTimeout: 2000,
        smartSpeed: 1000,
        dragEndSpeed: 1000,
        autoplayHoverPause: true,
        animateIn: 'zoomIn',
        animateOut: 'zoomOut',
        animate: true,
        navText: [
            "<i class='fa fa-angle-right' aria-hidden='true'></i>",
            "<i class='fa fa-angle-left' aria-hidden='true'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
	});
    
         $('.owl-carousel-2').owlCarousel({
        loop: true,
        margin: 10,
        rtl: true,
        autoplay: true,
        nav: true,
        pagination: true,
        autoplayTimeout: 2000,
        smartSpeed: 1000,
        dragEndSpeed: 1000,
        autoplayHoverPause: true,
        animateIn: 'zoomIn',
        animateOut: 'zoomOut',
        animate: true,
        navText: [
            "<i class='fa fa-angle-right' aria-hidden='true'></i>",
            "<i class='fa fa-angle-left' aria-hidden='true'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
	});
   $(".nav-click").click(function () {
       $(".nav li").toggleClass("droop");
   });
});
