import React, { useEffect } from "react";
import ButtonPrimary from "../../common/buttonPrimary";
// import AnimatedText from 'react-animated-text-content';

const WhoWeAre = () => {

  return (
    <div id="pinContainer2" className="who-we-are-style">
      <h4 className="title4">We have the skills to break the grid and deliver <br /> <span className="line-style"><span>out of the box</span></span> solutions.</h4>
      <p className="text-gray">Let’s collaborate to push your brand to new heights.</p>
      <ButtonPrimary buttonText="Connect with us" />

      {/* <AnimatedText
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
        className="animated-paragraph"
        includeWhiteSpaces
        threshold={0.1}
        rootMargin="20%"
      >
        Content to animate
      </AnimatedText>; */}
    </div>
  );
};

export default WhoWeAre;
