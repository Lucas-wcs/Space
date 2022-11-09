import React from "react";
import PropTypes from "prop-types";
import orbit from "@assets/orbit.svg";

function Planet({ name, handle }) {
  return (
    <div className={`planets-container ${name}-container`}>
      <img className="orbit" src={orbit} alt="orbit" />
      <div
        aria-hidden="true"
        className={`${name} planet`}
        onClick={() => handle(name)}
      >
        {name === "Saturn" ? <div className={`${name}-halo`} /> : null}
      </div>
    </div>
  );
}

export default Planet;

Planet.propTypes = {
  name: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
};
