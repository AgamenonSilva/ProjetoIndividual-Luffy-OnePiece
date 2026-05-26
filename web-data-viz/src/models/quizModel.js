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
function buscarHistorico(fkUsuario) {

    let instrucaoSql = `
        SELECT 
            episodioAtual,
            DATE_FORMAT(dataResposta, '%d/%m') AS data
        FROM quiz
        WHERE fkUsuario = ${fkUsuario}
        ORDER BY dataResposta;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    salvarQuiz,
    buscarUltimoQuiz,
    estatisticas,
    buscarHistorico
};