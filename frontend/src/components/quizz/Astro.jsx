import PropTypes from "prop-types";
import React from "react";
import bulle from "../../assets/images/Bulle.png";
import "../../css/quizz/Astro.css";
import image from "../../assets/images/astro-quizz.png";

function Astro({ comfalse, comtrue, resptrue }) {
  return (
    <div className="interrogation">
      <div className="bulle-container">
        {resptrue !== 0 && <img className="bulles" src={bulle} alt="nous" />}
        {resptrue === 2 ? (
          <div className="truefalse">
            <p className="true rep-paragraph">{comtrue}</p>
          </div>
        ) : null}
        {resptrue === 1 ? (
          <div className="truefalse">
            <p className="false rep-paragraph">{comfalse}</p>
          </div>
        ) : null}
      </div>
      <img className="personnage" src={image} alt="vous" />
    </div>
  );
}

export default Astro;
Astro.propTypes = {
  comfalse: PropTypes.string.isRequired,
  comtrue: PropTypes.string.isRequired,
  resptrue: PropTypes.number.isRequired,
};
