import React, { useEffect } from "react";
import ButtonOutline from "../../common/buttonOutline";

const ShowcassesFullScreenData = [
  {
    "id": 1,
    "title": { "first": "HEALTHCARE ", "second": "Using better UX to improve healthcare delivery" },
    "image": "/img/clients/dr-ready.svg"
  },
  {
    "id": 2,
    "title": { "first": "Edtech", "second": "Levelling up the end-user learning experience" },
    "image": "/img/clients/questt.svg"
  },
  {
    "id": 3,
    "title": { "first": "Entertainment", "second": "Redefining entertainment biz with next-level UX." },
    "image": "/img/clients/pvr.svg",
    "className": "icon-md"
  },
  {
    "id": 4,
    "title": { "first": "Fintech", "second": "Simplifying user experience for fintech products" },
    "image": "/img/clients/elevation.svg"
  },
  {
    "id": 5,
    "title": { "first": "Sports", "second": "Bringing digital solutions to the world of sports" },
    "image": "/img/clients/hudle.svg",
    "className": "icon-md"
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
    "title": { "first": "Real Estate", "second": "Uplifting Real Estate to the highly digital world" },
    "image": "/img/clients/damac.svg"
  },
  {
    "id": 3,
    "title": { "first": "Media", "second": "Creating a better experience for new age Media" },
    "image": "/img/clients/the-better-india.svg",
    "className": "icon-md"
  },
  {
    "id": 4,
    "title": { "first": "E-Commerce", "second": "Using design for better e-shopping satisfaction" },
    "image": "/img/clients/jubilent.svg",
    "sub": "Design"
  },
]

const Services2 = () => {

  useEffect(() => {
    var controller = new ScrollMagic.Controller();

    var horizontalSlide = new TimelineMax()
      .to("#js-slideContainer", 1, { x: "-40%" })
    new ScrollMagic.Scene({
      triggerElement: "#js-wrapper",
      triggerHook: "0.07",
      duration: "150%"
    })
      .setPin("#js-wrapper")
      .setTween(horizontalSlide)
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);


  }, [])

  return (
    <div class="client-section-wrapper" id="js-wrapper">
        <div className="services our-client-section sections" id="js-slideContainer">
          <div className="slide-card-section">
            {ShowcassesFullScreenData.map((slide) => (
              <section key={slide.id} className="slide-item">
                <div className="wow fadeInUp" data-wow-delay=".4s">
                  <div className={`mas-item ${slide.className}`}>
                    <img src={slide.image} alt="" />
                    <div className="text-section">
                      <h6 className="title6">
                        {slide.title.first}
                      </h6>
                      <p>
                        {slide.title.second}
                      </p>
                    </div>
                    <div className="bg-color"></div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="slide-card-section">
            {ShowcassesFullScreenData2.map((slide) => (
              <section key={slide.id} className="slide-item">
                <div className="wow fadeInUp" data-wow-delay=".4s">
                  <div className={`mas-item ${slide.className}`}>
                    <img src={slide.image} alt="" />
                    <div className="text-section">
                      <h6>
                        {slide.title.first}
                      </h6>
                      <p>
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
                <h4 className="title4">
                  Still not convinced <br /> enough?
                </h4>
                <ButtonOutline className="btn-outline-style" buttonText="View our services" />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Services2;
