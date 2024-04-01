
gsap.registerPlugin(ScrollTrigger) 


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
        markers:true
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



  let smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content'
  })

