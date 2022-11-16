import PropTypes from "prop-types";
import React from "react";
import bulle from "../../assets/images/Bulle.png";
import "../../css/quizz/Astro.css";

function Astro({ comfalse, comtrue, resptrue }) {
  return (
    <div className="interrogation">
      <img className="bulles" src={bulle} alt="nous" />
      {resptrue ? (
        <p className="truefalse">{comtrue}</p>
      ) : (
        <p className="truefalse"> {comfalse}</p>
      )}
    </div>
  );
}

export default Astro;
Astro.propTypes = {
  comfalse: PropTypes.string.isRequired,
  comtrue: PropTypes.string.isRequired,
  resptrue: PropTypes.bool.isRequired,
};
