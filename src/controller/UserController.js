const users = ["Diego", "Lucas", "Eric"];

module.exports = {
  getUser(req, res) {
    const { id } = req.params;

    res.json({ user: users[id] });
  },
  getAllUsers(req, res) {
    res.json({ users: users });
  },
  postUser(req, res) {
    const { user } = req.body;
    users.push(user);
    res.json({ message: "Usuário inserido com sucesso!" });
  },
  putUser(req, res) {
    const { id } = req.params;
    const { user } = req.body;

    users[id] = user;

    res.json({ message: "Usuário atualizado com sucesso!", users: users });
  }
};
