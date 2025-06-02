CREATE TABLE IF NOT EXISTS usuarios (
    id_usuario serial PRIMARY KEY,
    nome varchar(100),
    email varchar(200) UNIQUE,
    senha varchar(60)
);

CREATE TABLE IF NOT EXISTS servicos (
    servico_id serial PRIMARY KEY,
    titulo varchar(80),
    descricao varchar(500),
    capa bytea
);

CREATE TABLE IF NOT EXISTS portifolios (
    id_portifolio serial PRIMARY KEY,
<<<<<<< HEAD
    nome varchar(60),
    experiencia varchar(400),
    localTrabalho varchar(300),
    especialidade text[],
    img1 bytea,
    img2 bytea,
    img3 bytea,
=======
    nome VARCHAR(100) NOT NULL,
    link_insta VARCHAR(255),
    link_linkedin VARCHAR(255),
    link_gmail VARCHAR(255),
    localidade VARCHAR(100),
    ano_experiencia VARCHAR(50),
    area_atuacao VARCHAR(100),
    foto_url VARCHAR(255),
    sobremim TEXT,
>>>>>>> 12a7e03 (Back Portfolios)
    fk_usuario_id int,
    CONSTRAINT fk_usuario_portifolio FOREIGN KEY (fk_usuario_id) REFERENCES usuarios(id_usuario)
);

CREATE TABLE IF NOT EXISTS comentarioPortifolio (
    id_comentario SERIAL PRIMARY KEY,
    comentario text,
    fk_Usuario_id INT,
    fk_portifolio_id INT,
    CONSTRAINT fk_usuario_comentario_portifolio FOREIGN KEY (fk_Usuario_id) REFERENCES usuarios(id_usuario),
    CONSTRAINT fk_portifolio_comentario FOREIGN KEY (fk_portifolio_id) REFERENCES portifolios(id_portifolio)
);

CREATE TABLE IF NOT EXISTS comentarioServico (
    id_comentario SERIAL PRIMARY KEY,
    comentario text,
    fk_servico_id INT,
    fk_Usuario_id INT,
    CONSTRAINT fk_servico FOREIGN KEY (fk_servico_id) REFERENCES servicos(servico_id),
    CONSTRAINT fk_usuario_comentario_servico FOREIGN KEY (fk_Usuario_id) REFERENCES usuarios(id_usuario)
);
