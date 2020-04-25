/*console*/
    $(document).ready(function ($) {
	   "use strict";
    $('#owl-carousel-1').owlCarousel({
        loop: true,
        margin: 9,
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
    $('#owl-carousel-2').owlCarousel({
        center: true,
        loop: true,
        margin: 10,
        items:2,
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
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('#owl-carousel-3').owlCarousel({
        loop: true,
        margin: 10,
        items:4,
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
                items: 4
            }
        }
    });
    $(".click-nav").click(function () {
        $("header .header__m .header__m--list nav").fadeToggle(500)
    });
    $(function(){
    $("ul#ticker01").liScroll();
});
    $(function(){
        $("ul#ticker01").liScroll({travelocity: 0.15});
    });
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
    window.onscroll = function() {myFunction()};

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }

    });
jQuery.fn.liScroll = function(settings) {
        settings = jQuery.extend({
        travelocity: 0.07
        }, settings);       
        return this.each(function(){
                var $strip = jQuery(this);
                $strip.addClass("newsticker")
                var stripWidth = 1;
                $strip.find("li").each(function(i){
                stripWidth += jQuery(this, i).outerWidth(true); // thanks to Michael Haszprunar and Fabien Volpi
                });
                var $mask = $strip.wrap("<div class='mask'></div>");
                var $tickercontainer = $strip.parent().wrap("<div class='tickercontainer'></div>");                             
                var containerWidth = $strip.parent().parent().width();  //a.k.a. 'mask' width   
                $strip.width(stripWidth);           
                var totalTravel = stripWidth+containerWidth;
                var defTiming = totalTravel/settings.travelocity;   // thanks to Scott Waye     
                function scrollnews(spazio, tempo){
                $strip.animate({right: '-='+ spazio}, tempo, "linear", function(){$strip.css("right", containerWidth); scrollnews(totalTravel, defTiming);});
                }
                scrollnews(totalTravel, defTiming);             
                $strip.hover(function(){
                jQuery(this).stop();
                },
                function(){
                var offset = jQuery(this).offset();
                var residualSpace = offset.left + stripWidth;
                var residualTime = residualSpace/settings.travelocity;
                scrollnews(residualSpace, residualTime);
                });         
        }); 
};