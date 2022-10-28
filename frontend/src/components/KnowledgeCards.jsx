import React from "react";
import "../css/Savoir.css";

function KnowledgeCards() {
  return (
    <div className="knowledge-card">
      <div className="title">
        <p>Sais-tu pourquoi Pluton n'est plus une planète ?</p>
      </div>
      <div className="knowledge-elements">
        <div className="image-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Moon_0063_Nevit.svg"
            alt="Moon"
          />
        </div>
        <div className="knowledge">
          <p>Pourquoi donc ?</p>
          <p>
            Parce que Pluton se comporte comme un astéroïde, et se déplace en
            groupe !
          </p>
        </div>
      </div>
    </div>
  );
}

export default KnowledgeCards;
