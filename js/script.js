(function($) { 

	"use strict";
	
	/* ================ Revolution Slider. ================ */
	if($('.tp-banner').length > 0){
		$('.tp-banner').show().revolution({
			delay:6000,
	        startheight:680,
	        startwidth: 1170,
	        hideThumbs: 1000,
	        navigationType: 'none',
	        touchenabled: 'on',
	        onHoverStop: 'on',
	        navOffsetHorizontal: 0,
	        navOffsetVertical: 0,
	        dottedOverlay: 'none',
	        fullWidth: 'on'
		});
	}
	if($('.tp-banner-full').length > 0){
		$('.tp-banner-full').show().revolution({
			delay:6000,
	        hideThumbs: 1000,
	        navigationType: 'none',
	        touchenabled: 'on',
	        onHoverStop: 'on',
	        navOffsetHorizontal: 0,
	        navOffsetVertical: 0,
	        dottedOverlay: 'none',
	        fullScreen: 'on'
		});
	}
	
/*Animation*/
jQuery.fn.shake = function() {
    this.each(function(i) {
        $(this).css({
            "position" : "relative"
        });
        for (var x = 1; x <= 3; x++) {
            $(this).animate({
                left : -25
            }, 10).animate({
                left : 0
            }, 50).animate({
                left : 25
            }, 10).animate({
                left : 0
            }, 50);
        }
    });
    return this;
}
setInterval(function() {
    $('.shake').shake('slow');
}, 3000); 
	
	
})(jQuery);





function loadscroler(){
	
}
$(document).on('ready',function(){ 
	"use strict";
	loadscroler();
	



// JavaScript Document
(function ($) {
    "use strict";
    $(document).ready(function () {
    });

    /*Smooth Scroll*/
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    /*Click To Top*/
    $(window).on('scroll', function () {

        if ($(this).scrollTop() > 250) {
            $('.footer .totop').fadeIn();
        } else {
            $('.footer .totop').fadeOut();
        }

    })

    /*Site Preloader*/
    $(window).on('load', function () {
        $('.site-preloader').fadeOut(500);
    })


}(jQuery));

	  /*Masonry Function*/
	var container_masonry = $(".container-masonry");
	container_masonry.imagesLoaded(function() {
		container_masonry.isotope({
                    itemSelector: '.nf-item',
                    transitionDuration: '1s',
                    percentPosition: true,               
                    masonry: {
                    columnWidth: '.grid-sizer'
                }
                });
	});

	/*Masonry filter Function*/
	var container_filter = $(".container-filter");
	container_filter.on("click", ".categories", function() {
		var a = $(this).attr("data-filter");
		container_masonry.isotope({
			filter : a
		});

	});





	//testimonial Slider
	if ($('.brand-slider').length) {
		$('.brand-slider').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 3000,
			autoplay: 4000,
			navText: [ '<span class="fa fa-long-arrow-left"></span>', '<span class="fa fa-long-arrow-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				400:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:4
				},
				1200:{
					items:5
				}
			}
		});    		
	}
	
	/*testimonials */
$(document).ready(function() { 
  	$(".owl-carousel").owlCarousel({ 
      
	   loop:true,
		margin:10,
		nav:false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			700:{
				items:1,
				nav:false
			},
			1170:{
				items:1,
				nav:true,
				loop:false
			}
		}
	  
	  
  	}); 
	});	
	
	
	
	/*==== Owl Carousel ====*/
    var owl = $(".testimonialsList");
      owl.owlCarousel({
        autoPlay: 6000,
        items : 1,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [979,1],
        itemsTablet: [768,1],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
        Speedfast: 200,
    });
	
	

/*----Counter-------*/

 $('.counter-item').appear(function() {
 $('.counter-number').countTo();
    });
});

/*----Fancybox-------*/		
function loadscroler(){}
$(document).on('ready',function(){ 
	"use strict";
	loadscroler();
});
	
jQuery(document).ready(function($) {
	var myTheme = window.myTheme || {},
    $win = $( window );
	myTheme.Isotope = function () {
	};
	
/*Fancybox*/		
	myTheme.Fancybox = function () {
		
		$(".fancybox-pop").fancybox({
			maxWidth	: 900,
			maxHeight	: 700,
			fitToView	: true,
			width		: '80%',
			height		: '80%',
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'elastic',
			closeEffect	: 'none'
		});
	};
			
	/*MAGNIFIC POPUP JS*/
	        $('.video-play').magnificPopup({
            type: 'iframe'
        });
        var magnifPopup = function () {
            $('.work-popup').magnificPopup({
                type: 'image',
                removalDelay: 300,
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true, // By default it's false, so don't forget to enable it

                    duration: 300, // duration of the effect, in milliseconds
                    easing: 'ease-in-out', // CSS transition easing function

                    // The "opener" function should return the element from which popup will be zoomed in
                    // and to which popup will be scaled down
                    // By defailt it looks for an image tag:
                    opener: function (openerElement) {
                        // openerElement is the element on which popup was initialized, in this case its <a> tag
                        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
        };
        // Call the functions 
        magnifPopup();
        /*

/* Functions Initializers */
	
	myTheme.Isotope();
	myTheme.Fancybox();
	
	

}); 

