$(window).load(function() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('.swiper-container1').height($(window).height() - 50);
}else{
    $('.swiper-container1').height($(window).height() - 88);
}
});

/*$(window).trigger('resize');*/





/*$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.swiper-container1').css('min-height', windowHeight);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });
});*/




$(window).load(function() {

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 // some code..
}else
{
var topOffset = new Array();

    function scrollFunction() {

        var scrollHeight = $(window).scrollTop();
        var headerCounter = 0;
        var scrolled = 0;
        var headerItems = $('.header').length;

        $('.header').each(function (index, el) {

            var elementHeight = $(this).outerHeight();

            var nextElementHeight = 0;
            var nextElement;

            if (index !== $('.header').length - 1) {
                nextElementHeight = $('.header').eq(index + 1).outerHeight();
                nextElement = $('.header').eq(index + 1);
            }

            if (scrollHeight >= topOffset[headerCounter] && (scrollHeight < topOffset[headerCounter + 1] || headerCounter == headerItems - 1)) {

                scrolled = 1;

                if (scrollHeight >= topOffset[headerCounter + 1] - elementHeight) {
                    $(this).css({
                        position: "fixed",
                        top: -(scrollHeight - (topOffset[headerCounter + 1] - elementHeight))
                    });
                    nextElement.css({
                        position: "fixed",
                        top: topOffset[headerCounter + 1] - scrollHeight
                    });
                    $('body').css({
                        "padding-top": elementHeight + nextElementHeight
                    });
                    return false;
                } else {
                    $(this).css({
                        position: "fixed",
                        top: 0
                    });
                    nextElement.css({
                        position: "static",
                    });
                    $('body').css({
                        "padding-top": elementHeight
                    });
                }

            } else {
                $(this).css({
                    position: "static"
                });
            }

            headerCounter++;
        });

        if (scrolled == 0) {
            $('body').css({
                "padding-top": 0
            });
        }
    }

    $(function () {
        $('.header').each(function () {
            topOffset.push($(this).offset().top);
        });
    });

    $(window).scroll(scrollFunction);
}
});