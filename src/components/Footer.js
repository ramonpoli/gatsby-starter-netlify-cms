import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.png";

import instagram from "../img/social/instagram.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter ">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter columns">
            <div class="column is-2">
              <Link to="/" className="logo" title="Logo">
                <img
                  src={logo}
                  alt="enfield_photograpy logo with ukraine flag background"
                />
              </Link>
            </div>
            <div class="column">
              <section className="menu">
                <Link className="menu-item" to="/">
                  Enfield Photography {new Date().getFullYear()}
                </Link>
                <Link className="menu-item" to="/about">
                  About
                </Link>
              </section>
              <section className="social">
                <strong>Find me on: </strong>
                <a
                  title="instagram"
                  href="https://www.instagram.com/enfield_photography/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </section>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
