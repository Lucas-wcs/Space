/* eslint-disable import/no-cycle */
import React, { useState } from "react";
import KnowledgeImage from "../components/savoir/KnowledgeImage";
import KnowledgeCards from "../components/savoir/KnowledgeCards";
import GeneralStars from "../components/GeneralStars";
import "../css/stars/GeneralStars.css";
import api from "../API-example/API-egz";

function KnowledgePage() {
  // const [informations, setInformations] = useState(api.planets[0]);
  const info = api.planets;
  const [current, setCurrent] = useState(info[0]);
  const [currentImage, setCurrentImage] = useState(info[0]);

  const randomize = () => {
    const randomIndex = Math.floor(Math.random() * info.length);
    const path = info[randomIndex].curiosites["long-description"].length;
    const imagePath = info[randomIndex].url;
    const randomTitle = Math.floor(Math.random() * path);
    setCurrentImage(imagePath);
    setCurrent(info[randomIndex].curiosites["long-description"][randomTitle]);
  };

  return (
    <div className="knowledge-page">
      <GeneralStars />
      <KnowledgeImage clickEvent={() => randomize()} />
      <KnowledgeCards
        title={current.title}
        answer={current.answer}
        url={currentImage}
      />
    </div>
  );
}

export default KnowledgePage;
