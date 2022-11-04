import React from "react";
import PropTypes from "prop-types";
import orbit from "@assets/orbit.svg";

function Mercury({ handleClick }) {
  return (
    <div className="planets-container mercury-container">
      <img className="orbit" src={orbit} alt="orbit" />
      <div
        aria-hidden="true"
        className="mercury planet"
        onClick={(event) => handleClick(event)}
      />
    </div>
  );
}

export default Mercury;

Mercury.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
