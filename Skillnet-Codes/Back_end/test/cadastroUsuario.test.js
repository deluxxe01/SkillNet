// cadastrarUsuarios.test.js
const { cadastrarUsuarios } = require('../db/db.js'); // ajuste o caminho
const { connect } = require('../db/db.js'); // Função connect para acessar o banco de dados real

describe('cadastrarUsuarios()', () => {
  let client; // Cliente do banco de dados

  // Antes de cada teste, vamos garantir que temos uma conexão com o banco de dados
  beforeAll(async () => {
    client = await connect(); // Conectando ao banco de dados real
  });

  // Após cada teste, vamos limpar qualquer dado inserido
  afterEach(async () => {
    // Limpando o banco de dados de teste
    await client.query('DELETE FROM usuarios WHERE email = $1', ['thiago@gmail.com']);
  });

  // Após todos os testes, vamos garantir que a conexão seja fechada
  afterAll(async () => {
    await client.release(); // Liberando a conexão com o banco
  });

  it('deve cadastrar e retornar o usuário inserido', async () => {
    const usuario = {
      nome: 'Thiago2',
      email: 'thiago2@gmail.com',
      senha: '123'
    };

    // Chamando a função que vai inserir o usuário
    const resultado = await cadastrarUsuarios(usuario);

    // Verificando se o resultado da inserção contém os dados esperados
    expect(resultado).toHaveProperty('id_usuario'); // Verificando que o ID foi retornado
    expect(resultado.nome).toBe(usuario.nome);
    expect(resultado.email).toBe(usuario.email);
    expect(resultado.senha).toBe(usuario.senha);

    // Verificando se o usuário foi realmente inserido no banco de dados
    const { rows } = await client.query('SELECT * FROM usuarios WHERE email = $1', [usuario.email]);
    expect(rows.length).toBe(1); // Garantindo que o usuário foi inserido
    expect(rows[0].nome).toBe(usuario.nome);
    expect(rows[0].email).toBe(usuario.email);
    expect(rows[0].senha).toBe(usuario.senha);
  });
});