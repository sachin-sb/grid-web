import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "../../common/animatedText";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Split from "../Split";
import fadeWhenScroll from "../../common/fadeWhenScroll";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";


const HeroSection = () => {
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

  const [isOpen, setOpen] = React.useState(false);

  return (
    <section className="slider slider-prlx home-hero-section">
      <div className="swiper-container parallax-slider">
        {!load ? (
          <div className="container-fluid">
            <div className="row align-items-center">
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
                    className="sub-heading"
                  >
                    <div className="cursor-scale">
                      {QuoteText.map((item, index) => {
                        return <AnimatedText {...item} key={index} />;
                      })}
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="slider-section">
                  <video loop className="video"
                    poster="https://carleton.ca/panl/wp-content/uploads/Photo-of-mural-in-Montreal-is-courtesy-of-Mr-TT-and-Unsplash-1600.jpg"
                    onMouseOver={event => event.target.play()}
                    onMouseOut={event => event.target.pause()}>
                    <source type="video/mp4" src="video/project-fi.mp4" />
                  </video>

                  <div className="button-box">
                    <button className="btn-showreel" onClick={(e) => { e.preventDefault(); setOpen(true); }}>
                      <img src="img/btn-showreel.svg" alt="" />
                    </button>
                  </div>

                  <ModalVideo
                    channel="vimeo"
                    autoplay
                    isOpen={isOpen}
                    videoId="127203262"
                    onClose={() => setOpen(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default HeroSection;
