import { Link } from "gatsby";
import React from "react";
import useSiteMetadata from "./SiteMetadata";
import logo from "../img/logo-ukraine.png";

const Navbar = () => {
  const { title } = useSiteMetadata();
  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item logo" title="Logo">
            <img
              src={logo}
              alt="enfield_photograpy logo with ukraine flag background"
            />
          </Link>
          <h1 className="navbar-item has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
            {title}
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
