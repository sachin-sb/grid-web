import React, { useEffect } from "react";
import Split from "../Split";

const OurServicesComponent = () => {

  useEffect(() => {
    const container = document.body
    const itemsWrapper = document.querySelector('.grid')
    // Preload images

    // And then..
    // preloadImages().then(() => {
    //   document.body.classList.remove('loading');
    //   const effect = new RGBShiftEffect(container, itemsWrapper, { strength: 0.25 })
    // });
  }, [])

  return (
    <section className="our-services-component">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="intro">
              <Split>
                <h2
                  className="extra-title wow words chars splitting d-flex align-items-end"
                  data-splitting
                >
                  Our Services <span className="text-theme" style={{ bottom: 16, left: 5 }} />
                </h2>
              </Split>
              <div className="sub-title">
                <h6>Beyond just design, creating value at all stages of the product journey.</h6>
              </div>
            </div>
          </div>

          <div className="col-sm-12">
            <div className="typo-grid">
              <a className="link">
                <h1 className="h1">Design Audit</h1>
                <img className="content-img" data-wow-delay=".5s" src="https://images.unsplash.com/photo-1566796215784-fa1dad4e559e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80" alt="img1" />
              </a>
              <a className="link">
                <h1 className="h1">UX/UI design</h1>
                <img className="content-img" data-wow-delay=".5s" src="https://images.unsplash.com/photo-1535928968605-9418aa1e574c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt="img2" />
              </a>
              <a className="link">
                <h1 className="h1">Branding</h1>
                <img className="content-img" data-wow-delay=".5s" src="https://images.unsplash.com/photo-1516146544193-b54a65682f16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="img3" />
              </a>
              <a className="link">
                <h1 className="h1">Development</h1>
                <img className="content-img" data-wow-delay=".5s" src="https://images.unsplash.com/photo-1532681022781-73c806c845b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80" alt="img4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesComponent;
