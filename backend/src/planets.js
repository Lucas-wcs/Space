const planets = [
  {
    url: "/assets/images/planets/1_mercury.png",
    id: "mercure",
    name: "Mercure",
    englishName: "Mercury",
    isPlanet: true,
    isMoon: false,
    bodyType: "Planet",
    placement: 1,
    span: 1,
    "planet-description":
      "Mercure est la planète premiere planète du système solaire. Il s'agit de la planetes tellurique, la plus proche du Soleil où un jour dure environ deux années. Mercure est quasiment sphérique et ne s'applatie pas, ce qui est dû à sa faible vitesse de rotation. Elle doit son nom au messager des dieux dans la mythologie romaine. Elle doit son nom à cause de la vitesse à laquelle elle se deplace dans le ciel.",
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
            "Mercure est l'un des endroits les plus chauds du système solaire - plus de quatre fois plus chaud que l'eau bouillante.",
        },
        {
          title: "Sais-tu à quel point Mercure est invivable ?",
          answer:
            "La nuit, les températures chutent de plusieurs centaines de degrés sous le point de congélation.",
        },
        {
          title: "Sais-tu pourquoi Mercure s'appelle Mercure ?",
          answer:
            "Mercure a été nommé d'après un dieu romain du Commerce et des Voleurs, messager des dieux, fils de Jupiter. Dans la mythologie grecque, ce dieu est connu sous le nom d'Hermès",
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
    span: 1,
    "planet-description":
      "Vénus est la deuxième planète du système solaire. il s'agit d'une planète tellurique. Vénus est le deuxième astre le plus visible dans le ciel après le Soleil et la Lune, on l'appelle l'étoile du berger. Vénus et la Terre comportent des similitudes telles que leur diamètre, leur masse, leur proximité avec le Soleil. En revanche, par d'autres aspects, elles diffèrent en terme de pression atmosphérique. En effet, celle de Vénus est 92 fois supérieure à celle de la Terre. Elle est également la planète la plus chaude du système solaire avec une température moyenne à la surface de 462 °C. La planète est enveloppée d'une couche opaque de nuages d'acide sulfurique. La surface de Vénus est un paysage désertique sec et rocheux, avec un volcanisme",
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
          title: "Sais-tu que Vénus est une planète hautement volcanique ?",
          answer:
            "Sur Vénus, il y a plus de 1600 volcans, et la plupart d'entre eux sont endormis. Ainsi, elle est la planète du système solaire qui en a le plus !",
        },
      ],
    },
    moons: null,
    gravity: 8.87,
    gazeuse: false,
    naine: false,
    tellurique: true,
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
    span: 1,
    "planet-description":
      "La Terre est la troisième planète du système solaire. Elle est aussi la seule planète connue pour y abriter la vie. Elle met 365,256 jours pour faire une rotation autour du Soleil. Elle fait un tour sur elle-même en 23 heures, 56 minutes et 4 secondes. La Terre possède une inclinaison de 23°, ce qui cause l'apparition des saisons. Elle possède aussi un satellite naturel surnommé la Lune.",
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
            "A l'origine, l'atmosphère était composée de gaz hautement toxiques, dont le dioxyde de carbone, provenant de l'activité volcanique de la planète.",
        },
        {
          title:
            "Sais-tu que la Terre est continuellement bombardée de cailloux ?",
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
    discoveredBy: "It is our home!",
    discoveryDate: "",
  },
  {
    url: "/assets/images/planets/3.1_moon.png",
    id: "lune",
    name: "Lune",
    englishName: "Moon",
    isPlanet: false,
    isMoon: true,
    bodyType: "moon",
    placement: "Earth",
    span: 1,
    "planet-description":
      "La Lune est le satellite naturel de la Terre. Elle est le cinquième plus gros satellite naturel du Système Solaire, ainsi que le deuxième satellite le plus dense. La lune est en rotation synchrone avec la Terre, ce qui fait que l'on voit toujours la même face. Sa proximité avec la Terre provoque les marées",
    curiosites: {
      curiosites: {
        "short-description": [
          "Distance par rapport à la Terre : 384 400 km",
          "Température de surface moyenne : -77° C",
          "Temps de voyage spatial depuis la Terre : 3 jours",
          "La Lune est l'objet le plus brillant dans le ciel vu depuis la Terre",
          "On dit que la Lune est l'unique satellite naturel de la Terre car elle est le seul astre lui tournant autour continuellement.",
          "La Lune a une température pouvant être très froide (jusqu'à -170 °C quand elle n'est pas illuminée par le Soleil) ou très chaude (jusqu'à 100 °C quand elle est éclairée).",
        ],
        "long-description": [
          {
            title: "Sais-tu à quelle époque est apparue la Lune ?",
            answer:
              "La Lune est apparue il y a 4 milliards et demi d'années, alors que la Terre n'avait que 50 millions d'années.",
          },
          {
            title:
              "Sais-tu que la Lune est régulièrement attaquée par des météorites ?",
            answer:
              "Des météorites tombent sur la Lune et creusent son sol : cela forme des cratères. Il y a plus de 10 000 météorites qui frappent le sol lunaire quotidiennement. Les cratères peuvent mesurer plusieurs dizaines de kilomètres de diamètre. Cela pose une question intéressante : T'es-tu déjà demandé pourquoi nous ne voyons pas de météorites tomber sur notre sol ?",
          },
          {
            title: "Sais-tu que les températures sur la Lune sont extrêmes ?",
            answer:
              "Sur la Lune, les températures oscillent entre -248 °C et 123 °C.",
          },
        ],
      },
    },
    moons: null,
    gravity: 1.62,
    gazeuse: false,
    naine: false,
    tellurique: true,
    aroundPlanet: "Terre",
    discoveredBy: "Thomas Harriot ",
    discoveryDate: "1610",
  },
  {
    url: "/assets/images/planets/4_mars.png",
    id: "mars",
    name: "Mars",
    englishName: "Mars",
    isPlanet: true,
    isMoon: false,
    bodyType: "Planet",
    placement: 4,
    span: 1,
    "planet-description":
      "Mars est la quatrième planète du Système Solaire. Mars est une planète tellurique comme la Terre mais environ 10 fois plus petite ",
    curiosites: {
      "short-description": [
        "Distance par rapport au Soleil : 206 669 000 à 249 209 300 kilomètres",
        "Température de surface moyenne : -63° C",
        "Temps de voyage spatial depuis la Terre : 7 mois",
        "Gravité : Si tu pèses 45 kilogrammes sur Terre, tu pèseras 17 kilogrammes sur Mars.",
        "Celle qu'on appelle la planète rouge n'est pas totalement rouge !",
        "L'eau a peut-être coulé sur Mars il y a longtemps, dans d'anciennes mers et lits de rivière que les premiers astronomes ont confondu avec des canaux.",
        "Si tu enlèves ta combinaison spatiale et que tu tiens sur l'équateur à midi, tes orteils seront chauds mais ton visage sera gelé !",
      ],
      "long-description": [
        {
          title: "Sais-tu que Mars n'est pas vraiment rouge ?",
          answer:
            "Mars n'est rouge que de loin, à cause de la rouille des minéraux de fer présents dans les roches et le sol.",
        },
        {
          title:
            "Sais-tu que notre Grand Canyon est ridicule comparé à celui qui est sur Mars ?",
          answer:
            "Mars abrite l'un des plus grands canyons du système solaire et le plus haut volcan, Olympus Mons, qui est près de trois fois plus haut que le mont Everest.",
        },
        {
          title: "Sais-tu que l'eau a été découverte il y a peu sur Mars ?",
          answer:
            "En 2015, des scientifiques ont confirmé la présence de flux d'eau sur Mars, soulevant des questions quant à l'existence de forme de vie sur la planète rouge.",
        },
      ],
    },
    moons: ["Phobos", "Deïmos"],
    gravity: 3.71,
    gazeuse: false,
    naine: false,
    tellurique: true,
    aroundPlanet: null,
    discoveredBy: "Galileo Galilei",
    discoveryDate: "1610",
  },
  {
    url: "/assets/images/planets/4-1_phobos.png",
    id: "phobos",
    name: "Phobos",
    englishName: "Phobos",
    isPlanet: false,
    isMoon: true,
    bodyType: "moon",
    placement: "Mars",
    span: 1,
    "planet-description":
      "Phobos est le plus grand des deux satellites naturels de Mars. Phobos est un corps très irrégulier, de dimensions 27 × 21,6 × 18,8 km.",
    curiosites: {
      "short-description": [
        "Phobos est le plus grand des deux satellites naturels de Mars",
        "L'autre nom de Phobos est Mars I",
      ],
      "long-description": [
        {
          title: "Sais-tu pourquoi Phobos s'appelle Phobos ?",
          answer:
            "Le nom donné à ce satellite est le même qu'un personnage de la mythologie grecque. En grec classique les noms communs φόβος / phóbos et δειμός / deimós signifient tous deux « peur, terreur ».",
        },
        {
          title: "Sais-tu qu'un des cratères de Phobos porte un nom ?",
          answer:
            "De nombreux cratères sont présents à la surface de Phobos. Le plus grand de ces cratères est nommé « Stickney »",
        },
      ],
    },
    moons: null,
    gravity: 0.0057,
    gazeuse: false,
    naine: false,
    tellurique: false,
    aroundPlanet: "Mars",
    discoveredBy: "Asaph Hall",
    discoveryDate: "1877",
  },
  {
    url: "/assets/images/planets/4-2_deimos.png",
    id: "deimos",
    name: "Déimos",
    englishName: "Deimos",
    isPlanet: false,
    isMoon: true,
    bodyType: "moon",
    placement: "Mars",
    span: 1,
    "planet-description":
      "Déimos est le plus petit et le plus éloigné des deux satellites naturels de Mars. C'est un petit corps fortement irrégulier, avec des dimensions de 15 × 12 × 10 km4 ",
    curiosites: {
      "short-description": ["L'autre nom de Déimos est Mars II"],
      "long-description": [
        {
          title: "Sais-tu que la lune Déimos n'est pas ronde ?",
          answer:
            "Déimos possède une forme non sphérique, n'étant pas suffisamment massive pour prendre une forme plus régulière.",
        },
      ],
    },
    moons: null,
    gravity: 0.003,
    gazeuse: false,
    naine: false,
    tellurique: false,
    aroundPlanet: "Mars",
    discoveredBy: "Asaph Hall",
    discoveryDate: "1877",
  },
  {
    url: "/assets/images/planets/5_jupiter.png",
    id: "jupiter",
    name: "Jupiter",
    englishName: "Jupiter",
    isPlanet: true,
    isMoon: false,
    bodyType: "Planet",
    placement: 5,
    span: 1,
    "planet-description":
      "Jupiter est la cinquième planète du Système Solaire. Elle est aussi la plus grande par la taille et la masse devant Saturne, qui est comme elle une planète géante gazeuse. Elle a une composition similaire au Soleil, constituée principalement d'hydrogène",
    curiosites: {
      "short-description": [
        "Distance par rapport au Soleil : 740 679 835 à 816 001 807 kilomètres",
        "Température de surface moyenne : -148° C",
        "Temps de voyage spatial depuis la Terre : 13 mois",
        "Gravité : Si tu pèses 45 kilogrammes sur Terre, tu pèseras 49 kilogrammes sur Saturne.",
        "Si tu pèses 45 kilogrammes sur Terre, tu pèseras 115 kilogrammes sur Jupiter.",
        "Jupiter est la plus grande planète du système solaire",
        "Tu ne trouveras aucune surface solide à explorer ici, et sauter en parachute depuis le sas de ton vaisseau serait une mauvaise idée. Tu t'enfoncerais profondément dans les nuages d'ammoniac et de vapeur d'eau.",
        "Les bandes de nuages de Jupiter qui défilent à plus de 530 kilomètres par heure.",
      ],
      "long-description": [
        {
          title: "Sais-tu combien de planète Terre pourrait contenir Jupiter ?",
          answer:
            "Jupiter est une géante gazeuse, une boule d'hydrogène et d'hélium pour l'essentiel, assez grande pour contenir plus de 1 300 Terres.",
        },
        {
          title: "Sais-tu ce qu'est la grande tâche rouge de Jupiter ?",
          answer:
            "La grande Tâche Rouge de Jupiter, un ouragan qui fait rage depuis des siècles, fait environ trois fois la taille de la Terre.",
        },
        {
          title: "Sais-tu que les journées sont courtes sur Jupiter ?",
          answer:
            "Jupiter est peut-être la plus grosse planète du Système Solaire, mais elle a le jour le plus court (seulement 10 heures) en raison de sa rotation rapide.",
        },
      ],
    },
    moons: ["Io", "Europe", "Ganymède", "Callisto"],

    gravity: 24.79,
    gazeuse: true,
    naine: false,
    tellurique: false,
    aroundPlanet: null,
    discoveredBy: "Galileo Galilei ",
    discoveryDate: "1610",
  },
  {
    url: "/assets/images/planets/5-1_io.png",
    id: "io",
    name: "Io",
    englishName: "Io",
    isPlanet: false,
    isMoon: true,
    bodyType: "moon",
    placement: "Jupiter",
    span: 1,
    "planet-description":
      "Io est un satellite naturel de Jupiter. Avec plus de 400 volcans actifs, Io est l'objet le plus géologiquement actif du Système Solaire.",
    curiosites: {
      "short-description": ["Elle est l'une des méga-lunes de Jupiter"],
      "long-description": [
        {
          title:
            "Sais-tu que l'activité volcanique de la Lune Io est chaotique ?",
          answer:
            "Les volcans de Io, le satellite le plus volcanique du Système Solaire, crachent des nuages de soufre jaune dans des colonnes faisant plus de 500 kilomètres de haut.",
        },
      ],
    },
    moons: null,
    gravity: 1.796,
    gazeuse: false,
    naine: false,
    tellurique: true,
    aroundPlanet: "Jupiter",
    discoveredBy: "Galileo Galilei",
    discoveryDate: "1610",
  },
  {
    url: "/assets/images/planets/5-2_europe.png",
    id: "europa",
    name: "Europa",
    englishName: "Europa",
    isPlanet: false,
    isMoon: true,
    bodyType: "moon",
    placement: "Jupiter",
    span: 1,
    "planet-description":
      "Europe est un satellite naturel de Jupiter. Cette lune possède la surface la plus lisse de tous les objets célestes connus du Système solaire. Europe posséderait un océan d'eau souterrain d'une profondeur de l'ordre de 100 km qui pourrait éventuellement abriter une vie extraterrestre.",
    curiosites: {
      "short-description": [
        "Elle est l'une des méga-lunes de Jupiter",
        "Elle est la lune gelée de Jupiter",
      ],
      "long-description": [
        {
          title: "Sais-tu que cette lune abrite peut-être un océan ?",
          answer:
            "Il y a bien une idée faisant consensus dans le domaine de la recherche spatiale : sans que cela n'ai pu être prouvé, la Lune Europe est hautement susceptible d'abriter un océan. Les scientifiques pensent également qu'Europe pourrait, à l'intérieur de cet océan, abriter des formes de vie.",
        },
      ],
    },
    moons: null,
    gravity: 1.315,
    gazeuse: false,
    naine: false,
    tellurique: true,
    aroundPlanet: "Jupiter",
    discoveredBy: "Galileo Galilei",
    discoveryDate: "1610",
  },
  {
    url: "/assets/images/planets/5-3_callisto.png",
    id: "callisto",
    name: "Callisto",
    englishName: "Callisto",
    isPlanet: false,
    isMoon: true,
    bodyType: "moon",
    placement: "Jupiter",
    planets:
      "Callisto est un satellite naturel de la planète Jupiter, découvert en 1610 par Galilée. Elle est la troisième plus grande lune dans le Système Solaire. Elle est approximativement composée à parts égales de roche et de glace. Callisto pourrait posséder un petit noyau composé de silicate, ainsi qu'un océan d'eau liquide à plus de 100 kilomètres sous la surface de la lune. Ce dernier serait susceptible d'accueillir une vie extraterrestre.",
    curiosites: {
      "short-description": [
        "L'autre nom de Callisto est Jupiter IV",
        "Callisto est la lune galiléenne la plus éloignée de Jupiter.",
        "Elle est composée approximativement à parts égales de roche et de glaces.",
      ],
      "long-description": [
        {
          title: "Sais-tu que cette lune est étudiée depuis longtemps ?",
          answer:
            "Plusieurs sondes spatiales, de Pioneer 10 et 11 à Galileo et Cassini-Hugens étudient la lune aux XXe et XXIe siècles.",
        },
      ],
    },
    moons: null,
    gravity: 1.236,
    gazeuse: false,
    naine: false,
    tellurique: true,
    aroundPlanet: "Jupiter",
    discoveredBy: "",
    discoveryDate: "1610",
  },
  {
    url: "/assets/images/planets/5-4_ganymede.png",
    id: "ganymede",
    name: "Ganymède",
    englishName: "Ganymede",
    isPlanet: false,
    isMoon: true,
    bodyType: "moon",
    placement: "Jupiter",
    span: 1,
    "planet-description":
      "Ganymède est un satellite naturel de Jupiter. Cette lune est le plus gros satellite naturel de Jupiter mais également le plus gros de tout le Système Solaire.",
    curiosites: {
      "short-description": ["Elle est l'une des méga-lunes de Jupiter"],
      "long-description": [
        {
          title: "Sais-tu à quel point Ganymède est grande ?",
          answer:
            "Elle est plus grande que Mercure et possède son propre champ magnétique.",
        },
      ],
    },
    moons: null,
    gravity: 1.428,
    gazeuse: false,
    naine: false,
    tellurique: true,
    aroundPlanet: "Jupiter",
    discoveredBy: "Galileo Galilei",
    discoveryDate: "1610",
  },
  {
    url: "/assets/images/planets/6_saturn.png",
    id: "saturne",
    name: "Saturne",
    englishName: "Saturn",
    isPlanet: true,
    isMoon: false,
    bodyType: "Planet",
    placement: 6,
    "planet-description":
      "Saturne est la sixième planète du Système Solaire par ordre d'éloignement au Soleil, et la deuxième plus grande par la taille et la masse après Jupiter, qui est comme elle une planète géante gazeuse. La caractéristique la plus célèbre de la planète est son système d'anneaux proéminent, composé principalement de particules de glace et de poussières.",
    span: 2,
    curiosites: {
      "short-description": [
        "Distance par rapport au Soleil : 1 349 823 615 à 1 503 509 229 kilomètres",
        "Température de surface moyenne : -178° C",
        "Temps de voyage spatial depuis la Terre : 3 ans",
        "Gravité : Si tu pèses 45 kilogrammes sur Terre, tu pèseras 49 kilogrammes sur Saturne.",
        "Saturne est large de plus de 250 000 kilomètres, soit 750 fois celle de la Terre !",
      ],
      "long-description": [
        {
          title: "Sais-tu ce que sont les anneaux de Saturne ?",
          answer:
            "A propos de ses anneaux, ce qui apparaît comme un disque solide de loin est en fait une pluie scintillante de glace et de roches.",
        },
        {
          title: "Sais-tu comment se sont formés les anneaux de Saturne ?",
          answer:
            "Les astronomes pensent que les anneaux de Saturne se sont formés à partir de morceaux d'astéroïdes et de comètes qui se sont morcelés avant d'atteindre la planète.",
        },
        {
          title: "Sais-tu pourquoi Saturne a une couleur jaune ?",
          answer:
            "Sa couleur jaune provient des cristaux d'ammoniac présents dans la haute atmosphère, qui abrite des orages électriques de la taille des États-Unis. Ne t'approche pas de ces éclairs ! Ils sont mille fois plus puissants que ceux observés sur Terre.",
        },
        {
          title: "Sais-tu que la densité de Saturne est étrange ?",
          answer:
            "Saturne est la seule planète du système solaire qui est moins dense que l'eau, ce qui signifie qu'elle flotterait si tu la plongeais dans un océan suffisamment grand.",
        },
      ],
    },
    moons: ["Titan", "Encelade", "Iapetus", "Rhéa"],
    gravity: 10.44,
    gazeuse: true,
    naine: false,
    tellurique: false,
    aroundPlanet: null,
    discoveredBy: "",
    discoveryDate: "prehistoric",
  },
  {
    url: "/assets/images/planets/6-1_titan.png",
    id: "titan",
    name: "Titan",
    englishName: "Titan",
    isPlanet: false,
    isMoon: true,
    bodyType: "moon",
    placement: "Saturne",
    span: 1,
    "planet-description":
      "Titan est le plus grand satellite naturel de Saturne. Titan est principalement composé de roche et d’eau gelée.",
    curiosites: {
      "short-description": [
        "L'autre nom de la lune Titan est Saturne IV",
        "Titan est le plus grand sattelite naturel de Saturne",
        "Titan est le deuxième plus grand satellite du Système solaire et le plus grand satellite de Saturne.",
      ],
      "long-description": [
        {
          title: "Sais-tu qui a découvert Titan ?",
          answer:
            "Découvert par l'astronome néerlandais Christian Huygens en 1655, Titan est la première lune observée autour de Saturne.",
        },
      ],
    },
    moons: null,
    gravity: 1.352,
    gazeuse: false,
    naine: false,
    tellurique: true,
    aroundPlanet: "Saturne",
    discoveredBy: "Christiaan Huygens ",
    discoveryDate: "1655",
  },
  {
    url: "/assets/images/planets/6-2_enceladus.png",
    id: "encelade",
    name: "Encelade",
    englishName: "Encelade",
    isPlanet: false,
    isMoon: true,
    bodyType: "moon",
    placement: "Saturne",
    span: 1,
    "planet-description":
      "Encelade est un satellite naturel de Saturne, découvert par William Herschel en 1789. Il s'agit du sixième satellite de Saturne par la taille et du quatorzième par son éloignement.",
    curiosites: {
      "short-description": ["Il s'agit du sixième satellite de Saturne"],
      "long-description": [
        {
          title: "Sais-tu qui a découvert Encelade ?",
          answer:
            "Encelade est un satellite naturel de Saturne, découvert par William Herschel en 1789.",
        },
        {
          title: "Sais-tu que Encelade est volcanique ?",
          answer:
            "Ce satellite est l'un des quatre seuls objets du Système solaire (avec le satellite de Jupiter, Io, celui de Neptune, Triton, et bien sûr la Terre) sur lesquels des éruptions ou des éjections de matière ont pu être directement observées.",
        },
      ],
    },
    moons: null,
    gravity: 0.113,
    gazeuse: false,
    naine: false,
    tellurique: false,
    aroundPlanet: "Saturne",
    discoveredBy: "William Herschel",
    discoveryDate: "1789",
  },
  {
    url: "/assets/images/planets/6-3_iapetus.png",
    id: "iapetus",
    name: "Japet",
    englishName: "Iapetus",
    isPlanet: false,
    isMoon: true,
    bodyType: "moon",
    placement: "Saturne",
    span: 1,
    "planet-description":
      "Japet est un satellite naturel de Saturne, le troisième plus grand satellite de la planète par la taille. Japet est principalement connu pour sa coloration, l'un de ses hémisphères étant particulièrement brillant tandis que l'autre est très sombre.",
    curiosites: {
      "short-description": [
        "Japet est principalement connu pour sa coloration brillante",
      ],
      "long-description": [
        {
          title: "Sais-tu ce qui a découvert Japet ?",
          answer:
            "Japet (S VIII Japet, désignation internationale Iapetus) est un satellite naturel de Saturne, le troisième plus grand satellite de la planète par la taille. Il fut découvert en 1671 par Jean-Dominique Cassini.",
        },
      ],
    },
    moons: null,
    gravity: 0.223,
    gazeuse: false,
    naine: false,
    tellurique: false,
    aroundPlanet: "Saturne",
    discoveredBy: "Giovanni Cassini",
    discoveryDate: "1671",
  },
  {
    url: "/assets/images/planets/6-4_rhea.png",
    id: "rhea",
    name: "Rhéa",
    englishName: "Rhea",
    isPlanet: false,
    isMoon: true,
    bodyType: "moon",
    placement: "Saturne",
    span: 1,
    "planet-description":
      "Rhéa est un satellite naturel de Saturne, le deuxième plus grand satellite de la planète par la taille après Titan.",
    curiosites: {
      "short-description": [
        "Rhéa est un corps glacé, sa température de surface est de -174 °C",
      ],
      "long-description": [
        {
          title: "Sais-tu qui a découvert Rhéa ?",
          answer:
            "Rhéa est un satellite naturel de Saturne, le deuxième plus grand satellite de la planète par la taille après Titan. Il fut découvert en 16725 par l'Italien, naturalisé français, Jean-Dominique Cassini.",
        },
      ],
    },
    moons: null,
    gravity: 0.264,
    gazeuse: false,
    naine: false,
    tellurique: false,
    aroundPlanet: "Saturne",
    discoveredBy: "Giovanni Cassini",
    discoveryDate: "1672",
  },
  {
    url: "/assets/images/planets/7_uranus.png",
    id: "uranus",
    name: "Uranus",
    englishName: "Uranus",
    isPlanet: true,
    isMoon: false,
    bodyType: "Planet",
    placement: 7,
    span: 2,
    "planet-description":
      "Uranus est la septième planète du Système Solaire par ordre d'éloignement du Soleil. Il s'agit de la quatrième planète la plus massive du Système Solaire et de la troisième plus grande par la taille. Uranus possède un système d’anneaux et de nombreux satellites naturels : on lui connaît 13 anneaux étroits et 27 lunes.",
    curiosites: {
      "short-description": [
        "Distance par rapport au Soleil : 2 734 998 229 à 3 006 318 143 kilomètres",
        "Température de surface moyenne : -216° C",
        "Temps de voyage spatial depuis la Terre : 9 ans",
        "Gravité : Si tu pèses 45 kilogrammes sur Terre, tu pèseras 49 kilogrammes sur Saturne.",
        "Si tu pèses 45 kilogrammes sur Terre, tu pèseras 41 kilogrammes sur Uranus.",
        "Uranus tire son nom du dieu grec du ciel, Ouranos.",
        "Uranus est une planète complètement penchée !",
        "Uranus est la planète la plus froide du système solaire !",
        "Les chercheurs ont découvert que l'atmosphère écrasante d'Uranus pouvait comprimer le méthane pour le transformer en roches précieuses.",
        "Uranus (avec Neptune) est l'une des plus petites géantes gazeuses, mais c'est toujours une géante ! Elle fait environ 4 fois la taille de la Terre.",
        "Non seulement Uranus est renversée sur le côté, mais elle tourne également dans la direction opposée à celle de la Terre (la seule autre planète avec une rotation aussi « rétrograde » est Vénus).",
      ],
      "long-description": [
        {
          title: "Sais-tu pour quelle raison Uranus penche ?",
          answer:
            "Les scientifiques pensent qu'un objet de la taille d'une planète a fait basculer Uranus sur le côté au début de sa formation.",
        },
        {
          title: "Pourquoi dit-on d'Uranus qu'elle est une géante de glace ?",
          answer:
            "Uranus est considérée comme une « géante de glace » car son atmosphère est composée principalement d'eau « glacée », d'ammoniac et de méthane.",
        },
        {
          title: "Sais-tu si Uranus est plus grande que la Terre ?",
          answer:
            "Uranus (avec Neptune) est l'une des plus petites géantes gazeuses, mais c'est toujours une géante ! Elle fait environ 4 fois la taille de la Terre.",
        },
      ],
    },
    moons: ["Ariel", "Umbriel", "Titania", "Obéron"],
    gravity: 8.87,
    gazeuse: true,
    naine: false,
    tellurique: false,
    aroundPlanet: null,
    discoveredBy: "William Herschel",
    discoveryDate: "1781",
  },
  {
    url: "/assets/images/planets/7-1_titania.png",
    id: "titania",
    name: "Titania",
    englishName: "Titania",
    isPlanet: false,
    isMoon: true,
    bodyType: "moon",
    placement: "Uranus",
    span: 1,
    "planet-description":
      "Titania est le plus grand satellite naturel d'Uranus et le huitième par sa masse du Système Solaire. Titania est constitué de glace et de roche en quantités approximativement égales. La surface de Titania, sombre et légèrement rouge, a été modelée à la fois par les impacts d'astéroïdes et de comètes.",
    curiosites: {
      "short-description": [
        "Titania est découvert par William Herschel le 11 janvier 1787",
      ],
      "long-description": [
        {
          title: "Sais-tu que Titania est la plus grande lune d'Uranus ?",
          answer:
            "Titania, également appelé Uranus III, est le plus grand satellite naturel d'Uranus et le huitième par sa masse du Système solaire.",
        },
        {
          title: "Sais-tu qui a découvert Titania ?",
          answer:
            "Découvert par l'astronome William Herschel en 1787, il doit son nom à Titania, la reine des fées de la pièce de Shakespeare, Le Songe d'une nuit d'été.",
        },
      ],
    },
    moons: null,
    gravity: 0.367,
    gazeuse: false,
    naine: false,
    tellurique: false,
    aroundPlanet: "Uranus",
    discoveredBy: "William Herschel",
    discoveryDate: "1787",
  },
  {
    url: "/assets/images/planets/7-2_oberon.png",
    id: "oberon",
    name: "Obéron",
    englishName: "Oberon",
    isPlanet: false,
    isMoon: true,
    bodyType: "moon",
    placement: "Uranus",
    span: 1,
    "planet-description":
      "Obéron est le plus éloigné des grands satellites naturels d'Uranus. C'est le deuxième satellite de cette planète tant par sa taille que sa masse et le neuvième du Système Solaire en masse. Obéron est constitué de glace et de roche en quantités approximativement égales. La surface d'Obéron, qui est sombre et légèrement rouge, semble avoir été principalement modelée par les impacts d'astéroïdes et de comètes.",
    curiosites: {
      "short-description": [
        "Obéron est découvert par William Herschel le 11 janvier 1787",
        "Obéron, également appelé Uranus IV, est le plus éloigné des grands satellites naturels d'Uranus.",
      ],
      "long-description": [
        {
          title: "Sais-tu qu'on ne connait qu'une petite partie d'Obéron ?",
          answer:
            "Le système uranien n'a été étudié de près qu'une seule fois, par la sonde Voyager 2 en janvier 1986. Voyager 2 a pris plusieurs images d'Obéron, permettant ainsi de cartographier environ 40 % de la surface de cette lune.",
        },
      ],
    },
    moons: null,
    gravity: 0.354,
    gazeuse: false,
    naine: false,
    tellurique: false,
    aroundPlanet: "Uranus",
    discoveredBy: "William Herschel",
    discoveryDate: "1787",
  },
  {
    url: "/assets/images/planets/7-3_ariel.png",
    id: "ariel",
    name: "Ariel",
    englishName: "Ariel",
    isPlanet: false,
    isMoon: true,
    bodyType: "moon",
    placement: "Uranus",
    span: 1,
    "planet-description":
      "Ariel est un satellite naturel d'Uranus. Ariel est la plus brillante des lunes en orbite autour d'Uranus, ainsi que la troisième plus massive et la quatrième plus grande. Elle est principalement composée, à parts égales, de glaces et de roches. Ariel a une surface complexe comprenant de vastes terrains marqués par des cratères d'impact et traversés par un réseau de failles escarpées, de canyons et de crêtes. Cette surface montre des signes d'une activité géologique plus récente que les autres lunes d'Uranus.",
    curiosites: {
      "short-description": [
        "Ariel, également connu sous le nom d'Uranus I, est un satellite naturel d'Uranus.",
        "Après Miranda, Ariel est la deuxième lune la plus proche d'Uranus parmi les cinq lunes majeures",
      ],
      "long-description": [
        {
          title: "Sais-tu qui a découvert la lune Ariel ?",
          answer:
            "Ariel est découvert par l'astronome William Lassell le 24 octobre 1851, en même temps qu'Umbriel, une autre lune d'Uranus.",
        },
      ],
    },
    moons: null,
    gravity: 0.249,
    gazeuse: false,
    naine: false,
    tellurique: false,
    aroundPlanet: "Uranus",
    discoveredBy: "William Lassell",
    discoveryDate: "1851",
  },
  {
    url: "/assets/images/planets/7-4_umbriel.png",
    id: "umbriel",
    name: "Umbriel",
    englishName: "Umbriel",
    isPlanet: false,
    isMoon: true,
    bodyType: "moon",
    placement: "Uranus",
    span: 1,
    "planet-description":
      "Umbriel est le troisième satellite naturel d'Uranus par la taille. Umbriel est principalement constitué de glace. Sa surface est la plus sombre parmi celles des lunes d'Uranus, et aurait été principalement façonnée par des impacts météoritiques.",
    curiosites: {
      "short-description": [
        "Umbriel, également appelé Uranus II, est le troisième satellite naturel d'Uranus par la taille.",
      ],
      "long-description": [
        {
          title:
            "Sais-tu quelle est la lune qui reçoit le plus de météorites ?",
          answer:
            "Parmi les satellites d'Uranus, Umbriel a la surface la plus marquée par des cratères d'impact après Obéron, certains mesurant jusqu'à 210 km de diamètre.",
        },
      ],
    },
    moons: null,
    gravity: 8.87,
    gazeuse: false,
    naine: false,
    tellurique: false,
    aroundPlanet: "Uranus",
    discoveredBy: "William Lassell",
    discoveryDate: "1851",
  },
  {
    url: "/assets/images/planets/8_neptune.png",
    id: "neptune",
    name: "Neptune",
    englishName: "Neptune",
    isPlanet: true,
    isMoon: false,
    bodyType: "Planet",
    placement: 8,
    span: 1,
    "planet-description":
      "Neptune est la huitième planète par ordre d'éloignement au Soleil et la plus éloignée connue du Système Solaire. Il s'agit de la troisième planète la plus massive du Système Solaire et de la quatrième plus grande par la taille. Cependant, comme Uranus, son intérieur est principalement composé de glaces et de roches, d'où leur nom de « géantes de glaces ». Par ailleurs, le méthane est partiellement responsable de la teinte bleue de l'atmosphère de Neptune, bien que l'origine exacte de ce bleu azur reste encore inexpliquée.",
    curiosites: {
      "short-description": [
        "Distance par rapport au Soleil : 4 459 753 056 à 4 537 039 826 kilomètres",
        "Température de surface moyenne : -214° C",
        "Temps de voyage spatial depuis la Terre : 12 ans",
        "Gravité : Si tu pèses 45 kilogrammes sur Terre, tu pèseras 49 kilogrammes sur Saturne.",
        "Si tu pèses 45 kilogrammes sur Terre, tu pèseras 52 kilogrammes sur Neptune.",
        "C'est le méthane qui donne à Neptune sa teinte bleue si profonde.",
        "Neptune a six anneaux et 13 lunes confirmées.",
        "Le champ magnétique de Neptune est 27 fois plus puissant que le champ magnétique terrestre.",
      ],
      "long-description": [
        {
          title:
            "Sais-tu que le vent souffle plus fort que nulle part ailleurs sur Neptune ?",
          answer:
            "L'atmosphère de la planète, qui s'étend jusqu'à des profondeurs incroyables et abrite les vents parmi les plus puissants du système solaire.",
        },
        {
          title: "Sais-tu que les journées sont courtes sur Neptune",
          answer:
            "Un jour sur Neptune dure 16 heures, mais une année dure 165 années terrestres. À peine une année neptunienne s'est écoulée depuis la découverte de la planète en 1846.",
        },
        {
          title: "Sais-tu que Neptune n'est pas une planète accueillante ?",
          answer:
            "Des nuages ​​de méthane gelé jaillissent aussi vite qu'un avion de chasse dans des tempêtes aussi larges que la Terre.",
        },
      ],
    },
    moons: ["Triton", "Néreïde"],
    gravity: 11.15,
    gazeuse: true,
    naine: false,
    tellurique: false,
    aroundPlanet: null,
    discoveredBy: "Urbain Le Verrier, John Couch Adams, Johann Galle",
    discoveryDate: "1846",
  },
  {
    url: "/assets/images/planets/8-1_triton.png",
    id: "triton",
    name: "Triton",
    englishName: "Triton",
    isPlanet: false,
    isMoon: true,
    bodyType: "moon",
    placement: "Neptune",
    span: 1,
    "planet-description":
      "Triton est le plus gros des quatorze satellites naturels de Neptune et le septième par distance croissante à cette dernière. Triton est, avec Phobos, la seule lune connue du Système Solaire à se rapprocher de la planète autour de laquelle elle orbite.",
    curiosites: {
      "short-description": ["Elle est l'une des quatorze lunes de Neptune"],
      "long-description": [
        {
          title: "Sais-tu que de géants geysers existent sur Triton ?",
          answer:
            "Triton possède des geysers qui projettent des matériaux glacés à plus de huit kilomètres de haut dans l'atmosphère glaciale.",
        },
        {
          title: "Sais-tu que Triton est la plus grosse lune de Neptune ?",
          answer:
            "Triton est le plus gros des quatorze satellites naturels de Neptune et le septième par distance croissante à cette dernière",
        },
      ],
    },
    moons: null,
    gravity: 0.779,
    gazeuse: false,
    naine: false,
    tellurique: true,
    aroundPlanet: "Neptune",
    discoveredBy: "William Lassell",
    discoveryDate: "1846",
  },
  {
    url: "/assets/images/planets/8-2_nereid.png",
    id: "nereide",
    name: "Néréide",
    englishName: "Nereid",
    isPlanet: false,
    isMoon: true,
    bodyType: "moon",
    placement: "Neptune",
    span: 1,
    "planet-description":
      "Néréide est le troisième plus grand satellite naturel de Neptune.",
    curiosites: {
      "short-description": [
        "L'objet a été découvert en 1949 par Gerard Kuiper.",
      ],
      "long-description": [
        {
          title: "Sais-tu que Néréide est sûrement un astéroïde ?",
          answer:
            "Son orbite inhabituelle laisse penser que Néréide est un astéroïde capturé ou un ancien objet de la ceinture de Kuiper, ou qu'il a été perturbé lors de la capture de Triton, le plus grand satellite de Neptune.",
        },
      ],
    },
    moons: null,
    gravity: 0.071,
    gazeuse: false,
    naine: false,
    tellurique: false,
    aroundPlanet: "Neptune",
    discoveredBy: "Gerard Kuiper",
    discoveryDate: "1949",
  },
  {
    url: "/assets/images/planets/9_pluton.png",
    id: "pluton",
    name: "Pluton",
    englishName: "Pluto",
    isPlanet: true,
    isMoon: false,
    bodyType: "Planet naine",
    placement: 9,
    span: 1,
    "planet-description":
      "Pluton est une planète naine, et aussi le neuvième plus gros objet connu orbitant directement autour du Soleil",
    curiosites: {
      "short-description": [
        "Pluton est classée depuis le 24 août 2006 comme planète naine.",
        "Pluton se comporte comme un astéroïde, et se déplace en groupe !",
      ],
      "long-description": [
        {
          title: "Sais-tu comment désigne-t-on Pluton ?",
          answer:
            "Pluton (désignation internationale : Pluto) est une planète naine depuis 2006, la plus volumineuse connue dans le Système solaire",
        },
      ],
    },
    moons: null,
    gravity: 0.62,
    gazeuse: false,
    naine: true,
    tellurique: false,
    aroundPlanet: null,
    discoveredBy: "Clyde Tombaugh",
    discoveryDate: "1930",
  },
];

module.exports = planets;
