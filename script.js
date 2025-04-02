gsap.registerPlugin(ScrollTrigger);

// Ensure DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Utility function for randomizing values
  const random = (min, max) => Math.random() * (max - min) + min;

  // Helper function to safely apply animations
  const animateIfExists = (selector, animationProps) => {
    const elements = gsap.utils.toArray(selector);
    if (elements.length === 0) {
      console.warn(`No elements found for selector: ${selector}`);
      return;
    }
    gsap.from(elements, animationProps);
  };

  // Header Animation
  animateIfExists(".head-logo", {
    y: -20,
    opacity: 0,
    duration: 1,
    ease: "power4.inOut",
  });

  animateIfExists(".nav li", {
    y: -10,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power4.inOut",
    delay: 0.2,
  });

  animateIfExists(".login-signup button", {
    y: 10,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "expo.inOut",
    delay: 0.4,
  });

  // Hero Section
  animateIfExists(".left", {
    x: -50,
    opacity: 0,
    duration: 1.2,
    ease: "expo.inOut",
  });

  animateIfExists(".company-name", {
    y: 20,
    opacity: 0,
    duration: 1.4,
    ease: "power4.inOut",
    delay: 0.2,
  });

  animateIfExists(".slogan, .hero-desc", {
    y: 15,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power4.inOut",
    delay: 0.4,
  });

  animateIfExists(".hero-buttons .cta-primary, .hero-buttons .cta-secondary", {
    y: 10,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "expo.inOut",
    delay: 0.6,
  });

  animateIfExists("#lottie-container", { // Replaced .hero-img
    x: 50,
    opacity: 0,
    duration: 1.2,
    ease: "expo.inOut",
  });

  // About Section
  animateIfExists(".about #subtitle", {
    scrollTrigger: {
      trigger: ".about",
      start: "top 85%", // Trigger when section is 85% from top
      end: "top 15%",   // End when top is 15% from viewport top
      toggleActions: "play none none reverse",
      markers: false,   // Set to false after testing
    },
    y: 20,
    opacity: 0,
    duration: 1,
    ease: "expo.inOut",
  });

  animateIfExists(".about #description", {
    scrollTrigger: {
      trigger: ".about",
      start: "top 85%",
      end: "top 15%",
      toggleActions: "play none none reverse",
      markers: false,
    },
    y: 15,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power4.inOut",
  });

  animateIfExists(".about .about-card-container .card", {
    scrollTrigger: {
      trigger: ".about",
      start: "top 85%",
      end: "top 15%",
      toggleActions: "play none none reverse",
      markers: false,
    },
    y: 30,
    opacity: 0,
    duration: 1.2,
    stagger: 0.15,
    ease: "power4.inOut",
  });

  // Solutions Section
  animateIfExists(".solutions #subtitle", {
    scrollTrigger: {
      trigger: ".solutions",
      start: "top 85%",
      end: "top 15%",
      toggleActions: "play none none reverse",
      markers: false,
    },
    y: 20,
    opacity: 0,
    duration: 1,
    ease: "expo.inOut",
  });

  animateIfExists(".solutions #description", {
    scrollTrigger: {
      trigger: ".solutions",
      start: "top 85%",
      end: "top 15%",
      toggleActions: "play none none reverse",
      markers: false,
    },
    y: 15,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power4.inOut",
  });

  animateIfExists(".solutions .about-card-container .card", {
    scrollTrigger: {
      trigger: ".solutions",
      start: "top 85%",
      end: "top 15%",
      toggleActions: "play none none reverse",
      markers: false,
    },
    y: 30,
    opacity: 0,
    duration: 1.2,
    stagger: 0.15,
    ease: "power4.inOut",
  });

  // Feedback Section
  animateIfExists(".feedback .l-side #subtitle", {
    scrollTrigger: {
      trigger: ".feedback",
      start: "top 85%",
      end: "top 15%",
      toggleActions: "play none none reverse",
      markers: false,
    },
    y: 20,
    opacity: 0,
    duration: 1,
    ease: "expo.inOut",
  });

  animateIfExists(".feedback .l-side #description", {
    scrollTrigger: {
      trigger: ".feedback",
      start: "top 85%",
      end: "top 15%",
      toggleActions: "play none none reverse",
      markers: false,
    },
    y: 15,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power4.inOut",
  });

  animateIfExists(".feedback .numbers #num", {
    scrollTrigger: {
      trigger: ".feedback",
      start: "top 85%",
      end: "top 15%",
      toggleActions: "play none none reverse",
      markers: false,
    },
    y: 20,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power4.inOut",
  });

  animateIfExists(".feedback .r-side #dotlottie-canvas", {
    scrollTrigger: {
      trigger: ".feedback",
      start: "top 85%",
      end: "top 15%",
      toggleActions: "play none none reverse",
      markers: false,
    },
    x: 30,
    opacity: 0,
    duration: 1.2,
    ease: "expo.inOut",
  });

  // Footer
  animateIfExists("footer .head-logo", {
    scrollTrigger: {
      trigger: "footer",
      start: "top 85%",
      end: "top 15%",
      toggleActions: "play none none reverse",
      markers: false,
    },
    y: 20,
    opacity: 0,
    duration: 1.2,
    ease: "expo.inOut",
  });

  animateIfExists(".footer-list a", {
    scrollTrigger: {
      trigger: "footer",
      start: "top 85%",
      end: "top 15%",
      toggleActions: "play none none reverse",
      markers: false,
    },
    y: 10,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power4.inOut",
  });

  // Floating Effect for Lottie Containers (optional, since Lottie handles its own animation)
  const floatContainers = gsap.utils.toArray("#lottie-container, #dotlottie-canvas");
  if (floatContainers.length > 0) {
    floatContainers.forEach((container) => {
      gsap.to(container, {
        y: 8,
        duration: 2.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: random(0, 1),
      });
    });
  } else {
    console.warn("No Lottie containers found for floating effect");
  }

  // Refresh ScrollTrigger with a longer delay
  setTimeout(() => {
    ScrollTrigger.refresh();
    console.log("ScrollTrigger refreshed");
  }, 500);
});