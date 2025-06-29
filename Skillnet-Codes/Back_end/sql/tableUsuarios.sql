CREATE TABLE IF NOT EXISTS usuarios (
    id_usuario serial PRIMARY KEY,
    nome varchar(100),
    email varchar(200) UNIQUE,
    senha varchar(60)
);

CREATE TABLE IF NOT EXISTS servicos (
    servico_id SERIAL PRIMARY KEY,
    titulo VARCHAR(80) NOT NULL,
    descricao VARCHAR(500),
    area VARCHAR(100),
    imagem_capa VARCHAR(2000),
    tempo_entrega VARCHAR(50),
    preco_minimo NUMERIC(10, 2) CHECK (preco_minimo >= 0),
    idioma VARCHAR(50),
    fk_usuario_id INT,
    CONSTRAINT servicos_usuarios FOREIGN KEY (fk_usuario_id) REFERENCES usuarios(id_usuario) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS portifolios (
    id_portifolio serial PRIMARY KEY,
    link_insta VARCHAR(255),
    link_linkedin VARCHAR(255),
    link_gmail VARCHAR(255),
    localidade VARCHAR(100),
    ano_experiencia VARCHAR(50),
    area_atuacao VARCHAR(100),
    foto_url VARCHAR(255),
    sobremim TEXT,
    nome VARCHAR(200)
);

CREATE TABLE IF NOT EXISTS comentarioPortifolio (
    id_comentario SERIAL PRIMARY KEY,
    comentario text,
    fk_Usuario_id INT,
    fk_portifolio_id INT ,
    CONSTRAINT fk_usuario_comentario_portifolio FOREIGN KEY (fk_Usuario_id) REFERENCES usuarios(id_usuario),
    CONSTRAINT fk_portifolio_comentario FOREIGN KEY (fk_portifolio_id) REFERENCES portifolios(id_portifolio)
);

CREATE TABLE IF NOT EXISTS comentarioServico (
    id_comentario SERIAL PRIMARY KEY,
    comentario text,
    fk_servico_id INT,
    fk_Usuario_id INT,
    estrelas varchar(5),
    CONSTRAINT fk_servico FOREIGN KEY (fk_servico_id) REFERENCES servicos(servico_id),
    CONSTRAINT fk_usuario_comentario_servico FOREIGN KEY (fk_Usuario_id) REFERENCES usuarios(id_usuario)
);

CREATE TABLE IF NOT EXISTS salasChat(
    id_sala serial PRIMARY KEY,
    FK_id_usuario1 integer not null,
    FK_id_usuario2 integer not null,
    nomeUser1 varchar(100) not null,
    nomeUser2 varchar(100) not null,
    CONSTRAINT fk_usuario1_salasChat FOREIGN KEY (FK_id_usuario1) REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    CONSTRAINT fk_usuario2_salasChat FOREIGN KEY (FK_id_usuario2) REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    CONSTRAINT sala_unica_por_par UNIQUE (FK_id_usuario1, FK_id_usuario2)
);
CREATE TABLE IF NOT EXISTS mensagen(
    id_mensagen serial PRIMARY key,
    menssagen varchar(200),
    fk_id_usuario int,
    fk_id_sala int,
    horas varchar(20),
    CONSTRAINT fk_usuario_mensagen FOREIGN key (fk_id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE,
    CONSTRAINT fk_id_sala_mensagen FOREIGN key (fk_id_sala) REFERENCES salasChat(id_sala) ON DELETE CASCADE
)