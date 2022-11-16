import React, { useEffect, useState } from "react";
import axios from "axios";
import Questionnaire from "../components/quizz/Questionnaire";
import Astro from "../components/quizz/Astro";
import "../css/quizz/Quiz.css";
import Certificat from "../components/quizz/Certificat";

function Quiz() {
  const [newQuest, setNewQuest] = useState(0);
  const [resptrue, setResptrue] = useState(0);
  const [api, setApi] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5007/api/quiz")
      .then((result) => {
        setApi(result.data);
      })
      .catch((err) => console.error(err));
  }, []);

  function trueFalse(verif) {
    setResptrue(verif);
  }

  function parent() {
    setNewQuest((prev) => prev + 1);
  }

  return (
    <div>
      {api.length > 0 && (
        <div className="Quiz">
          {newQuest < 10 ? (
            <Questionnaire
              question={api[newQuest].question}
              responses={api[newQuest].reponse}
              solution={api[newQuest].solution}
              trueFalse={(verif) => trueFalse(verif)}
              parentProp={() => parent()}
            />
          ) : (
            <Certificat />
          )}

          <Astro
            comfalse={api[newQuest]["commentaire-false"]}
            comtrue={api[newQuest]["commentaire-true"]}
            resptrue={resptrue}
          />
        </div>
      )}
    </div>
  );
}
export default Quiz;
