const express = require("express");
const bodyParser = require("body-parser");
const { join } = require("path");
const { home, users } = require("./api");

const PORT = 3000;
const HOST = "localhost";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(join(__dirname, "public")));

app.use("/", home);
app.use("/users", users);

app.listen(PORT, HOST, () => {
  console.log(`Server listening on: http://${HOST}:${PORT}`);
});
