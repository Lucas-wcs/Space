import React, { useEffect, useState } from "react";
import Planet from "@components/home/Planet";
import astronaut from "../assets/images/astronauts/astronaut_4.png";
import cloud from "../assets/images/astronauts/cloud.png";
import "../css/home/Home.css";

import api from "../API-example/API-egz";

function Home() {
  const [info, setInfo] = useState("1");

  function handleClick(planetName) {
    // const classNameFirst = planetName.target.className.split(" ");
    setInfo(planetName);
  }

  useEffect(() => {
    console.warn(info);
  }, [info]);

  return (
    <div className="Home">
      {api.planets
        .filter((el) => el.isPlanet === true)
        .map((item) => {
          return (
            <Planet name={item.englishName} handle={(a) => handleClick(a)} />
          );
        })}

      <div className="astronaut-container">
        <img className="cloud" src={cloud} alt="cloud" />
        <img className="astronaut" src={astronaut} alt="astronaut" />
        <div className="info">
          <h1 className="p-info">{info}</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
