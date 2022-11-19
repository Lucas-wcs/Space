import React, { useEffect, useState } from "react";
import axios from "axios";
import TypeWriter from "@components/TypeWriter";
import Planet from "../components/home/Planet";
import astronaut from "../assets/images/astronauts/astronaut_4.png";
import cloud from "../assets/images/bulle-rectangle.png";
import "../css/home/Home.css";

function Home() {
  const [api, setApi] = useState([]);
  const [info, setInfo] = useState("Welcome");
  const [card, setCard] = useState(false);

  function handleClick(planetName) {
    setCard(true);
    setInfo(planetName);
  }

  useEffect(() => {
    axios
      .get("http://localhost:5007/api/planets")
      .then((result) => setApi(result.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="Home">
      {api
        .filter((el) => el.isPlanet === true)
        .map((item) => {
          return (
            <Planet
              key={item.id}
              name={item.englishName}
              cardOn={card}
              clickedPlanet={info}
              handle={(a) => handleClick(a)}
            />
          );
        })}
      <div className="astronaut-container">
        <img className="cloud" src={cloud} alt="cloud" />
        <img className="astronaut" src={astronaut} alt="astronaut" />
        <div className="info">
          <TypeWriter text={info} />
        </div>
      </div>
    </div>
  );
}

export default Home;
