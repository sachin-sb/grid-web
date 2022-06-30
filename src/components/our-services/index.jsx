import gsap from "gsap";
import React, { useEffect } from "react";
import ButtonOutline from "../../common/buttonOutline";
import ButtonReadmore from "../../common/buttonReadmore";
import Split from "../Split";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const OurServicesComponent = (props) => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".item .animation-style", 0.2, {
      y: 100,
      ease: "power4.out",
      delay: 0.2,
      skewY: 0,
      stagger: {
        amount: 0.1
      },
      autoAlpha: 0,
      scrollTrigger: {
        trigger: '#pinContainerServices',
        start: 'top center',
        markers: false
      },
    })

    gsap.from(".animation-block .extra-title", 1, {
      y: 100,
      ease: "power4.out",
      delay: 0.5,
      skewY: 0,
      stagger: {
        amount: 0.2
      },
      autoAlpha: 0,
      scrollTrigger: {
        trigger: '#pinContainerServices',
        start: 'top center',
        markers: false
      },
    })
  }, [])



  useEffect(() => {

    gsap.utils.toArray('.categories h1')
      .forEach(category => {
        let { label, title } = category.dataset
        category.addEventListener('mouseenter', () => {
          gsap.to(`.img-hover-style[data-image=${label}]`, { opacity: 1, scale: 1, zIndex: 1 })
          gsap.set(`.img-hover-style[data-image=${label}]`, { zIndex: 1 })
          gsap.to(`.content-right[data-content=${label}]`, { opacity: 1, scale: 1, zIndex: 1 })
          gsap.set(`.content-right[data-content=${label}]`, { zIndex: 1 })
          gsap.set(`h1[data-label=${label}]`, { zIndex: 1 })
        })

        category.addEventListener('mouseleave', () => {
          gsap.to(`.img-hover-style[data-image=${label}]`, { opacity: 0, zIndex: -1, scale: .97 })
          gsap.to(`.content-right[data-content=${label}]`, { opacity: 0, zIndex: -1, scale: .97 })
          gsap.set(`h1[data-label=${label}]`, { zIndex: 0 })
        })
      })
  }, [])

  return (
    <section className="our-services-component" id="pinContainerServices">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="intro">
              <div className="animation-block">
                <h2 className="title2 extra-title">
                  Our Services <span className="text-theme" />
                </h2>
              </div>
              <h6 className="title6 wow flipInX center mt-3" data-wow-delay="0.4s">Offering worthwhile experiences that help you go above & beyond the <span className="text-primary-theme">grid.</span></h6>
            </div>
          </div>
        </div>

        <div className="desktop-version">
          <div className="row">
            <div className="col-sm-12">
              <div className="typo-grid">
                <div className="images">
                  <img className="img-hover-style" src="./img/portfolio/sb/img-1.jpg" alt="heading1" data-image="heading1" />
                  <img className="img-hover-style" src="./img/portfolio/sb/img-2.jpg" alt="heading2" data-image="heading2" />
                  <img className="img-hover-style" src="./img/portfolio/sb/img-3.jpg" alt="heading3" data-image="heading3" />
                  <img className="img-hover-style" src="./img/portfolio/sb/img-4.jpg" alt="heading4" data-image="heading4" />
                </div>

                <div className="contents">
                  <div className="content-right" data-content="heading1">
                    <div className="tag-section">
                      <a herf="#" className="tag">Design Audit</a>
                      <a herf="#" className="tag">User Interviews</a>
                      <a herf="#" className="tag">Heuristic evaluation</a>
                      <a herf="#" className="tag">Competitor analysis</a>
                    </div>
                    <p className="description">
                      We provide end to end research services while discovering game-changing improvement opportunities.
                    </p>
                    <ButtonReadmore href="/" text="Learn More" />
                  </div>

                  <div className="content-right" data-content="heading2">
                    <div className="tag-section">
                      <a herf="#" className="tag">Mobile app design</a>
                      <a herf="#" className="tag">Responsive Website</a>
                      <a herf="#" className="tag">Interface design</a>
                      <a herf="#" className="tag">Design System</a>
                    </div>
                    <p className="description">
                      Crafting digital experiences that are detailed yet easy to use. We leverage design strategies to create effective digital solutions.
                    </p>
                    <ButtonReadmore href="/" text="Learn More" />
                  </div>

                  <div className="content-right" data-content="heading3">
                    <div className="tag-section">
                      <a herf="#" className="tag">Logo</a>
                      <a herf="#" className="tag">Brand Guidelines</a>
                      <a herf="#" className="tag">Brand Assets</a>
                    </div>
                    <p className="description">
                      We assist you in developing a voice for your brand that will gain consumer trust while also positioning it to your niche target audience.
                    </p>
                    <ButtonReadmore href="/" text="Learn More" />
                  </div>

                  <div className="content-right" data-content="heading4">
                    <img className="logo-img" src="img/sb-log.svg" alt="img1" />
                    <p className="extra-description">
                      Building beautiful and scalable web and mobile applications.
                    </p>
                    <div className="tag-section">
                      <a herf="#" className="tag">Web development</a>
                      <a herf="#" className="tag">App Development</a>
                      <a herf="#" className="tag">Devops</a>
                      <a herf="#" className="tag">QA/Testing</a>
                    </div>
                    <p className="description">
                      Pixels converted seamlessly into adaptable & scalable piece of code. Our partners at Squareboat script the screens designed by us.
                    </p>
                    <ButtonReadmore href="/" text="Learn More" />
                  </div>
                </div>

                <div className="categories-wrapper">
                  <div className="categories">

                    <div className="item">
                      <div className="animation-block">
                        <h1 className="h1 animation-style" data-label="heading1">UX RESEARCH</h1>
                      </div>
                    </div>

                    <div className="item">
                      <div className="animation-block">
                        <h1 className="h1 animation-style" data-label="heading2">UX/UI DESIGN</h1>
                      </div>
                    </div>

                    <div className="item">
                      <div className="animation-block">
                        <h1 className="h1 arrow-2x animation-style" data-label="heading3">BRANDING</h1>
                      </div>
                    </div>

                    <div className="item">
                      <div className="animation-block">
                        <h1 className="h1 arrow-short animation-style" data-label="heading4">DEVELOPMENT</h1>
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



        {/* For Mobile */}
        <div className="mobile-version services-style">
          <Accordion preExpanded={['a']}>
            <AccordionItem uuid="a">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="animation-block">
                    <div className="animation-style">UX RESEARCH</div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div>
                  <div className="tag-section">
                    <a herf="#" className="tag">Design Audit</a>
                    <a herf="#" className="tag">User Interviews</a>
                    <a herf="#" className="tag">Heuristic evaluation</a>
                    <a herf="#" className="tag">Competitor analysis</a>
                  </div>
                  <p className="description">
                    We provide end to end research services while discovering game-changing improvement opportunities.
                  </p>
                  <ButtonReadmore href="/" text="Learn More" />
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid="b">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="animation-block">
                    <div className="animation-style">UX/UI DESIGN</div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div>
                  <div className="tag-section">
                    <a herf="#" className="tag">Mobile app design</a>
                    <a herf="#" className="tag">Responsive Website</a>
                    <a herf="#" className="tag">Interface design</a>
                    <a herf="#" className="tag">Design System</a>
                  </div>
                  <p className="description">
                    Crafting digital experiences that are detailed yet easy to use. We leverage design strategies to create effective digital solutions.
                  </p>
                  <ButtonReadmore href="/" text="Learn More" />
                </div>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="c">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="animation-block">
                    <div className="animation-style">BRANDING</div>
                  </div>

                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div>
                  <div className="tag-section">
                    <a herf="#" className="tag">Logo</a>
                    <a herf="#" className="tag">Brand Guidelines</a>
                    <a herf="#" className="tag">Brand Assets</a>
                  </div>
                  <p className="description">
                    We assist you in developing a voice for your brand that will gain consumer trust while also positioning it to your niche target audience.
                  </p>
                  <ButtonReadmore href="/" text="Learn More" />
                </div>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="d">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="animation-block">
                    <div className="animation-style">DEVELOPMENT</div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div>
                  <div className="tag-section">
                    <a herf="#" className="tag">Logo</a>
                    <a herf="#" className="tag">Brand Guidelines</a>
                    <a herf="#" className="tag">Brand Assets</a>
                  </div>
                  <p className="description">
                    We assist you in developing a voice for your brand that will gain consumer trust while also positioning it to your niche target audience.
                  </p>
                  <ButtonReadmore href="/" text="Learn More" />
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default OurServicesComponent;
