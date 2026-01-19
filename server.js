/* eslint no-control-regex: "off", no-unused-vars: ["error", { "varsIgnorePattern": "stdout*" }] */

// Requires
require("ejs");
const express = require("express");
const app = express();
const compression = require("compression");
const minify = require("express-minify");
const path = require("path");
const helmet = require("helmet");
const router = require("./src/routes.js");

// Config
app.set("view engine", "ejs");
app.use(compression());
app.use(minify());
app.use(express.json());
app.use(helmet());
app.use("/", router);

global.appRoot = path.resolve(__dirname);

// 🚀 PORTA CORRETA PARA O RENDER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
