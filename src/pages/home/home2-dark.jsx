import React from "react";
import BlcSec from "../../components/Blc-sec";
import CallToAction from "../../components/Call-to-action";
import Clients1 from "../../components/Clients1";
import Footer from "../../components/Footer";
import HeroSection from "../../components/hero-section";
import Navbar from "../../components/Navbar";
import PortfolioCustomColumn from "../../components/Portfolio-custom-column";
import Services2 from "../../components/Services2";
import SkillsCircle from "../../components/Skills-circle";
import VideoWithTestimonials from "../../components/Video-with-testimonials";
import DarkTheme from "../../layouts/Dark";
import BlogDark from "../blog/blog-dark";
import BlogLight from "../blog/blog-light";
import WhoWeAre from "../whoWeAre/who-we-are";

const Homepage2 = () => {
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

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <HeroSection />
      <BlcSec />
      <Services2 />
      <WhoWeAre/>
      <BlogLight />
      {/* <VideoWithTestimonials />
      <SkillsCircle theme="dark" subBG />
      <PortfolioCustomColumn column={3} filterPosition="center" />
      <Clients1 theme="dark" subBG />
      <CallToAction />
       */}
       <Footer />
    </DarkTheme>
  );
};

export default Homepage2;
