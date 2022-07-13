/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { handleMobileDropdown } from "../../common/navbar";

const Navbar = ({ lr, nr, theme, navClass }) => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(true);
      } else { // if scroll up show the navbar
        setShow(false);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const [scrollValue, setScrollValue] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollValue(window.scrollY > 0)
    })
  }, [])

  return (
    <>
      <div className={`mobile-top-nav ${show ? 'navbar-hidden' : 'navbar-show'} ${!scrollValue ? 'scroll-0' : ''} ${navClass}`} >
        <div className="logo-section">
          <div className="logo">
            <img src='img/logo.svg' alt="" />
          </div>

          <div className="animation-block">
            <div className="sub-heading animation-text text-right">
              A global creative agency <br /> based out of India.
            </div>
          </div>
        </div>
      </div>

      <nav
        ref={nr}
        className={`navbar navbar-expand-lg change ${show ? 'navbar-hidden' : 'navbar-show'} ${navClass}`}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleMobileDropdown}
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto navbar-custom-style">

              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">About</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Project</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Services</a>
                </Link>
              </li>


              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Career</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
