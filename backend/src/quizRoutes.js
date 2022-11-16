const router = require("express").Router();
const quiz = require("./quiz");

router.get("/", (req, res) => {
  res.status(200).send(quiz);
});

router.get("/:id", (req, res) => {
  const question = quiz.filter((quest) => {
    return quest.id === req.params.id;
  });
  res.status(200).send(question);
});

module.exports = router;
