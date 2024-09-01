import React from 'react';
import logo from '../../public/assets/img/logo.png';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return(
      <header id="header" className="fixed-top d-flex align-items-center header-transparent">
        <div className="container d-flex justify-content-between align-items-center">

          <div id="logo">
            <a href="#"><img className="logo-css" width="100" height="93" src={logo} alt=""/></a>
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="#experience">Experience</a></li>
              <li><a className="nav-link scrollto" href="#achievement">Achievement</a></li>
              <li><a className="nav-link scrollto" href="#projects">Projects</a></li>
              <li><a className="nav-link scrollto" href="#team">Team</a></li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
              <li className="dropdown"><a href="#"><span>Other</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="#">Other 1</a></li>
                  <li className="dropdown"><a href="#"><span>Other 2</span> <i className="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a href="#">Other 1</a></li>
                      <li><a href="#">Other 2</a></li>
                      <li><a href="#">Other 3</a></li>
                      <li><a href="#">Other 4</a></li>
                      <li><a href="#">Other 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Other 3</a></li>
                  <li><a href="#">Other 4</a></li>
                  <li><a href="#">Other 5</a></li>
                </ul>
              </li>
              <li>
                <div className="nav-link scrollto" href="/login">
                  <Link to="/login">Login</Link>
                </div>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;