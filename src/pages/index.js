import React, { useRef, useEffect } from "react";
import DarkTheme from "../layouts/Dark";
import Footer from "../components/Footer";
import HeroSection from "../components/hero-section";
import HomeProjects from "../components/home-projects";
import LetsHearCard from "../components/lets-hear";
import Navbar from "../components/Navbar";
import OurServicesComponent from "../components/our-services";
import BlogLight from "./blog/blog-light";
import WhoWeAre from "../components/whoWeAre/who-we-are";
import Services from "../components/Services";
import useScrollSpy from 'react-use-scrollspy';
import DesignAudit from "../components/designAudit";
import $ from 'jquery';
import Link from "next/link";
import Head from "next/head";
import ScrollToTop from "../components/Scroll-to-top";

export default function Home(props) {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -80,
  });

  // useEffect(() => {
  //   (function () {
  //     var indicator = $("#indicator");
  //     var counter = indicator.find("span");

  //     var win = jQuery(window);
  //     if (indicator.length) {
  //       var moveIndicator = debounce(function () {
  //         var viewportHeight = $(window).height();
  //         var documentHeight = $(document).height();
  //         var hasScrolled = $(window).scrollTop();

  //         var percent = (hasScrolled / (documentHeight - viewportHeight)) * 100;
  //         indicator.css("top", percent + "%");
  //         counter.html(Math.floor(percent) + "%");
  //       }, 10);
  //     }

  //     win.on("resize scroll", moveIndicator);

  //     function debounce(func, wait, immediate) {
  //       var timeout;

  //       return function () {
  //         var context = this,
  //           args = arguments;
  //         var later = function () {
  //           timeout = null;
  //           if (!immediate) func.apply(context, args);
  //         };
  //         var callNow = immediate && !timeout;
  //         clearTimeout(timeout);
  //         timeout = setTimeout(later, wait);
  //         if (callNow) func.apply(context, args);
  //       };
  //     }
  //   })();

  // }, [])


  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <DarkTheme>
      <Head>
        <title>Home | Grid Design Studio</title>
      </Head>
      <div className={`layout-primary-style ${activeSection === 6 && 'blog-nav-active'} ${props.className}`}>
        <div className={`sidebar ${activeSection === 6 && 'blog-active'}`} id="sidebarSection">
          <Link href="/">
            <a className="logo">
              <img src='img/logo-dark.svg' alt="" />
            </a>
          </Link>
          <div className="intro">
            <nav className="App-navigation">
              <h4 className={activeSection === 0 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Intro</h4>
              <h4 className={activeSection === 1 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Clients</h4>
              <h4 className={activeSection === 2 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Services</h4>
              <h4 className={activeSection === 3 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Who We Are</h4>
              <h4 className={activeSection === 4 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Projects</h4>
              <h4 className={activeSection === 5 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Let&apos;s hear</h4>
              <h4 className={activeSection === 6 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Blog</h4>
              <h4 className={activeSection === 7 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Footer</h4>
            </nav>
          </div>
          <div className="toggle">
            <img src='img/toggle-lines.svg' className="img-style" alt="" />
          </div>
        </div>

        {/* Main Section start */}
        <div className="main-wrapper">
          <Navbar nr={navbarRef} lr={logoRef} navClass={activeSection === 6 && 'blog-navigation-active'} />
          <div ref={sectionRefs[0]} >
            <HeroSection />
          </div>
          <div ref={sectionRefs[1]}>
            <Services />
          </div>
          <div ref={sectionRefs[2]}>
            <OurServicesComponent />
          </div>
          <div className="panel-div" ref={sectionRefs[3]}>
            <WhoWeAre />
          </div>
          <div ref={sectionRefs[4]}>
            <HomeProjects />
          </div>
          <div ref={sectionRefs[5]}>
            <LetsHearCard />
          </div>
          <div ref={sectionRefs[6]}>
            <BlogLight />
          </div>
          <div ref={sectionRefs[7]}>
            <DesignAudit />
          </div>
          <div>
            <Footer />
          </div>
        </div>

        <button className={`toggle-button-fix`}>
          <div className="img-bg"></div>
          <img src='img/toggle-lines.svg' className="img-style" alt="" />
        </button>

        <div id="scroll-indicator" className="scroll-indicator">
          <div id="indicator" className="indicator"></div>
        </div>

        <ScrollToTop />
      </div>
    </DarkTheme>
  )
}
