import React from "react";
import PropTypes from "prop-types";
import orbit from "../../assets/orbit.svg";

function Earth({ handleClick }) {
  return (
    <div className="planets-container earth-container">
      <img className="orbit" src={orbit} alt="orbit" />
      <div
        aria-hidden="true"
        className="earth planet"
        onClick={(event) => handleClick(event)}
      />
    </div>
  );
}

export default Earth;

Earth.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
