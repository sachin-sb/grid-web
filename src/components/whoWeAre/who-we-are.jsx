import React, { useEffect } from "react";
import ButtonPrimary from "../../common/buttonPrimary";
import AnimatedText from 'react-animated-text-content';
import gsap from "gsap";


const WhoWeAre = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // const tl = gsap.timeline();
    gsap.from(".animation-sec .revel-style", 1.5, {
      y: 100,
      ease: "power4.out",
      delay: 0.5,
      skewY: 0,
      stagger: {
        amount: 0.3
      },
      scrollTrigger: {
        trigger: '#pinContainer2',
        // toggleActions: 'restart pause reverse pause',
        start: 'top center',
        markers: false
      },
    })
  }, [])


  return (
    <section id="pinContainer2" className="who-we-are-style c-usp">
      <div className="heading-sec">
        <div className="animation-sec">
          <h4 className="title4 revel-style">We have the skills to break the grid and deliver</h4>
        </div>
        <div className="animation-sec">
          <h4 className="title4 revel-style"> out of the box solutions.</h4>
        </div>

        <div className="animation-sec">
          <p className="text-gray revel-style">Let’s collaborate to push your brand to new heights.</p>
        </div>

        <div className="animation-sec">
          <div className="revel-style">
            <ButtonPrimary buttonText="Connect with us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
