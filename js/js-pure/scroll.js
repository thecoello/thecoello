gsap.registerPlugin(ScrollTrigger);

/*Header*/

gsap.to(".logo1", {
  scrollTrigger: {
    trigger: "#about",
    start: "top center",
    end: "center center",
    scrub: 0.5,
  },
  marginTop: "-50px",
  autoAlpha: 0,
  ease: "power2.out",
});

gsap.to(".logo2", {
  scrollTrigger: {
    trigger: "#about",
    start: "top center",
    end: "center center",
    scrub: 0.5,
  },
  marginTop: "30px",
  display: "inherit",
  autoAlpha: 1,
  ease: "power2.out",
});

gsap.to(".logo2 img", {
  scrollTrigger: {
    trigger: "#portfolio",
    start: "top center",
    end: "center center",
    scrub: 1,
  },
  filter: "invert(0)",
  ease: "power2.out",
});

gsap.to(".header-container .navigation-list .navigation-item a", {
  scrollTrigger: {
    trigger: "#about",
    start: "top center",
    end: "center center",
    scrub: 1,
  },
  color: "white",
  autoAlpha: 1,
  ease: "power2.out",
});

gsap.to(".header-container .navigation-list .navigation-item a", {
  scrollTrigger: {
    trigger: "#portfolio",
    start: "top center",
    end: "center center",
    scrub: 1,
  },
  color: "black",
  autoAlpha: 1,
  ease: "power2.out",
});

/*****************************/

/*Body*/

gsap.to("body", {
  scrollTrigger: {
    trigger: "#about",
    start: "top center",
    end: "center center",
    scrub: 1,
  },
  backgroundColor: "#000000",
  ease: "power2.out",
});

gsap.to("body", {
  scrollTrigger: {
    trigger: "#portfolio",
    start: "top center",
    end: "center center",
    scrub: 1,
  },
  backgroundColor: "#fdea04",
  ease: "power2.out",
});

gsap.to("body", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top center",
    end: "center center",
    scrub: 1,
  },
  backgroundColor: "#fffbe0",
  ease: "power2.out",
});

/*****************************/

/*Intro */

gsap.to("#intro h1", {
  scrollTrigger: {
    trigger: "#intro",
    start: "center center",
    end: "center +=50px",
    scrub: 1,
  },
  marginTop: "-100px",
  autoAlpha: 0,
  ease: "power2.out",
});

gsap.to("#intro h6", {
  scrollTrigger: {
    trigger: "#intro",
    start: "center center",
    end: "center +=50px",
    scrub: 1.5,
  },
  marginTop: "-100px",
  autoAlpha: 0,
  ease: "power2.out",
});

/*****************************/

/*About*/

gsap.from("#image-me", { marginTop: "100px", autoAlpha: 0 });
gsap.from(".section .section-text h1", { marginTop: "100px", autoAlpha: 0 });
gsap.from(".section .section-text #linearrow", {
  marginTop: "100px",
  autoAlpha: 0,
});
gsap.from(".section .section-text h6", { marginTop: "100px", autoAlpha: 0 });

gsap.to(".background", {
  scrollTrigger: {
    trigger: "#about",
    start: "top center",
    end: "center center",
    scrub: 2,
  },
  display: "none",
});

gsap.to(".cursor-follower", {
  scrollTrigger: {
    trigger: "#about",
    start: "top center",
    end: "center center",
    scrub: 2,
  },
  backgroundColor: "#ffffff",
  ease: "power2.out",
});

gsap.to("#image-me", {
  scrollTrigger: {
    trigger: "#about",
    start: "top center",
    end: "center center",
    scrub: 2,
  },
  marginTop: "0",
  autoAlpha: 1.5,
  ease: "power2.out",
});

gsap.to("#about .sectionchild h1", {
  scrollTrigger: {
    trigger: "#about",
    start: "top center",
    end: "center center",
    scrub: 2,
  },
  color: "white",
  marginTop: "0",
  autoAlpha: 1,
  ease: "power2.out",
});

gsap.to("#about .sectionchild h6", {
  scrollTrigger: {
    trigger: "#about",
    start: "top center",
    end: "center center",
    scrub: 3,
  },
  color: "white",
  marginTop: "0",
  autoAlpha: 1,
  ease: "power2.out",
});

/*****************************/

/*Portfolio*/

