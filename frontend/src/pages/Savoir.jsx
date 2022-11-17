/* eslint-disable import/no-cycle */
import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import KnowledgeImage from "../components/savoir/KnowledgeImage";
import KnowledgeCards from "../components/savoir/KnowledgeCards";
import GeneralStars from "../components/GeneralStars";
import "../css/stars/GeneralStars.css";
// import api from "../API-example/API-egz";

function KnowledgePage() {
  // const [informations, setInformations] = useState(api.planets[0]);
  const [informations, setInformations] = useState([]);

  const getAllPlanets = () => {
    axios
      .get("http://localhost:5007/api/planets")
      .then((res) => {
        setInformations(res.data);
        console.warn(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAllPlanets();
  }, []);

  const [current, setCurrent] = useState("");
  const [currentImage, setCurrentImage] = useState("");

  const randomize = () => {
    const randomIndex = Math.floor(Math.random() * informations.length);
    const path =
      informations[randomIndex].curiosites["long-description"].length;
    const imagePath = informations[randomIndex].url;
    const randomTitle = Math.floor(Math.random() * path);
    setCurrentImage(imagePath);
    setCurrent(
      informations[randomIndex].curiosites["long-description"][randomTitle]
    );
  };

  return (
    <div className="knowledge-page">
      <GeneralStars />
      {informations.length > 0 && (
        <div>
          <KnowledgeImage clickEvent={() => randomize()} />
          {current && (
            <KnowledgeCards
              title={current.title}
              answer={current.answer}
              url={currentImage}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default KnowledgePage;
