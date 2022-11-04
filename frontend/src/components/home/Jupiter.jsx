import React from "react";
import PropTypes from "prop-types";
import orbit from "@assets/orbit.svg";

function Jupiter({ handleClick }) {
  return (
    <div className="planets-container jupiter-container">
      <img className="orbit" src={orbit} alt="orbit" />
      <div
        aria-hidden="true"
        className="jupiter planet"
        onClick={(event) => handleClick(event)}
      />
    </div>
  );
}

export default Jupiter;

Jupiter.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
