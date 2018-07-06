/*global $, document , window , setTimeout*/

/****************************************************

                 loading div

****************************************************/

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
    /****************************************************

                       global scripts

    ****************************************************/
    // trigger niceScroll

    $("html").niceScroll({
        horizrailenabled: false,
        cursorcolor: "#FF7920",
        cursorborder: "none"
    });
    // set nicescroll z-index 
    $("#ascrail2000").css("z-index", "9");
    var winWidth = $(window).width(),
        winHeignt = $(window).height();



    /****************************************************

                       header

    ****************************************************/
    $(".avatar").on("click", function () {
        if ($(".avatar .profile-opener").hasClass("profile-open")) {
            
            $(".profile-option").removeClass("animated flipInY").addClass("animated bounceOutRight");
            setTimeout(function () {
                $(".profile-option").removeClass("pro-open");
            }, 1000);
            $(".avatar .profile-opener").removeClass("profile-open");
        } else {
            
            $(".profile-option").removeClass("animated bounceOutRight").addClass("pro-open animated flipInY");
            $(".avatar .profile-opener").addClass("profile-open");
        }

    });
    /*var cartItemNum = 0,
        cartElmnt = $(".cart-icon .value"),
        j = 1;

    function cartNotif() {
        cartElmnt.css("visibility", "visible");
        if (cartItemNum > 0) {
            cartElmnt.text(cartItemNum);
            cartElmnt.css("visibility", "visible").addClass("animated bounce");
            cartElmnt.addClass("animated bounce");
        } else {
            cartElmnt.text("");
            cartElmnt.css("visibility", "hidden").removeClass("animated bounce");
            cartElmnt.removeClass("animated bounce");
        }
    }
    cartNotif();
    $(".amount").text(j);

    $(".increase").each(function () {
        $(this).on("click", function () {
            j = j + 1;
            $(this).siblings(".amount").text(j);
        });
    });

    $(".decrease").each(function () {
        $(this).on("click", function () {
            j = j - 1;
            $(this).siblings(".amount").text(j);
        });

    });
    $(".confirm-adding").on("click", function () {
        cartItemNum = j;
        cartNotif();
        $(this).addClass("confirmed");
    });*/
    
   
    /****************************************************

                       responsive utilites

    ****************************************************/

    function responsiveUtilites() {
        var bodyWidth = $("body").width();
        if (bodyWidth < 991) {
            // header
            $("header>.container").removeClass("container");

        } else {

            // header
            $("header>div").addClass("container");
        }
        // setting the left of the profile div
        var profileImg = $(".avatar img"),
            profileDiv = $(".profile-option");

        // profileDiv.offset({
        //     left: (profileImg.offset().left) - 187.796875
        // });
    }

    responsiveUtilites();


    $(window).resize(function () {
        responsiveUtilites();
    });






});
