import PropTypes from "prop-types";
import React from "react";

function KnowledgeCards({ title, answer, url }) {
  return (
    <div className="knowledge-card">
      <div className="title" name="knowledge-title">
        <p>{title}</p>
      </div>
      <div className="knowledge-elements">
        <div className="knowledge">
          <img src={`./src${url}`} alt="Moon" />
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default KnowledgeCards;

KnowledgeCards.propTypes = {
  title: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
