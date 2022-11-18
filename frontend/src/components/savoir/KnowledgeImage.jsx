import PropTypes from "prop-types";
import React from "react";
import astro from "../../assets/images/astronauts/astronaut_1.png";
import bubble from "../../assets/images/bulle-rectangle.png";
import "../../css/savoir/Savoir.css";

function KnowledgeImage({ clickEvent }) {
  return (
    <div className="astronaut-section">
      <div className="knowledge-bubble">
        <img src={bubble} alt="Comic bubble" />
        <p>
          Clique sur l'étoile lumineuse pour découvrir une nouvelle connaissance
        </p>
      </div>
      <div className="knowledge-astronaut">
        <img src={astro} alt="Astronaut that propose to learn new things" />
        <button type="button" aria-label="Click" onClick={() => clickEvent()} />
      </div>
    </div>
  );
}

// onClick={() => clickEvent()}>
export default KnowledgeImage;

KnowledgeImage.propTypes = {
  clickEvent: PropTypes.func.isRequired,
};
