import PlanetCard from "@components/PlanetCard";
import React from "react";
import "../css/Planets.css";
import Filter from "@components/Filter";
import PlanetImg from "@components/PlanetImg";

const api = {
  planets: [
    {
      url: "/assets/images/planets/1_mercury.png",
      id: "mercure",
      name: "Mercure",
      englishName: "Mercury",
      isPlanet: false,
      isMoon: false,
      bodyType: "Planet",
      placement: 1,
      "planet-description":
        "Mercure est la planète premiere planète du système solaire. Il s'agit de la planetes tellurique, la plus proche du Soleil où un jour dure environ deux années. Mercure est quasiment sphérique et ne s'applatie pas du à sa faibles vitesse de rotation. Elle doit son nom au messager des dieux dans la mytholigie romaine. Elle doit son nom a cause de la vitesse a laquelle elle se deplace dans le ciel.",
      curiosites: {
        "short-description": [
          "Distance par rapport au Soleil : 46 001 200 à 69 816 900 kilomètres",
          "Température de surface moyenne : 117° C",
          "Temps de voyage spatial depuis la Terre : 4 ans",
          "Gravité : Si tu pèses 45 kilogrammes sur Terre, tu pèseras 17 kilogrammes sur Mercure.",
          "Ne t'embête pas à scruter le ciel à la recherche de lunes. Mercure n'en a pas !",
          "Un faible champ magnétique protège Mercure des rayons du Soleil et la surface criblée de cratères peut contenir des minéraux précieux.",
          "La sonde MESSENGER de la NASA, qui orbite autour de Mercure depuis 2011, transporte un parasol très résistant en tissu céramique.",
        ],
        "long-description": [
          {
            title:
              "Sais-tu que Mercure est une des planètes les plus dangereuses ?",
            answer:
              "Sur Mercure est l'un des endroits les plus chauds du système solaire - plus de quatre fois plus chaud que l'eau bouillante.",
          },
          {
            title: "Sais-tu à quel point Mercure est invivable ?",
            answer:
              "La nuit, les températures chutent de plusieurs centaines de degrés sous le point de congélation.",
          },
          {
            title: "Sais-tu pourquoi Mercure s'appelle Mercure ?",
            answer:
              "Mercure a été nommé d'après un dieu romain du Commerce et des Voleurs, messager des dieux, fils de Jupiter.",
          },
        ],
      },
      moons: null,
      gravity: 3.7,
      gazeuse: false,
      naine: false,
      tellurique: true,
      aroundPlanet: null,
      discoveredBy: "Thomas Harriott and Galileo Galilei",
      discoveryDate: "1631",
    },
    {
      url: "/assets/images/planets/2_venus.png",
      id: "venus",
      name: "Vénus",
      englishName: "Venus",
      isPlanet: true,
      isMoon: false,
      bodyType: "Planet",
      placement: 2,
      "planet-description":
        "Vénus est la deuxieme planete du système solaire. il s'agit d'une planete tellurique. Vénus est le deuxieme astre le plus visible dans le ciel après le Soleil et la Lune, on l'appelle l'étoile du berger. Vénus est la terre comporte des similtitude telle que leur diamètre, masse, proximité du Soleil. Par d'autre aspect elle diffère  la pression atmosphérique est 92 fois superieur à celle de la terre. Elle est la planète la plus chaude du système solaire avec une temperature moyenne à la surface de 462 °C. La planète est enveloppé d'une couche opaque de nuages d'acide sulfurique. La surface de Vénus est un paysage désertique  sec et rocheux où se déroule toujours un volcanisme",
      curiosites: {
        "short-description": [
          "Distance par rapport au Soleil : 107 477 000 à 108 939 000 kilomètres",
          "Température de surface moyenne : 462° C",
          "Temps de voyage spatial depuis la Terre : 6 mois",
          "Gravité : Si tu pèses 45 kilogrammes sur Terre, tu pèseras 41 kilogrammes sur Vénus.",
          "Vénus est l'objet le plus brillant dans le ciel vu depuis la Terre, après la lune.",
          "Vénus est la planète qui a le plus de volcans !",
          "La température moyenne de Vénus est plus de huit fois supérieure à celle mesurée à l'endroit le plus chaud sur Terre.",
          "Vénus a à peu près la même taille et la même densité que la Terre. Comme la Terre, elle a des nuages et du vent.",
          "Celle que nous surnommons l'« étoile du Berger » n'est pas une étoile, mais bien une planète. Il s'agit de Vénus. Deuxième planète du système solaire par ordre d'éloignement au Soleil, elle doit son nom à la déesse romaine de l'Amour. Sur Vénus, une journée dure plus longtemps qu'une année, le soleil se lève à l'ouest et se couche à l'est, et il y fait toujours chaud, très chaud !",
        ],
        "long-description": [
          {
            title: "Sais-tu quelle est la température moyenne de Vénus ?",
            answer: "Quand il fait 30° C sur Terre, il fait 240° C sur Vénus !",
          },
          {
            title: "Sais-tu quelle est la température moyenne de Vénus ?",
            answer: "Quand il fait 30° C sur Terre, il fait 240° C sur Vénus !",
          },
          {
            title: "Sais-tu que Vénus est une planète hautement volcanique ?",
            answer:
              "Sur Vénus, il y a plus de 1600 volcans, et la plupart d'entre eux sont endormis. Ainsi, elle est la planète du système solaire qui en a le plus !",
          },
        ],
      },
      moons: null,
      gravity: 8.87,
      gazeuse: false,
      naine: true,
      tellurique: false,
      aroundPlanet: null,
      discoveredBy: "Galileo Galilei",
      discoveryDate: "1610",
    },
    {
      url: "/assets/images/planets/3_earth.png",
      id: "terre",
      name: "Terre",
      englishName: "Earth",
      isPlanet: true,
      isMoon: false,
      bodyType: "Planet",
      placement: 3,
      "planet-description":
        "La Terre est la troisième planete du système solaire. Elle est aussi la seul planète connue pour y abriter la Vie. Elle mets 365,256 jours pour faire une rotation autour du Soleil. Elle fait un tour sur elles meme en 23h 56min 4s. La Terre possède une inclinaison de 23°, ce qui cause l'apparition des saisons. Elle possède aussi un satellite naturel la Lune. ",
      curiosites: {
        "short-description": [
          "Distance par rapport au Soleil : 147 098 291 à 152 098 233 kilomètres",
          "Température de surface moyenne : 15° C",
          "Temps de voyage spatial depuis la Terre : Tu es déjà là !",
          "Vénus est l'objet le plus brillant dans le ciel vu depuis la Terre, après la lune.",
          "Les océans sont apparus il y a 4,4 milliards d'années.",
          "Notre planète est la seule planète connue pour abriter la vie.",
          "La vie sur Terre a commencé il y a plus de 3,5 milliards d'années dans nos océans, qui couvrent près de 70 % de la surface de la planète.",
          "La rotation de la Terre combinée à son noyau de nickel et de fer en fusion génère un champ magnétique, nous protégeant du rayonnement solaire tout en créant des spectacles de lumière – appelés aurores boréales ou australes – qui viennent littéralement d'un autre monde.",
        ],
        "long-description": [
          {
            title: "Sais-tu quel est l'âge de la Terre ?",
            answer:
              "La Terre a 4,5 milliards d'années. Elle s'est formée en même temps que le Soleil et le reste des planètes du Système Solaire.",
          },
          {
            title:
              "Sais-tu que l'air sur Terre n'a pas toujours été respirable ?",
            answer:
              "A l'origine, l'atmosphère était composée de gaz hautement toxiques, dont le dioxyde de carbone, provenant de l'activité volcanique de la planète. ",
          },
          {
            title:
              "Sais-tu que la Terre est continuellement bombardée de cailloux?",
            answer:
              "Chaque jour, jusqu'à 10 millions de kilogrammes de météores sont brûlés par l'atmosphère terrestre.",
          },
        ],
      },
      moons: ["La Lune"],
      gravity: 9.8,
      gazeuse: false,
      naine: false,
      tellurique: true,
      aroundPlanet: null,
      discoveredBy: "",
      discoveryDate: "",
    },
  ],
};

