const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());

const SELECT_QUERY = "SELECT * FROM leadData";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rajesh99",
  database: "MoatData",
});
connection.connect((err) => {
  if (err) {
    return console.error("error is--" + err.message);
  }
  console.log("Connected to the MySQL server.");
});

//console.log(connection);

app.get("/leads", (req, res) => {
  connection.query(SELECT_QUERY, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results,
      });
    }
  });
});

app.get("/", (req, res) => {
  res.send("hello from the dataset app server good");
});

app.listen(4000, () => {
  console.log("Dataset app is listening port is 4000");
});
