// loading screen
$(window).on("load", function () {
    "use strict";
    $(".loading-animation").fadeOut(400, function () {
        $(this).parent().fadeOut(400, function () {
            $(this).remove();
        });
    });


});
$(document).ready(function () {
    "use strict";
    // trigger niceScroll

    $("html").niceScroll({
        horizrailenabled: false,
        cursorcolor: "#FF7920",
        cursorborder: "none"
    });
    // set nicescroll z-index 
    $("#ascrail2000").css("z-index", "9");
    function cartResponsive (){
        // setting the height of the single dish div
        var winWidth = $(window).width(),
            winHeight = $(window).height(),
            singleDishWidth,
            headerHeight = $("header").outerHeight(),
            ComOrderHeight = $(".complete-order").outerHeight(),
            cartHeight = $(".cart").outerHeight();
            
        $(".single-dish").outerWidth(winWidth*0.4407);
        singleDishWidth = $(".single-dish").outerWidth();
        $(".single-dish").outerHeight(singleDishWidth*1.169);
        $(".single-dish img").outerHeight(singleDishWidth*0.68);
        $(".single-dish .line").css("margin",(singleDishWidth*.0907)+"px 10px "+(singleDishWidth*.008)+"px");
        
        // setting the height of main section
        if(winHeight > (headerHeight + cartHeight + ComOrderHeight)){
            $(".cart").outerHeight(winHeight - (headerHeight + ComOrderHeight));
        }else{
            $(".cart").css("height","auto");
        }
        
    }
    cartResponsive();
    $(window).resize(function(){
        cartResponsive();
    });
});
