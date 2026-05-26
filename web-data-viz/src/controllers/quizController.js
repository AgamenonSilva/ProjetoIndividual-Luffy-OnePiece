const quizModel = require("../models/quizModel");

function salvarQuiz(req, res) {
    const { fkUsuario, personagemFavorito, episodioAtual, personalidade } = req.body;

    quizModel.salvarQuiz(fkUsuario, personagemFavorito, episodioAtual, personalidade)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
}

function buscarUltimoQuiz(req, res) {
    const fkUsuario = req.params.id;

    quizModel.buscarUltimoQuiz(fkUsuario)
        .then(resultado => res.json(resultado))
        .catch(err => res.status(500).json(err));
}
function buscarHistorico(req, res) {

    let fkUsuario = req.params.fkUsuario;

    quizModel.buscarHistorico(fkUsuario)
        .then(function(resultado) {

            res.json(resultado);

        }).catch(function(erro) {

            console.log(erro);
            res.status(500).json(erro.sqlMessage);

        });
}
function estatisticas(req, res) {

    const idUsuario = req.params.idUsuario;

    quizModel.estatisticas(idUsuario)
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).send("Erro ao buscar estatísticas");
        });

}
module.exports = {
    salvarQuiz,
    buscarUltimoQuiz,
    estatisticas,
    buscarHistorico
};