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
    // set the height of the main section
    function setHeight() {

        var winHeight = $(window).height(),
            headerHeight = $("header").outerHeight(),
            footerHeight = $("footer").outerHeight(),
            sectHeight = $(".order-history").outerHeight()
        if (winHeight > (headerHeight + footerHeight + sectHeight)) {
            $(".order-history").outerHeight(winHeight - (headerHeight + footerHeight));
        }
    }
    setHeight();
    $(window).resize(function () {
        setHeight();
    })
});
