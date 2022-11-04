import React from "react";
import PropTypes from "prop-types";
import orbit from "@assets/orbit.svg";

function Venus({ handleClick }) {
  return (
    <div className="planets-container venus-container">
      <img className="orbit" src={orbit} alt="orbit" />
      <div
        aria-hidden="true"
        className="venus planet"
        onClick={(event) => handleClick(event)}
      />
    </div>
  );
}

export default Venus;

Venus.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
