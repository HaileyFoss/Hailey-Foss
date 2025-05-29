/* Olio Theme Scripts */

(function($){ "use strict";
             
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

/*=========================================================================
	Sticky Header - Removed since header is now always fixed
=========================================================================*/ 

/*=========================================================================
    Parallax Effect
=========================================================================*/

/*=========================================================================
        textrotator
=========================================================================*/
    $(".rotate").textrotator({
      animation: "flipUp",
      separator: ",",
      speed: 2000
    }); 

/*=========================================================================
        Mobile Menu
=========================================================================*/  
    $('.menu-wrap ul.nav').slicknav({
        prependTo: '.header-section .navbar',
        label: '',
        allowParentLinks: true
    });
             
/*=========================================================================
        Active venobox
=========================================================================*/
	$('.img-popup').venobox({
		numeratio: true,
		infinigall: true
	});              
                          
/*=========================================================================
	Scroll To Top
=========================================================================*/ 
    $(window).on( 'scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });

/*=========================================================================
	WOW Active
=========================================================================*/ 
   new WOW().init(); 

/*=========================================================================
    Google Map Settings
=========================================================================*/
    google.maps.event.addDomListener(window, 'load', init);

    function init() {

        var mapOptions = {
            zoom: 11,
            center: new google.maps.LatLng(40.6700, -73.9400), 
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: false,
            styles: [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}]
        };

        var mapElement = document.getElementById('google-map');

        var map = new google.maps.Map(mapElement, mapOptions);

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            title: 'Location!'
        });
    }     

// Ensure video autoplay works
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('myVideo');
    video.play().catch(function(error) {
        console.log("Video autoplay failed:", error);
    });
});

function toggleSound(e) {
    e.preventDefault();
    const video = document.getElementById('myVideo');
    if (video.muted) {
        video.muted = false;
    } else {
        video.muted = true;
    }
}

/*=========================================================================
        Logo Carousel Animation
=========================================================================*/
document.addEventListener('DOMContentLoaded', function() {
    const logoTrack = document.querySelector('.logo-track');
    if (logoTrack) {
        // Force a reflow to ensure animation starts properly
        logoTrack.style.display = 'none';
        logoTrack.offsetHeight; // Trigger reflow
        logoTrack.style.display = 'flex';
        
        // Add animation class after reflow
        logoTrack.classList.add('animate-logos');
    }
});

/*=========================================================================
    Parallax Effect for Case Study
=========================================================================*/
document.addEventListener('DOMContentLoaded', function() {
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            parallaxBg.style.transform = `translate3d(0, ${scrolled * 0.4}px, 0)`;
        });
    }
});

/*=========================================================================
    GSAP Snap Scroll
=========================================================================*/
document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);
    
    // Set up snap scrolling for panels
    let panels = gsap.utils.toArray(".snap-panel");
    
    panels.forEach((panel, i) => {
        // Pin each panel
        ScrollTrigger.create({
            trigger: panel,
            start: "top top",
            pin: true,
            pinSpacing: false
        });

        // Parallax effect for background images
        if (panel.classList.contains('parallax-panel')) {
            gsap.to(panel.querySelector('.parallax-bg'), {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: panel,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        }

        // Animate in the content
        gsap.to(panel.querySelector('.panel-content'), {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: panel,
                start: "top center",
                end: "top top",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Create snap points
    ScrollTrigger.create({
        snap: {
            snapTo: 1 / (panels.length - 1),
            duration: {min: 0.3, max: 0.6},
            ease: "power2.inOut"
        }
    });
});

/*=========================================================================
    Initialize GSAP ScrollSmoother
=========================================================================*/
document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Initialize smooth scrolling
    let smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        smoothTouch: 0.1,
        effects: true
    });

    // Add animation for project cards
    gsap.utils.toArray('.project-card').forEach(card => {
        gsap.from(card, {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
                end: "top center",
                toggleActions: "play none none reverse"
            }
        });
    });
});

})(jQuery);
