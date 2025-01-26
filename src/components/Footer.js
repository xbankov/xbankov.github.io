import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreativeCommons,
  faCreativeCommonsBy,
  faCreativeCommonsNc,
  faCreativeCommonsNd,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/main.scss";

const Footer = () => {
  return (
    <footer class="footer footer-height has-footer-shadow-with-gradient mt-6">
      <div class="has-text-centered ">
        <p>
          {" "}
          &copy; 2023 Me. This work is licensed under{" "}
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            {" "}
            CC BY NC SA 4.0
          </a>
        </p>
        <p>
          <a
            href="https://creativecommons.org/licenses/by-nc-nd/4.0"
            aria-label="Creative Commons"
          >
            <FontAwesomeIcon icon={faCreativeCommons} size="2x" />
            <FontAwesomeIcon icon={faCreativeCommonsBy} size="2x" />
            <FontAwesomeIcon icon={faCreativeCommonsNc} size="2x" />
            <FontAwesomeIcon icon={faCreativeCommonsNd} size="2x" />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
