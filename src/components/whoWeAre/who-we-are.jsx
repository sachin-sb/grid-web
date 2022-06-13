import React, { useEffect } from "react";
import ButtonPrimary from "../../common/buttonPrimary";
import BlogStanderd from "../../components/Blog-standerd";

const WhoWeAre = () => {

  useEffect(() => {
    var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
      .fromTo(".section-second", 1, { x: "-100%" }, { x: "0%", ease: Linear.easeNone })  // in from left
      .fromTo(".section-third", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })  // in from right
      .fromTo(".section-forth", 1, { y: "-100%" }, { y: "0%", ease: Linear.easeNone }); // in from top

    // create scene to pin and link animation
    new ScrollMagic.Scene({
      triggerElement: "#pinContainer2",
      triggerHook: 0.1,
      duration: "300%"
    })
      .setPin("#pinContainer2")
      .setTween(wipeAnimation)
      // .addIndicators({name: "pin scene", colorEnd: "#FFFFFF"}) // add indicators (requires plugin)
      .addTo(controller);
  }, [])

  return (
    <div id="pinContainer2" className="who-we-are-style">
        <section className="section-first panel">
        <p className="text-gray">Grid Design is the one stop shop for all your product needs. </p>
        <h4 className="title4">We’re a bunch of creatives who are passionate about harnessing the power of design to transform end-user experience, thereby accelerating the outcomes for your business.</h4>
        <ButtonPrimary buttonText="Let’s talk" />
      </section>
      <section className="section-second panel">
        <p className="text-gray">Grid Design is the one stop shop for all your product needs. </p>
        <h4 className="title4">We’re a bunch of creatives who are passionate about harnessing the power of design to transform end-user experience, thereby accelerating the outcomes for your business.</h4>
        <ButtonPrimary buttonText="Let’s talk" />
      </section>
      <section className="section-third panel">
        <p className="text-gray">Grid Design is the one stop shop for all your product needs. </p>
        <h4 className="title4">We’re a bunch of creatives who are passionate about harnessing the power of design to transform end-user experience, thereby accelerating the outcomes for your business.</h4>
        <ButtonPrimary buttonText="Let’s talk" />
      </section>
      <section className="section-forth panel">
        <p className="text-gray">Grid Design is the one stop shop for all your product needs. </p>
        <h4 className="title4">We’re a bunch of creatives who are passionate about harnessing the power of design to transform end-user experience, thereby accelerating the outcomes for your business.</h4>
        <ButtonPrimary buttonText="Let’s talk" />
      </section>
    </div>
  );
};

export default WhoWeAre;
