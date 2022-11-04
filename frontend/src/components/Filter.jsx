import React from 'react';

const Filter = () => {
    return (
        <div className='filter'>
            <h2>Filtre:</h2>
            <div>
                <input type="text" name='name' />
                <label for="name">Nom</label>
            </div>

            <div>
                <input type="checkbox" name='planet' />
                <label for="planet">Planète</label>
            </div>

            <div>
                <input type="checkbox" name="lune" />
                <label for="lune">Lune</label>
            </div>

            <div>
                <input type="checkbox" name="tellurique" />
                <label for="tellurique">Tellurique</label>
            </div>

            <div>
                <input type="checkbox" name="gazeuse" />
                <label for="gazeuse">Gazeuse</label>
            </div>

            <div>
                <input type="checkbox" name="naine" />
                <label for="naine">Naine</label>
            </div>

        </div>
    );
};

export default Filter;