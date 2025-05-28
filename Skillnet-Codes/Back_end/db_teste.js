const { Pool } = require('pg');

async function connect() {
  if (global.connection) return global.connection.connect();

  const pool = new Pool({
    user: process.env.USER_NAME,
    host: process.env.HOST,
   database: process.env.DB_NAME, // e no .env: DB_NAME=skillnet
    password: process.env.PASSWORD,
    port: process.env.PORT_DB
  });

  global.connection = pool; // Salva o pool na variável global

  const client = await pool.connect(); 
  console.log('Conexão com o banco estabelecida.');

  const res = await client.query('SELECT NOW()');
  console.log('Hora atual do banco:', res.rows[0]);

  client.release(); 

  return pool.connect(); // Retorna uma nova conexão para uso
}

// Função para buscar todos os serviços
async function selectServicos() {
  const client = await connect();
  const res = await client.query("SELECT * FROM servicos ");
  return res.rows;
}

async function selectServico(id) {
  const client = await connect();
  const res = await client.query("SELECT * FROM servicos WHERE ID=$1",[id]);
  return res.rows;
}

async function insertServico(servico) {
  const client = await connect();
  const sql = `
    INSERT INTO servicos (titulo, area, descricao, imagem_capa)
    VALUES ($1, $2, $3, $4);
  `;
  await client.query(sql, [
    servico.titulo,
    servico.area,
    servico.descricao,
    servico.imagem_capa
  ]);
  client.release();
}



async function updateServico(id,servico) {
  const client = await connect();
  const sql = "UPDATE servicos SET titulo=$1,area=$2,descricao=$3,imagem_capa=$4 WHERE id=$5";
 
  await client.query(sql, [
    servico.titulo,
    servico.area,
    servico.descricao,
    servico.imagem_capa,
  id
]);
 
}
async function deleteServico(id) {
  const client = await connect();
  const sql = "DELETE FROM servicos WHERE id=$1";
 
  await client.query(sql, [id]);
 
}



module.exports = {
  selectServicos,
  selectServico,
  insertServico,
updateServico,
 deleteServico
};