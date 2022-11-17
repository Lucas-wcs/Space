import PropTypes from "prop-types";
import React from "react";
import "../../css/quizz/Questionnaire.css";

function Questionnaire({
  question,
  responses,
  solution,
  parentProp,
  trueFalse,
  somme,
  setSomme,
}) {
  const [quesSuiv, setQueSuiv] = React.useState(false);
  const [respColors, setRespColor] = React.useState(false);

  function suite() {
    parentProp();
    setQueSuiv(!quesSuiv);
    setRespColor(!respColors);
    trueFalse(0);
  }

  function compareResponse(voila) {
    setRespColor(true);
    if (voila === solution) {
      setSomme(somme + 1);
      trueFalse(2);
      console.warn("bravo");
    } else {
      trueFalse(1);
      console.warn("dommage");
    }
    setQueSuiv(true);
  }

  function terner1() {
    if (respColors) {
      if (responses[0] === solution) {
        return "resp1 vert";
      }
      return "resp1 rouge";
    }
    return "resp1";
  }

  function terner2() {
    if (respColors) {
      if (responses[1] === solution) {
        return "resp2 vert";
      }
      return "resp2 rouge";
    }
    return "resp2";
  }

  function terner3() {
    if (respColors) {
      if (responses[2] === solution) {
        return "resp3 vert";
      }
      return "resp3 rouge";
    }
    return "resp3";
  }

  return (
    <div className="questionnaire">
      <p className="question_titre">{question}</p>
      <button
        type="button"
        className={terner1()}
        onClick={() => compareResponse(responses[0])}
      >
        {responses[0]}{" "}
      </button>
      <button
        type="button"
        className={terner2()}
        onClick={() => compareResponse(responses[1])}
      >
        {responses[1]}
      </button>
      <button
        type="button"
        className={terner3()}
        onClick={() => compareResponse(responses[2])}
      >
        {responses[2]}
      </button>
      {quesSuiv && (
        <button onClick={() => suite()} type="button" className="suivant">
          Suivant
        </button>
      )}
    </div>
  );
}

export default Questionnaire;
Questionnaire.propTypes = {
  parentProp: PropTypes.func.isRequired,
  solution: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  trueFalse: PropTypes.func.isRequired,
  somme: PropTypes.number.isRequired,
  setSomme: PropTypes.func.isRequired,
  responses: PropTypes.arrayOf(PropTypes.string).isRequired,
};