function Planets() {
  const [searchValue, setSearchValue] = React.useState("");
  const onSearchValue = (newValue) => {
    setSearchValue(newValue);
  };

  const [checkboxPlanets, setCheckboxPlanets] = React.useState(false);
  const onClickCheckboxPlanets = () => {
    setCheckboxPlanets(!checkboxPlanets);
  };

  const [checkboxLune, setCheckboxLune] = React.useState(false);
  const onClickCheckboxLune = () => {
    setCheckboxLune(!checkboxLune);
  };

  const [checkboxTellurique, setCheckboxTellurique] = React.useState(false);
  const onClickCheckboxTellurique = () => {
    setCheckboxTellurique(!checkboxTellurique);
  };

  const [checkboxGazeuse, setCheckboxGazeuse] = React.useState(false);
  const onClickCheckboxGazeuse = () => {
    setCheckboxGazeuse(!checkboxGazeuse);
  };

  const [checkboxNaine, setCheckboxNaine] = React.useState(false);
  const onClickCheckboxNaine = () => {
    setCheckboxNaine(!checkboxNaine);
  };

  const setCheckboxTelluriqueToFalse = () => {
    setCheckboxTellurique(false);
  };
  const setCheckboxGazeuseToFalse = () => {
    setCheckboxGazeuse(false);
  };
  const setCheckboxNaineToFalse = () => {
    setCheckboxNaine(false);
  };

  const setCheckboxLuneToFalse = () => setCheckboxLune(false);
  const setCheckboxPlanetsToFalse = () => setCheckboxPlanets(false);

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
        <div className="containerPlanets">
          {api.planets
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
                for (let i = 0; i < needTrue.length; i += 1)
                  if (planet[needTrue[i]] === false) {
                    ret = false;
                    break;
                  }
              }

              if (checkboxLune === true) {
                needTrue.push("isMoon");
                for (let i = 0; i < needTrue.length; i += 1)
                  if (planet[needTrue[i]] === false) {
                    ret = false;
                    break;
                  }
              }

              if (checkboxTellurique === true) {
                needTrue.push("tellurique");
                for (let i = 0; i < needTrue.length; i += 1)
                  if (planet[needTrue[i]] === false) {
                    ret = false;
                    break;
                  }
              }

              if (checkboxGazeuse === true) {
                needTrue.push("gazeuse");
                // [isPlanet, tellurique]
                // planet.isPlanet = planet['isPlanet'] = planet[var]  var == 'isPlanet'
                for (let i = 0; i < needTrue.length; i += 1) {
                  if (planet[needTrue[i]] === false) {
                    ret = false;
                    break;
                  }
                }
              }

              if (checkboxNaine === true) {
                needTrue.push("naine");
                for (let i = 0; i < needTrue.length; i += 1)
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
                  />
                  <PlanetCard
                    key={planet.name}
                    name={planet.name}
                    description={planet["planet-description"]}
                    facts={planet.curiosites["short-description"]}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
export default Planets;
