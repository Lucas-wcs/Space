import PropTypes from "prop-types";
import React from "react";

function PlanetCard({ name, description, facts }) {
  return (
    <div>
      <div className="planetDescription">
        <h4>{name}</h4>
        <p>{description}</p>
        <ul>
          <h4>Faits :</h4>
          {facts.map((fact) => (
            <li>{fact}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

PlanetCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  facts: PropTypes.node.isRequired,
};

export default PlanetCard;
