$(function($){

	/*var waypoint = new Waypoint({
		element: document.getElementById('waypoint'),
		handler: $('.countup-circle-03').circleProgress()
	});*/


	/*var waypoints = $('#waypoint').waypoint({
	    handler: $('.countup-circle').circleProgress()
	})*/


	$('.countup-quantity').counterUp({
		delay: 10, // the delay time in ms
		time: 1000 // the speed time in ms
	});

	$('.countup-circle').circleProgress({
	    value: 0.9,
	    size: 144,
	    fill: {
	        color: "#ffe600",
	    },
	    emptyFill: "#fff",
	    thickness: 5,
	    animation: {
	        duration: 3200,
	    },

	}).on('circle-animation-progress', function(event, progress) {
	    $(this).find('.countup-circle-data').html(parseInt(90 * progress) + '<i>%</i>');
	});

	$('.countup-circle-01').circleProgress({
	    value: 0.96,
	    size: 144,
	    fill: {
	    	color: "#ffe600",
	    },
	    emptyFill: "#fff",
	    thickness: 5,
	    animation: {
	    	duration: 3200,
	    },

	}).on('circle-animation-progress', function(event, progress) {
	    $(this).find('.countup-circle-01-data').html(parseInt(96 * progress) + '<i>%</i>');
	});

	$('.countup-circle-02').circleProgress({
	    value: 0.85,
	    size: 144,
	    fill: {
	    	color: "#ffe600",
	    },
	    emptyFill: "#fff",
	    thickness: 5,
	    animation: {
	    	duration: 3200,
	    },

	}).on('circle-animation-progress', function(event, progress) {
	    $(this).find('.countup-circle-02-data').html(parseInt(85 * progress) + '<i>%</i>');
	});

	$('.countup-circle-03').circleProgress({
	    value: 0.94,
	    size: 144,
	    fill: {
	    	color: "#ffe600",
	    },
	    emptyFill: "#fff",
	    thickness: 5,
	    animation: {
	    	duration: 3200,
	    },

	}).on('circle-animation-progress', function(event, progress) {
	    $(this).find('.countup-circle-03-data').html(parseInt(94 * progress) + '<i>%</i>');
	});

	//Smooth scroll
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 800);
				return false;
			}
		}
	});

	$(".owl-carousel-main").owlCarousel({
		baseClass: ".owl-carousel-main",
		slideSpeed : 300,
		paginationSpeed : 400,
		items: 1,
		navigation : true,
		navigationText: ["<<", ">>"],
		dots: false

		// "singleItem:true" is a shortcut for:
		// items : 1, 
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false

	});


	$('.owl-carousel-text').owlCarousel({
	    baseClass: ".owl-carousel-text",
	    loop:true,
	    items: 1,
	    dots: true,
	    responsiveClass:true,
	    navigation : true
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    items: 5,
	    nav: true,
	    navText: ["<<", ">>"],
	    dots: false,
	    responsiveClass: true,
	    navigation : true
	});

});

//        validation



(function($,W,D)
{
    var JQUERY4U = {};

    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
            //form validation rules
            $("#register-form").validate({
                rules: {
                    firstname: {
                        required: true,
                        minlength: 5
                    },
                    lastname: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true,
                        minlength: 5
                    },
                    agree: "required"
                },
                messages: {
                    firstname: "Please enter your valid firstname",
                    lastname: "Please enter your lastname",
                    password: {
                        required: "Please provide a password",
                        minlength: "Your password must be at least 5 characters long"
                    },
                    email: "Please enter a valid email address",
                    agree: "Please accept our policy"
                },
                submitHandler: function(form) {
                    form.submit();
                }
            });
        }
    }

    //when the dom has loaded setup form validation rules
    $(D).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });

})(jQuery, window, document);