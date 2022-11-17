import React from "react";
import PropTypes from "prop-types";
import certificat from "../../assets/images/astronauts/certificat.png";
import "../../css/quizz/certificat.css";

function Certificat({ somme }) {
  return (
    <div className="certificat">
      <img className="champion" src={certificat} alt="nous" />

      <div className="cadre-point">
        <h1 className="title-certificat">BRAVO !</h1>
        <p className="p-certificat"> tu as obtenu un score de:</p>
        <div className="score">{somme}/10</div>
        <p className="voyage">A bientot pour un nouveau voyage!</p>
      </div>
    </div>
  );
}

export default Certificat;

Certificat.propTypes = {
  somme: PropTypes.number.isRequired,
};
