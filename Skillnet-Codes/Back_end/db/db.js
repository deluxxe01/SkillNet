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
    
   
    const value = [usuario.nome,usuario.email,usuario.senha,usuario.id_usuario]

    

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
      INSERT INTO servicos (titulo, descricao,area,imagem_capa , tempo_entrega, preco_minimo, idioma)
      VALUES ($1, $2, $3, $4, $5, $6,$7)
    `;
    await client.query(sql, [
      servico.titulo,
      servico.descricao,
      servico.area,
      servico.imagem_capa ,          // correspondendo ao campo 'capa' do banco
      servico.tempo_entrega,
      servico.preco_minimo,
      servico.idioma
    ]);
    client.release();
  }
  
  // RETURNING servico_id,titulo,area,imagem_capa
  
  async function updateServico(id, servico) {
    const client = await connect();
    const sql = `
      UPDATE servicos
      SET titulo = $1,
          descricao = $2,
          area=$3,
          imagem_capa = $4,
          tempo_entrega = $5,
          preco_minimo = $6,
          idioma = $7
      WHERE servico_id = $8
    `;
  
    await client.query(sql, [
      servico.titulo,
      servico.descricao,
      servico.area,
      servico.imagem_capa ,          // correspondendo ao campo 'capa' do banco
      servico.tempo_entrega,
      servico.preco_minimo,
      servico.idioma,
      id
    ]);
  
    client.release();
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

//funcao para adcionar porfolios
  async function insertPorti(porti) {

  //Estabelendo a conexão com o banco de dados
  const portfolio = await connect();
  
  //Comando/query que vai ser usado na operação (os $ corresponde a cada coluna, no caso temos 5 colunas)
  let sql = "INSERT INTO portifolios(nome, link_insta, link_linkedin, link_gmail, localidade, ano_experiencia, area_atuacao, foto_url, sobremim, fk_usuario_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9,$10)"
  
  //Passar os dados que estão chegando em portfolios
  const values= [porti.nome, porti.link_insta, porti.link_linkedin, porti.link_gmail, porti.localidade, porti.ano_experiencia, porti.area_atuacao, porti.foto_url, porti.sobremim,porti.fkUsuario ]
  
  //Enviar os tais dados para o banco
  await portfolio.query(sql,values)
  
  }

  // Buscar um portfólio por ID
async function selectPortiById(id) {
    const portfolio = await connect();
    const res = await portfolio.query("SELECT * FROM portifolios WHERE id = $1", [id]);
    return res.rows[0]; // retorna um único objeto
}

// Atualizar um portfólio
async function updatePorti(id, porti) {
    const portfolio = await connect();
    const sql = `
        UPDATE portifolios SET 
            nome = $1, 
            link_insta = $2, 
            link_linkedin = $3, 
            link_gmail = $4, 
            localidade = $5, 
            ano_experiencia = $6, 
            area_atuacao = $7, 
            foto_url = $8, 
            sobremim = $9, 
            fk_usuario_id = $10
        WHERE id = $11
    `;
    const values = [
        porti.nome, porti.link_insta, porti.link_linkedin, porti.link_gmail,
        porti.localidade, porti.ano_experiencia, porti.area_atuacao,
        porti.foto_url, porti.sobremim, porti.fkUsuario, id
    ];
    await portfolio.query(sql, values);
}

// Deletar um portfólio por ID
async function deletePorti(id) {
    const portfolio = await connect();
    await portfolio.query("DELETE FROM portifolios WHERE id = $1", [id]);
}

 async function createComentServico(comment){

    const client = await connect()

    const values = [comment.comentario,comment.id_usuario,comment.id_servico]

    const sql ="insert into comentarioServico(comentario, fk_servico_id,fk_Usuario_id) values($1,$2,$3)"

    await client.query(sql,values)


 } 

 async function deleteCommentServico(id) {

    const client = await connect()

    const values = [id]

    const sql = " DELETE FROM comentarioServico WHERE id_comentario = $1"

    await client.query(sql,values)
    
 }
  
 async function createSalasChat(user1,user2) {
  
  const client = await connect()

  const sql = 'insert into salasChat(FK_id_usuario1,FK_id_usuario2,nomeUser1,nomeUser2) values($1,$2,$3,$4) returning id_sala' 

  const values=[user1.id,user2.id,user1.nome,user2.nome]

  const res = await client.query(sql,values)

  console.log(res.rows[0].id_sala)

  return res.rows[0].id_sala
  
 }

 async function findSala(user){

  const client = await connect()

  const sql = "SELECT * FROM salasChat WHERE FK_id_usuario1 = $1 OR FK_id_usuario2 = $1"
 
  const values = [user.id_usuario]

  console.log(user.id_usuario)

  const res = await client.query(sql,values)

  return res.rows

 }

 async function findMenssagens(id_usuario) {

  const client = await connect()
  
  const sql = 'select * from mensagen where fk_id_usuario = $1'

  const resultado=await client.query(sql,[id_usuario])

  return resultado.rows


  
 }

 async function createMensage(obj) {

  const client = await connect()

  const sql = "insert into mensagen(menssagen,fk_id_usuario) values($1,$2)"
  const values = [obj.menssagen,obj.id_usuario]
  
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
    deletePorti,
    updatePorti,
    selectPortiById,
    selectServicos,
    selectServico,
    insertServico,
    updateServico,
    deleteServico,
    createComentServico,
    deleteCommentServico,
    createSalasChat,
    findSala,
    findMenssagens,createMensage
  };

