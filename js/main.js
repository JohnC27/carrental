
$(function() {

(function($) {
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);

// slick

$('.slick').slick({
    speed: 800,
    prevArrow: '<i class="fa fa-angle-left arrows" id="arrow-left" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right arrows" id="arrow-right" aria-hidden="true"></i>'
});

// Показывать карту только когда докрутили
    var model = $('.model');
    var modelTop = model.offset().top;
    $(window).bind('scroll', function() {
        var windowTop = $(this).scrollTop();
        if (windowTop > modelTop) {
            $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ad378a2c68440244433e549166a30c565869cb9b548bea0436b55e48c21f11ab7&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=false"></script>')
            $(window).unbind('scroll')
        }
});

    //popup
    $('.rent').magnificPopup();

    //lazy scroll

$(function(){
        $("a[href^='#features']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1000);
                return false;
        });
});

$(function(){
    $("a[href^='#faq']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1000);
            return false;
    });
});

$(function(){
    $("a[href^='#model']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1000);
            return false;
    });
});

$(function(){
    $("a[href^='#contacts']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1000);
            return false;
    });
});


});