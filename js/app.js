$(document).ready(function () {
    $('#hero-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimport:5000,
        autoplayHoverPause:false,
        smartSpeed: 1000,
        navText:["prev", "next"],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1024: {
                items: 1,
            }
        }
    });

    $('#project-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        smartSpeed: 1000,
        margin: 24,
        navText:["PREV", "NEXT"],
        responsive: {
            0: {items: 1,
               nav: false,
               margin: 0,
            },
            768: {items: 2,
               
            },
            1140: {items: 2,
                  center: true,
                  dots: true,
            }
        }
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        items:1,
        smartSpeed:800,
        
    })
});