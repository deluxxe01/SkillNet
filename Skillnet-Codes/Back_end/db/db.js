require('dotenv').config({ path: './secrets/.env' })

const fs = require('fs');
const path = require('path');

const createTables = require('../functions/createTables.js');
const { create } = require('domain');


async function createDataBase() {
    const {Pool} = require('pg')

    const defaultPool = new Pool({
        user:process.env.USER_NAME,
        host:process.env.HOST,
        database:'postgres',
        password:process.env.PASSWORD,
        port:process.env.PORT_DB

    })
    const client = await defaultPool.connect()

    const dbName = process.env.DB_NAME

   const result = await client.query("SELECT 1 FROM pg_database WHERE datname = $1", [dbName])

    if(result.rowCount === 0){
        console.log(`dataBase ${dbName} vou criar`)
        await client.query(`CREATE DATABASE ${dbName}`)
        console.log('dataBase criado com sucesso')
    }else{
        console.log('data base ja existe')
    }

    client.release()

    await defaultPool.end()


    
}



const sqlPath = path.join(__dirname,'../sql/tableUsuarios.sql')
const sql = fs.readFileSync(sqlPath,'utf-8')

createDataBase()
createTables(sql)





async function connect(){

    const {Pool} = require('pg')
    
    if(global.conection)
        return global.conection.connect()

        
    const pool = new Pool({
        user:process.env.USER_NAME,
        host:process.env.HOST,
        database:process.env.DB_NAME,
        password:process.env.PASSWORD,
        dialect:process.env.DIALECT,
        port:process.env.PORT_DB
    })

    const client = await pool.connect() 
    console.log('conexão com sucesso😮😮😮😮😮')

    const resdb = await client.query("SELECT now()");
    console.log(resdb.rows[0]); // Tomando a primeira posição do array de onde virá o tempo do banco de dados.

    client.release()

  // Podemos salvar nosso pool em uma conexão global. Então podemos executar o "if" como no início deste arquivo
    global.connection = pool;

    return pool.connect()

}

connect()


async function cadastrarUsuarios(usuario) {
    const client = await connect() 

    try{

     const sqlPath = path.join(__dirname, '../sql/insertUser.sql');
     
     const sql = fs.readFileSync(sqlPath, 'utf-8');
     
     const values =[usuario.nome,usuario.email,usuario.senha]
     
     const result = await client.query(sql,values)
     
     const user = result.rows[0] 

     console.log(user)

     return user


   }catch(erro){
    console.log(erro)
   
    

   }
    
} 


 async function deleteUser(id) { // função para apagar usuarios

    const client = await connect()
    try{

    const sqlPath = path.join(__dirname,'../sql/deleteUser.sql')// variavel que informa onde esta o arquivo
    
    const sql = fs.readFileSync(sqlPath,'utf-8')// variavel que guarda o query do arquivo sql

    const value = [id] // id do usuario que sera delatado


    await client.query(sql,value)// consulta sendo feita

    }catch(error){

        console.log(error)
    }
  
 }

 async function updateUser(usuario){

    const client = await connect()
    

    const sqlPath = path.join(__dirname,'../sql/updateUser.sql')

    const sql = fs.readFileSync(sqlPath,'utf-8')
    
   
    const value = [usuario.nome,usuario.email,usuario.senha,usuario.id]

    

    const result = await client.query(sql,value)

    return result.rows[0]
 

    
 }

 async function loginUser(usuario) {

    const  client = await connect()

    const sqlPath = path.join(__dirname,'../sql/loginUser.sql')

    const sql = fs.readFileSync(sqlPath,'utf-8')

    const values = [usuario.email,usuario.senha]

    const result = await client.query(sql,values)
   

    if(result.rows==[]){
        console.log('usuario n equixiste')
        return false

    }else{

        console.log('usuario equixiste')
        const user = result.rows[0]
        
        return user
    }

   
    
    
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



    // Função para listar portfolios
 async function selectPorti() {

    // Estabelecer conexão com o banco de dados
    const portfolio = await connect();

    // Enviar comando SQL para o banco de dados
    const res = await portfolio.query("SELECT * FROM portfolio");

    // Retorna as linhas (registros) da tabela
    return res.rows;
  }
  async function insertPorti(porti) {
  
  //Estabelendo a conexão com o banco de dados
  const portfolio = await connect();
  
  //Comando/query que vai ser usado na operação (os $ corresponde a cada coluna, no caso temos 5 colunas)
  let sql = "INSERT INTO portfolio(nome, link_insta, link_linkedin, link_gmail, localidade, ano_experiencia, area_atuacao, foto_url, sobremim) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)"
  
  //Passar os dados que estão chegando em portfolios
  const values= [porti.nome, porti.link_insta, porti.link_linkedin, porti.link_gmail, porti.localidade, porti.ano_experiencia, porti.area_atuacao, porti.foto_url, porti.sobremim ]
  
  //Enviar os tais dados para o banco
  await portfolio.query(sql,values)
  
  }

 async function createComentServico(comment){

    const client = await connect()

    const values = [comment.comentario,comment.id_usuario,comment.id_servico]

    const sql ="insert into comentarioServico(comentario, fk_servico_id,fk_Usuario_id) values($1,$2,$3)"

    await client.query(sql,values)


 } 
module.exports = {
    cadastrarUsuarios,
    deleteUser,
    updateUser,
    loginUser,
    connect,
    insertPorti,
    selectPorti,
    selectServicos,
    selectServico,
    insertServico,
  updateServico,
   deleteServico
  };

