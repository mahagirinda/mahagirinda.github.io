;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	
	var fullHeight = function() {
		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});
	};

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 100, 'easeInOutExpo' );
					});
					
				}, 50);
				
			}

		} , { offset: '98%' } );
	};



	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};

	// Get project URL
	var getProjectURL = function() {
		$('#url-project-1').click(function() {
			window.open("https://rental.iconplnbali.com");
		});		
		$('#url-project-2').click(function() {
			window.open("https://assets.iconplnbali.com");
		});
		
		$('#url-project-3').click(function() {
			window.open("https://twohearts.id");
		});
		
		$('#url-project-4').click(function() {
			window.open("https://mhprojects-bali.com");
		});	
	};


	// Loading page
	var loaderPage = function() {
		var image = new Image();		
		image.src = 'images/user-1.jpg';

		image.onload = function () {			
			$(".profile-loader").fadeOut("slow");
		};		
	};

	
	$(function(){
		contentWayPoint();
		goToTop();
		fullHeight();
		getProjectURL();
		loaderPage();
	});


}());

console.log(
	"Thank you for your interest on my source code! \n" +
	"if you have any further offers and information for me, just contact me at \n" +
	"\n" +
	"Email : mahagirinda@gmail.com \n" +
	"Social Media : mahagirinda \n"+
	"\n" +
	"Best regards! \n" +
	"Maha Girinda"		
);