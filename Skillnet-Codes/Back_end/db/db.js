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
// async function verificarEmail(email) {
//     const client = await connect()

//     const sql = 'select * from usuarios where email = $1'

//     const vereficacao = await client.query(sql,[email]) 

//     if(vereficacao.rows.length){
//         console.log('email ja cadastrado')
//         return "erro o email ja esta em uso"
//     }else{

//         return "email liberado"

//     }
    
// }

module.exports = {
    cadastrarUsuarios
    
   
}