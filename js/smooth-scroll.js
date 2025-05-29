/*=========================================================================
    GSAP ScrollSmoother Setup
    - ScrollSmoother creates a smooth scrolling experience
    - ScrollTrigger handles scroll-based animations
    - Both are GSAP premium plugins that enhance animation capabilities
=========================================================================*/

// Register the required GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/*=========================================================================
    Smooth Scroll Configuration
    - wrapper: The outer container that stays fixed
    - content: The element that will be smoothly scrolled
    - smooth: Higher number = smoother/slower (2 is a good balance)
    - effects: Enables advanced effects like parallax
    - normalizeScroll: Normalizes scroll behavior across devices
    - ignoreMobileResize: Prevents jerky behavior on mobile device height changes
=========================================================================*/

let smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2,
    effects: true,
    normalizeScroll: true,
    ignoreMobileResize: true
});

/*=========================================================================
    Smooth Anchor Link Navigation
    - Prevents default jump behavior
    - Smoothly scrolls to the target section
    - Uses GSAP's built-in scrollTo with custom easing
    - duration: 1 second
    - ease: "power2.inOut" provides a smooth acceleration/deceleration
=========================================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            smoother.scrollTo(target, {
                duration: 1,
                ease: "power2.inOut"
            });
        }
    });
});

/*=========================================================================
    Service Section Animation
    - Animates each service box as it enters the viewport
    - y: 50 = Starts 50 pixels below final position
    - opacity: 0 = Starts fully transparent
    - duration: 1 second animation
    - ScrollTrigger configuration:
        - trigger: The element that triggers the animation
        - start: Animation starts when element is 80% from top of viewport
        - end: Animation ends when element is 20% from top of viewport
        - toggleActions: "play none none reverse"
            1. play = Play on enter
            2. none = No action on leave
            3. none = No action on enter back
            4. reverse = Reverse animation on leave back
=========================================================================*/

gsap.utils.toArray('.service-content').forEach(box => {
    gsap.from(box, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: box,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
        }
    });
});

/*=========================================================================
    Portfolio Items Animation
    - Creates a scale and fade effect for portfolio items
    - scale: 0.8 = Starts at 80% of final size
    - opacity: 0 = Starts fully transparent
    - duration: 0.8 seconds (slightly faster than service animations)
    - ScrollTrigger configuration:
        - trigger: Each portfolio box
        - start: Animation starts when element is 85% from top of viewport
        - end: Animation ends when element is 15% from top of viewport
        - toggleActions: Same as service section
=========================================================================*/

gsap.utils.toArray('.portfolio-box').forEach(box => {
    gsap.from(box, {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
            trigger: box,
            start: "top 85%",
            end: "top 15%",
            toggleActions: "play none none reverse"
        }
    });
}); 