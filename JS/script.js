$(document).ready(function() {
	$(".slider").slick({
  		infinite: true,
		arrows:false,
		slidesToShow:3,
		centerMode:true,
		centerPadding: '20px',
		autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        responsive: [
		    {
		      breakpoint: 1050, 
		      settings: {
		        slidesToShow: 1,
		        centerMode:false,
		    	}
			}
		],
	});
})