CREATE TABLE IF NOT EXISTS usuarios (
    id_usuario serial PRIMARY KEY,
    nome varchar(100),
    email varchar(200) UNIQUE,
    senha varchar(60)  -- Considere aumentar o tamanho para armazenar senhas com hash
);

CREATE TABLE IF NOT EXISTS servicos (
    id_servico serial PRIMARY KEY,
    titulo varchar(80),
    descricao varchar(500),
    capa bytea
);

CREATE TABLE IF NOT EXISTS portifolios (
    id_portifolio serial PRIMARY KEY,
    nome varchar(60),
    experiencia varchar(400),  -- Corrigido o erro de digitação
    localTrabalho varchar(300),
    especialidade text[],
    img1 bytea,
    img2 bytea,
    img3 bytea,
    fk_usuario_id int,
    CONSTRAINT fk_usuario_portifolio FOREIGN KEY (fk_usuario_id) REFERENCES usuarios(id_usuario)
);

CREATE TABLE IF NOT EXISTS comentarioPortifolio (
    id_comentario SERIAL PRIMARY KEY,
    comentario text,  -- Usando 'text' para suportar comentários mais longos
    fk_Usuario_id INT,
    fk_portifolio_id INT,  -- Corrigido o nome da coluna
    CONSTRAINT fk_usuario_comentario_portifolio FOREIGN KEY (fk_Usuario_id) REFERENCES usuarios(id_usuario),
    CONSTRAINT fk_portifolio_comentario FOREIGN KEY (fk_portifolio_id) REFERENCES portifolios(id_portifolio)
);

CREATE TABLE IF NOT EXISTS comentarioServico (
    id_comentario SERIAL PRIMARY KEY,
    comentario text,  -- Usando 'text' para suportar comentários mais longos
    fk_servico_id INT,
    fk_Usuario_id INT,
    CONSTRAINT fk_servico FOREIGN KEY (fk_servico_id) REFERENCES servicos(id_servico),
    CONSTRAINT fk_usuario_comentario_servico FOREIGN KEY (fk_Usuario_id) REFERENCES usuarios(id_usuario)  -- Renomeado para evitar conflito
);