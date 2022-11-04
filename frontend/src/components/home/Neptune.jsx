import React from "react";
import PropTypes from "prop-types";
import orbit from "@assets/orbit.svg";

function Neptune({ handleClick }) {
  return (
    <div className="planets-container neptune-container">
      <img className="orbit" src={orbit} alt="orbit" />
      <div
        aria-hidden="true"
        className="neptune planet"
        onClick={(event) => handleClick(event)}
      />
    </div>
  );
}

export default Neptune;

Neptune.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
