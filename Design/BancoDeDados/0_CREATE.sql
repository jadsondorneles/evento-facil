-- Cria o banco de dados "evento_facil"
CREATE DATABASE evento_facil;

-- Cria a tabela "eventos"
CREATE TABLE eventos (
    id SERIAL PRIMARY KEY COMMENT 'Identificador único para cada evento, com auto-incremento', 
    titulo VARCHAR(255) NOT NULL COMMENT 'O título do evento', 
    descricao TEXT NOT NULL COMMENT 'A descrição detalhada do evento', 
    data_inicio DATETIME NOT NULL COMMENT 'A data e hora de início do evento', 
    data_termino DATETIME NOT NULL COMMENT 'A data e hora de término do evento', 
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'A data e hora de criação do registro', 
    data_edicao DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW() COMMENT 'A data e hora de edição do registro',
    data_deletado DATETIME COMMENT 'A data e hora de deleção do registro',
    cor VARCHAR(50) COMMENT 'A cor do evento'
);