import React, { useEffect } from "react";
import gsap from "gsap";
import Split from "../Split";

const LetsHearCard = (props) => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".head .title3", 1, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 0,
      stagger: {
        amount: 1
      },
      autoAlpha: 0,
      scrollTrigger: {
        trigger: '#pinLets',
        start: 'top bottom',
        markers: false
      },
    })
  }, [])
  
  return (
    <section className="lets-hear-section" id="pinLets">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="head">
              <h3 className="title3">Let’s hear it from our
              <div className="d-flex align-items-end">esteemed clients <span className="text-theme" style={{ bottom: 10, left: 5 }} /></div>
              </h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="media-section">
              <div className="img-box">
                <img src="https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=914&q=80" alt="" />
              </div>
              <div className="text-section">
                <Split>
                  <p className="description wow txt words chars splitting" data-splitting>
                    “Grid was an outstanding partner throughout the process to redesign Dr. Reddy’ Workspace. They have breathed new life into a complex set of brands used by billions of people daily.”
                  </p>
                </Split>
                <div className="name">Margaret Cyphers</div>
                <div className="position">Director, Dr. Reddy’s lABORATORIES</div>
              </div>
            </div>

            <div className="media-section">
              <div className="img-box">
                <img src="https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=914&q=80" alt="" />
              </div>
              <div className="text-section">
                <Split>
                  <p className="description wow txt words chars splitting" data-splitting>
                    “Grid was an outstanding partner throughout the process to redesign Dr. Reddy’ Workspace. They have breathed new life into a complex set of brands used by billions of people daily.”
                  </p>
                </Split>
                <div className="name">Margaret Cyphers</div>
                <div className="position">Director, Dr. Reddy’s lABORATORIES</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default LetsHearCard;
