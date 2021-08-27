import React from "react";
import "../styles/Footer.css";
import { FaGoogle, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>About Us</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
                nam iusto optio in cupiditate repellat ipsa temporibus odit
                atque aspernatur!
              </p>
            </div>
            <div className="footer-col">
              <h4>Contact Us</h4>
              <p>
                Deleted because errors pop up. Figure out a way to interact
                google mail
              </p>
            </div>
            <div className="footer-col">
              <h4>Have a Question?</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                mollitia id asperiores voluptatum fuga quos officiis similique
                animi repellendus nihil?
              </p>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="https://www.google.com/">
                  <FaGoogle />
                </a>
                <a href="https://www.facebook.com/">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/">
                  <FaInstagram />
                </a>
                <a href="https://www.twitter.com/">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
