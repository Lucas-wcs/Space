import React from "react";
import PropTypes from "prop-types";
import orbit from "@assets/orbit.svg";

function Saturn({ handleClick }) {
  return (
    <div className="planets-container saturn-container">
      <img className="orbit" src={orbit} alt="orbit" />
      <div
        aria-hidden="true"
        className="saturn planet"
        onClick={(event) => handleClick(event)}
      />
    </div>
  );
}

export default Saturn;

Saturn.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
