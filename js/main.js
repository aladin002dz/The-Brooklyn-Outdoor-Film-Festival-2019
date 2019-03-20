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
			$preloader.fadeOut('slow');
			$nav.addClass('fixed-top');
			$nav.removeClass('d-none');
		});

		/*-----------------------------------------
			Smooth scrolling --------------------------
		-------------------------------------------*/
		var scroll = new SmoothScroll('nav a[href*="#"]', {
			speed: 500,
			speedAsDuration: true
		});

		/*-----------------------------------------------------------------------------------
			Shrink Navbar and Display "Scroll to Top" button When scrolling down -------------
		------------------------------------------------------------------------------------*/
		var onScroll = function () {
			if ($nav.offset().top > 100) {
				$nav.addClass("navbar-shrink");
				$scrollToTop.addClass("display");
			} else {
				$nav.removeClass("navbar-shrink");
				$scrollToTop.removeClass("display");
			}
		};
		// run onScroll now if page is not at top
		onScroll();
		// Shrink the navbar when page is scrolled
		$window.scroll(onScroll);
		});

		/*---------------------------------------------------
			Wow Animation -----------------------------------
		----------------------------------------------------*/
		new WOW().init();
	
		
		/*---------------------------------------------------
			Registration Form Validation --------------------
		----------------------------------------------------*/
		$.validate();
		$('#message').restrictLength( $('#message-max-length') );
}(jQuery));

