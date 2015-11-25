jQuery(document).ready(function( $ ) {
	$('.countup-quantity').counterUp({
		delay: 10, // the delay time in ms
		time: 1000 // the speed time in ms
	});
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