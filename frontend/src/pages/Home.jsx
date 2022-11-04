import React, { useState } from "react";
import Mercury from "@components/home/Mercury";
import Venus from "@components/home/Venus";
import Earth from "@components/home/Earth";
import Mars from "@components/home/Mars";
import Jupiter from "@components/home/Jupiter";
import Saturn from "@components/home/Saturn";
import Uranus from "@components/home/Uranus";
import Neptune from "@components/home/Neptune";
// import orbit from "@assets/orbit.svg";
import astronaut from "../assets/images/astronauts/astronaut_4.png";
import cloud from "../assets/images/astronauts/cloud.png";
import "../css/home/Home.css";

function Home() {
  const [info, setInfo] = useState("");

  function handleClick(event) {
    const classNameFirst = event.target.className.split(" ");
    setInfo(() => classNameFirst[0]);
  }

  return (
    <div className="Home">
      <Mercury handleClick={() => handleClick()} />
      <Venus handleClick={() => handleClick()} />
      <Earth handleClick={() => handleClick()} />
      <Mars handleClick={() => handleClick()} />
      <Jupiter handleClick={() => handleClick()} />
      <Saturn handleClick={() => handleClick()} />
      <Uranus handleClick={() => handleClick()} />
      <Neptune handleClick={() => handleClick()} />

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
