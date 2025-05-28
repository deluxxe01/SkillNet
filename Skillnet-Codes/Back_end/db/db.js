require('dotenv').config({ path: './secrets/.env' })

const fs = require('fs');
const path = require('path');
const createTables = require('../functions/createTables.js')


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

module.exports = {
    cadastrarUsuarios,
    deleteUser,
    updateUser,
    loginUser,
    connect
    
   
}