import Link from "next/link";
import React, { useState } from "react";
import ButtonPrimary from "../../common/buttonPrimary";

const Footer = () => {
  const [textChange, setTextChange] = useState(true)

  const textButtonToggle = () => {
    setTextChange(!textChange)
  }

  return (
    <footer className="footer-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="info-animation-sec">
              <button
                className="alphabat"
                onMouseEnter={textButtonToggle}
                onMouseLeave={textButtonToggle}
              >
                {textChange ?
                  <div className="text-style">
                    <span>I</span>
                    <span>N</span>
                    <span>T</span>
                    <span>R</span>
                    <span>I</span>
                    <span>G</span>
                    <span>U</span>
                    <span>E</span>
                    <span>D</span>
                    <span>?</span>
                  </div>

                  :
                  <div className="text-style with-bg">
                    <span>C</span>
                    <span>O</span>
                    <span>N</span>
                    <span>V</span>
                    <span>I</span>
                    <span>N</span>
                    <span>C</span>
                    <span>E</span>
                    <span>D</span>
                    <span>!</span>
                  </div>
                }
              </button>
              <p className="text-light">Let’s create a Kick-ass digital experience together!</p>

              <ButtonPrimary buttonText="Connect with us" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-3">
            <h5 className="title5">About</h5>
            <div className="link-section">
              <div className="links">
                <Link href="/">
                  <a>Services</a>
                </Link>
                <Link href="/">
                  <a>Process</a>
                </Link>
                <Link href="/">
                  <a>Blogs</a>
                </Link>
              </div>
              <div className="links">
                <Link href="/">
                  <a>Projects</a>
                </Link>
                <Link href="/">
                  <a>Careers</a>
                </Link>
                <Link href="/">
                  <a>Contact</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-3 light-style">
            <h5 className="title5">Industries</h5>
            <div className="link-section">
              <div className="links">
                <Link href="/">
                  <a>Blogging</a>
                </Link>
                <Link href="/">
                  <a>Healthcare</a>
                </Link>
                <Link href="/">
                  <a>Edtech</a>
                </Link>
              </div>
              <div className="links">
                <Link href="/">
                  <a>Projects</a>
                </Link>
                <Link href="/">
                  <a>Careers</a>
                </Link>
                <Link href="/">
                  <a>Contact</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="information-section">
              <div className="sb-copyright">
                A creative studio by <img src="img/sb-log.svg" className="logo-sb" alt="" /> crafting powerful <br /> experiences through Design.
              </div>
              <div className="address">
                <div className="address-text">
                  115, Sector 44, Gurugram, Haryana - 122002, India
                </div>
                <a href="" className="link-email">hi@griddesign.in</a>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="row">
          <div className="col-sm-8">
            <div className="copyright-sec">
              <p className="text-gray">&copy; Copyright Grid Design. All rights reserved.</p>
              <Link href="/" className="text-gray">Privacy Policy</Link>
              <Link href="/" className="text-gray">Terms & Conditions</Link>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="social">
              <a href="#0" className="icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#0" className="icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#0" className="icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#0" className="icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#0" className="icon">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#0" className="icon">
                <i className="fab fa-behance"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
