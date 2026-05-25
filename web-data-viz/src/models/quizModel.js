const database = require("../database/config");

function salvarQuiz(fkUsuario, personagemFavorito, episodioAtual, personalidade) {
    const sql = `
        INSERT INTO quiz 
        (fkUsuario, personagemFavorito, episodioAtual, personalidade)
        VALUES (?, ?, ?, ?)
    `;
    return database.executar(sql, [fkUsuario, personagemFavorito, episodioAtual, personalidade]);
}

function buscarUltimoQuiz(fkUsuario) {
    const sql = `
        SELECT * FROM quiz
        WHERE fkUsuario = ? 
        ORDER BY id DESC 
        LIMIT 1
    `;
    return database.executar(sql, [fkUsuario]);
}
function estatisticas(idUsuario) {

    const sql = `
        SELECT personalidade, COUNT(*) AS total
        FROM quiz
        WHERE fkUsuario = ?
        GROUP BY personalidade
        ORDER BY total DESC;
    `;

    return database.executar(sql, [idUsuario]);
}

module.exports = {
    salvarQuiz,
    buscarUltimoQuiz,
    estatisticas
};