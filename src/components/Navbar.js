import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "../styles/main.scss";

const Navbar = () => {
  // Check if user prefers dark mode
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  // State for dark mode
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    // Add your dark mode toggle logic here
  }, [darkMode]);

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    // Add any additional logic you want to execute on dark mode toggle
  };

  // Mobile navigation dropdown burger
  useEffect(() => {
    const handleNavbarBurgerClick = () => {
      const $navbarBurger = document.querySelector(".navbar-burger");
      const $navMenu = document.getElementById("navMenu");

      if ($navbarBurger && $navMenu) {
        $navbarBurger.addEventListener("click", () => {
          $navbarBurger.classList.toggle("is-active");
          $navMenu.classList.toggle("is-active");
        });
      }
    };

    handleNavbarBurgerClick();
  }, []);

  return (
    <nav
      className={`navbar navbar-custom-padding has-navbar-shadow-with-gradient has-text-weight-medium is-size-5`}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link
          to="/"
          className="navbar-item hover-scale underline-on-hover is-family-special is-size-4"
        >
          xbankov
        </Link>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu" id="navMenu">
        <div className="navbar-start">
          <Link
            className="navbar-item underline-on-hover is-family-terciary is-size-5 has-text-weight-semibold"
            to="/resume"
          >
            Resume
          </Link>
          <Link
            className="navbar-item underline-on-hover is-family-terciary is-size-5 has-text-weight-semibold"
            to="/projects"
          >
            Projects
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item underline-on-hover">
            <a
              href="JavaScript:void(0)" // Replace with the actual link or use  if it's a button
              className="navbar-item underline-on-hover"
              role="button"
            >
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </a>
          </div>

          <div className="navbar-item underline-on-hover">
            <a
              href="JavaScript:void(0)"
              className="navbar-item underline-on-hover"
              role="button"
              onClick={toggleDarkMode}
            >
              <FontAwesomeIcon icon={darkMode ? faMoon : faSun} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
