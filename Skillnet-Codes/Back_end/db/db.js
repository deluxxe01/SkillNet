require('dotenv').config({ path: './secrets/.env' });
const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');

let pool;

async function createDataBase() {
  const defaultPool = new Pool({
    user: process.env.USER_NAME,
    host: process.env.HOST,
    database: 'postgres',
    password: process.env.PASSWORD,
    port: process.env.PORT_DB,
  });

  const client = await defaultPool.connect();
  const dbName = process.env.DB_NAME;

  const result = await client.query("SELECT 1 FROM pg_database WHERE datname = $1", [dbName]);

  if (result.rowCount === 0) {
    console.log(`Database ${dbName} não existe, criando...`);
    await client.query(`CREATE DATABASE ${dbName}`);
    console.log('Database criado com sucesso!');
  } else {
    console.log('Database já existe.');
  }

  client.release();
  await defaultPool.end();
}

async function createTables(sql) {
  const client = await connect();
  try {
    await client.query(sql);
    console.log('Tabelas criadas ou verificadas com sucesso!');
  } catch (error) {
    console.error('Erro ao criar tabelas:', error);
  } finally {
    client.release();
  }
}

async function connect() {
  if (pool) return pool.connect();

  pool = new Pool({
    user: process.env.USER_NAME,
    host: process.env.HOST,
    database: process.env.DB_NAME,
    password: process.env.PASSWORD,
    port: process.env.PORT_DB,
  });

  console.log('Conexão com banco estabelecida!');
  return pool.connect();
}

// --- USUÁRIOS ---
async function cadastrarUsuarios(usuario) {
  const client = await connect();
  try {
    const sql ='insert into usuarios(nome,email,senha) VALUES($1,$2,$3)  RETURNING id_usuario,nome,email,senha'
    const values = [usuario.nome, usuario.email, usuario.senha];
    const result = await client.query(sql, values);
    console.log(result.rows[0])
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
      throw new Error("houve um erro")
  } finally {
    client.release();
  }
}

async function deleteUser(id) {
  const client = await connect();
  try {
  
    const sql = 'delete from usuarios where id_usuario = $1'
    await client.query(sql, [id]);
    return true
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
    throw new Error("houve um erro")
  } finally {
    client.release();
  }
}

async function updateUser(usuario) {
  const client = await connect();
  try {
    const sqlPath = path.join(__dirname, '../sql/updateUser.sql');
    const sql = fs.readFileSync(sqlPath, 'utf-8');
    const values = [usuario.nome, usuario.email, usuario.senha, usuario.id_usuario];
    const result = await client.query(sql, values);
    return result.rows[0];
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
  } finally {
    client.release();
  }
}

async function loginUser(usuario) {
  const client = await connect();
  try {
    const sqlPath = path.join(__dirname, '../sql/loginUser.sql');
    const sql = fs.readFileSync(sqlPath, 'utf-8');
    const values = [usuario.email, usuario.senha];
    const result = await client.query(sql, values);
    return result.rows.length === 0 ? false : result.rows[0];
  } catch (error) {
    console.error('Erro no login:', error);
  } finally {
    client.release();
  }
}

// --- SERVIÇOS ---
async function selectServicos() {
  const client = await connect();
  try {
    const res = await client.query("SELECT * FROM servicos");
    return res.rows;
  } finally {
    client.release();
  }
}

async function selectServico(id) {
  const client = await connect();
  try {
    const res = await client.query("SELECT * FROM servicos WHERE servico_id = $1", [id]);
    return res.rows[0];
  } finally {
    client.release();
  }
}

async function insertServico(servico) {
  const client = await connect();
  const sql = `
    INSERT INTO servicos (titulo, descricao, area, imagem_capa, tempo_entrega, preco_minimo, idioma)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
  `;
  const values = [
    servico.titulo,
    servico.descricao,
    servico.area,
    servico.imagem_capa,
    servico.tempo_entrega,
    servico.preco_minimo,
    servico.idioma,
  ];
  try {
    await client.query(sql, values);
  } finally {
    client.release();
  }
}

async function updateServico(id, servico) {
  const client = await connect();
  const sql = `
    UPDATE servicos SET
      titulo = $1,
      descricao = $2,
      area = $3,
      imagem_capa = $4,
      tempo_entrega = $5,
      preco_minimo = $6,
      idioma = $7
    WHERE servico_id = $8
  `;
  const values = [
    servico.titulo,
    servico.descricao,
    servico.area,
    servico.imagem_capa,
    servico.tempo_entrega,
    servico.preco_minimo,
    servico.idioma,
    id,
  ];
  try {
    await client.query(sql, values);
  } finally {
    client.release();
  }
}

async function deleteServico(id) {
  const client = await connect();
  try {
    await client.query("DELETE FROM servicos WHERE servico_id = $1", [id]);
  } finally {
    client.release();
  }
}

// --- PORTIFÓLIOS (sem usuários) ---
async function selectPorti() {
  const client = await connect();
  try {
    const res = await client.query("SELECT * FROM portifolios");
    return res.rows;
  } finally {
    client.release();
  }
}

async function selectPortiById(id) {
  const client = await connect();
  try {
    const res = await client.query("SELECT * FROM portifolios WHERE id_portifolio = $1", [id]);
    return res.rows[0];
  } finally {
    client.release();
  }
}

