import React, { useEffect, useState } from "react";
import Link from "next/link";
import ButtonPrimary from "../../common/buttonPrimary";
import $ from 'jquery';
import { useMediaQuery } from 'react-responsive'

const Footer = () => {
  const mobileDevice = useMediaQuery({ query: '(max-width: 767px)' })

  const [textChange, setTextChange] = useState(0);

  const textButtonToggle = () => {
    setTextChange(!textChange)
  }

  useEffect(() => {
    if (mobileDevice) {
      var quotes = $(".fade-text");
      var quoteIndex = -1;
      function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
          .fadeIn(2000)
          .delay(2000)
          .fadeOut(2000, showNextQuote);
      }

      showNextQuote();
    }
  }, [])


  return (
    <footer className="footer-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="info-animation-sec">
                <div
                  className="alphabat hide-on-mobile"
                  onMouseEnter={textButtonToggle}
                  onMouseLeave={textButtonToggle}
                >
                  {!textChange ?
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
                </div>

                <div className="alphabat hide-on-desktop">
                  <div className="fade-text">
                    <div className="text-style" id="fadetext1">
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
                  </div>
                  <div className="fade-text">
                    <div className="text-style with-bg fadeOut" id="fadetext2">
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
                  </div>
                </div>
              <p className="text-gray-light">Let’s create a Kick-ass digital experience together!</p>

              <ButtonPrimary href="/" buttonText="Connect with us" />
            </div>
          </div>
        </div>

        <div className="row align-items-end">
          <div className="col-sm-3">
            <div className="link-section first">
              <ul className="links">
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Services</a>
                  </Link>
                </li>
              </ul>
              <ul className="links">
                <li>
                  <Link href="/">
                    <a>Projects</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Careers</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-3">
            <div className="light-style">
              <h5 className="title5">Industries</h5>
              <div className="link-section second">
                <ul className="links">
                  <li>
                    <Link href="/">
                      <a>Blogging</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Healthcare</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Edtech</a>
                    </Link>
                  </li>
                </ul>
                <ul className="links">
                  <li>
                    <Link href="/">
                      <a>Real Estate</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Fintech</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Entertainment</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="information-section">
              <div className="sb-copyright">
                A creative agency by <a href="https://squareboat.com/" rel="noreferrer" target="_blank"><img src="img/sb-log.svg" className="logo-sb" alt="" /></a>.
              </div>
              <div className="address">
                <a href="tel:+91-1235678901" className="address-text"> +91-1235678901 </a>
                <a href="mailto:hi@griddesign.in" className="link-email">hi@griddesign.in</a>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="row row-column-style">
          <div className="col-sm-7">
            <div className="copyright-sec">
              <p className="text-gray">&copy; Copyright Grid Design. All rights reserved.</p>
              <div className="link-sec">
                <Link href="/" className="text-gray">Privacy Policy</Link>
                <Link href="/" className="text-gray">Terms & Conditions</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="social">
              <a href="#0" className="icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#0" className="icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#0" className="icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#0" className="icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#0" className="icon">
                <i className="fab fa-behance"></i>
              </a>
              <a href="#0" className="icon">
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
