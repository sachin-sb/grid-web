import React, { useEffect, useRef, useState } from "react";
import "react-modal-video/css/modal-video.css";
import fadeWhenScroll from "../../common/fadeWhenScroll";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";
import gsap from "gsap";
import $ from 'jquery';
import HoverVideoPlayer from 'react-hover-video-player';


const HeroSection = (props) => {
  const [audioPlay, setAudioPlay] = React.useState(false);
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    fadeWhenScroll();
    setTimeout(() => {
      setLoad(false);
      removeSlashFromPagination();
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(".animation-block .animation-text", 1, {
        y: 100,
        ease: "power4.out",
        delay: 0.5,
        skewY: 0,
        stagger: {
          amount: 1
        },
        autoAlpha: 0,
      })
    }, 1000);
  }, []);

  const handleClick = () => {
    const div = document.getElementById('modal-container');
    div.classList.add("one");
    setAudioPlay(!audioPlay)
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
          <div className="row align-items-center row-section-style">
            <div className="col-md-12 col-lg-6">
              <div className="content-sec">
                <div className="animation-block">
                  <p className="text-1 animation-text">
                    Crafting experiences through
                  </p>
                </div>
                <div className="animation-block">
                  <h1 className="h1 animation-text">power of <span>design</span></h1>
                </div>
                <div className="animation-block">
                  <p className="text-move-style animation-text">
                    that move businesses <br /> & people
                  </p>
                </div>

                <div className="animation-block d-none d-sm-block">
                  <div className="sub-heading animation-text">
                    A global creative agency <br /> based out of India.
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-6">
              <div className="slider-section" onClick={handleClick}>
                <img
                  src="https://carleton.ca/panl/wp-content/uploads/Photo-of-mural-in-Montreal-is-courtesy-of-Mr-TT-and-Unsplash-1600.jpg"
                  alt=""
                  className="d-sm-none"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />

                <div id="videoPlayOverlay" className="videoHover d-none d-sm-block"> </div>
                <HoverVideoPlayer
                  videoSrc="video/project-fi.mp4"
                  className="video-player-custom d-none d-sm-block"
                  hoverTarget={() => document.getElementById("videoPlayOverlay")}
                  muted={!audioPlay ? false : true}
                  pausedOverlay={
                    <img
                      src="https://carleton.ca/panl/wp-content/uploads/Photo-of-mural-in-Montreal-is-courtesy-of-Mr-TT-and-Unsplash-1600.jpg"
                      alt=""
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  }
                />


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
                      <video loop autoPlay preload="auto" muted={audioPlay ? false : true} className="video-style">
                        <source type="video/mp4" src="video/project-fi.mp4" />
                      </video>
                    </div>
                    <button onClick={closeClick} id="vidbutton" className="modal-close-button">
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
