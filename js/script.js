/*jslint browser: true*/
/*global $, jQuery, alert*/

//Toggle Menu Items
$(document).ready(function(){
    $("nav .nav-toggle").click( function(){
        $(".nav-list").slideToggle();
    });
});

//Smooth Scroll function
$(document).ready(function () {
    'use strict';
    //Calculate the Height of navbar
    var outerHeight = $("nav").outerHeight();
    $('.Scroll-items, #scroll-to-top').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - outerHeight
                }, 1000);
                return false;
            }
        }
    });
});

//Add active class to click menu item
$(document).ready(function () {
    'use strict';
    $(".nav-list li a").on("click", function(){
        $(".nav-list li a").parent("li").removeClass('active');
        $(this).parent("li").addClass('active');
    });
});


//Scroll-Spy add active class to a specific section
$(document).ready(function () {
    'use strict';
    $(window).scroll(function () {
        $("section, header").each(function () {
            // Grab the id of that section eg: About, Contact
            var sectioId = $(this).attr("id");
            //Grab the height of that section
            var heightOfSec = $(this).outerHeight();
            //Grab the height from top minus height of navbar
            var heightFromTop = $(this).offset().top - 69;
            if ($(window).scrollTop() > heightFromTop && $(window).scrollTop() < heightFromTop + heightOfSec) {
                $(".nav-list li a").parent().removeClass("active");
                $(".nav-list li a[href='#" + sectioId + "']").parent().addClass("active");
            }
        });
    });
});
