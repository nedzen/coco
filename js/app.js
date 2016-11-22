$(document).ready(function () {
	var owl = $('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:2,
				nav:false
			},
			1100:{
				items:3,
				nav:true,
				loop:false
			}
		}

	});
	// Go to the next item
	$('.NextBtn').click(function() {
		owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.PrevBtn').click(function() {
		owl.trigger('prev.owl.carousel', [300]);
	})
});