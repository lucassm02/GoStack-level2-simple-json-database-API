const users = ["Diego", "Lucas", "Eric"];

module.exports = {
  get(req, res) {
    const { id } = req.params;

    return res.json({ user: users[id] });
  },
  getAll(req, res) {
    return res.json({ users: users });
  },
  post(req, res) {
    const { user } = req.body;
    users.push(user);
    return res.json({ message: "Usuário inserido com sucesso!" });
  },
  put(req, res) {
    const { id } = req.params;
    const { user } = req.body;

    users[id] = user;

    return res.json({ message: "Usuário atualizado com sucesso!", users });
  },
  delete(req, res) {
    const { id } = req.params;

    users.splice(id, 1);

    return res.json({ message: "Usuário deletado com sucesso!", users });
  }
};
