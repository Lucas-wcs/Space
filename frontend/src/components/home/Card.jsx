import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import TypeWriter from "@components/TypeWriter";

function Card({ clickedPlanet }) {
  const [api, setApi] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5007/api/planets")
      .then((result) => setApi(result.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={`card card-${clickedPlanet}`}>
      {api.length > 0 && (
        <div className="card-content">
          <TypeWriter text={clickedPlanet} />
          {api
            .filter((item) => item.englishName === clickedPlanet)
            .map((el) => (
              <div className="gravity" key={`gravity-${clickedPlanet}`}>
                <TypeWriter text={`Gravity : ${el.gravity}`} />
                <TypeWriter
                  text={
                    clickedPlanet !== "Earth"
                      ? `Disovered in ${el.discoveryDate} by : ${el.discoveredBy}`
                      : el.discoveredBy
                  }
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Card;

Card.propTypes = {
  clickedPlanet: PropTypes.string.isRequired,
};
