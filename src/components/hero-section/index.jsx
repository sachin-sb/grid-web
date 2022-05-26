import React from "react";
import introData from "../../data/sections/intro2.json";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import SwiperCore, { Navigation, Pagination, Parallax, Autoplay } from "swiper";
import { motion } from "framer-motion";
import AnimatedText from "../../common/animatedText";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Split from "../Split";
import fadeWhenScroll from "../../common/fadeWhenScroll";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";

SwiperCore.use([Navigation, Pagination, Parallax, Autoplay]);

const HeroSection = () => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    fadeWhenScroll();
    setTimeout(() => {
      setLoad(false);
      removeSlashFromPagination();
    }, 1000);
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

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
                    className="App"
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
                    className="App"
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
                  <Swiper
                    speed={1000}
                    autoplay={true}
                    parallax={true}
                    navigation={{
                      prevEl: navigationPrevRef.current,
                      nextEl: navigationNextRef.current,
                    }}
                    pagination={{
                      type: "fraction",
                      clickable: true,
                      el: paginationRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                      swiper.params.navigation.prevEl = navigationPrevRef.current;
                      swiper.params.navigation.nextEl = navigationNextRef.current;
                      swiper.params.pagination.el = paginationRef.current;
                    }}
                    onSwiper={(swiper) => {
                      setTimeout(() => {
                        for (var i = 0; i < swiper.slides.length; i++) {
                          swiper.slides[i].childNodes[0].setAttribute(
                            "data-swiper-parallax",
                            0.75 * swiper.width
                          );
                        }

                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;

                        swiper.params.pagination.el = paginationRef.current;

                        swiper.navigation.destroy();
                        swiper.navigation.init();
                        swiper.navigation.update();

                        swiper.pagination.destroy();
                        swiper.pagination.init();
                        swiper.pagination.update();
                      });
                    }}
                    className="swiper-wrapper"
                    slidesPerView={1}
                  >
                    {introData.map((slide) => (
                      <SwiperSlide key={slide.id} className="swiper-slide">
                        <div
                          className="bg-img valign"
                          style={{ backgroundImage: `url(${slide.image})` }}
                          data-overlay-dark="1"
                        >
                          <div className="container">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="caption dig">
                                  {/* <Split>
                                  <h1 className="words chars splitting">
                                    {typeof slide.title === "object" ? (
                                      <>
                                        {slide.title.first}
                                        <div className="tline">
                                          {slide.title.second}
                                        </div>
                                      </>
                                    ) : (
                                      slide.title
                                    )}
                                  </h1>
                                </Split>
                                <Link href="/works2/works2-dark">
                                  <a className="simple-btn mt-50">
                                    <span>Discover Works</span>
                                  </a>
                                </Link> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <button className="btn-showreel">
                    <img src="img/btn-showreel.svg" alt="" />
                  </button>
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
