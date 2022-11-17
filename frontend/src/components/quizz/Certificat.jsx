import React from "react";
import certificat from "../../assets/images/astronauts/certificat.png";
import "../../css/quizz/certificat.css";

function Certificat() {
  return (
    <div className="certificat">
      <img className="champion" src={certificat} alt="nous" />

      <div className="cadre-point">
        <h1 className="title-certificat">BRAVO !</h1>
        <p className="p-certificat"> tu as obtenu un score de:</p>
        <div className="score" />
        <p className="voyage">A bientot pour un nouveau voyage!</p>
      </div>
    </div>
  );
}

export default Certificat;
