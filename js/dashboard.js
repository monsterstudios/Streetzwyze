$(function() {
    'use strict'

    $('[data-toggle="offcanvas"]').on('click', function() {
        $('.offcanvas-collapse').toggleClass('open')
    })

    $("#adv-slider").owlCarousel({
        items: 1,
        loop: true,
        dots: true
    });

    $('.float-nav').click(function() {
        $('.main-nav, .menu-btn').toggleClass('active');
    });
});