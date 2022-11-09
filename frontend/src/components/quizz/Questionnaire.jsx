import React from "react";
import "../../css/quizz/Questionnaire.css";
import PropTypes from "prop-types";

function Questionnaire({ question, responses, solution, parentProp }) {
  const [quesSuiv, setQueSuiv] = React.useState(false);
  function suite() {
    parentProp();
    setQueSuiv(!quesSuiv);
  }
  function compareResponse(voila) {
    if (voila === solution) {
      console.warn("bravo");
    } else {
      console.warn("dommage");
    }
    setQueSuiv(true);
  }

  return (
    <div className="cubeQestion">
      <h2 className="question_titre">{question}</h2>
      <button
        type="button"
        className="resp1"
        onClick={() => compareResponse(responses[0])}
      >
        {responses[0]}
      </button>
      <button
        type="button"
        className="resp1"
        onClick={() => compareResponse(responses[1])}
      >
        {responses[1]}
      </button>
      <button
        type="button"
        className="resp1"
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
  responses: PropTypes.arrayOf(
    PropTypes.shape([PropTypes.string, PropTypes.string, PropTypes.string])
  ).isRequired,
};
