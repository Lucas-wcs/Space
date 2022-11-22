/* eslint-disable import/no-cycle */
import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
// eslint-disable-next-line import/no-extraneous-dependencies
import * as Scroll from "react-scroll";
import KnowledgeImage from "../components/savoir/KnowledgeImage";
import KnowledgeCards from "../components/savoir/KnowledgeCards";
import GeneralStars from "../components/GeneralStars";
import "../css/stars/GeneralStars.css";

function KnowledgePage() {
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

  const { scroller } = Scroll;

  function scrollTo() {
    scroller.scrollTo("knowledge-title", {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -100,
    });
  }

  return (
    <div className="knowledge-page">
      <GeneralStars />
      {informations.length > 0 && (
        <div>
          <KnowledgeImage
            clickEvent={() => randomize()}
            scrollTo={() => scrollTo()}
          />
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
