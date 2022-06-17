import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import HeroSection from "../../components/hero-section";
import HomeProjects from "../../components/home-projects";
import LetsHearCard from "../../components/lets-hear";
import Navbar from "../../components/Navbar";
import OurServicesComponent from "../../components/our-services";
import DarkTheme from "../../layouts/Dark";
import BlogLight from "../blog/blog-light";
import WhoWeAre from "../../components/whoWeAre/who-we-are";
import Services from "../../components/Services";
import $ from 'jquery'; 

const Homepage = () => {
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

  React.useEffect(() => {
    $(function() {
  
      var link = $('#navbar a.dot');
      
      // Move to specific section when click on menu link
      link.on('click', function(e) {
        var target = $($(this).attr('href'));
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        $(this).addClass('active');
        e.preventDefault();
      });
      
      // Run the scrNav when scroll
      $(window).on('scroll', function(){
        scrNav();
      });
      
      // scrNav function 
      // Change active dot according to the active section in the window
      function scrNav() {
        var sTop = $(window).scrollTop();
        $('section').each(function() {
          var id = $(this).attr('id'),
              offset = $(this).offset().top-1,
              height = $(this).height();
          if(sTop >= offset && sTop < offset + height) {
            link.removeClass('active');
            $('#navbar').find('[data-scroll="' + id + '"]').addClass('active');
          }
        });
      }
      scrNav();
    });
  }, [])
  

  return (
    <DarkTheme>
     
    </DarkTheme>
  );
};

export default Homepage;
