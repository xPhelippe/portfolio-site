import "./index.css";
import React from "react";
import {
  faLinkedin,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pages from "../../utils/pages";

function Footer(props) {
  return (
    <>
      <div className="footer-body">
        <div className="footer-container">
          <div className="footer-pages">
            <h3>Pages</h3>
            <div className="footer-items">
              {pages.map((page, idx) => (
                <a href={page.link} key={idx}>
                  {page.title}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-socials">
            <h3>Socials</h3>
            <div className="footer-items">
              <a href="https://www.linkedin.com/in/xphelippe/">
                <FontAwesomeIcon icon={faLinkedin} color="#f2f2f2" size="lg" />{" "}
              </a>
              <a href="https://github.com/xPhelippe">
                <FontAwesomeIcon icon={faGithub} color="#f2f2f2" size="lg" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faYoutube} color="#f2f2f2" size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
