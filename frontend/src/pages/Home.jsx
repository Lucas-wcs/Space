import React, { useEffect, useState } from "react";
import axios from "axios";
import Planet from "@components/home/Planet";
import astronaut from "../assets/images/astronauts/astronaut_4.png";
import cloud from "../assets/images/astronauts/cloud.png";
import "../css/home/Home.css";
// import api from "../API-example/API-egz";

function Home() {
  const [api, setApi] = useState([]);
  const [info, setInfo] = useState("Welcome");

  function handleClick(planetName) {
    setInfo(planetName);
  }

  useEffect(() => {
    axios
      .get("http://localhost:5007/api/planets")
      .then((result) => setApi(result.data))
      .catch((err) => console.error(err));
  });

  return (
    <div className="Home">
      {api
        .filter((el) => el.isPlanet === true)
        .map((item) => {
          return (
            <Planet
              key={item.id}
              name={item.englishName}
              handle={(a) => handleClick(a)}
            />
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
