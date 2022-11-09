import React, { useState, useEffect } from "react";

function GeneralStars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const tabTmp = [];
    for (let i = 0; i < 800; i += 1) {
      tabTmp.push({
        left: Math.floor(Math.random() * window.innerWidth),
        top: Math.floor(Math.random() * window.innerHeight),
        size: Math.random() * 3,
        duration: Math.random() * 10 + 10,
      });
    }
    setStars(tabTmp);
  }, []);

  return (
    <div className="general-background">
      <div className="background">
        {stars.map((star) => {
          return (
            <div
              className="stars"
              style={{
                position: "absolute",
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                animationDuration: `${star.duration}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default GeneralStars;
