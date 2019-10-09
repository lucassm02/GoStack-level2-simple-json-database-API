const express = require("express");
const routes = require("./routes");

const TokenMiddleware = require("./middleware/TokenMiddleware");
const LogMiddleware = require("./middleware/LogMiddleware");

const app = express();

//Global middleware
app.use(TokenMiddleware.auth);
app.use(LogMiddleware.logAccess);

app.use(express.json());
app.use(routes);
app.listen("3333");
