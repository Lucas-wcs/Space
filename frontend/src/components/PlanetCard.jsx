import Planets from "@pages/Planets";
import { element } from "prop-types";
import React from "react";

function PlanetCard({ name, description, facts }) {
  console.log(facts)
  return (
    <div>

      <div className="planetDescription">
        <h4>{name}</h4>
        <p>
          {description}
        </p>
        <ul>
          <h4>Faits :</h4>
          {facts.map((fact) => <li>{fact}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default PlanetCard;
