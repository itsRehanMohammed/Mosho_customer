import React from "react";
import "./Footer.css";
import payment_gateways from "./images/guaranteed-safe-checkout_1.png";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="upper">
          <div className="links">
            <h4>QUICK LINKS</h4>
            <Link to="/menu"> Menu</Link>
            <Link to="/login"> Login</Link>
            <Link to="/signup"> Sign up</Link>
            <a target={"_blank"} href="https://goo.gl/maps/AXzA3HMU2Vxn8ezT7">
              Sitemap
            </a>
          </div>
          <div className="links">
            <h4> KNOW US</h4>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Term & Conditions</Link>
            <Link to="/">Return Policy</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-content">
            <h4>ABOUT US:</h4>
            <p
              style={{
                paddingBottom: "10px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              nam cum quod ducimus a sint officia!
            </p>
            {/* <img src="./images/securedby.webp" alt="" /> */}

            <h4 className="pay-line">WE ARE USING SAFE PAYMENTS:</h4>
            <div className="payment-modes">
              <img src={payment_gateways} alt="visa" />
            </div>
          </div>

          <div className="links">
            <h4>CONTACT</h4>
            <a target={"_blank"} href="#">
              info@mosho.com
            </a>
            <a
              target={"_blank"}
              href="tel:
+918097167143"
            >
              Tel: +91 80971 67143
            </a>
            <a target={"_blank"} href="https://goo.gl/maps/AXzA3HMU2Vxn8ezT7">
              MOSHO, Shop 21,Mini Market Sector 10, Vashi Navi Mumbai,
              Maharashtra 400703 India
            </a>

            <div className="social_links">
              <li className="social_link">
                <a target={"_blank"} rel="noreferrer" href="#">
                  <img src="./images/facebook.webp" alt="" />
                </a>
              </li>
              <li className="social_link">
                <a target={"_blank"} rel="noreferrer" href="#">
                  <img src="./images/instagram.webp" alt="" />
                </a>
              </li>
              <li className="social_link">
                <a target={"_blank"} rel="noreferrer" href="#">
                  <img src="./images/linkedin.webp" alt="" />
                </a>
              </li>
              <li className="social_link">
                <a target={"_blank"} rel="noreferrer" href="#">
                  <img src="./images/twiiter.webp" alt="" />
                </a>
              </li>
              <li className="social_link">
                <a target={"_blank"} rel="noreferrer" href="#">
                  <img src="./images/youtube.webp" alt="" />
                </a>
              </li>
            </div>
          </div>
        </div>
        <div className="lower">
          <div className="branding">
            <p>
              {" "}
              &copy; 2023 <span className="brand-name">Mosho</span> All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
