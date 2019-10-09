module.exports = {
  logAccess(req, res, next) {
    console.log(`Method: ${req.method}, Endpoint: ${req.url}`);
    console.time("Request time");
    next(); //Executa todo o resto da aplicação
    //Código após a execução de toda aplicação
    console.timeEnd("Request time");
  }
};
