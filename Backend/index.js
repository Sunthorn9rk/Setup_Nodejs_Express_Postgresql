require("dotenv").config({path: `${process.cwd()}/.env`});

const express = require("express");

const {readdirSync} = require("fs");

const app = express();

app.use(express.json());

const pool = require("./Config/db");

// เขียนลูปให้เข้าไปอ่าน route แต่ละอัน
readdirSync("./Routes").map((r) => app.use("", require("./Routes/" + r)));

const PORT = process.env.APP_PORT || 4000;

app.listen(PORT, () => {
  console.log("Server up and running on PORT:", PORT);
});
