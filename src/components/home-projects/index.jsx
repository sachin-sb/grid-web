import React, { useEffect } from "react";
import ButtonOutline from "../../common/buttonOutline";
// import ScrollMagic from 'scrollmagic';

const HomeProjects = () => {

  useEffect(() => {
    var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
      // animate to second panel
      .to("#slideContainer", 0.5, { z: -150 })		// move back in 3D space
      .to("#slideContainer", 1, { x: "-20%" })	// move in to first panel
      .to("#slideContainer", 0.5, { z: 0 })				// move back to origin in 3D space
      // animate to third panel
      .to("#slideContainer", 0.5, { z: -150, delay: 1 })
      .to("#slideContainer", 1, { x: "-40%" })
      .to("#slideContainer", 0.5, { z: 0 })
      // animate to forth panel
      .to("#slideContainer", 0.5, { z: -150, delay: 1 })
      .to("#slideContainer", 1, { x: "-60%" })
      .to("#slideContainer", 0.5, { z: 0 })

      .to("#slideContainer", 0.5, { z: -150, delay: 1 })
      .to("#slideContainer", 1, { x: "-80%" })
      .to("#slideContainer", 0.5, { z: 0 })

      // .to("#slideContainer", 0.5, { z: -150, delay: 1 })
      // .to("#slideContainer", 1, { x: "-100%" })
      // .to("#slideContainer", 0.5, { z: 0 });

    // create scene to pin and link animation
    new ScrollMagic.Scene({
      triggerElement: "#pinContainer",
      triggerHook: 0.03,
      duration: "600%"
    })
      .setPin("#pinContainer")
      .setTween(wipeAnimation)
      // .addIndicators()
      .addTo(controller);

  }, [])

  return (
    <div id="pinContainer" className="project-slide-section">
      <div id="slideContainer">
        <section className="panel first">
          <div className="content-sec">
            <h3 className="title3">
              Here is some <br /> work for our <br /> clients who <br /> trusted us with <br /> design <br /> transformation <span className="text-theme"></span>
            </h3>
          </div>
          <div className="img-section">
            <div className="img-box">
              <img src="https://images.unsplash.com/photo-1611339555312-e607c8352fd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" />
              {/* <button>
                <img src="img/download-button.svg" alt="" />
              </button> */}
            </div>
            <div className="footer-section">
              <div className="left">
                <div className="title4">Behold Industries</div>
                <div className="subtext">Identity design</div>
              </div>

              <div className="right">
                <div className="title-theme">healthcare</div>
              </div>
            </div>
          </div>
        </section>
        <section className="panel turqoise">
          <div className="img-section">
            <div className="img-box">
              <img src="https://images.unsplash.com/photo-1581434682226-72c2bab0b5e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
              <button>
                <img src="img/download-button.svg" alt="" />
              </button>
            </div>
            <div className="footer-section">
              <div className="left">
                <div className="title4">Behold Industries</div>
                <div className="subtext">Identity design</div>
              </div>

              <div className="right">
                <div className="title-theme">healthcare</div>
              </div>
            </div>
          </div>
        </section>
        <section className="panel green">
          <div className="img-section">
            <div className="img-box">
              <img src="https://images.unsplash.com/photo-1489945052260-4f21c52268b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" alt="" />
              <button>
                <img src="img/download-button.svg" alt="" />
              </button>
            </div>
            <div className="footer-section">
              <div className="left">
                <div className="title4">Behold Industries</div>
                <div className="subtext">Identity design</div>
              </div>

              <div className="right">
                <div className="title-theme">healthcare</div>
              </div>
            </div>
          </div>
        </section>
        <section className="panel bordeaux">
          <div className="img-section">
            <div className="img-box">
              <img src="https://images.unsplash.com/photo-1507120410856-1f35574c3b45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />
              <button>
                <img src="img/download-button.svg" alt="" />
              </button>
            </div>
            <div className="footer-section">
              <div className="left">
                <div className="title4">Behold Industries</div>
                <div className="subtext">Identity design</div>
              </div>

              <div className="right">
                <div className="title-theme">healthcare</div>
              </div>
            </div>
          </div>
        </section>
        <section className="panel last">
          <div className="img-section">
            <div className="img-box">
              <img src="https://images.unsplash.com/photo-1605859465655-84c45e14a0af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80" alt="" />
              <button>
                <img src="img/download-button.svg" alt="" />
              </button>
            </div>
            <div className="footer-section">
              <div className="left">
                <div className="title4">Behold Industries</div>
                <div className="subtext">Identity design</div>
              </div>

              <div className="right">
                <div className="title-theme">healthcare</div>
              </div>
            </div>
          </div>
          <div className="content-sec">
            <div className="info-msg">
              <div className="">
                <h4 className="title4">
                  We&apos;ve got more <br /> to show you.
                </h4>
                <ButtonOutline buttonText="View our projects" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeProjects;
