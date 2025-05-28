<<<<<<< HEAD
CREATE TABLE usuarios(
=======

CREATE TABLE if NOT EXISTS usuarios(
>>>>>>> e7d6692f6493721f0383825ce6433e793248ff30
    id serial primary key,
    nome varchar(100),
    email varchar(200) unique,
    senha varchar(30)
<<<<<<< HEAD
);
=======
);

CREATE TABLE IF NOT EXISTS servicos(
    id_servico serial primary key,
    titulo varchar(80),
    descricao varchar(500),
    capa bytea
);
CREATE TABLE IF NOT EXISTS portifolios(
    id_portifolio serial primary key,
    nome varchar(60),
    exeperiencia varchar(400),
    localTrabalho varchar(300),
    especialidade text[],
    img1 bytea,
    img2 bytea,
    img3 bytea,
    fk_usuario_id int,

    constraint fk_usuario FOREIGN KEY (fk_usuario_id) references usuarios(id)

);

CREATE TABLE if not exists comentarioPortifolio (
    id_comentario SERIAL PRIMARY KEY,
    comentario varchar(200),
    fk_Usuario_id INT,
    fk_Potfolio_id_portfolio INT,
    
    CONSTRAINT fk_usuario FOREIGN KEY (fk_Usuario_id) REFERENCES usuarios(id),
    CONSTRAINT fk_portfolio FOREIGN KEY (fk_Potfolio_id_portfolio) REFERENCES portifolios(id_portifolio)
);

CREATE TABLE if not exists comentarioServico (
    id_comentario SERIAL PRIMARY KEY,
    comentario varchar(200),
    fk_servico_id INT,
    fk_Usuario_id INT,
    CONSTRAINT fk_servico FOREIGN KEY (fk_servico_id) REFERENCES servicos(id),
    CONSTRAINT fk_usuario FOREIGN KEY (fk_Usuario_id) REFERENCES usuarios(id)

);
>>>>>>> e7d6692f6493721f0383825ce6433e793248ff30
