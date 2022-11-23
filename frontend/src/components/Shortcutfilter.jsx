import React from "react";
import PropTypes from "prop-types";

function Shortcutfilter({ handleFilter }) {
  return (
    <button
      type="button"
      className="renderFilter"
      onClick={() => handleFilter()}
    >
      <div />
    </button>
  );
}

Shortcutfilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Shortcutfilter;
