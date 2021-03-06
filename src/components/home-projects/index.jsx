import React, { useEffect } from "react";
import ButtonOutline from "../../common/buttonOutline";
// import ScrollMagic from 'scrollmagic';
import { useMediaQuery } from 'react-responsive'
import gsap from "gsap";

const HomeProjects = () => {
  const mobileDevice = useMediaQuery({ query: '(min-width: 821px)' })

  const LargeDevice = useMediaQuery({ query: '(min-width: 1500px)' })

  useEffect(() => {
    if (mobileDevice) {
      var controller = new ScrollMagic.Controller();
      var wipeAnimation = new TimelineMax()
        .to("#slideContainer", 1, { x: !LargeDevice ? "-20%" : "-15%" }, { x: "0%", ease: Linear.easeNone })
        .to("#slideContainer", 1, { x: !LargeDevice ? "-40%" : "-30%" }, { x: "0%", ease: Linear.easeNone })
        .to("#slideContainer", 1, { x: !LargeDevice ? "-60%": "-45%" }, { x: "0%", ease: Linear.easeNone })
        .to("#slideContainer", 1, { x: !LargeDevice ? "-80%" : "-60%" }, { x: "0%", ease: Linear.easeNone })
        .to("#slideContainer", 1, { x: !LargeDevice ? "-82%" : "-76%" }, { x: "0%", ease: Linear.easeNone })

      // create scene to pin and link animation
      new ScrollMagic.Scene({
        triggerElement: "#pinContainerPortfolio",
        triggerHook: LargeDevice ? 0.17 : 0,
        duration: "500%"
      })
        .setPin("#pinContainerPortfolio")
        .setTween(wipeAnimation)
        // .addIndicators()
        .addTo(controller);

    }

    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".content-sec .animation-text", 1.4, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 0,
      stagger: {
        amount: 1
      },
      autoAlpha: 0,
      scrollTrigger: {
        trigger: '#pinContainerPortfolio',
        start: 'top bottom',
        markers: false
      },
    })

  }, [])

  return (
    <div id="pinContainerPortfolio" className="project-slide-section">
      <div id="slideContainer">
        <section className="panel first">
          <div className="content-sec">
            <h3 className="title3 animation-text d-none d-sm-block">
              Here is some <br /> work for our <br /> clients who <br /> trusted us with <br /> design <br /> transformation <span className="text-theme"></span>
            </h3>

            <h3 className="title3 animation-text d-sm-none">
              Here is some work for <br /> our clients who <br /> trusted us with design <br /> transformation <span className="text-theme"></span>
            </h3>
          </div>
        </section>
        <section className="panel">
          <div className="img-section">
            <div className="img-box">
              <img className={!mobileDevice ? 'wow imago' : ''} data-wow-delay=".3s" src="https://images.unsplash.com/photo-1611339555312-e607c8352fd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" />
            </div>
            <div className="footer-block">
              <div className="left">
                <div className="title4">Behold Industries</div>
                <div className="subtext">Identity design</div>
              </div>

              <div className="right">
                <a href="#" className="title-theme">Healthcare</a>
              </div>
            </div>
          </div>
        </section>
        <section className="panel">
          <div className="img-section">
            <div className="img-box">
              <img className={!mobileDevice ? 'wow imago' : ''} data-wow-delay=".3s" src="https://images.unsplash.com/photo-1581434682226-72c2bab0b5e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="" />
            </div>
            <div className="footer-block">
              <div className="left">
                <div className="title4">Behold Industries</div>
                <div className="subtext">Identity design</div>
              </div>

              <div className="right">
                <a href="#" className="title-theme">Healthcare</a>
              </div>
            </div>
          </div>
        </section>
        <section className="panel">
          <div className="img-section">
            <div className="img-box">
              <img className={!mobileDevice ? 'wow imago' : ''} data-wow-delay=".3s" src="https://images.unsplash.com/photo-1489945052260-4f21c52268b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" alt="" />
            </div>
            <div className="footer-block">
              <div className="left">
                <div className="title4">Behold Industries</div>
                <div className="subtext">Identity design</div>
              </div>

              <div className="right">
                <a href="#" className="title-theme">Healthcare</a>
              </div>
            </div>
          </div>
        </section>
        <section className="panel">
          <div className="img-section">
            <div className="img-box">
              <img className={!mobileDevice ? 'wow imago' : ''} data-wow-delay=".3s" src="https://images.unsplash.com/photo-1507120410856-1f35574c3b45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />
            </div>
            <div className="footer-block">
              <div className="left">
                <div className="title4">Behold Industries</div>
                <div className="subtext">Identity design</div>
              </div>

              <div className="right">
                <a href="#" className="title-theme">Healthcare</a>
              </div>
            </div>
          </div>
        </section>
        <section className="panel">
          <div className="img-section">
            <div className="img-box">
              <img className={!mobileDevice ? 'wow imago' : ''} data-wow-delay=".3s" src="https://images.unsplash.com/photo-1605859465655-84c45e14a0af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80" alt="" />
            </div>
            <div className="footer-block">
              <div className="left">
                <div className="title4">Behold Industries</div>
                <div className="subtext">Identity design</div>
              </div>

              <div className="right">
                <a href="#" className="title-theme">Healthcare</a>
              </div>
            </div>
          </div>
        </section>
        <section className="panel">
          <div className="content-sec">
            <div className="info-msg animation-text">
              <div>
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
