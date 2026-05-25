CREATE DATABASE luffy;
USE luffy;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(50) UNIQUE,
    cpf CHAR(14) ,
    senha VARCHAR(30)
);

SELECT * FROM usuario;

CREATE TABLE quiz (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    personagemFavorito VARCHAR(100),
    episodioAtual INT,
    personalidade VARCHAR(50),
    dataResposta DATETIME DEFAULT CURRENT_TIMESTAMP
);
SELECT personalidade, COUNT(*) as total
FROM quiz
WHERE fkUsuario = ?
GROUP BY personalidade;