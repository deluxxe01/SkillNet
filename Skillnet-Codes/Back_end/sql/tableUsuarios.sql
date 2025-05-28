CREATE TABLE usuarios(
    id serial primary key,
    nome varchar(100),
    email varchar(200) unique,
    senha varchar(30)
);