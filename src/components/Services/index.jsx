import React, { useEffect } from "react";
import ButtonOutline from "../../common/buttonOutline";
import Split from "../Split";

const ShowcassesFullScreenData = [
  {
    "id": 1,
    "title": { "first": "HEALTHCARE ", "second": "Using better UX to improve healthcare delivery" },
    "image": "/img/clients/dr-ready.svg"
  },
  {
    "id": 2,
    "title": { "first": "Edtech", "second": "Levelling up the end-user learning experience" },
    "image": "/img/clients/questt.svg",
    "className": "icon-md"
  },
  {
    "id": 3,
    "title": { "first": "Entertainment", "second": "Redefining entertainment biz with next-level UX." },
    "image": "/img/clients/pvr.svg",
    "className": "icon-sm"
  },
  {
    "id": 4,
    "title": { "first": "Fintech", "second": "Simplifying user experience for fintech products" },
    "image": "/img/clients/elevation.svg",
    "className": "icon-lg"
  },
  {
    "id": 5,
    "title": { "first": "Sports", "second": "Bringing digital solutions to the world of sports" },
    "image": "/img/clients/hudle.svg",
    "className": "icon-sm"
  },
]

const ShowcassesFullScreenData2 = [
  {
    "id": 1,
    "title": { "first": "Enterprise", "second": "Humanising Enterprise Solutions through Design" },
    "image": "/img/clients/value-360.svg"
  },
  {
    "id": 2,
    "title": { "first": "Real Estate", "second": "Uplifting Real Estate to the highly digital world" },
    "image": "/img/clients/damac.svg"
  },
  {
    "id": 3,
    "title": { "first": "Media", "second": "Creating a better experience for new age Media" },
    "image": "/img/clients/the-better-india.svg",
    "className": "icon-sm"
  },
  {
    "id": 4,
    "title": { "first": "E-Commerce", "second": "Using design for better e-shopping satisfaction" },
    "image": "/img/clients/jubilent.svg",
    "sub": "Design",
    "className": "icon-sm"
  },
]

