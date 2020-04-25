/*console*/
    $(document).ready(function ($) {
	   "use strict";
    $('#owl-carousel-2').owlCarousel({
        center: true,
        loop: true,
        margin: 10,
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
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    $(".click-nav").click(function () {
        $("header .header-top nav .list").fadeToggle(500)
    });
    });
