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

    var sslider = $('#signup-slider');
    $(sslider).owlCarousel({
        items: 1,
        loop: true,
        dots: false,
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

    sslider.owlCarousel();
    
    $('.signup-merchant').click(function() {
        sslider.trigger('prev.owl.carousel', [300]);
    });

    $('.signup-seller').click(function() {
        sslider.trigger('next.owl.carousel', [300]);
    });


    $("#sidebar").sticky({
        topSpacing: 100,
        bottomSpacing: 800
    });

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;

    $(".btn-next").click(function() {

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({ 'opacity': opacity });
            },
            duration: 600
        });
    });

    $(".btn-previous").click(function() {

        current_fs = $(this).parent('fieldset');
        previous_fs = $(this).parent('fieldset').prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({ 'opacity': opacity });
            },
            duration: 600
        });
    });

    $('.radio-group .radio').click(function() {
        $(this).parent().find('.radio').removeClass('selected');
        $(this).addClass('selected');
    });

    $(".reservation-submit").click(function() {
        return false;
    })
});