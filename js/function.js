(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 

	/* Preloader Effect */
	$window.on('load', function(){
		setHeaderHeight();
		$(".preloader").fadeOut(600);
	});
	
	/* Sticky Header */
	$window.on('resize', function(){
		setHeaderHeight();
	});

	function setHeaderHeight(){
		$("header.main-header").css("height", $('header .header-sticky').outerHeight());
	}	
	
	$(window).on("scroll", function() {
		var fromTop = $(window).scrollTop();
		setHeaderHeight();
		var headerHeight = $('header .header-sticky').outerHeight()
		$("header .header-sticky").toggleClass("hide", (fromTop > headerHeight + 100));
		$("header .header-sticky").toggleClass("active", (fromTop > 600));

		$(".footer-btn").toggleClass("active", (fromTop > 600));
	});

	/* Slick Menu JS */
	$('#menu').slicknav({
		label : '',
		prependTo : '.responsive-menu'
	});

	/* Testimonial Carousel JS */
	var testimonial_carousel = new Swiper('.testimonial-slider.swiper', {
		slidesPerView : 1,
		speed: 1000,
		spaceBetween: 30,
		loop: true,
		clickable: true,
		autoplay: {
			delay: 500000,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		}
	});

	/* Zoom screenshot */
	$('.restaurants-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
			  return element.find('img');
			}
		}
	});

	/* Popup Video */
	$('.popup-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	/* Animated skills Bars */
	$('.our-skills').waypoint(function() {
		$('.skillbar').each(function() {
			$(this).find('.count-bar').animate({
			  width:$(this).attr('data-percent')
			},2000);
		});
	},{
		offset: '50%'
	});

	/* Init Counter */
	$('.counter').counterUp({ delay: 5, time: 2000 });

	/* Image Reveal Animation */
	if ($('.reveal').length) {
        gsap.registerPlugin(ScrollTrigger);
        let revealContainers = document.querySelectorAll(".reveal");
        revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "play none none none"
                }
            });
            tl.set(container, {
                autoAlpha: 1
            });
            tl.from(container, 1, {
                xPercent: -100,
                ease: Power2.out
            });
            tl.from(image, 1, {
                xPercent: 100,
                scale: 1,
                delay: -1,
                ease: Power2.out
            });
        });
    }

	/* Text Effect Animation */
	if ($('.text-anime').length) {
		const animatedElements = document.querySelectorAll(".text-anime");

		animatedElements.forEach((element) => {
		let staggerAmount = 0.05;
		let translateXValue = 20;
		let translateYValue = false;
		let onScrollValue = 1;
		let delayValue = 0.5;
		let easeType = "power2.out";

		if (element.getAttribute("data-stagger")) {
			staggerAmount = element.getAttribute("data-stagger");
		}

		if (element.getAttribute("data-translateX")) {
			translateXValue = element.getAttribute("data-translateX");
		}

		if (element.getAttribute("data-translateY")) {
			translateYValue = element.getAttribute("data-translateY");
		}

		if (element.getAttribute("data-on-scroll")) {
			onScrollValue = element.getAttribute("data-on-scroll");
		}

		if (element.getAttribute("data-delay")) {
			delayValue = element.getAttribute("data-delay");
		}

		if (element.getAttribute("data-ease")) {
			easeType = element.getAttribute("data-ease");
		}

		if (onScrollValue == 1) {
			if (translateXValue > 0 && !translateYValue) {
			let splitText = new SplitType(element, { type: "chars, words" });
				gsap.from(splitText.chars, {
					duration: 1,
					delay: delayValue,
					x: translateXValue,
					autoAlpha: 0,
					stagger: staggerAmount,
					ease: easeType,
					scrollTrigger: { trigger: element, start: "top 85%"},
				});
			}

			if (translateYValue > 0 && !translateXValue) {
			let splitText = new SplitType(element, { type: "chars, words" });
			gsap.from(splitText.chars, {
				duration: 1,
				delay: delayValue,
				y: translateYValue,
				autoAlpha: 0,
				ease: easeType,
				stagger: staggerAmount,
				scrollTrigger: { trigger: element, start: "top 85%" },
			});
			}

			if (translateXValue && translateYValue) {
			let splitText = new SplitType(element, { type: "chars, words" });
			gsap.from(splitText.chars, {
				duration: 3,
				delay: delayValue,
				y: translateYValue,
				x: translateXValue,
				autoAlpha: 0,
				ease: easeType,
				stagger: staggerAmount,
				scrollTrigger: { trigger: element, start: "top 85%" },
			});
			}

			if (!translateXValue && !translateYValue) {
				let splitText = new SplitType(element, { type: "chars, words" });
				gsap.from(splitText.chars, {
					duration: 1,
					delay: delayValue,
					x: 50,
					autoAlpha: 0,
					stagger: staggerAmount,
					ease: easeType,
					scrollTrigger: { trigger: element, start: "top 85%" },
				});
			}
			} else {
				if (translateXValue > 0 && !translateYValue) {
				let splitText = new SplitType(element, { type: "chars, words" });
				gsap.from(splitText.chars, {
					duration: 1,
					delay: delayValue,
					x: translateXValue,
					ease: easeType,
					autoAlpha: 0,
					stagger: staggerAmount,
				});
				}

				if (translateYValue > 0 && !translateXValue) {
				let splitText = new SplitType(element, { type: "chars, words" });
				gsap.from(splitText.chars, {
					duration: 1,
					delay: delayValue,
					y: translateYValue,
					autoAlpha: 0,
					ease: easeType,
					stagger: staggerAmount,
				});
				}

				if (translateXValue && translateYValue) {
				let splitText = new SplitType(element, { type: "chars, words" });
				gsap.from(splitText.chars, {
					duration: 1,
					delay: delayValue,
					y: translateYValue,
					x: translateXValue,
					ease: easeType,
					autoAlpha: 0,
					stagger: staggerAmount,
				});
				}

				if (!translateXValue && !translateYValue) {
				let splitText = new SplitType(element, { type: "chars, words" });
				gsap.from(splitText.chars, {
					duration: 1,
					delay: delayValue,
					ease: easeType,
					x: 50,
					autoAlpha: 0,
					stagger: staggerAmount,
				});
				}
			}
		});
	}

	/* Parallaxie js */
	var $parallaxie = $('.parallaxie');
	if($parallaxie.length)
	{
		if ($window.width() > 768) {
			$parallaxie.parallaxie({
				speed: 0.55,
				offset: 0,
			});
		}
	}

	/* Contact form validation */
	var $contactform=$("#contactForm");
	if($contactform.length){
		$contactform.validator({focus: false}).on("submit", function (event) {
			if (!event.isDefaultPrevented()) {
				event.preventDefault();
				submitForm();
			}
		});

		function submitForm(){
			/* Initiate Variables With Form Content*/
			var name = $("#name").val();
			var email = $("#email").val();
			var phone = $("#phone").val();
			var message = $("#msg").val();

			$.ajax({
				type: "POST",
				url: "form-process.php",
				data: "name=" + name + "&email=" + email + "&phone=" + phone + "&message=" + message,
				success : function(text){
					if (text == "success"){
						formSuccess();
					} else {
						submitMSG(false,text);
					}
				}
			});
		}

		function formSuccess(){
			$contactform[0].reset();
			submitMSG(true, "Message Sent Successfully!")
		}

		function submitMSG(valid, msg){
			if(valid){
				var msgClasses = "h3 text-success";
			} else {
				var msgClasses = "h3 text-danger";
			}
			$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
		}
	}
	/* Contact form validation end */

	/* Booking form validation */
	var $bookingform=$("#bookingForm");
	if($bookingform.length){
		$bookingform.validator({focus: false}).on("submit", function (event) {
			if (!event.isDefaultPrevented()) {
				event.preventDefault();
				bookingsubmitForm();
			}
		});

		function bookingsubmitForm(){
			/* Initiate Variables With Form Content*/
			var name 	= $("#name").val();
			var email 	= $("#email").val();
			var phone 	= $("#phone").val();
			var date 	= $("#date").val();
			var time 	= $("#time").val();
			var people 	= $("#people").val();
			var child 	= $("#child").val();
			var message = $("#msg").val();


			$.ajax({
				type: "POST",
				url: "booking-form-process.php",
				data: "name=" + name + "&email=" + email + "&phone=" + phone + "&date=" + date + "&time=" + time + "&people=" + people + "&child=" + child +"&message=" + message,
				success : function(text){
					if (text == "success"){
						bookingformSuccess();
					} else {
						bookingsubmitMSG(false,text);
					}
				}
			});
		}

		function bookingformSuccess(){
			$bookingform[0].reset();
			bookingsubmitMSG(true, "Message Sent Successfully!")
		}

		function bookingsubmitMSG(valid, msg){
			if(valid){
				var msgClasses = "h3 text-success";
			} else {
				var msgClasses = "h3 text-danger";
			}
			$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
		}
	}
	/* Booking form validation end */

	/* Animated Wow Js */	
	new WOW().init();

	/* Menu Dises (filtering) */
	$(window).on("load", function () {
		var $menuitem = $(".menu-item-boxes");
		var $menudisesnav = $(".menu-dises-nav li a");
	
		// Verificamos que existan los elementos y los ítems para inicializar Isotope
		if ($menuitem.length && $menuitem.find('.menu-item-box').length > 0) {
			// Inicializamos Isotope
			$menuitem = $menuitem.isotope({
				itemSelector: ".menu-item-box",
				layoutMode: "masonry",
				masonry: {
					columnWidth: 1,
				}
			});
	
			// Función para aplicar filtro y hacer scroll
			function aplicarFiltroYScroll($link, updateHash = true) {
				var filterValue = $link.attr('data-filter');
				var target = $link.attr('href');
	
				// Aplicar filtro si Isotope está inicializado
				if ($menuitem.data('isotope')) {
					$menuitem.isotope({ filter: filterValue });
				}
	
				// Clase activa en el menú
				$menudisesnav.removeClass("active-menu-dises");
				$link.addClass("active-menu-dises");
	
				// Scroll suave si el target existe
				if (target && target.startsWith("#") && $(target).length) {
					var $target = $(target);
					$('html, body').animate({
						scrollTop: $target.offset().top
					}, 500, function () {
						// Actualizamos el hash solo después del scroll
						if (updateHash) {
							history.replaceState(null, null, target);
						}
					});
				}
			}
	
			// Click en enlaces del menú
			$menudisesnav.on('click', function (e) {
				e.preventDefault();
				aplicarFiltroYScroll($(this));
			});
	
			// Si hay hash al cargar la página, aplicamos acción
			var hash = window.location.hash;
			if (hash) {
				var $link = $('.menu-dises-nav li a[href="' + hash + '"]');
				if ($link.length) {
					aplicarFiltroYScroll($link, false); // no actualizamos hash porque ya está
				}
			} else {
				// Mostrar todos los elementos por defecto
				if ($menuitem.data('isotope')) {
					$menuitem.isotope({ filter: "*" });
				}
			}
	
			// Escuchamos cambios de hash manuales (por si el usuario usa atrás/adelante del navegador)
			$(window).on('hashchange', function () {
				var newHash = window.location.hash;
				var $link = $('.menu-dises-nav li a[href="' + newHash + '"]');
				if ($link.length) {
					aplicarFiltroYScroll($link, false);
				}
			});
		}
	});
	

})(jQuery);