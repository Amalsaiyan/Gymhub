document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  gsap.config({
    nullTargetWarn: false,
    force3D: true,
  });

  //lenis-initialise
  const lenis = new Lenis({
    speed: 800,
    offset: 50,
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -9 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  lenis.on("scroll", (e) => {
    ScrollTrigger.update;
  });

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  // gsap code here!

  //   home-banner
  const homeBannerImg = document.querySelector(".home-banner .home-banner-bg");
  const staggerElm = document.querySelectorAll(
    ".home-banner .home-stagger-elm"
  );

  const CommonstaggerElm = document.querySelectorAll(".stagger-elm");
  const parallx = document.querySelectorAll(".parallx img");

  if (parallx) {
    parallx.forEach((img) => {
      gsap.set(img, {
        scale: 1.2,
        yPercent: 9,
      });
    });
  }

  //home-stagger
  if (staggerElm) {
    gsap.to(staggerElm, {
      opacity: 1,
      willChange: "transform, opacity",
      y: 0,
      stagger: 0.1,
      duration: 1,
    });
    gsap.to(homeBannerImg, {
      scale: 1,
      willChange: "transform",
      duration: 1,
      filter: "blur(0px)",
    });
  }

  if (CommonstaggerElm) {
    CommonstaggerElm.forEach((box) => {
      let CommonstaggerElm_ctx = gsap.context(() => {
        const scrollTriggerMain = ScrollTrigger.batch(box, {
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              willChange: "transform, opacity",
              y: 0,
              stagger: 0.1,
              duration: 1,
            }),
          start: "top 80%",
          end: "top 80%",
          //   markers: { startColor: "black", endColor: "blue" },
        });
      }, box);
    });
  }

  if (parallx) {
    parallx.forEach((box) => {
      gsap.to(box, {
        yPercent: 0, 
        scrollTrigger: {
          trigger: box,
          start: "top 70%",
          end: "bottom 20%",
          scrub: .5,
        //   markers: { startColor: "black", endColor: "blue" },
        },
      });
    });
  }
});
