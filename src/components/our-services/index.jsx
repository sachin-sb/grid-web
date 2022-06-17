import gsap from "gsap";
import React, { useEffect } from "react";
import ButtonOutline from "../../common/buttonOutline";
import ButtonReadmore from "../../common/buttonReadmore";
import Split from "../Split";

const OurServicesComponent = (props) => {

  useEffect(() => {
    const categoriesWrapper = document.querySelector('.categories-wrapper')
    categoriesWrapper.addEventListener('mousemove', e => {
      gsap.to('.img-hover-style', {
        x: e.x,
        y: e.y,
        xPercent: -100,
        yPercent: -100,
        stagger: .05
      })
    })

    gsap.utils.toArray('.categories h1')
      .forEach(category => {
        let { label } = category.dataset
        category.addEventListener('mouseenter', () => {
          gsap.to(`.img-hover-style[data-image=${label}]`, { opacity: 1, scale: 1 })
          gsap.set(`.img-hover-style[data-image=${label}]`, { zIndex: 1 })
          gsap.set(`h1[data-label=${label}]`, { zIndex: 2 })
        })

        category.addEventListener('mouseleave', () => {
          gsap.to(`.img-hover-style[data-image=${label}]`, { opacity: 0, zIndex: -1, scale: .80 })
          gsap.set(`h1[data-label=${label}]`, { zIndex: 0 })
        })
      })
  }, [])


  return (
    <section className="our-services-component">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="intro">
              <Split>
                <h2
                  className="extra-title wow words chars splitting d-flex align-items-end"
                  data-splitting
                >
                  Our Services <span className="text-theme" style={{ bottom: 16, left: 5 }} />
                </h2>
              </Split>
              <h6 className="title6">Offering worthwhile experiences that help you go above & beyond the <span>grid.</span></h6>
            </div>
          </div>

          <div className="col-sm-12">
            <div className="typo-grid">
              <div class="images">
                <img className="img-hover-style" src="./img/portfolio/sb/img-1.jpg" alt="activewear" data-image="activewear" />
                <img className="img-hover-style" src="./img/portfolio/sb/img-2.jpg" alt="beachwear" data-image="beachwear" />
                <img className="img-hover-style" src="./img/portfolio/sb/img-3.jpg" alt="dresses" data-image="dresses" />
                <img className="img-hover-style" src="./img/portfolio/sb/img-4.jpg" alt="heels" data-image="heels" />
              </div>

              <div class="categories-wrapper">
                <div class="categories">
                  <div className="item">
                    <h1 className="h1" data-label="activewear">UX RESEARCH</h1>

                    <div className="content-right">
                      <div className="tag-section">
                        <span>Design Audit</span>
                        <span>User Interviews</span>
                        <span>Heuristic evaluation</span>
                        <span>Competitor analysis</span>
                      </div>
                      <p className="description">
                        We provide end to end research services while discovering game-changing improvement opportunities.
                      </p>
                      <ButtonReadmore href="/" text="Read More" />
                    </div>
                  </div>

                  <div className="item">
                    <h1 className="h1" data-label="beachwear">UX/UI DESIGN</h1>

                    <div className="content-right">
                      <div className="tag-section">
                        <span>Mobile app design</span>
                        <span>Responsive Website</span>
                        <span>Interface design</span>
                        <span>Design System</span>
                      </div>
                      <p className="description">
                        Crafting digital experiences that are detailed yet easy to use. We leverage design strategies to create effective digital solutions.
                      </p>
                      <ButtonReadmore href="/" text="Read More" />
                    </div>
                  </div>

                  <div className="item">
                    <h1 className="h1" data-label="dresses">BRANDING</h1>
                    <div className="content-right">
                      <div className="tag-section">
                        <span>Logo</span>
                        <span>Brand Guidelines</span>
                        <span>Brand Assets</span>
                      </div>
                      <p className="description">
                        We assist you in developing a voice for your brand that will gain consumer trust while also positioning it to your niche target audience.
                      </p>
                      <ButtonReadmore href="/" text="Read More" />
                    </div>
                  </div>

                  <div className="item">
                    <h1 className="h1" data-label="heels">DEVELOPMENT</h1>

                    <div className="content-right">
                      <img className="logo-img" src="img/sb-log.svg" alt="img1" />
                      <p className="extra-description">
                        Building beautyful and scalable web and mobile applications
                      </p>
                      <div className="tag-section">
                        <span>Web development</span>
                        <span>App Development</span>
                        <span>Devops</span>
                        <span>QA/Testing</span>
                      </div>
                      <p className="description">
                        Pixels converted seamlessly into
                        adaptable & scalable piece of code.
                        Our partners at Squareboat script the
                        screens designed by us.
                      </p>
                      <ButtonReadmore href="/" text="Read More" />
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="info-msg">
              <div className="">
                <h4 className="title4">
                  Want to know more? <br /> Let’s dive deep!
                </h4>
                <ButtonOutline buttonText="View our services" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesComponent;
