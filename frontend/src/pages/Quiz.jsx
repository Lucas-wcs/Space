import React, { useEffect, useState } from "react";
import axios from "axios";
import Questionnaire from "../components/quizz/Questionnaire";
import Astro from "../components/quizz/Astro";
import Certificat from "../components/quizz/Certificat";
import "../css/quizz/Quiz.css";

function Quiz() {
  const [newQuest, setNewQuest] = useState(0);
  const [resptrue, setResptrue] = useState(0);
  const [api, setApi] = useState([]);
  const [somme, setSomme] = useState(0);

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
        <div className="leTout">
          {newQuest < 2 ? (
            <div className="Quiz">
              <Questionnaire
                question={api[newQuest].question}
                responses={api[newQuest].reponse}
                solution={api[newQuest].solution}
                trueFalse={(verif) => trueFalse(verif)}
                parentProp={() => parent()}
                somme={somme}
                setSomme={setSomme}
              />

              <Astro
                comfalse={api[newQuest]["commentaire-false"]}
                comtrue={api[newQuest]["commentaire-true"]}
                resptrue={resptrue}
                somme={somme}
                setSomme={setSomme}
              />
            </div>
          ) : (
            <Certificat somme={somme} setSomme={setSomme} />
          )}
        </div>
      )}
    </div>
  );
}
export default Quiz;
