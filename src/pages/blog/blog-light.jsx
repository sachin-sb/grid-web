import gsap from "gsap";
import React, { useEffect } from "react";
import BlogStanderd from "../../components/Blog-standerd";
import { useMediaQuery } from 'react-responsive'

const BlogLight = () => {
  const mobileDevice = useMediaQuery({ query: '(min-width: 767px)' })

  useEffect(() => {
    var controller3 = new ScrollMagic.Controller()
    var second = new ScrollMagic.Scene({
      triggerElement: '#second',
      duration:  mobileDevice ? "250%" : "370%",
      triggerHook: 0.1,
    })
      .setClassToggle('#second', 'white-style')
      .addTo(controller3);

    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".cont .title1", 1, {
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
          <div className="cont">
            <h1 className="title1 mb-10 d-flex align-items-end">Blogs<span className="text-theme" style={{ bottom: 16, left: 5 }} /></h1>
          </div>
          <BlogStanderd />
        </section>
      </div>
    </>
  );
};

export default BlogLight;
