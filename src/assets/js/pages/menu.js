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
    // trigger niceScroll

    $("html").niceScroll({
        horizrailenabled: false,
        cursorcolor: "#FF7920",
        cursorborder: "none"
    });
    // set nicescroll z-index 
    $("#ascrail2000").css("z-index", "9");


    // setting the height of the file
    function sectionHeight(sectionElmnt) {
        var winHeight = $(window).height(),
            headerHeight = $("header").outerHeight(),
            footerHeight = $("footer").outerHeight(),
            sectHeight = sectionElmnt.outerHeight();
        if (winHeight > (headerHeight + footerHeight + sectHeight)) {
            $(".sections-wrapper").outerHeight(winHeight - (headerHeight + footerHeight));
        } else {
            $(".sections-wrapper").outerHeight(sectHeight);
        }
    }
    // trigerring the function for recommended by default
    sectionHeight($(".recommended"));

    // the function to change the slide
    function changeSection(toShow, toHide) {

        $("html , body").animate({
            scrollTop: 0
        }, 150);

        sectionHeight(toShow);

        if (!toShow.hasClass("order-section-active")) {
            // setting wow animation
            var animatedElmnts = 
            toShow.find(".rec-image , .rec-desc , .single-dish , .more-details");
            if(! animatedElmnts.hasClass("wow")){
                animatedElmnts.addClass("wow");
                setTimeout(function(){
                    // initiate wow animation
                    var myWow = new WOW({
                        live: true
                    });
                    myWow.init();
                },1000);
            }
            setTimeout(function () {
                toHide.removeClass("slideOutLeft slideInRight").addClass("animated slideOutLeft");
                setTimeout(function () {
                    toHide.removeClass("order-section-active");
                }, 1000);

                toShow.removeClass("slideOutLeft").addClass("order-section-active animated slideInRight");
                console.log(toShow.find(".rec-image"));
            }, 150);

        } else {
            if (toShow.hasClass("single-meal")) {
                $("html , body").animate({
                    scrollTop: 0
                }, 450);
            }
        }
    }

    $("nav .nav-item:nth-child(1),nav .nav-item:nth-child(2)").each(function () {

        $(this).on("click", function () {
            $(this).addClass("nav-active").siblings().removeClass("nav-active");

            var relatedSection = $($(this).data("class"));

            changeSection(relatedSection, relatedSection.siblings());
        });
    });

    /****************************************************

                   single meal section

    ****************************************************/
    // opening the section and adjust the inner nav
    var singleMeal = $(".single-meal");
    $(".single-dish .add").on("click", function () {
        //open the section
        changeSection(singleMeal, singleMeal.siblings());
        // set the elements of the section
        var imgSrc = $(this).siblings("img").attr("src"),
            name = $(this).siblings(".dish-name").text();
        $(".single-meal .rec-dish img").attr("src", imgSrc);
        $(".single-meal .rec-name").text(name);
        // setting the inner nav

        $(".more-details .more-description").addClass("more-visible");

        $(".more-details .details-nav>div").on("click", function () {
            $(this).addClass("active").siblings().removeClass("active");

            var relatedSlide = $($(this).data("class"));

            relatedSlide.siblings(".more-visible").removeClass("slideOutDown flipInX").addClass("animated slideOutDown");
            setTimeout(function () {
                relatedSlide.siblings(".more-visible").removeClass("more-visible");
            }, 1000);

            relatedSlide.removeClass("slideOutDown").addClass("more-visible animated flipInX");
        });
    });
    // close the section
    $(".back").on("click", function () {

        changeSection($(".recommended"), singleMeal);
        $("nav .nav-item:nth-child(1)").addClass("nav-active").siblings().removeClass("nav-active");

        // hiding the inner div
        $(".more-details .details-wrapper>div").removeClass("more-visible");

    });

    //set the section height
    // in responsive utilities

    /****************************************************

                       feedback-form section

    ****************************************************/
    // open a feedback section
    $(".logo-image").on("click", function () {
        $(".feedback").removeClass("animated bounceOutLeft").addClass("feedback-open animated rotateInUpLeft");
    });

    // close closing section
    $(".feedback-close").on("click", function () {
        $(".feedback").removeClass("animated rotateInUpLeft").addClass("animated bounceOutLeft");
        setTimeout(function () {
            $(".feedback").removeClass("feedback-open");
        }, 500);
    });

    // star rating functionality
    $(".feedback .stars img").each(function () {

        $(this).on("mouseenter", function () {

            var thisIndex = $(this).index();
            $(".feedback .stars img:lt(" + (thisIndex + 1) + ")").attr("src", "images/star-checked.svg");
        });

        $(this).on("mouseleave", function () {

            $(".feedback .stars img").attr("src", "images/star-unchecked.svg");
        });
    });


    /****************************************************

                       responsive utilites

    ****************************************************/

    function menuResponsive() {
        var winWidth = $(window).width(),
            winHeight = $(window).height(),
            imgWidth = $(".rec-dish img").outerWidth(),
            recDishWidth = $(".rec-dish").outerWidth();
        if (winWidth < 991) {
            // nav
            $("nav>.container").removeClass("container");
            // settin the height of recommended and single meal main image 
            // height of main divs
            $(".rec-dish .rec-image").outerHeight(imgWidth * .75);
        } else {

            // nav
            $("nav>div").addClass("container");

            // settin the height of recommended and single meal main image 
            // height of main divs
            $(".rec-dish .rec-image, .rec-dish .rec-desc").outerHeight(imgWidth * .75);
            // font sizes and box utilities
            $(".rec-desc").css("padding", (recDishWidth * .012) + "px " + (recDishWidth * .0256) + "px");
            $(".rec-name").css("font-size", (recDishWidth * .023) + "px");

            $(".rec-features").css("padding", (recDishWidth * .0072) + "px 60px").css("margin", (recDishWidth * .0128) + "px 0");

            $(".rec-spec").css("font-size", (recDishWidth * .0136) + "px");

            $(".seperate-line").outerHeight(recDishWidth * .0213);

            $(".rec-description").css("font-size", (recDishWidth * .013) + "px");
            $(".rec-price").css("font-size", (recDishWidth * .0273) + "px");

            if (winWidth < 1200) {
                $(".add-to-cart").outerHeight(recDishWidth * .0499);
            } else {
                $(".add-to-cart").outerHeight(recDishWidth * .0669);
            }

            $(".add-to-cart .set-amount .decrease,.add-to-cart .set-amount .increase").outerHeight((recDishWidth * .0384)).outerWidth((recDishWidth * .0384)).css("font-size", (recDishWidth * .025) + "px");

            $(".add-to-cart button").outerHeight((recDishWidth * .0384));
        }

        // set the feedback section height 
        if (winHeight < 700) {
            $(".feedback").outerHeight(700);
        } else {
            $(".feedback").outerHeight(winHeight);
        }

    }

    menuResponsive();

    $(window).resize(function () {
        menuResponsive();
        sectionHeight($(".order-section-active"));
    });






});
