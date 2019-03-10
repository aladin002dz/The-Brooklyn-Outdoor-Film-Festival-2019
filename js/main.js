// Smooth scrolling
var scroll = new SmoothScroll('nav a[href*="#"]', {
	speed: 500,
	speedAsDuration: true
});

(function ($) {
    "use strict";

	$(document).ready(function () {

		/*-----------------------------------------
			VARIABLES DEFENITION ------------------
		-------------------------------------------*/
		var $window = $(window),
			$preloader = $('#preloader'),
			$nav = $("nav"),
			$scrollToTop = $("#scroll-to-top");

		/*-----------------------------------------
			PRELOADER JS --------------------------
		-------------------------------------------*/
		$window.on('load', function () {
			$preloader.fadeOut('slow')
			$nav.addClass('fixed-top');
			$nav.removeClass('d-none');
		});

		/*-----------------------------------------------------------------------------------
			Shrink Navbar and Display "Scroll to Top" button When scrolling down -------------
		------------------------------------------------------------------------------------*/
		var navbarFloat = function () {
			if ($nav.offset().top > 100) {
				$nav.addClass("navbar-shrink");
				$scrollToTop.addClass("display");
			} else {
				$nav.removeClass("navbar-shrink");
				$scrollToTop.removeClass("display");
			}
		};
		// Collapse now if page is not at top
		navbarFloat();
		// Collapse the navbar when page is scrolled
		$window.scroll(navbarFloat);
		});
}(jQuery));
