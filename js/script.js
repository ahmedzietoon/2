// global $,alert , console
$(function(){
    'use strict';
    //adjust header height
    var myheader = $('header')
    myheader.height($(window).height());
    $(window).resize(function(){
        myheader.height($(window).height());
    });
    //links add active class
    $('.links li a').click(function(){
        $(this).addClass('active').siblings().removeClass('active');    
    });

    // smooth scroll to div 
    $('.links a').click(function(){
        $('html,body').animate({
            scrollTop: $('#'+ $(this).data('value') ).offset().top
            },1000)

    })
});

