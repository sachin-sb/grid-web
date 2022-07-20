import gsap from "gsap";
import React, { useEffect } from "react";
import BlogStanderd from "../../components/Blog-standerd";
import { useMediaQuery } from 'react-responsive'

const BlogLight = () => {
  const mobileDevice = useMediaQuery({ query: '(min-width: 820px)' })

  useEffect(() => {
    var controller3 = new ScrollMagic.Controller()
    var second = new ScrollMagic.Scene({
      triggerElement: '#second',
      duration:  mobileDevice ? "330%" : "1000%",
      triggerHook: 0.1,
    })
      .setClassToggle('#second', 'white-style')
      .addTo(controller3);

    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".animation-sec .ani-text", 1, {
      y: 100,
      ease: "power4.out",
      delay: 0.5,
      skewY: 0,
      stagger: {
        amount: 1
      },
      autoAlpha: 0,
      scrollTrigger: {
        trigger: '#section-div',
        start: 'top bottom',
        markers: false
      },
    })
  }, [])

  return (
    <>
      <div id="section-div">
        <section className="blog-light-style black-style" id="second">
          <div className="cont animation-sec">
            <h1 className="title1 ani-text mb-10 d-flex align-items-end">Blogs<span className="text-theme" /></h1>
          </div>
          <BlogStanderd />
        </section>
      </div>
    </>
  );
};

export default BlogLight;
