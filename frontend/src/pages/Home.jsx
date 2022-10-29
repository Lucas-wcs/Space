import React, { useState } from "react";
import logo from "@assets/Vector2.svg";
import "../css/Home.css";

function Home() {
  const [info, setInfo] = useState("");

  function handleClick(event) {
    setInfo(() => event.target.className);
  }

  return (
    <div className="Home">
      <div className="planets-container mercury-container">
        <img src={logo} alt="orbit" />
        <div
          aria-hidden="true"
          className="mercury planet"
          onClick={(event) => handleClick(event)}
        />
      </div>
      <div className="planets-container venus-container">
        <img src={logo} alt="orbit" />
        <div
          aria-hidden="true"
          className="venus planet"
          onClick={(event) => handleClick(event)}
        />
      </div>
      <div className="planets-container earth-container">
        <img src={logo} alt="orbit" />
        <div
          aria-hidden="true"
          className="earth planet"
          onClick={(event) => handleClick(event)}
        />
      </div>
      <div className="planets-container mars-container">
        <img src={logo} alt="orbit" />
        <div
          aria-hidden="true"
          className="mars planet"
          onClick={(event) => handleClick(event)}
        />
      </div>
      <div className="planets-container jupiter-container">
        <img src={logo} alt="orbit" />
        <div
          aria-hidden="true"
          className="jupiter planet"
          onClick={(event) => handleClick(event)}
        />
      </div>
      <div className="planets-container saturn-container">
        <img src={logo} alt="orbit" />
        <div
          aria-hidden="true"
          className="saturn planet"
          onClick={(event) => handleClick(event)}
        >
          <div className="saturn-halo" />
        </div>
      </div>
      <div className="planets-container uranus-container">
        <img src={logo} alt="orbit" />
        <div
          aria-hidden="true"
          className="uranus planet"
          onClick={(event) => handleClick(event)}
        />
      </div>
      <div className="planets-container mercury-container">
        <img src={logo} alt="orbit" />
        <div
          aria-hidden="true"
          className="neptune planet"
          onClick={(event) => handleClick(event)}
        />
      </div>
      <div className="display-className">
        <h1>{info}</h1>
      </div>
    </div>
  );
}
export default Home;
