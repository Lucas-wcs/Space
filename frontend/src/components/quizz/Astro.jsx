import React from "react";
import image from "../../assets/images/astro-quizz.png";
import bulle from "../../assets/images/Bulle.png";
import "../../css/quizz/Astro.css";

function Astro() {
  return (
    <div className="interrogation">
      <img className="bulles" src={bulle} alt="nous" />
      <img className="personnage" src={image} alt="vous" />
    </div>
  );
}

export default Astro;
