import React from "react";
import { Link } from "react-router-dom";
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";*/
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <ul className="navList">
          <li>
            <Link to="/home" className="navHome">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="navAbout">
              About
            </Link>
          </li>
          <li>
            <Link to="/education" className="navEducation">
              Education
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="navPortfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navContact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
