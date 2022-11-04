import React from "react";
import PropTypes from "prop-types";
import orbit from "@assets/orbit.svg";

function Mars({ handleClick }) {
  return (
    <div className="planets-container mars-container">
      <img className="orbit" src={orbit} alt="orbit" />
      <div
        aria-hidden="true"
        className="mars planet"
        onClick={(event) => handleClick(event)}
      />
    </div>
  );
}

export default Mars;

Mars.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
