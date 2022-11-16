import React, { useEffect } from "react";
import Questionnaire from "../components/quizz/Questionnaire";
import Astro from "../components/quizz/Astro";
import "../css/quizz/Quiz.css";
import image from "../assets/images/astro-quizz.png";

function Quiz() {
  const [newQuest, setNewQuest] = React.useState(0);
  const [resptrue, setResptrue] = React.useState(undefined);

  useEffect(() => {}, []);

  function trueFalse(verif) {
    setResptrue(verif);
  }

  function parent() {
    setNewQuest((prev) => {
      return prev + 1;
    });
  }
  const fakeData = [
    {
      question: "Comment s'appelle le plus haut volcan de Mars ?",
      reponse: ["Pika Pika", "Aya Naka", "Olympus Mons"],
      solution: "Olympus Mons",
      commentaire_false: "Pas de bol !",
      commentaire_true: "Bravo, tu n'es pas tombé dans le piège !",
    },
    {
      question: "Et sinon... Pain au chocolat ou chocolatine ?",
      reponse: ["Pain au chocolat", "Chocolatine", "Les deux"],
      solution: "Pain au chocolat",
      commentaire_false:
        "Sacrilège ! On dit bien pain au raison ? Non ? Bah voilà.",
      commentaire_true: "On est d'accord !",
    },
  ];

  return (
    <div className="Quiz">
      <div className="questionnaire">
        <Questionnaire
          question={fakeData[newQuest].question}
          responses={fakeData[newQuest].reponse}
          solution={fakeData[newQuest].solution}
          trueFalse={() => trueFalse()}
          parentProp={() => parent()}
        />
      </div>

      <div className="persoBulle">
        {resptrue !== undefined && (
          <Astro
            comfalse={fakeData[0].commentaire_false}
            comtrue={fakeData[0].commentaire_true}
            resptrue={resptrue}
          />
        )}

        <img className="personnage" src={image} alt="vous" />
      </div>
    </div>
  );
}
export default Quiz;
