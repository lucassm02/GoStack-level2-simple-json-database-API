//Tokens de usuários para login
const tokens = [
  { token: "T9oislrK3tMoIpvQMUVV", name: "Lucas" },
  { token: "GC3fMaNJMBgaoBoKIT1y", name: "João" },
  { token: "YZklgwd98kVYrL8MO0zI", name: "Paulo" }
];

module.exports = {
  //Validação de credênciais do usuário + log de acesso
  auth(req, res, next) {
    const { token } = req.headers;

    if (token) {
      const user = tokens.find(item => item.token == token);

      if (user) {
        console.log(`O usuário ${user.name} efetuou login.`);
        return next();
      }
      return res.status(401).json({ error: "Token is invalid." });
    }
    return res.status(401).json({ error: "Token is required." });
  }
};
