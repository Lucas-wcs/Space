import React from 'react';

const PlanetImg = ({ name, src }) => {
    return (
        <div className="planetImg">
            <h3>{name}</h3>
            <img src={src} alt={name} />
        </div>
    );
};

export default PlanetImg;