async function insertPorti(porti) {
  const client = await connect();
  const sql = `
    INSERT INTO portifolios
      (link_insta, link_linkedin, link_gmail, localidade, ano_experiencia, area_atuacao, foto_url, sobremim)
    VALUES
      ($1, $2, $3, $4, $5, $6, $7, $8)
  `;
  const values = [
    porti.link_insta,
    porti.link_linkedin,
    porti.link_gmail,
    porti.localidade,
    porti.ano_experiencia,
    porti.area_atuacao,
    porti.foto_url,
    porti.sobremim
  ];
  try {
    await client.query(sql, values);
  } catch (error) {
    console.error('Erro ao inserir portfólio:', error);
  } finally {
    client.release();
  }
}

async function updatePorti(id, porti) {
  const client = await connect();
  const sql = `
    UPDATE portifolios SET
      link_insta = $1,
      link_linkedin = $2,
      link_gmail = $3,
      localidade = $4,
      ano_experiencia = $5,
      area_atuacao = $6,
      foto_url = $7,
      sobremim = $8
    WHERE id_portifolio = $9
  `;
  const values = [
    porti.link_insta,
    porti.link_linkedin,
    porti.link_gmail,
    porti.localidade,
    porti.ano_experiencia,
    porti.area_atuacao,
    porti.foto_url,
    porti.sobremim,
    id
  ];
  try {
    await client.query(sql, values);
  } finally {
    client.release();
  }
}

async function deletePorti(id) {
  const client = await connect();
  try {
    await client.query("DELETE FROM portifolios WHERE id_portifolio = $1", [id]);
  } finally {
    client.release();
  }
}

// --- COMENTÁRIOS ---
async function createComentServico(comment) {
  const client = await connect();
  const sql = `
    INSERT INTO comentarioServico (comentario, fk_servico_id, fk_usuario_id)
    VALUES ($1, $2, $3)
  `;
  const values = [comment.comentario, comment.id_servico, comment.id_usuario];
  try {
    await client.query(sql, values);
  } finally {
    client.release();
  }
}

async function deleteCommentServico(id) {
  const client = await connect();
  try {
    await client.query("DELETE FROM comentarioServico WHERE id_comentario = $1", [id]);
  } finally {
    client.release();
  }
}

// --- CHAT ---
async function createSalasChat(user1, user2) {
  const client = await connect();
  const sql = `
    INSERT INTO salasChat (FK_id_usuario1, FK_id_usuario2, nomeUser1, nomeUser2)
    VALUES ($1, $2, $3, $4) RETURNING id_sala
  `;
  const values = [user1.id, user2.id, user1.nome, user2.nome];
  try {
    const res = await client.query(sql, values);
    return res.rows[0].id_sala;
  } finally {
    client.release();
  }
}

async function findSala(user) {
  const client = await connect();
  const sql = `
    SELECT * FROM salasChat WHERE FK_id_usuario1 = $1 OR FK_id_usuario2 = $1
  `;
  try {
    const res = await client.query(sql, [user.id_usuario]);
    return res.rows;
  } finally {
    client.release();
  }
}

async function findMenssagens(id_usuario) {
  const client = await connect();
  try {
    const res = await client.query('SELECT * FROM mensagen WHERE fk_id_usuario = $1', [id_usuario]);
    return res.rows;
  } finally {
    client.release();
  }
}

async function createMensage(obj) {
  const client = await connect();
  const sql = `
    INSERT INTO mensagen (menssagen, fk_id_usuario)
    VALUES ($1, $2)
  `;
  const values = [obj.menssagen, obj.fk_id_usuario];
  try {
    await client.query(sql, values);
  } finally {
    client.release();
  }
}

async function joinSala(user) {
  const client = await connect();
  const sql = `
    SELECT id_sala FROM salasChat WHERE FK_id_usuario1 = $1 OR FK_id_usuario2 = $1
  `;
  try {
    const res = await client.query(sql, [user.id_usuario]);
    return res.rows[0];
  } finally {
    client.release();
  }
}

async function salvarMenssagen(obj) {
  const client = await connect();
  const sql = `
    INSERT INTO mensagen (menssagen, fk_id_usuario, fk_id_sala, horas)
    VALUES ($1, $2, $3, $4)
  `;
  const values = [obj.menssagen, obj.fk_id_usuario, obj.id_sala, obj.horas];
  try {
    await client.query(sql, values);
  } finally {
    client.release();
  }
}

async function selecionarMenssagens(id_sala) {
  const client = await connect();
  try {
    const res = await client.query('SELECT * FROM mensagen WHERE fk_id_sala = $1', [id_sala]);
    return res.rows;
  } finally {
    client.release();
  }
}

// --- INICIALIZAÇÃO ---


module.exports = {
  connect,
  cadastrarUsuarios,
  deleteUser,
  updateUser,
  loginUser,
  selectServicos,
  selectServico,
  insertServico,
  updateServico,
  deleteServico,
  selectPorti,
  selectPortiById,
  insertPorti,
  updatePorti,
  deletePorti,
  createComentServico,
  deleteCommentServico,
  createSalasChat,
  findSala,
  findMenssagens,
  createMensage,
  joinSala,
  salvarMenssagen,
  selecionarMenssagens,
};
