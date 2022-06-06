import React from "react";
import Link from "next/link";
import Split from "../Split";

const BlcSec = () => {
  return (
    <section className="blc-sec section-padding pb-0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7">
            <div className="intro md-mb30">
              <Split>
                <h2
                  className="extra-title wow words chars splitting d-flex align-items-end"
                  data-splitting
                >
                  Our clients <span className="text-theme" style={{bottom: 16, left: 5}}/>
                </h2>
              </Split>
              <div className="sub-title">
                <h6>We have re-defined user experience for <div className="text-white">200+ clients.</div></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlcSec;
