const{deleteUser} = require('../db/db')


describe('teste unitario para vaerrificar seu a função esta apangando usuarios',()=>{

  let id = 22

 test('deve apagar um usuário existente com sucesso', async () => { // Este bloco 'test' PODE ser async
         await expect(deleteUser(id)).toBe(true); // Esta asserção é válida dentro de um test/it async
    });

})