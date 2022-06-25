import React, { useEffect } from "react";
import ButtonPrimary from "../../common/buttonPrimary";
import AnimatedText from 'react-animated-text-content';
import gsap from "gsap";


const WhoWeAre = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // const tl = gsap.timeline();
    gsap.from(".line", 1.5, {
      y: 100,
      ease: "power4.out",
      delay: 0.1,
      skewX: 7,
      duration: 2,
      stagger: {
        amount: 0.1
      },
      scrollTrigger: {
        trigger: '#pinContainer2',
        toggleActions: 'restart pause reverse pause',
        start: 'top center',
        markers: false
      },
    })
  }, [])


  return (
    <section id="pinContainer2" className="who-we-are-style c-usp">
      <div className="heading-sec">
        <div className="line">
          <h4 className="title4">We have the skills to break the grid and deliver</h4>
        </div>
        <div className="line">
          <h4 className="title4"> out of the box solutions.</h4>
          <img src="/img/text-wrap-line.svg" alt="" />
        </div>
      </div>
      <AnimatedText
        type="words" // animate words or chars
        animation={{
          x: '200px',
          y: '-20px',
          scale: 1.1,
          ease: 'ease-in-out',
        }}
        animationType="float"
        interval={0.06}
        duration={0.8}
        tag="p"
        className="animated-paragraph text-gray"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
      >
        Let’s collaborate to push your brand to new heights.
      </AnimatedText>
      <div className="wow fadeInUp" data-wow-delay=".8s">
        <ButtonPrimary buttonText="Connect with us" />
      </div>
    </section>
  );
};

export default WhoWeAre;