gsap.from("#portfolio .portfolio-link a #git", {
  marginTop: "100px",
  autoAlpha: 0,
});
gsap.from("#portfolio .portfolio-link a #behan", {
  marginTop: "100px",
  autoAlpha: 0,
});
gsap.from("#portfolio .portfolio-link a h3", {
  marginTop: "100px",
  autoAlpha: 0,
});

gsap.to(".cursor", {
  scrollTrigger: {
    trigger: "#portfolio",
    start: "top center",
    end: "center center",
    scrub: 1,
  },
  borderColor: "#ffffff",
  ease: "power2.out",
});

gsap.to(".cursor-follower", {
  scrollTrigger: {
    trigger: "#portfolio",
    start: "top center",
    end: "center center",
    scrub: 1,
  },
  backgroundColor: "#000000",
  ease: "power2.out",
});

gsap.to("#portfolio .portfolio-link a #git", {
  scrollTrigger: {
    trigger: "#portfolio",
    start: "top center",
    end: "center center",
    scrub: 1,
  },
  marginTop: "0",
  autoAlpha: 1,
  ease: "power2.out",
});

gsap.to("#portfolio .portfolio-link a #behan", {
  scrollTrigger: {
    trigger: "#portfolio",
    start: "top center",
    end: "center center",
    scrub: 2,
  },
  marginTop: "0",
  autoAlpha: 1,
  ease: "power2.out",
});

gsap.to("#portfolio .portfolio-link a h3", {
  scrollTrigger: {
    trigger: "#portfolio",
    start: "top center",
    end: "center center",
    scrub: 3,
  },
  marginTop: "0",
  autoAlpha: 1,
  ease: "power2.out",
});

/*****************************/

/*Contact*/

gsap.from("#contact .sectionchild h1", { marginTop: "100px", autoAlpha: 0 });
gsap.from("#contact .sectionchild #linearrow", {
  marginTop: "100px",
  autoAlpha: 0,
});
gsap.from("#contact .sectionchild h6", { marginTop: "100px", autoAlpha: 0 });
gsap.from("#contactform", { marginTop: "100px", autoAlpha: 0 });

gsap.to(".cursor", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top center",
    end: "center center",
    scrub: 1,
  },
  borderColor: "#fce906",
  ease: "power2.out",
});

gsap.to(".cursor-follower", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top center",
    end: "center center",
    scrub: 1,
  },
  backgroundColor: "#000000",
  ease: "power2.out",
});

gsap.to("#contact .sectionchild h1", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top center",
    end: "center center",
    scrub: 1,
  },
  marginTop: "0",
  autoAlpha: 1,
  ease: "power2.out",
});

gsap.to("#contact .sectionchild #linearrow", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top center",
    end: "center center",
    scrub: 2,
  },
  marginTop: "0",
  autoAlpha: 1,
  ease: "power2.out",
});

gsap.to("#contact .sectionchild h6", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top center",
    end: "center center",
    scrub: 2.5,
  },
  marginTop: "0",
  autoAlpha: 1,
  ease: "power2.out",
});

gsap.to("#contactform", {
  scrollTrigger: {
    trigger: "#contact",
    start: "top center",
    end: "center center",
    scrub: 3,
  },
  marginTop: "0",
  autoAlpha: 1,
  ease: "power2.out",
});

/*****************************/

/*Background*/

gsap.to(".obj1", {
  scrollTrigger: {
    trigger: "#about",
    start: "top center",
    end: "center center",
    scrub: 1,
  },
  autoAlpha: 0,
  marginTop: "-100px",
  ease: "power2.out",
});

gsap.to(".obj2", {
  scrollTrigger: {
    trigger: "#about",
    start: "top center",
    end: "center center",
    scrub: 2,
  },
  autoAlpha: 0,
  marginTop: "-120px",
  ease: "power2.out",
});

gsap.to(".obj3", {
  scrollTrigger: {
    trigger: "#about",
    start: "top center",
    end: "center center",
    scrub: 3,
  },
  autoAlpha: 0,
  marginTop: "-150px",
  ease: "power2.out",
});

gsap.to(".obj4", {
  scrollTrigger: {
    trigger: "#about",
    start: "top center",
    end: "center center",
    scrub: 3,
  },
  autoAlpha: 0,
  marginTop: "-100px",
  ease: "power2.out",
});
