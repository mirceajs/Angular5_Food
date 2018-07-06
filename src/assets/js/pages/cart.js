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
    // adjust animation delay of choices
    var i;


    for (i = 1; i < 29; i = i + 1) {

        $(".choice:nth-of-type(" + i + ")").addClass("animated zoomIn");
        $(".choice:nth-of-type(" + i + ")").css({
            "animation-delay": (i * 100) + "ms"
        });

    }


    // set the height of the main section
    var winHeight = $(window).height(),
        headerHeight = $("header").outerHeight(),
        footerHeight = $("footer").outerHeight();
    if (winHeight > 905) {
        $(".preference").outerHeight(winHeight - (headerHeight + footerHeight));
    } else {
        $(".preference").outerHeight(750);
    }

});
