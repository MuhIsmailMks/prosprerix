// // Animate 
AOS.init({
	once: true,
});

 

// });

// 	// text slider
function marqueeLinesChange(el) {
	var point = $(window).scrollTop() + $(window).height() - el.offset().top;
	var percent = point * 100 / ($(window).height() + el.outerHeight());
	var translateX = percent / 5;

	if (translateX < 0) translateX = 0;

	el.find('.marquee-lines__wrap._left').css('transform', 'translate3d(-' + translateX + '%,0,0)');
	el.find('.marquee-lines__wrap._right').css('transform', 'translate3d(' + translateX + '%,0,0)');
}
$('.marquee-lines').each(function () {
	var el = $(this);
	$(window).on('load resize scroll', function () {
		marqueeLinesChange(el);
	});
});

