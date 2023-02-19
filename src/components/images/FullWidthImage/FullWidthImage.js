import React from "react";
import PropTypes from "prop-types";
import "./FullWidthImage.sass";

const FullWidthImage = ({ img }) => (
  <div
    className="full-width-image margin-top-0"
    style={{
      backgroundImage: `url(${img})`,
    }}
  ></div>
);

FullWidthImage.propTypes = {
  img: PropTypes.string,
};
export default FullWidthImage;
