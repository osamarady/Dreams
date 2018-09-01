/*global $, alert, console*/

/* Wow Js */
new WOW().init();

/* Nice Scroll */
$("html, body").niceScroll({
    cursorcolor: "#35C2F8",
    cursorwidth: "5px",
    cursorborder: "none",
    horizrailenabled: false
});

/* Header Height */
$(".header").height($(window).innerHeight());

/* Header Content */
$(".cont-slide").height($(".header").height() - 118);

/* Background Changeable */
var i = 1;
setInterval(function () {
    "use strict";
    if (i < 5) {
        $(".header").css("background-image", "url(images/" + i + ".png)");
        i = i + 1;
    } else {
        i = 1;
    }
}, 10000);

/* nav bar toggle */
$(".navbar-toggler").on("click", function () {
    "use strict";
    $(".header").css("height", "auto");
});

/* Image Overlay */
$(".Portfolio .over-hvr").on("click", function () {
    "use strict";
    $(".overlay-img img").attr("src", $(this).siblings().attr("src"));
    $(".overlay-img, .over").fadeIn(1000);
});
$(".overlay-img .over").on("click", function () {
    "use strict";
    $(".overlay-img , .over").hide();
});
$(".overlay-img .over img").on("click", function (e) {"use strict"; return false; });

/* Scroll Up Button */
$(document).on("scroll", function (e) {
    "use strict";
    var x = $(document).scrollTop();
	if (x > 500) {
		$(".scrollUp").fadeIn(1000);
	} else {
		$(".scrollUp").fadeOut(1000);
	}
});
$(".scrollUp").on("click", function () {
    "use strict";
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
});