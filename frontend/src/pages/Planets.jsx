import PlanetCard from "@components/PlanetCard";
import React, { useEffect } from "react";
import "../css/Planets.css";
import Filter from "@components/Filter";
import PlanetImg from "@components/PlanetImg";
import axios from "axios";

function Planets() {
  const [searchValue, setSearchValue] = React.useState("");
  const onSearchValue = (newValue) => setSearchValue(newValue);

  const [checkboxPlanets, setCheckboxPlanets] = React.useState(false);
  const onClickCheckboxPlanets = () => setCheckboxPlanets(!checkboxPlanets);

  const [checkboxLune, setCheckboxLune] = React.useState(false);
  const onClickCheckboxLune = () => setCheckboxLune(!checkboxLune);

  const [checkboxTellurique, setCheckboxTellurique] = React.useState(false);
  const onClickCheckboxTellurique = () =>
    setCheckboxTellurique(!checkboxTellurique);

  const [checkboxGazeuse, setCheckboxGazeuse] = React.useState(false);
  const onClickCheckboxGazeuse = () => setCheckboxGazeuse(!checkboxGazeuse);

  const [checkboxNaine, setCheckboxNaine] = React.useState(false);
  const onClickCheckboxNaine = () => setCheckboxNaine(!checkboxNaine);

  const setCheckboxTelluriqueToFalse = () => setCheckboxTellurique(false);
  const setCheckboxGazeuseToFalse = () => setCheckboxGazeuse(false);
  const setCheckboxNaineToFalse = () => setCheckboxNaine(false);
  const setCheckboxLuneToFalse = () => setCheckboxLune(false);
  const setCheckboxPlanetsToFalse = () => setCheckboxPlanets(false);

  const [clickPlanets, setClickPlanets] = React.useState(false);
  const [classN, setClassN] = React.useState("");
  const handlePlanets = (className) => {
    setClickPlanets(!clickPlanets);
    setClassN(className);
  };

  const [api, setApi] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5007/api/planets")
      .then((res) => {
        setApi(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="Planets">
      <div className="intro">
        <img
          src="./src/assets/images/astronauts/astronaut_1.png"
          alt="avatar-astronaut"
        />
        <div className="bubble">
          <p>
            Bienvenue sur la page planète.
            <br />
            Ici tu peux voir la liste de tout les astres principaux de notre
            système solaire.
          </p>
        </div>
      </div>

      <div className="main">
        <Filter
          onSearchValue={onSearchValue}
          value={searchValue}
          onChangeCheckboxPlanets={onClickCheckboxPlanets}
          onChangeCheckboxLune={onClickCheckboxLune}
          onChangeCheckboxTellurique={onClickCheckboxTellurique}
          onChangeCheckboxGazeuse={onClickCheckboxGazeuse}
          onChangeCheckboxNaine={onClickCheckboxNaine}
          setCheckboxTelluriqueToFalse={setCheckboxTelluriqueToFalse}
          setCheckboxGazeuseToFalse={setCheckboxGazeuseToFalse}
          setCheckboxNaineToFalse={setCheckboxNaineToFalse}
          setCheckboxPlanetsToFalse={setCheckboxPlanetsToFalse}
          setCheckboxLuneToFalse={setCheckboxLuneToFalse}
          checkboxPlanets={checkboxPlanets}
          checkboxLune={checkboxLune}
          checkboxTellurique={checkboxTellurique}
          checkboxGazeuse={checkboxGazeuse}
          checkboxNaine={checkboxNaine}
        />
        {api.length > 0 && (
          <div className="containerPlanets">
            {api
              .filter((planet) => {
                let ret = true;

                const nameFilter = planet.name
                  .toLocaleLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .includes(
                    searchValue
                      .toLocaleLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                  );

                const needTrue = [];

                if (checkboxPlanets === true) {
                  needTrue.push("isPlanet");
                }

                if (checkboxLune === true) {
                  needTrue.push("isMoon");
                }

                if (checkboxTellurique === true) {
                  needTrue.push("tellurique");
                }

                if (checkboxGazeuse === true) {
                  needTrue.push("gazeuse");
                }

                if (checkboxNaine === true) {
                  needTrue.push("naine");
                }

                for (let i = 0; i < needTrue.length; i += 1) {
                  if (planet[needTrue[i]] === false) {
                    ret = false;
                    break;
                  }
                }

                return ret && nameFilter;
              })
              .map((planet) => {
                return (
                  <div className="containerCards">
                    <PlanetImg
                      key={planet.url}
                      name={planet.name}
                      src={planet.url}
                      handlePlanets={(className) => handlePlanets(className)}
                    />
                    {planet.name === classN && clickPlanets && (
                      <PlanetCard
                        key={planet.name}
                        name={planet.name}
                        description={planet["planet-description"]}
                        facts={planet.curiosites["short-description"]}
                      />
                    )}
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}
export default Planets;
