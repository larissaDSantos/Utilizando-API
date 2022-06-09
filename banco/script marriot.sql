CREATE DATABASE Marriot;
USE Marriot;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);


CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
    descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
); 

CREATE TABLE Quiz(
idQuiz INT PRIMARY KEY auto_increment,
acertos INT,
erros INT, 
fkUsuario INT, FOREIGN KEY (fkUsuario) REFERENCES Usuario(id)
);

SELECT * FROM aviso;