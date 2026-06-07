CREATE DATABASE IF NOT EXISTS nextagro;

USE nextagro;

CREATE TABLE sugestoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    melhoria TEXT,
    assuntos TEXT,
    avaliacao VARCHAR(20)
);