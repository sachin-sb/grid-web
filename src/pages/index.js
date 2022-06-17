import React, { useRef } from "react";
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
  ];

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -80,
  });



  return (
    <DarkTheme>
      <div className={`layout-primary-style ${props.className}`}>
        <div className={`sidebar ${activeSection === 6 && 'blog-active'}`} id="sidebarSection">
          <div className="logo">
            <img src='img/logo-dark.svg' alt="" />
          </div>
          <div className="intro">
            <nav className="App-navigation">
              <h4 className={activeSection === 0 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Intro</h4>
              <h4 className={activeSection === 1 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Clients</h4>
              <h4 className={activeSection === 2 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Services</h4>
              <h4 className={activeSection === 3 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Who We Are</h4>
              <h4 className={activeSection === 4 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Projects</h4>
              <h4 className={activeSection === 5 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Let's hear</h4>
              <h4 className={activeSection === 6 ? "App-navigation-item App-navigation-item--active" : "App-navigation-item"}>Blog</h4>
            </nav>
          </div>
          <div className="toggle">
            <img src='img/toggle-lines.svg' className="img-style" alt="" />
          </div>
        </div>
        <div className="main-wrapper">
          <Navbar nr={navbarRef} lr={logoRef} />
          <div ref={sectionRefs[0]} >
            <HeroSection />
          </div>
          <div ref={sectionRefs[1]}>
            <Services />
          </div>
          <div ref={sectionRefs[2]}>
            <OurServicesComponent />
          </div>
          <div ref={sectionRefs[3]}>
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

          <DesignAudit/>
          <Footer />
        </div>
      </div>
    </DarkTheme>
  )
}
