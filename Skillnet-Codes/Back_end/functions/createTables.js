require('dotenv').config({ path: './secrets/.env' })

async function createTables(table){

 const {Pool} = require('pg')

 const pool = new Pool({
    user:process.env.USER_NAME,
    host:process.env.HOST,
    database:process.env.DB_NAME,
    password:process.env.PASSWORD,
    port:process.env.DB_PORT
 })

 const client = await pool.connect()

 const sqlTable = table

 await client.query(sqlTable)

 
 client.release()
 
 pool.end()
 
 console.log('tabela criada com sucesso')
 
 return 'tabela: criada com sucesso'



}
module.exports=  createTables