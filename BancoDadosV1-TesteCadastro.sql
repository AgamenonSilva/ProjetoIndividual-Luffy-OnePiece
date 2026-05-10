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