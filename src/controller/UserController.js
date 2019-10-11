const shortId = require('shortid');
const db = require('../config/db');

module.exports = {
  async get(req, res) {
    const id = parseInt(req.params.id, 10);
    const result = await db
      .get('user')
      .find({ id })
      .value();
    if (result) return res.json({ message: 'Usuários listados com sucesso.', result });

    return res.json({ message: 'Usuário não existe.' });
  },
  async getAll(req, res) {
    const result = await db.get('user').value();
    if (result) return res.json({ message: 'Usuário listado com sucesso.', result });

    return res.json({ message: 'Não há registros.', result });
  },
  async post(req, res) {
    const lastId = await db
      .get('user')
      .map('id')
      .last();

    // Verificação para atribuir id
    const id = lastId.value() ? lastId.value() + 1 : 1;

    // Adiciona token valido e id ao objeto
    const user = Object.assign(req.body.user, {
      id,
      token: shortId.generate()
    });

    const result = await db
      .get('user')
      .push(user)
      .write();

    return res.json({ message: 'Usuário cadastrado com sucesso.', result });
  },
  async put(req, res) {
    const id = parseInt(req.params.id, 10);
    const { user } = req.body;

    // Deleta informações imutaveis caso elas existam
    delete user.token;
    delete user.id;

    // Atualiza dados do usuário
    const result = await db
      .get('user')
      .find({ id })
      .assign(user)
      .write();

    return res.json({ message: 'Usuário atualizado com sucesso.', result });
  },
  async delete(req, res) {
    const id = parseInt(req.params.id, 10);

    // Atualiza dados do usuário
    const result = await db
      .get('user')
      .remove({ id })
      .write();

    if (result.length) return res.json({ message: 'Usuário deletado com sucesso.' });

    return res.json({ message: 'Usuário não existe.' });
  }
};
