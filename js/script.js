// global $,alert , console
$(function(){
    'use strict';
    //adjust header height
    var myHeader = $('header')
    myHeader.height($(window).height());
    $(window).resize(function(){
        myHeader.height($(window).height());
    });
    //links add active class
    $('.links a').click(function(){
        $(this).addClass('active').siblings().removeClass('active');    
    });

    // smooth scroll to div 
    $('.links a').click(function(){
        $('html,body').animate({
            scrollTop: $('#'+ $(this).data('value') ).offset().top
            },1000)
    });
    // zoza auto slider code
    (function autoSlider() {
       $('.zoza-active').each(function() {
            if(!$(this).is(':last-child')) {
                $(this).delay(3500).fadeOut(1500,function() {
                     $(this).removeClass('zoza-active').next().addClass('zoza-active').fadeIn(1500);
                     autoSlider();
                });
            } else {
                $(this).delay(3500).fadeOut(1500,function() {
                    $(this).removeClass('zoza-active');
                    $('.zoza-slider div').eq(0).addClass('zoza-active').fadeIn(1500);
                    autoSlider();
                });
            }
        });
    }());
}());
