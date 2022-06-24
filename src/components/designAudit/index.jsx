import gsap from "gsap";
import React, { useEffect } from "react";
import ButtonOutline from "../../common/buttonOutline";


const DesignAudit = (props) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // const tl = gsap.timeline();
    gsap.from(".animation-revel1 .ani-text", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      // duration: 2,
      stagger: {
        amount: 0.3
      },
      scrollTrigger: {
        trigger: '#pinContainer4',
        toggleActions: 'restart pause reverse pause',
        start: 'top center',
        markers: false
      },
    })
  }, [])
  return (
    <section className="design-audit">
      <div id="pinContainer4" className="trigger-style"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-8">
            <div className="title4 animation-revel1">
              <span className="ani-text"> Want help in recognising where your brand is positioned?</span>
            </div>
            <h2 className="title2 animation-revel1"><span className="ani-text"> Get a <div className="text-orange">FREE</div> Design Audit!</span></h2>
          </div>
          <div className="col-sm-4">
            <div className="button-section">
              <ButtonOutline buttonText="View our services" className="wow fadeInUp" data-wow-delay=".4s" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignAudit;
