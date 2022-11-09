import React from "react";
import Questionnaire from "../components/quizz/Questionnaire";
import Astro from "../components/quizz/Astro";
import "../css/quizz/Quiz.css";

function Quiz() {
  const [newQuest, setNewQuest] = React.useState(0);
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
    },
    {
      question: "Et sinon... Pain au chocolat ou chocolatine ?",
      reponse: ["Pain au chocolat", "Chocolatine", "Les deux"],
      solution: "Pain au chocolat",
    },
  ];
  return (
    <div className="Quiz">
      <Questionnaire
        question={fakeData[newQuest].question}
        responses={fakeData[newQuest].reponse}
        solution={fakeData[newQuest].solution}
        parentProp={() => parent()}
      />
      <Astro />
    </div>
  );
}
export default Quiz;
