
gsap.registerPlugin(ScrollTrigger);

let elem  = document.querySelector('.header-nav')
let menuElem = document.querySelector('.nav-menu-lists')

let blackColor = 'rgba(0, 0, 0, 0.65)';


const lenis = new Lenis ({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.to("#second-section", {
  scrollTrigger: {
    trigger: "#third-section",
    start: 1000,
    end: 1400,
    scrub: true
  },
  opacity: 0,
  duration: 1,
})

gsap.to(".picture_1", {
    scrollTrigger: {
        trigger: ".picture_1",
        start: "bottom bottom",
        end: 800,
        scrub: true,
    }, // start the animation when ".box" enters the viewport (once)
    y: 0,
    duration: 1,
    
  });

  gsap.to(".picture_2", {
    scrollTrigger: {
        trigger: ".picture_2",
        start: "bottom bottom",
        end: 800,
        scrub: true,
    }, // start the animation when ".box" enters the viewport (once)
    y: 0,
    duration: 1,
    
  });

  gsap.to(".picture_4", {
    scrollTrigger: {
        trigger: ".picture_4",
        start: "bottom bottom",
        end: 800,
        scrub: true,
    }, // start the animation when ".box" enters the viewport (once)
    y: 0,
    duration: 1,
    
  });

  gsap.to(".picture_3", {
    scrollTrigger: {
        trigger: ".picture_3",
        start: "bottom bottom",
        end: 800,
        scrub: true,
    }, // start the animation when ".box" enters the viewport (once)
    y: 0,
    duration: 1,
    
  });

  const showAnim = gsap.from('.header-nav', {
    yPercent: -150,
    paused: true,
    duration: 0.2
  }).progress(1);
  
  ScrollTrigger.create({
    start: "top top",
    end: "max",
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse()
    },
    onLeaveBack: () => gsap.to('.header-nav', {
      backgroundColor: "transparent",
      duration: 0.2,
    }),
    onEnter: () => gsap.to('.header-nav', {
      backgroundColor: blackColor,
      duration: 0.5,
    }),
    toggleClass: {targets: elem, className: 'header-scrolling'},

  });

  