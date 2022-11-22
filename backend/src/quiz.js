const quiz = [
  {
    id: "question-1",
    question: "Pourquoi la Terre est-elle surnommée la planète bleue ? ",
    reponse: [
      "Parce qu'elle est composée à 72% d'eau",
      "Parce qu'elle est totalement bleue",
      "Parce qu'elle n'est pas verte",
    ],
    solution: "Parce qu'elle est composée à 72% d'eau",
    "commentaire-false": "Ta réponse tombe à l'eau !",
    "commentaire-true": "Des océans, des rivières, des fleuves...",
  },
  {
    id: "question-2",
    question: "Quelle est la plus grande planète du système solaire ?",
    reponse: ["La Terre", "Jupiter", "Saturne"],
    solution: "Jupiter",
    "commentaire-false":
      "Jupiter est, de loin, la plus grande planète du système solaire",
    "commentaire-true": "Tu es un vrai champion !",
  },
  {
    id: "question-3",
    question: "Quelle planète ne possède pas d'anneaux ?",
    reponse: ["Saturne", "Jupiter", "Mercure"],
    solution: "Mercure",
    "commentaire-false": "Ce n'est pas ça !",
    "commentaire-true": "Bravo, tu es trop fort !",
  },
  {
    id: "question-4",
    question: "Quelle planète n'est pas gazeuse ?",
    reponse: ["Mars", "Saturne", "Neptune"],
    solution: "Mars",
    "commentaire-false": "Alors, ça gaz ?",
    "commentaire-true": "Super !",
  },
  {
    id: "question-5",
    question:
      "Laquelle de ces planètes ne possède qu'un seul satellite naturel ?",
    reponse: ["Neptune", "La Terre", "Jupiter"],
    solution: "La Terre",
    "commentaire-false":
      "Tu es tombé dans le piège ! La Terre n'a qu'une seule lune !",
    "commentaire-true": "Bravo, tu n'es pas tombé dans le piège !",
  },
  {
    id: "question-6",
    question: "Quelle planète ne peut-on pas voir à l'oeil nu ?",
    reponse: ["Vénus", "Mars", "Uranus"],
    solution: "Uranus",
    "commentaire-false": "Ce n'était pas facile...",
    "commentaire-true": "Un vrai astronaute !",
  },
  {
    id: "question-7",
    question:
      "Quelle planète du système solaire est surnommée la planète rouge ?",
    reponse: ["La Terre", "Mars", "Saturne"],
    solution: "Mars",
    "commentaire-false":
      "Mauvaise réponse. Bon, c'est vrai, elle n'est pas totalement rouge...",
    "commentaire-true": "Savais-tu que Mars n'est rouge que de loin ?",
  },
  {
    id: "question-8",
    question: "Combien de planètes Terres pourrait contenir Jupiter ?",
    reponse: ["10", "400", "1300"],
    solution: "1300",
    "commentaire-false": "Ah oui, oui oui, c'est beaucoup !",
    "commentaire-true": "Bravo !",
  },
  {
    id: "question-9",
    question:
      "Combien de temps de voyage spatial depuis la Terre faut-il pour aller visiter Uranus ?",
    reponse: ["9 jours", "9 mois", "9 ans"],
    solution: "9 ans",
    "commentaire-false": "Et oui, c'est long !",
    "commentaire-true": "Bra-vo !",
  },
  {
    id: "question-10",
    question: "Quelle est la planète la plus froide du système solaire ?",
    reponse: ["Uranus", "La Terre", "Mars"],
    solution: "Uranus",
    "commentaire-false": "Perdu !",
    "commentaire-true": "Gagné !",
  },
  {
    id: "question-11",
    question: "Combien de temps dure une journée sur Jupiter ?",
    reponse: ["2 heures", "10 heures", "24 heures"],
    solution: "10 heures",
    "commentaire-false": "Le temps passe vite sur Jupiter, pas vrai ?",
    "commentaire-true": "Tu es très instruit !",
  },
  {
    id: "question-12",
    question: "Quelle est la température moyenne sur Vénus ?",
    reponse: ["37° C", "462° C", "964° C"],
    solution: "462° C",
    "commentaire-false": "Qu'est-ce qu'il fait chaud ici !",
    "commentaire-true": "Tu es un vrai thermomètre !",
  },
  {
    id: "question-13",
    question: "Quelle est la planète qui comporte le plus de volcans ?",
    reponse: ["Vénus", "La Lune", "Mercure"],
    solution: "Vénus",
    "commentaire-false": "Environ 1600 volcans, c'est énorme !",
    "commentaire-true": "Un vrai astronaute !",
  },
  {
    id: "question-13",
    question: "Quelle est la planète qui comporte le plus de volcans actifs ?",
    reponse: ["Vénus", "La Terre", "Mercure"],
    solution: "La Terre",
    "commentaire-false": "Environ 1700 volcans actifs, c'est énorme !",
    "commentaire-true": "Environ 1700 volcans actifs, c'est énorme hein ?",
  },
  {
    id: "question-14",
    question: "Qu'appelle-t-on la grande tâche rouge de Jupiter ?",
    reponse: [
      "Un très gros volcan",
      "Un très gros oiseau",
      "Un très gros ouragan",
    ],
    solution: "Un très gros ouragan",
    "commentaire-false":
      "Et en plus, il est trois fois plus gros que la Terre !",
    "commentaire-true": "Tu es un génie !",
  },
  {
    id: "question-15",
    question:
      "Parmis ces trois corps céleste, lequel est le plus brillant dans le ciel, vu depuis la Terre ?",
    reponse: ["La Lune", "Jupiter", "Mars"],
    solution: "La Lune",
    "commentaire-false": "Ce soir, tu lèveras les yeux pour regarder le ciel",
    "commentaire-true": "Excellent !",
  },
  {
    id: "question-16",
    question:
      "Combien de jour met Mercure à faire un tour complet sur elle-même ?",
    reponse: ["30 jours", "54 jours", "120 jours"],
    solution: "30 jours",
    "commentaire-false": "Perdu !",
    "commentaire-true": "Tu as bien retenu !",
  },
  {
    id: "question-17",
    question: "Quelle est la température de surface moyenne de la Terre ?",
    reponse: ["15° C", "25° C", "32° C"],
    solution: "15° C",
    "commentaire-false": "Il ne fait pas si chaud, voyons !",
    "commentaire-true": "Félicitation !",
  },
  {
    id: "question-18",
    question:
      "Si on pèse 45 kilos sur la Terre, combien de kilos pèserait-on sur Mars ?",
    reponse: ["2 kilos", "17 kilos", "45 kilos"],
    solution: "17 kilos",
    "commentaire-false": "Oups !",
    "commentaire-true": "Bien, très bien !",
  },
  {
    id: "question-19",
    question: "Comment s'appelle le plus haut volcan de Mars ?",
    reponse: ["Pika Pika", "Aya Naka", "Olympus Mons"],
    solution: "Olympus Mons",
    "commentaire-false": "Pas de bol !",
    "commentaire-true": "Bravo, tu n'es pas tombé dans le piège !",
  },
  {
    id: "question-20",
    question: "Quelle est la planète la plus froide de notre système ?",
    reponse: ["Saturne", "Uranus", "Neptune"],
    solution: "Uranus",
    "commentaire-false":
      "La température moyenne est de -216° C ! On se les gêle !",
    "commentaire-true": "Quel astronaute !",
  },
  {
    id: "question-21",
    question: "Et sinon... Pain au chocolat ou chocolatine ?",
    reponse: ["Pain au chocolat", "Chocolatine", "Les deux"],
    solution: "Pain au chocolat",
    "commentaire-false":
      "Sacrilège ! On dit bien pain au raison ? Non ? Bah voilà.",
    "commentaire-true": "On est d'accord !",
  },
];

module.exports = quiz;
