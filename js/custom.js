$(document).ready(function(){
	 
	$(".mobile-menu a").click(function(){
		$(".menu ul").slideToggle();
	});
	$(".slider-box").owlCarousel({
		 'items':1,
		'loop':true,
		'autoplay':true,
        'dots':false,
		 
		 
	});
	
	// menu change
	$(window).on('scroll', function() {
            if ($(window).scrollTop() > 200) {
                $('.header-area').addClass('menu-bg');
            } else {
                $('.header-area').removeClass('menu-bg');
            }
        });


	 
        $(window).on('scroll', function() {
            if ($(this).scrollTop() >500) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
        $('.scrollup').on("click", function() {
            $("html, body").animate({
                scrollTop: 0
            }, 800);
            return false;
        });
         
})