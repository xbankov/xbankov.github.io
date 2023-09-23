import React from "react";

import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/main.scss";

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link id="logo" className="navbar-item" href="https:/xbankov.github.io">
          <StaticImage
            src="../images/favicon.png"
            alt="xbankov logo"
          ></StaticImage>
        </Link>
        <Link
          id="logo-text"
          className="navbar-item underline-on-hover"
          href="https:/xbankov.github.io"
        >
          xbankov.eu
        </Link>
        <button
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item underline-on-hover" href="/">
            Home
          </Link>
          <Link className="navbar-item underline-on-hover" href="/CV">
            CV
          </Link>
          <Link className="navbar-item underline-on-hover" href="/Resume">
            Resume
          </Link>
          <Link className="navbar-item underline-on-hover" href="/Projects">
            Projects
          </Link>
        </div>

        <div className="navbar-end">
          <Link
            className="navbar-item underline-on-hover"
            href="https://www.linkedin.com/in/mikulas-bankovic/"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </Link>
          <Link
            className="navbar-item underline-on-hover"
            href="https://github.com/xbankov"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
