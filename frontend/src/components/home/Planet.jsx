import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import orbit from "@assets/orbit.svg";
import Card from "./Card";

function Planet({ name, handle, cardOn, clickedPlanet }) {
  return (
    <div className={`planets-container ${name}-container`}>
      <img className="orbit" src={orbit} alt="orbit" />
      <motion.div
        aria-hidden="true"
        className={`${name} planet`}
        onClick={() => handle(name)}
        drag
        dragElastic={1}
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
      >
        {name === "Saturn" ? <div className={`${name}-halo`} /> : null}
        {cardOn && clickedPlanet === name && (
          <Card clickedPlanet={clickedPlanet} />
        )}
      </motion.div>
    </div>
  );
}

export default Planet;

Planet.propTypes = {
  clickedPlanet: PropTypes.string.isRequired,
  cardOn: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
};
