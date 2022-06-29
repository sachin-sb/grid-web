import gsap from "gsap";
import React, { useEffect } from "react";
import ButtonOutline from "../../common/buttonOutline";


const DesignAudit = (props) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // const tl = gsap.timeline();
    gsap.from(".animation-block .ani-text", 1, {
      y: 100,
      ease: "power4.out",
      delay: 0.2,
      skewY: 0,
      stagger: {
        amount: 0.2
      },
      autoAlpha: 0,
      scrollTrigger: {
        trigger: '#pinDesignAudit',
        start: 'top center',
        markers: false
      },
    })
  }, [])
  return (
    <section className="design-audit">
      <div id="pinDesignAudit" className="trigger-style"></div>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-sm-8">
            <div className="title4 animation-block">
              <span className="ani-text"> Want help in recognising where your brand is positioned?</span>
            </div>

            {/* For Desktop */}
            <div className="animation-block mt-4">
              <h2 className="title2 ani-text d-none d-sm-block"><span className="ani-text"> Get a <div className="text-orange">FREE</div> Design Audit!</span></h2>
            </div>
            {/* For Mobile */}
            <div className="animation-block">
              <h2 className="title2 ani-text d-sm-none"><span className="ani-text"> Get a <div className="text-orange">FREE Design Audit!</div></span></h2>
            </div>
          </div>
          <div className="col-sm-4">
            <ButtonOutline buttonText="Know more" className="wow fadeInUp" data-wow-delay=".4s" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignAudit;
