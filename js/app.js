$(function() {
    'use strict'

    $('[data-toggle="offcanvas"]').on('click', function() {
        $('.offcanvas-collapse').toggleClass('open')
    })

    $('#AppGallery a').nivoLightbox({
        effect: 'fall'
    });

    $("#main-slider").owlCarousel({
        items: 1,
        loop: true,
        dots: true
    });

    $("#AppGallery").owlCarousel({
        items: 5,
        loop: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    $("#sidebar").sticky({
        topSpacing: 100,
        bottomSpacing: 800
    });

    $(".collapse.show").each(function(){
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });
    
    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    });

});