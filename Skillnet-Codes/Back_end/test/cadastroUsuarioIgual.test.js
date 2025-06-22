const { cadastrarUsuarios } = require('../db/db.js');

it('Deve ser cadastrado um usuario que esteja no bacno de dado e deve ser reijeitado',async()=>{
        const usuarioDuplicado = {
      nome: 'Thiago',
      email: 'thiago@gmail.com',
      senha: '123' 
    };
  await expect(cadastrarUsuarios(usuarioDuplicado)).rejects.toThrow();

})