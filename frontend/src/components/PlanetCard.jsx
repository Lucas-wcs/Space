import PropTypes from "prop-types";
import React from "react";
import srf from "../assets/images/description.svg";

function PlanetCard({ name, description, facts }) {
  return (
    <div className="planetDescriptionCard">
      <figure>
        <img src={`.${srf}`} alt="bg img" />
      </figure>
      <div className="planetDescription">
        <h2>{name}</h2>
        <p>{description}</p>
        <ul>
          <h3>Faits :</h3>
          {facts &&
            facts.map((fact) => {
              return <li key={fact}>{fact}</li>;
            })}
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
