import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../PreviewCompatibleImage/PreviewCompatibleImage";
import { Masonry } from "react-visual-grid";

const FeatureGrid = ({ gridItems }) => {
  console.log("gridItems :", gridItems);
  return (
    <Masonry fillMode="VERTICAL" height={3000} width={1000}>
      <span className={`rc-w-100 rc-h-100`}>
        {/* <PreviewCompatibleImage imageInfo={gridItems[0]} /> */}
        <img alt="Image 1" src={`https://picsum.photos/id/10/100/100`} />
      </span>
      <span className={`rc-w-100 rc-h-200`}>
        <PreviewCompatibleImage imageInfo={gridItems[1]} />
      </span>
      <span className={`rc-w-200 rc-h-300`}>
        <PreviewCompatibleImage imageInfo={gridItems[2]} />
      </span>
      <span className={`rc-w-150 rc-h-100`}>
        <PreviewCompatibleImage imageInfo={gridItems[3]} />
      </span>
      <span className={`rc-w-150 rc-h-200`}>
        <PreviewCompatibleImage imageInfo={gridItems[4]} />
      </span>
    </Masonry>
  );
};

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
