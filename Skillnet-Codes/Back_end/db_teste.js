const { Pool } = require('pg');

async function connect() {
  if (global.connection) return global.connection.connect();
  
  const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
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
  const res = await client.query("SELECT * FROM servicos WHERE servico_id=$1",[id]);
  return res.rows;
}

async function insertServico(servico) {
  const client = await connect();
  const sql = `
    INSERT INTO servicos (titulo, area, descricao, imagem_capa)
    VALUES ($1, $2, $3, $4) `;
  await client.query(sql, [
    servico.titulo,
    servico.area,
    servico.descricao,
    servico.imagem_capa
  ]);
  client.release();
}

// RETURNING servico_id,titulo,area,imagem_capa

async function updateServico(id,servico) {
  const client = await connect();
  const sql = "UPDATE servicos SET titulo=$1,area=$2,descricao=$3,imagem_capa=$4 WHERE servico_id=$5";
 
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
  const sql = "DELETE FROM servicos WHERE servico_id=$1";
 
  await client.query(sql, [id]);
 
}



module.exports = {
  selectServicos,
  selectServico,
  insertServico,
updateServico,
 deleteServico
};