create database UFCWDV;
use UFCWDV;

CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    email VARCHAR(100),
    senha VARCHAR(100),
    dataCadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE lutadores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    forca INT,
    velocidade INT,
    finalizacao INT,
    defesa INT
);

CREATE TABLE comparacoes (
    id_comparacoes INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT,
    id_lutador1 INT,
    id_lutador2 INT,
    vencedor VARCHAR(100),
    pontosLutador1 INT,
    pontosLutador2 INT,
    data DATETIME DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fkComparacaoUsuario
        FOREIGN KEY (fk_usuario)
        REFERENCES usuario(id_usuario),

    CONSTRAINT fkComparacaoLutador1
        FOREIGN KEY (id_lutador1)
        REFERENCES lutadores(id),

    CONSTRAINT fkComparacaoLutador2
        FOREIGN KEY (id_lutador2)
        REFERENCES lutadores(id)
);


INSERT INTO lutadores (nome, forca, velocidade, finalizacao, defesa)
VALUES
('Anderson Silva',8,10,8,7),
('Jon Jones',9,8,9,10),
('Khabib Nurmagomedov',8,8,10,9),
('Georges St-Pierre',8,9,8,10),
('Demetrious Johnson',6,10,9,9),
('Islam Makhachev',8,8,10,9);
