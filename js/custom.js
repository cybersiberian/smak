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

});

