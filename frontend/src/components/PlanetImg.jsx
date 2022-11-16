import PropTypes from "prop-types";
import React from "react";

function PlanetImg({ name, src }) {
  return (
    <div className="planetImg">
      <h3>{name}</h3>
      <img src={`./src${src}`} alt={name} />
    </div>
  );
}

PlanetImg.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default PlanetImg;