const Services = () => {

  useEffect(() => {
    var controller = new ScrollMagic.Controller();

    var horizontalSlide = new TimelineMax()
      .to("#js-slideContainer", 1, { x: "-45%" })
    new ScrollMagic.Scene({
      triggerElement: "#js-wrapper",
      triggerHook: "0.07",
      duration: "170%"
    })
      .setPin("#js-wrapper")
      .setTween(horizontalSlide)
      .addTo(controller);


  }, [])

  useEffect(() => {
    document.documentElement.className = "js";
    var supportsCssVars = function() { var e, t = document.createElement("style"); return t.innerHTML = "root: { --tmp-var: bold; }", document.head.appendChild(t), e = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)")), t.parentNode.removeChild(t), e };
    supportsCssVars() || alert("Please view this demo in a modern browser that supports CSS Variables.");
  }, [])
  

  return (
    <>
      <section className="blc-sec section-padding pb-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7">
              <div className="intro">
                <Split>
                  <h2
                    className="title2 wow words chars splitting d-flex align-items-end"
                    data-splitting
                  >
                    Our Clients <span className="text-theme" style={{ bottom: 16, left: 5 }} />
                  </h2>
                </Split>
                <div className="sub-title">
                  <h6>We have re-defined user experiences for over <div className="text-white">150+ clients.</div></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="client-section-wrapper" id="js-wrapper">
        <div className="our-client-section sections" id="js-slideContainer">
          <div className="slide-card-section first">
            {ShowcassesFullScreenData.map((slide) => (
              <section key={slide.id} className="slide-item">
                <div className="wow fadeInUp" data-wow-delay=".4s">
                  <div className={`mas-item ${slide.className}`}>
                    <img src={slide.image} alt="" />
                    <div className="text-section">
                      <h4 className="title4">
                        {slide.title.first}
                      </h4>
                      <p className="description">
                        {slide.title.second}
                      </p>
                    </div>
                    <div className="bg-color"></div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="slide-card-section second">
            {ShowcassesFullScreenData2.map((slide) => (
              <section key={slide.id} className="slide-item">
                <div className="wow fadeInUp" data-wow-delay=".4s">
                  <div className={`mas-item ${slide.className}`}>
                    <img src={slide.image} alt="" />
                    <div className="text-section">
                    <h4 className="title4">
                        {slide.title.first}
                      </h4>
                      <p className="description">
                        {slide.title.second}
                      </p>
                    </div>
                    <div className="bg-color"></div>
                  </div>
                </div>
              </section>
            ))}

            <div className="info-msg">
              <div className="">
                <h6 className="title6">
                  That's not all, our <br /> list continues....
                </h6>
                <ButtonOutline className="btn-outline-style" buttonText="View more clients" />
              </div>
            </div>
          </div>
        </div>

        <nav className="menu" >
			<a className="menu__item" data-img="https://images.unsplash.com/photo-1655240651407-c1e4618639e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80">
				<span className="menu__item-text"><span className="menu__item-textinner">Maria Costa</span></span>
				<span className="menu__item-sub">Style Reset 66 Berlin</span>
			</a>
			<a className="menu__item" data-img="img/2.jpg">
				<span className="menu__item-text"><span className="menu__item-textinner">Lana Ferrari</span></span>
				<span className="menu__item-sub">Fashion Week Milano</span>
			</a>
			<a className="menu__item" data-img="img/3.jpg">
				<span className="menu__item-text"><span className="menu__item-textinner">Franklin Roth</span></span>
				<span className="menu__item-sub">Amber Convention London</span>
			</a>
			<a className="menu__item" data-img="img/4.jpg">
				<span className="menu__item-text"><span className="menu__item-textinner">Cristie Noe</span></span>
				<span className="menu__item-sub">Tokyo Summer Trends</span>
			</a>
			<a className="menu__item" data-img="img/5.jpg">
				<span className="menu__item-text"><span className="menu__item-textinner">Wilma Quest</span></span>
				<span className="menu__item-sub">2021 West End New York</span>
			</a>
			<a className="menu__item" data-img="img/6.jpg">
				<span className="menu__item-text"><span className="menu__item-textinner">Gary Winston</span></span>
				<span className="menu__item-sub">Sunset Festival Greenwich</span>
			</a>
			<a className="menu__item" data-img="img/7.jpg">
				<span className="menu__item-text"><span className="menu__item-textinner">Nesta Freeman</span></span>
				<span className="menu__item-sub">Spirit Garments Jakarta</span>
			</a>
			<a className="menu__item" data-img="img/8.jpg">
				<span className="menu__item-text"><span className="menu__item-textinner">Jolanda French</span></span>
				<span className="menu__item-sub">Bluehouse Fashion Toronto</span>
			</a>
			<a className="menu__item" data-img="img/9.jpg">
				<span className="menu__item-text"><span className="menu__item-textinner">Samantha Dunne</span></span>
				<span className="menu__item-sub">Glamour Week Christchurch</span>
			</a>
			<a className="menu__item" data-img="img/10.jpg">
				<span className="menu__item-text"><span className="menu__item-textinner">Tony Albert</span></span>
				<span className="menu__item-sub">Piu Bella Fashion Rome</span>
			</a>
			<a className="menu__item" data-img="img/11.jpg">
				<span className="menu__item-text"><span className="menu__item-textinner">Jacky Speed</span></span>
				<span className="menu__item-sub">Sea Season Kuala Lumpur</span>
			</a>
			<a className="menu__item" data-img="img/12.jpg">
				<span className="menu__item-text"><span className="menu__item-textinner">Carlton Holle</span></span>
				<span className="menu__item-sub">Inspire Fashion Casablanca</span>
			</a>
			<a className="menu__item" data-img="img/13.jpg">
				<span className="menu__item-text"><span className="menu__item-textinner">Kylla Maushet</span></span>
				<span className="menu__item-sub">One to Ten Moscow</span>
			</a>
			<a className="menu__item" data-img="img/14.jpg">
				<span className="menu__item-text"><span className="menu__item-textinner">Fernando Castello</span></span>
				<span className="menu__item-sub">Miksa Style Week Lisbon</span>
			</a>
			<a className="menu__item" data-img="img/15.jpg">
				<span className="menu__item-text"><span className="menu__item-textinner">Sofie Henriette</span></span>
				<span className="menu__item-sub">Free Fashion Budapest</span>
			</a>
			<a className="menu__item" data-img="img/16.jpg">
				<span className="menu__item-text"><span className="menu__item-textinner">Adelie Bisset</span></span>
				<span className="menu__item-sub">Couture Night Paris</span>
			</a>
			<a className="menu__item" data-img="img/17.jpg">
				<span className="menu__item-text"><span className="menu__item-textinner">Takato Yang</span></span>
				<span className="menu__item-sub">Modern Touch Hong Kong</span>
			</a>
			<a className="menu__item" data-img="img/18.jpg">
				<span className="menu__item-text"><span className="menu__item-textinner">Hadrian Kaiser</span></span>
				<span className="menu__item-sub">Neverland Fashion Madrid</span>
			</a>
			<p className="credits">Images by <a href="https://www.behance.net/AndrewLili">Andrey Yakovlev and Lili Aleeva</a>, licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.en_US">CC BY-NC-ND 4.0</a></p>
		</nav>
      </div>
    </>
  );
};

export default Services;
