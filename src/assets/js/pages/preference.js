
$(document).ready(function () {
    // adjust animation delay of choices
    var i;


    for (i = 1; i < 29; i = i + 1) {

        $(".choice:nth-of-type(" + i + ")").addClass("animated bounceInUp");
        $(".choice:nth-of-type(" + i + ")").css({
            "animation-delay": (i * 100) + "ms"
        });

    }

    function setHeight() {
        // set the height of the main section
        var winHeight = $(window).height(),
            headerHeight = $("header").outerHeight(),
            footerHeight = $("footer").outerHeight(),
            prefHeight = $(".preference").outerHeight();
        if (winHeight > (headerHeight + footerHeight + prefHeight)) {
            $(".preference").outerHeight(winHeight - (headerHeight + footerHeight));
        } // else it will get the height from css media query ;

    }
    setHeight();
    
    // check if any of checkmarks is checked
    $(".choice input:checkbox").each(function () {
        $(this).on('change', function () {
            if ($(this).is(':checked')) {
                $(".update button").removeAttr("disabled");
            } else {
                if ($(".choice input:checkbox:checked").length > 0) {
                    $(".update button").removeAttr("disabled");
                } else {
                    $(".update button").attr("disabled", "true");

                }
            }
        });
    });

    $(window).resize(function () {
        setHeight();
    })

});
