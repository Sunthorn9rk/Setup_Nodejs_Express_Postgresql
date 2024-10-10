require("dotenv").config({path: `${process.cwd()}/.env`});
const {Client} = require("pg");

const client = new Client({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

client.connect();

const createTableQuery = `
CREATE TABLE post (
    postID SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content TEXT,
    publication TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Tags VARCHAR(255)[]
);
`;

client.query(createTableQuery, (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Table is successfully created");
  }
  client.end();
});
