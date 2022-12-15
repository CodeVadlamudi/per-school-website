import React from "react";
import "./Footer.css";
import SearchIcon from "@mui/icons-material/Search";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
  return (
    <footer>
      <div className="footer__top">
        <div className="container">
          <div className="footer__row">
            <div className="footer__col">
              <div className="footer__details">
                <h3>Get In Touch</h3>
                <div className="footer__lists">
                  <li>
                    <SearchIcon /> Vijayawada, Andhra Pradesh
                  </li>
                  <li>
                    <PhoneIcon /> +0123456789
                  </li>
                  <li>
                    <EmailIcon /> example@gmail.com
                  </li>
                </div>
                <div className="footer__icons">
                  <TwitterIcon />
                  <FacebookIcon />
                  <YouTubeIcon />
                  <LinkedInIcon />
                </div>
              </div>
            </div>
            <div className="footer__col">
              <div className="footer__details">
                <h3>Quick Links</h3>
                <div className="footer__lists">
                  <li>
                    <KeyboardArrowRightIcon /> About Us
                  </li>
                  <li>
                    <KeyboardArrowRightIcon /> Contact Us
                  </li>
                  <li>
                    <KeyboardArrowRightIcon /> Our Services
                  </li>
                  <li>
                    <KeyboardArrowRightIcon /> Privary Policy
                  </li>
                  <li>
                    <KeyboardArrowRightIcon /> Terms & Condition
                  </li>
                </div>
              </div>
            </div>
            <div className="footer__col">
              <div className="footer__details">
                <h3>Photo Gallery</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci, eius!
                </p>
                <div className="footer__email">
                  <input type="email" />
                  <button type="submit">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__down">
        <p><CopyrightIcon />All Right Reserved. Designed by <a href="!#">Vadlamudi Vamsi</a></p>
      </div>
    </footer>
  );
}

export default Footer;
