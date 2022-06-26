import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../../common/animatedText";
import "react-modal-video/css/modal-video.css";
import Split from "../Split";
import fadeWhenScroll from "../../common/fadeWhenScroll";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";


const HeroSection = (props) => {

  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    fadeWhenScroll();
    setTimeout(() => {
      setLoad(false);
      removeSlashFromPagination();
    }, 1000);
  }, []);


  const [replay, setReplay] = React.useState(true);

  const headingText = [
    { type: "heading1", text: "power of " },
    {
      type: "heading1", text: "design"
    },
  ];

  const QuoteText = [
    { type: "heading1", text: "Creative agency based in" },
    {
      type: "heading1", text: "Gurgaon, India."
    },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

  const handleClick = () => {
    const div = document.getElementById('modal-container');
    div.classList.add("one");
  }

  const closeClick = () => {
    const div = document.getElementById('modal-container');
    div.classList.add("out");

    const timer = setTimeout(() => {
      const div = document.getElementById('modal-container');
      div.classList.remove("one");
      div.classList.remove("out");
    }, 1000);
    return () => clearTimeout(timer);
  }

  return (
    <section className="slider slider-prlx home-hero-section" id={props.id}>
      {!load ? (
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-sm-12">
              {/* For Mobile */}
              <div className="logo-section">
                <div className="logo">
                  <img src='img/logo.svg' alt="" />
                </div>

                <motion.div
                  initial="hidden"
                  animate={replay ? "visible" : "hidden"}
                  variants={container}
                  className="sub-heading"
                >
                  <div className="cursor-scale">
                    {QuoteText.map((item, index) => {
                      return <AnimatedText {...item} key={index} />;
                    })}
                  </div>
                </motion.div>
              </div>
              {/* End For Mobile */}
            </div>
          </div>
          <div className="row align-items-center row-section-style">
            <div className="col-sm-6">
              <div className="content-sec">
                <Split>
                  <p className="wow txt words chars splitting text-1" data-splitting>
                    Crafting experiences through
                  </p>
                </Split>
                <motion.div
                  initial="hidden"
                  animate={replay ? "visible" : "hidden"}
                  variants={container}
                  className="heading-sec"
                >
                  <div className="cursor-scale">
                    {headingText.map((item, index) => {
                      return <AnimatedText {...item} key={index} />;
                    })}
                  </div>
                </motion.div>

                <Split>
                  <p className="wow txt words chars splitting text-move-style" data-splitting>
                    that move businesses <br /> & people
                  </p>
                </Split>

                <motion.div
                  initial="hidden"
                  animate={replay ? "visible" : "hidden"}
                  variants={container}
                  className="sub-heading d-none d-sm-block"
                >
                  <div className="cursor-scale">
                    {QuoteText.map((item, index) => {
                      return <AnimatedText {...item} key={index} />;
                    })}
                  </div>
                </motion.div>


                <button className="toggle-button">
                  <img src='img/toggle-lines.svg' className="img-style" alt="" />
                </button>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="slider-section">
                <video loop className="video"
                  poster="https://carleton.ca/panl/wp-content/uploads/Photo-of-mural-in-Montreal-is-courtesy-of-Mr-TT-and-Unsplash-1600.jpg"
                  onMouseOver={event => event.target.play()}
                  onMouseOut={event => event.target.pause()}
                  onClick={handleClick}
                >
                  <source type="video/mp4" src="video/project-fi.mp4" />
                </video>

                <div className="button-box">
                  <button className="btn-showreel"
                    onClick={handleClick}
                  >
                    <img src="img/play.svg" className="img-icon" alt="" />
                    <span className="wow fadeInLeft" data-wow-delay=".4s"> Play Showreel</span>
                  </button>
                </div>

                <div id="modal-container">
                  <div className="modal-background">
                    <div className="modal">
                      <video loop autoPlay muted className="video-style">
                        <source type="video/mp4" src="video/project-fi.mp4" />
                      </video>
                    </div>
                    <button onClick={closeClick} className="modal-close-button">
                      <img src="/img/close.svg" className="img-icon" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default HeroSection;
