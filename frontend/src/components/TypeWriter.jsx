import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function TypeWriter({ text }) {
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  async function changeCurrentText() {
    await setCurrentText((prev) => prev + text.charAt(index));
  }

  useEffect(() => {
    setIndex(0);
    setCurrentText("");
  }, [text]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      changeCurrentText();
      setIndex(() => index + 1);
    }, 350 / text.length);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentText, text]);

  return (
    <h1 className="p-info">
      {text !== "Welcome" ? currentText : text}
      <span className="cursor" />
    </h1>
  );
}

export default TypeWriter;

TypeWriter.propTypes = {
  text: PropTypes.string.isRequired,
};
