const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(require("./controllers/burgers_controllers"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));
