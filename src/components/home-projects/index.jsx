import React, { useEffect } from "react";
// import ScrollMagic from 'scrollmagic';

const HomeProjects = () => {

  useEffect(() => {
    var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
      // animate to second panel
      .to("#slideContainer", 0.5, { z: -150 })		// move back in 3D space
      .to("#slideContainer", 1, { x: "-25%" })	// move in to first panel
      .to("#slideContainer", 0.5, { z: 0 })				// move back to origin in 3D space
      // animate to third panel
      .to("#slideContainer", 0.5, { z: -150, delay: 1 })
      .to("#slideContainer", 1, { x: "-50%" })
      .to("#slideContainer", 0.5, { z: 0 })
      // animate to forth panel
      .to("#slideContainer", 0.5, { z: -150, delay: 1 })
      .to("#slideContainer", 1, { x: "-75%" })
      .to("#slideContainer", 0.5, { z: 0 });

    // create scene to pin and link animation
    new ScrollMagic.Scene({
      triggerElement: "#pinContainer",
      triggerHook: 0.1,
      duration: "600%"
    })
      .setPin("#pinContainer")
      .setTween(wipeAnimation)
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller);

  }, [])

  return (
    <div id="pinContainer" className="project-slide-section">
      <div id="slideContainer">
        <section class="panel first">
          <div className="content-sec">
            <h3 className="title3">
              Here is some <br /> work for our <br /> clients who <br /> trusted us with <br /> design <br /> transformation
            </h3>
          </div>
          <div className="img-section">
            <div className="img-box">
              <img src="https://images.unsplash.com/photo-1605859465655-84c45e14a0af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80" alt="" />
            </div>
            <div className="footer-section">
              <div className="title4">Behold Industries</div>
              <div className="subtext">Identity design</div>
            </div>
          </div>
        </section>
        <section class="panel turqoise">
          <div className="img-section">
            <div className="img-box">
              <img src="https://images.unsplash.com/photo-1581434682226-72c2bab0b5e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
            </div>
            <div className="footer-section">
              <div className="title4">BEHOLD Industries</div>
              <div className="subtext">Identity design</div>
            </div>
          </div>
        </section>
        <section class="panel green">
          <div className="img-section">
            <div className="img-box">
              <img src="https://images.unsplash.com/photo-1489945052260-4f21c52268b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" alt="" />
            </div>
            <div className="footer-section">
              <div className="title4">BEHOLD Industries</div>
              <div className="subtext">Identity design</div>
            </div>
          </div>
        </section>
        <section class="panel bordeaux">
          <div className="img-section">
            <div className="img-box">
              <img src="https://images.unsplash.com/photo-1507120410856-1f35574c3b45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />
            </div>
            <div className="footer-section">
              <div className="title4">BEHOLD Industries</div>
              <div className="subtext">Identity design</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeProjects;
