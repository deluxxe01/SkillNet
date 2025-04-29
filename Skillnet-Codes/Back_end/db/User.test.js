 const User = require('./User')

 describe('Teste dos métodos user', () => {
    let user;
  
    beforeEach(() => {
      user = User;
    });
  
    test('CT001 verificar se a inserção de usuários está funcionando', () => {
      expect(
        user.adicionarUsuario({
          nome: 'caio',
          email: 'caio@gmail.com',
          senha: '1234',
        })
      ).toEqual([
        {
          nome: 'caio',
          email: 'caio@gmail.com',
          senha: '1234',
        },
      ]);
    });
  });