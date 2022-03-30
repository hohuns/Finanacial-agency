import React, { useState } from "react";
import logo from "./images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [closeModal, setCloseModal] = useState(false);
  const handleClick = () => setClick(!click);
  const menuClick = () => setClick(false);
  return (
    <div className="header">
      <nav className="navbar">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="logo"
        >
          <img src={logo} alt="logo" />
        </Link>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "white" }}></FaTimes>
          ) : (
            <FaBars size={30} style={{ color: "white" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={menuClick}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={menuClick}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={menuClick}
            >
              Testimonials
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="demo"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={menuClick}
            >
              Demo
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
