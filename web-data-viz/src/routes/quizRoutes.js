const express = require("express");
const router = express.Router();

const quizController = require("../controllers/quizController");

router.post("/salvar", quizController.salvarQuiz);
router.get("/estatisticas/:idUsuario", quizController.estatisticas);
router.get("/:id", quizController.buscarUltimoQuiz);

module.exports = router;