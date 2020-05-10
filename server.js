const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
