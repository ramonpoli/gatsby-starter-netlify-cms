import React from "react";
import useSiteMetadata from "./SiteMetadata";

const Navbar = () => {
  const { title, description } = useSiteMetadata();
  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <div className="">
            <h1 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen">
              {title}
            </h1>
            <h3 className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen">
              {description}
            </h3>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
