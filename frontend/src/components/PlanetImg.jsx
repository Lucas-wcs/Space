import PropTypes from "prop-types";
import React from "react";

function PlanetImg({ name, src, handlePlanets }) {
  return (
    <button
      type="button"
      className="planetImg"
      onClick={() => handlePlanets(name)}
    >
      <h3>{name}</h3>
      <img src={`./src${src}`} alt={name} />
    </button>
  );
}

PlanetImg.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  handlePlanets: PropTypes.func.isRequired,
};

export default PlanetImg;
