import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import ShowcassesFullScreenData from "../../data/showcases-full-screen-slider.json";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/mousewheel";

import SwiperCore, { Navigation, Parallax, Mousewheel, Grid } from "swiper";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";

SwiperCore.use([Navigation, Parallax, Mousewheel, Grid]);

const Services2 = () => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
      removeSlashFromPagination()
    });
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <section className="services our-client-section">
      <div id="content-carousel-container-unq-1" className="swiper-container">
        {!load ? (
          <Swiper
            speed={1000}
            mousewheel={true}
            centeredSlides={false}
            autoplay={false}
            // loop={true}
            spaceBetween={50}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            // breakpoints={{
            //   0: {
            //     slidesPerView: 1,
            //     spaceBetween: 0,
            //   },
            //   640: {
            //     slidesPerView: 1,
            //     spaceBetween: 0,
            //   },
            //   768: {
            //     slidesPerView: 2,
            //     spaceBetween: 20,
            //   },
            //   1024: {
            //     slidesPerView: 4,
            //     spaceBetween: 20,
            //   },
            // }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
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

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            className="swiper-wrapper"
            // modules={[Grid]}
            // grid={{
            //   rows: 2,
            // }}
            slidesPerView={4}
          >
            {ShowcassesFullScreenData.map((slide) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div className="wow fadeInUp" data-wow-delay=".4s">
                  <div className={`mas-item ${slide.className}`}>
                    <img src={slide.image} alt="" />
                    <div className="text-section">
                      <h6>
                        {slide.title.first}
                      </h6>
                      <p>
                        {slide.title.second}
                      </p>
                    </div>
                    <div className="bg-color"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>
    </section>
  );
};

export default Services2;
