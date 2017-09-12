
$(document).ready(function(){

	$('.pneuf').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		arrows: false,
		responsive: [
		    {
		      breakpoint: 400,
		      settings: {
		        slidesToShow: 3
		      }
		    }
		  ]
	});

	$('div.comment-container').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		vertical: true,
		infinite: true,
		autoplay: true,
		centerPadding: "100px",
    	draggable: false,
    	adaptativeHeight: true
	});

	$('ul.nav li.dropdown').hover(
		function(){
			$(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(0);
		},
		function(){
			$(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(0);
		}
	);

	$('aside').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		vertical: true,
		infinite: true,
		autoplay: true,
		draggable: false
	});
	
});