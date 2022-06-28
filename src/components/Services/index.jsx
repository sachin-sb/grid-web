import React, { useEffect } from "react";
import ButtonOutline from "../../common/buttonOutline";
import Split from "../Split";
import { useMediaQuery } from 'react-responsive'

const ShowcassesFullScreenData = [
  {
    "id": 1,
    "title": { "first": "Healthcare", "second": "Using better UX to improve healthcare delivery" },
    "image": "/img/clients/dr-ready.svg"
  },
  {
    "id": 2,
    "title": { "first": "Edtech", "second": "Levelling up the end-user learning experience" },
    "image": "/img/clients/questt.svg",
    "className": "icon-md"
  },
  {
    "id": 3,
    "title": { "first": "Entertainment", "second": "Redefining entertainment biz with next-level UX." },
    "image": "/img/clients/pvr.svg",
    "className": "icon-sm"
  },
  {
    "id": 4,
    "title": { "first": "Fintech", "second": "Simplifying user experience for fintech products" },
    "image": "/img/clients/elevation.svg",
    "className": "icon-lg"
  },
  {
    "id": 5,
    "title": { "first": "Sports", "second": "Bringing digital solutions to the world of sports" },
    "image": "/img/clients/hudle.svg",
    "className": "icon-md2"
  },
]

const ShowcassesFullScreenData2 = [
  {
    "id": 1,
    "title": { "first": "Enterprise", "second": "Humanising Enterprise Solutions through Design" },
    "image": "/img/clients/value-360.svg"
  },
  {
    "id": 2,
    "title": { "first": "Real Estate", "second": "Expanding real estate across the digital world" },
    "image": "/img/clients/damac.svg"
  },
  {
    "id": 3,
    "title": { "first": "Media", "second": "Creating a better experience for new age Media" },
    "image": "/img/clients/the-better-india.svg",
    "className": "icon-sm"
  },
  {
    "id": 4,
    "title": { "first": "E-Commerce", "second": "Using design for better e-shopping satisfaction" },
    "image": "/img/clients/jubilent.svg",
    "sub": "Design",
    "className": "icon-sm"
  },
]

const Services = (props) => {
  const mobileDevice = useMediaQuery({ query: '(min-width: 767px)' })

  useEffect(() => {
    if (mobileDevice) {
      var controller = new ScrollMagic.Controller();

      var horizontalSlide = new TimelineMax()
        .to("#js-slideContainer", 1, { x: "-45%" })
      new ScrollMagic.Scene({
        triggerElement: "#js-wrapper",
        triggerHook: "0.03",
        duration: "170%"
      })
        .setPin("#js-wrapper")
        .setTween(horizontalSlide)
        .addTo(controller);
    }
  }, [])

  return (
    <>
      <section className="blc-sec section-padding pb-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7">
              <div className="intro">
                <Split>
                  <h2
                    className="title2 wow words chars splitting d-flex align-items-end"
                    data-splitting
                  >
                    Our Clients <span className="text-theme" style={{ bottom: 16, left: 5 }} />
                  </h2>
                </Split>
                <div className="sub-title">
                  <h6 className="h6 wow flipInX center" data-wow-delay="0.4s">We have re-defined user experiences for over <div className="text-white">150+ clients.</div></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="client-section-wrapper no-scrollbar" id="js-wrapper">
        <div className="our-client-section sections" id="js-slideContainer">
          <div className="slide-card-section first">
            {ShowcassesFullScreenData.map((slide) => (
              <section key={slide.id} className="slide-item">
                <div className="wow fadeInUp" data-wow-delay=".4s">
                  <div className={`mas-item ${slide.className}`}>
                    <div className="logo-box">
                      <img src={slide.image} alt="" />
                    </div>
                    <div className="text-section">
                      <h4 className="title4">
                        {slide.title.first}
                      </h4>
                      <p className="description">
                        {slide.title.second}
                      </p>
                    </div>
                    <div className="bg-color"></div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="slide-card-section second">
            {ShowcassesFullScreenData2.map((slide) => (
              <section key={slide.id} className="slide-item">
                <div className="wow fadeInUp" data-wow-delay=".4s">
                  <div className={`mas-item ${slide.className}`}>
                    <div className="logo-box">
                      <img src={slide.image} alt="" />
                    </div>
                    <div className="text-section">
                      <h4 className="title4">
                        {slide.title.first}
                      </h4>
                      <p className="description">
                        {slide.title.second}
                      </p>
                    </div>
                    <div className="bg-color"></div>
                  </div>
                </div>
              </section>
            ))}

            <div className="info-msg">
              <div className="">
                <h6 className="title6">
                  That&apos;s not all, our <br /> list continues....
                </h6>
                <ButtonOutline className="btn-outline-style" buttonText="View more clients" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
