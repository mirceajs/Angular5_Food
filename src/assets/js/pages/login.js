// loading screen
console.log("login")
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
    // set the height of the main section
    function setHeight() {

        var winHeight = $(window).height();
        if (winHeight > 600) {
            $(".login-form").outerHeight(winHeight);
        } else {
            $(".login-form").outerHeight(600);
        }
    }
    setHeight();
    $(window).resize(function () {
        setHeight();
    })
});
