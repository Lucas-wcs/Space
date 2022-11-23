import React from "react";
import PropTypes from "prop-types";
import "../../css/quizz/Start.css";

function Start({ updateStart, updateNumQuestions }) {
  return (
    <div className="start">
      <form onSubmit={() => updateStart()}>
        <input
          type="text"
          placeholder="Selectionne entre 1 à 21 questions."
          onChange={(event) => updateNumQuestions(event.target.value)}
          size={50}
          height={108}
        />
        <button
          type="button"
          className="startBtn"
          onClick={() => updateStart()}
        >
          OK
        </button>
      </form>
    </div>
  );
}

export default Start;

Start.propTypes = {
  updateStart: PropTypes.func.isRequired,
  updateNumQuestions: PropTypes.func.isRequired,
};
