import React from "react";
import { Link } from "gatsby";

import instagram from "../img/social/instagram.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
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
      </footer>
    );
  }
};

export default Footer;
