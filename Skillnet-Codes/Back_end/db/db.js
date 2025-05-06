require('dotenv').config({ path: './secrets/.env' })

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

     const sql = "insert into usuarios(nome,email,senha)VALUES($1,$2,$3)"
     
     const values =[usuario.nome,usuario.email,usuario.senha]
     
     await client.query(sql,values)

   }catch(erro){
    console.log(erro)
   
    

   }
    
} 
 async function verificarEmail(usuario) {
     const client = await connect()

     const sqlEmail ='SELECT email FROM usuarios WHERE email = $1' 

     const email = [usuario.email]

     const verrificarEmail = await client.query(sqlEmail,email)   
     
    if( verrificarEmail.rows.length > 0){
        console.log('email ja cadastrado')
        return true // retorna que o email ja foi cadastrado é avisa no front passado pelo back
     }else{

        return false // retorna que o email não existe e pode ser utilizado

    }
    
 }

 async function deleteUser(id) { // função para apagar usuarios

    const client = await connect()
    try{

    const sql = 'DELETE FROM usuarios WHERE id = $1' // variavel que guarda o query da consulta
    const value = [id] // id do usuario que sera delatado

    await client.query(sql,value)// consulta sendo feita

    }catch(error){

        console.log(error)
    }
  
 }

 async function updateUser(usuario){

    const client = await connect()
  
    const sql= ' UPDATE usuarios SET nome = $1, email = $2, senha = $3 WHERE id = $4'
    
    const value = [usuario.nome,usuario.email,usuario.senha,usuario.id]

    await client.query(sql,value)
 

    
 }

module.exports = {
    cadastrarUsuarios,
    verificarEmail,
    deleteUser,
    updateUser
    
   
}