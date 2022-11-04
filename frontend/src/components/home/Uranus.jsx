import React from "react";
import PropTypes from "prop-types";
import orbit from "@assets/orbit.svg";

function Uranus({ handleClick }) {
  return (
    <div className="planets-container uranus-container">
      <img className="orbit" src={orbit} alt="orbit" />
      <div
        aria-hidden="true"
        className="uranus planet"
        onClick={(event) => handleClick(event)}
      />
    </div>
  );
}

export default Uranus;

Uranus.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
