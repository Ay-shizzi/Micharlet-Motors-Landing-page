import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "./images/logo.svg";
import arrow from "./images/arrow.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1500,
      easing: "linear",
      delay: 100,
    });
  }, []);
  return (
    <>
      <section className="hero-section">
        <nav data-aos="zoom-in" className="logo">
          <img className="logo-img" src={logo} alt="logo" />
          <p className="logo-name">Micharlet Auto</p>
        </nav>
        <div data-aos="fade-right" className="hero-section-text">
          <h2 className="hero-text">
            Let's get you
            <span>on the road</span>
          </h2>
          <button className="quote-btn">
            Request a quote
            <img className="arrow" src={arrow} alt="arrow" />
          </button>
        </div>
      </section>
      <section className="mission">
        <h1 data-aos="fade-right" className="mission-header-text">
          micharlet mission
        </h1>
        <div data-aos="fade-right" className="mission-header-img"></div>
        <div data-aos="fade-left" className="mission-paragraph-img"></div>
        <p data-aos="fade-left" className="mission-paragraph-text">
          Micharlet Auto is a leading brand in car design, manufacturing, and
          maintenance. With our cutting-edge technology, we give you tomorrow's
          vehicles, today!
        </p>
      </section>
      <section className="offers">
        <div className="offers-wrapper">
          <div data-aos="fade-right" className="offer-header">
            <h1 className="header-title">current offers</h1>
          </div>
          <div data-aos="fade-down" className="new-model">
            <h1 className="offer-number">1</h1>
            <h3 className="offer-title">Brand New Models</h3>
            <p className="offer-content">
              Browse and buy the brand's best available models
            </p>
          </div>
          <div data-aos="fade-down" className="full-service">
            <h1 className="offer-number">2</h1>
            <h3 className="offer-title">Brand New Models</h3>
            <p className="offer-content">
              Browse and buy the brand's best available models
            </p>
          </div>
          <div data-aos="fade-down" className="pre-owned">
            <h1 className="offer-number">3</h1>
            <h3 className="offer-title">Brand New Models</h3>
            <p className="offer-content">
              Browse and buy the brand's best available models
            </p>
          </div>
          <div data-aos="fade-down" className="custom-detail">
            <h1 className="offer-number">4</h1>
            <h3 className="offer-title">Brand New Models</h3>
            <p className="offer-content">
              Browse and buy the brand's best available models
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" className="offer-img"></div>
      </section>
      <section className="client-stories">
        <h1 data-aos="fade-down" className="client-stories-header">
          Client stories
        </h1>
        <div className="client-stories-wrapper">
          <div data-aos="zoom-in" className="pace">
            <h3 className="client">Matthew Pace</h3>
            <p className="client-testimonial">
              My car badly needed repair so early in the morning and Micharlet
              Auto came thru at 4:30 am! Talk about excellent customer service!
            </p>
          </div>
          <div data-aos="zoom-in" className="casper">
            <h3 className="client">Casper Zoltan</h3>
            <p className="client-testimonial">
              The brand new models available at the showroom made it hard for me
              to choose—they were all so good and I wanted them all.
            </p>
          </div>
          <div data-aos="zoom-in" className="tom">
            <h3 className="client">Tom Gyllenhaal</h3>
            <p className="client-testimonial">
              Micharlet Auto has assisted me from start to finish. They listened
              to what I needed and suggested models based on my budget.
            </p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div data-aos="fade-right" className="footer-header">
          <h1>Get In Touch</h1>
        </div>
        <div data-aos="fade-right" className="footer-details-wrapper">
          <div className="footer-details">
            <div className="footer-info">
              <h3 className="footer-info-header">Mailing Address</h3>
              <p className="footer-info-details">
                123 Lawal St., Lawal City State, Country 12345
              </p>
            </div>
            <div className="footer-info">
              <h3 className="footer-info-header">Email Address</h3>
              <p className="footer-info-details">email@gmail.com</p>
            </div>
          </div>
          <div className="footer-details">
            <div className="footer-info">
              <h3 className="footer-info-header">Phone Number</h3>
              <p className="footer-info-details">(+234) 456 7890</p>
            </div>
            <div className="footer-info">
              <h3 className="footer-info-header">Socials</h3>
              <div className="footer-info-details">
                <div className="footer-socials">
                  <FontAwesomeIcon className="socials" icon={faFacebookF} />
                  <FontAwesomeIcon className="socials" icon={faInstagram} />
                  <FontAwesomeIcon className="socials" icon={faXTwitter} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
