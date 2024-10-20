$(document).ready(function(){

    var header = $(".header"),
        slider = $(".bxslider");
    header.height($(window).height());

    // on resize

    $(window).resize(function(){
        header.height($(window).height());

        slider.each(function(){
            $(this).css("paddingTop",($(window).height() - $(".bxslider li").height()- 150) / 2);
        });
    });

    // add class active

    $(".links li a").click(function(){
   $(this).parent().addClass("active").siblings().removeClass("active");
    });

    slider.bxSlider();
    slider.each(function(){
        $(this).css("paddingTop",($(window).height() - $(".bxslider li").height()- 150) / 2);
    })

    //navigate through links

    $(".links li a").click(function(){
        $("html, body").animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
        
    });

    // our auto slider 

    (function autoslider() {
        $('.slider .active').each(function(){ 
            if (!$(this).is(':last-child')) {
                $(this).delay(2000).fadeOut(1000, function(){
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoslider();
                });
            } else {
                $(this).delay(2000).fadeOut(1000, function(){

                    $(this).removeClass('active');
                
                $('.slider div').eq(0).addClass('active').fadeIn();
                    autoslider();
                });
            }
        
        });
    }());

    var mixer = mixitup('#container');

    $('.shuffle li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

    $("body").niceScroll({
        cursorcolor:"#1bbc9b",
        cursorwidth:"8px",
        zindex: 9999,
        cursorborder: "1px solid #1bbc9b"
    });
});