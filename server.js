require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT;
const jsonFomate = require("body-parser");
const db = require("./databas");
const xdnkjne = require("./router/inboxrouter")
const normal = require("./router/loginrouter")
const nnormahl = require("./router/userrouter")



app.use(jsonFomate.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use("/", xdnkjne);
app.use("/login", normal);
app.use("/user", nnormahl);
const server = app;
server.listen(port, () => console.log(`this server is running at this port http://localhost:${port}`));

 