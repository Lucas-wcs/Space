const router = require('express').Router();
const planets = require('./planets');



router.get("/", (req, res) => {
    res.status(200).send(planets);
});

router.get("/:id", (req, res) => {
    const planet = planets.filter((planet) => {
        return planet.id === req.params.id;
    })
    res.status(200).send(planet);
})

module.exports = router;