import PropTypes from "prop-types";
import React from "react";

function Filter({
  onSearchValue,
  value,
  onChangeCheckboxPlanets,
  onChangeCheckboxLune,
  onChangeCheckboxTellurique,
  onChangeCheckboxGazeuse,
  onChangeCheckboxNaine,
  setCheckboxNaineToFalse,
  setCheckboxGazeuseToFalse,
  setCheckboxTelluriqueToFalse,
  setCheckboxPlanetsToFalse,
  setCheckboxLuneToFalse,
  checkboxLune,
  checkboxPlanets,
  checkboxTellurique,
  checkboxGazeuse,
  checkboxNaine,
}) {
  return (
    <div className="filter">
      <h2>Filtre:</h2>
      <div>
        <input
          id="name"
          type="text"
          name="name"
          value={value}
          onChange={(e) => onSearchValue(e.target.value)}
        />
        <label htmlFor="name">Nom</label>
      </div>

      <div>
        <input
          id="planet"
          type="checkbox"
          name="planet"
          checked={checkboxPlanets}
          onChange={() => {
            onChangeCheckboxPlanets();
            setCheckboxLuneToFalse();
          }}
        />
        <label htmlFor="planet">Planète</label>
      </div>

      <div>
        <input
          id="lune"
          type="checkbox"
          checked={checkboxLune}
          name="lune"
          onChange={() => {
            setCheckboxPlanetsToFalse();
            onChangeCheckboxLune();
          }}
        />
        <label htmlFor="lune">Lune</label>
      </div>

      <div>
        <input
          id="tellurique"
          type="checkbox"
          checked={checkboxTellurique}
          name="tellurique"
          onChange={() => {
            onChangeCheckboxTellurique();
            setCheckboxGazeuseToFalse();
            setCheckboxNaineToFalse();
          }}
        />
        <label htmlFor="tellurique">Tellurique</label>
      </div>

      <div>
        <input
          id="gazeuse"
          type="checkbox"
          checked={checkboxGazeuse}
          name="gazeuse"
          onClick={() => {
            onChangeCheckboxGazeuse();
            setCheckboxTelluriqueToFalse();
            setCheckboxNaineToFalse();
          }}
        />
        <label htmlFor="gazeuse">Gazeuse</label>
      </div>

      <div>
        <input
          id="naine"
          type="checkbox"
          checked={checkboxNaine}
          name="naine"
          onChange={() => {
            onChangeCheckboxNaine();
            setCheckboxTelluriqueToFalse();
            setCheckboxGazeuseToFalse();
          }}
        />
        <label htmlFor="naine">Naine</label>
      </div>
    </div>
  );
}

Filter.propTypes = {
  onSearchValue: PropTypes.func.isRequired,
  value: PropTypes.func.isRequired,
  onChangeCheckboxPlanets: PropTypes.func.isRequired,
  onChangeCheckboxLune: PropTypes.func.isRequired,
  onChangeCheckboxTellurique: PropTypes.func.isRequired,
  onChangeCheckboxGazeuse: PropTypes.func.isRequired,
  onChangeCheckboxNaine: PropTypes.func.isRequired,
  setCheckboxNaineToFalse: PropTypes.func.isRequired,
  setCheckboxGazeuseToFalse: PropTypes.func.isRequired,
  setCheckboxTelluriqueToFalse: PropTypes.func.isRequired,
  setCheckboxPlanetsToFalse: PropTypes.func.isRequired,
  setCheckboxLuneToFalse: PropTypes.func.isRequired,
  checkboxLune: PropTypes.func.isRequired,
  checkboxPlanets: PropTypes.bool.isRequired,
  checkboxTellurique: PropTypes.bool.isRequired,
  checkboxGazeuse: PropTypes.bool.isRequired,
  checkboxNaine: PropTypes.bool.isRequired,
};
export default Filter;
