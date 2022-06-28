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
      skewY: 0,
      stagger: {
        amount: 0.3
      },
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
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-8">
            <div className="title4 animation-revel1">
              <span className="ani-text"> Want help in recognising where your brand is positioned?</span>
            </div>

            {/* For Desktop */}
            <h2 className="title2 animation-revel1 d-none d-sm-block"><span className="ani-text"> Get a <div className="text-orange">FREE</div> Design Audit!</span></h2>

            {/* For Mobile */}
            <h2 className="title2 animation-revel1 d-sm-none"><span className="ani-text"> Get a <div className="text-orange">FREE Design Audit!</div></span></h2>
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
