import React from 'react';

const Filter = ({ onSearchValue, value, onChangeCheckboxPlanets, onChangeCheckboxLune, onChangeCheckboxTellurique, onChangeCheckboxGazeux, onChangeCheckboxNaine }) => {


    return (
        <div className='filter'>
            <h2>Filtre:</h2>
            <div>
                <input type="text" name='name' value={value} onChange={(e) => onSearchValue(e.target.value)} />
                <label for="name">Nom</label>
            </div>

            <div>
                <input type="checkbox" name='planet' onChange={() => {
                    onChangeCheckboxPlanets()
                    onChangeCheckboxLune()
                }} />
                <label for="planet">Planète</label>
            </div>

            <div>
                <input type="checkbox" name="lune" onChange={() => {
                    onChangeCheckboxPlanets()
                    onChangeCheckboxLune()
                }} />
                <label for="lune">Lune</label>
            </div>

            <div>
                <input type="checkbox" name="tellurique" onClick={onChangeCheckboxTellurique} />
                <label for="tellurique">Tellurique</label>
            </div>

            <div>
                <input type="checkbox" name="gazeuse" onClick={onChangeCheckboxGazeux} />
                <label for="gazeuse">Gazeuse</label>
            </div>

            <div>
                <input type="checkbox" name="naine" onClick={onChangeCheckboxNaine} />
                <label for="naine">Naine</label>
            </div>

        </div>
    );
};

export default Filter;