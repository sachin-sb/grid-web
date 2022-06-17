import React from "react";
import ButtonOutline from "../../common/buttonOutline";
import AnimatedText from 'react-animated-text-content';
import Split from "../Split";


const DesignAudit = (props) => {
  return (
    <section className="design-audit" id={props.id}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-8">
            <AnimatedText
              type="words" // animate words or chars
              animation={{
                x: '200px',
                y: '-20px',
                scale: 1.1,
                ease: 'ease-in-out',
              }}
              animationType="float"
              interval={0.06}
              duration={0.8}
              tag="p"
              className="animated-paragraph title4"
              includeWhiteSpaces
              threshold={0.1}
              rootMargin="20%"
            >
              Want help in recognising where your brand is positioned?
            </AnimatedText>

            <h2 className="title2 wow fadeInUp" data-wow-delay=".4s">Get a <span>FREE</span> Design Audit!</h2>
          </div>
          <div className="col-sm-4">
            <div className="button-section">
              <ButtonOutline buttonText="View our services" className="wow fadeInUp" data-wow-delay=".4s" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignAudit;
