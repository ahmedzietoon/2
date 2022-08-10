  $(function hSlider() {
    $('.hslider div').each(function() {
        if(!$(this).is(':last-child')) {
            $(this).delay(3500).fadeOut(1500,function() {
                  $(this).removeClass('hactive').next().addClass('hactive').fadeIn(1500);
                  hSlider();
            });
        } else {
            $(this).delay(3500).fadeOut(1500,function() {
                $(this).removeClass('hactive');
                $('.hslider div').eq(0).addClass('hactive').fadeIn(1500);
                hSlider();
            });
        }
    });
  }());
