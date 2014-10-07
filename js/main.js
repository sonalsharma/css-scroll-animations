var $win = $(window);
var $sun = $('.sun');
var $sunSeection = $('.sun-section');
var $dipperSection = $('.dipper-section');
var $dipper = $('.dipper');
var $shuttleSection = $('.shuttle-section');
var $shuttle = $('.shuttle');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
	
	$sun.css('transform', 'rotate(' + scrollPos / 5 + 'deg)');

	$sunSeection.css('background-position', 'center ' + scrollPos / 2 + 'px')
});

$dipperSection.waypoint(function () {
	$dipper.addClass('js-dipper-fade');
}, { offset:'50%' });

$shuttleSection.waypoint(function () {
	$shuttle.addClass('js-shuttle-fade');
}, {offset:'50%'});