jQuery(function($){
	$(document).ready(function(){
		// Slideshow Tooltip
		var tp = $('.tooltip-point');
		var tp_pos = '';

		// tp_pos = tp.data('position');
		// console.log(tp_pos);

		tp.tooltip();

		tp.each(function(){
			tp_pos = $(this).data('position');
			if (tp_pos != '') {
				tp_pos_arr = tp_pos.split(',');
				$(this).css({
					'top' : tp_pos_arr['1']+'px',
					'left' : tp_pos_arr['0']+'px',
				});
			};
		});

		//run slider with owl-carousel
		jQuery('.owl-carousel').owlCarousel({
			margin:10,
			//rtl: true,
			center:true,
			//nav:true,
			loop:true,
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});
	});
});