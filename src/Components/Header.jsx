import React, { Component } from "react";
import "../styles/Header.css";
import logo from "../assets/triana.svg";
import { BrowserRouter, Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>header section</h1>
        <img src={logo} className="logo" alt="logo" />
        <BrowserRouter>
          <div>
            <Link
              to={{
                pathname: "https://github.com/trianacerda",
              }}
              target="_blank"
            >
              GitHub
            </Link>

            <Link
              to={{
                pathname: "https://www.linkedin.com/in/triana-cerda/",
              }}
              target="_blank"
            >
              LinkedIn
            </Link>

            <Link
              to={{
                pathname:
                  "https://www.canva.com/design/DAEr30RkNjc/WldLtMid1TO_QDaDFns4LQ/view?utm_content=DAEr30RkNjc&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton",
              }}
              target="_blank"
            >
              Resume
            </Link>

            <Link>About Me</Link>
            <Link>Projects</Link>
            <Link>Contact</Link>
          </div>
        </BrowserRouter>
      </header>
    );
  }
}

export default Header;
