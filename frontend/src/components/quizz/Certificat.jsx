import React from "react";
import PropTypes from "prop-types";
import Lottie from "react-lottie";
import animationData from "../../lotties/rocket-launch.json";
import certificat from "../../assets/images/astronauts/certificat.png";
import "../../css/quizz/Certificat.css";

function Certificat({ somme }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="certificat">
      <div className="rocket">
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>

      <img className="champion" src={certificat} alt="nous" />
      <div className="cadre-point">
        <h1 className="title-certificat">BRAVO !</h1>
        <p className="p-certificat"> tu as obtenu un score de:</p>

        <div className="score">
          <p>{somme}/5</p>
        </div>

        <p className="voyage">A bientot pour un nouveau voyage!</p>
      </div>
    </div>
  );
}

export default Certificat;

Certificat.propTypes = {
  somme: PropTypes.number.isRequired,
};
