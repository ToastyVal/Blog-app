// import AppComments from "../../blog-app/src/components/comments.js";
// const AppComments = require("../../blog-app/src/components/comments.js");
// import { Express } from "express";
// import bodyParser from "body-parser";
// import { CorsOptions } from "cors";
// import mysql from "mysql";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "$4Happytesla",
  database: "blogdb",
});

// app.use(cors());

// app.use(bodyParser.urlencoded({ extended: true }));

//this works
// db.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = `INSERT INTO comments (userName , textComment) VALUES ('${AppComments.commentUserName}', '${AppComments.commentText}');`;
//   db.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });

app.post("/", function (req, res) {
  res.set("Access-Control-Allow-Origin", "*");
  const { UserName, CommentInfo } = req.body;
  let connection = new sql.ConnectionPool(db, function (err) {
    let request = new sql.Request(connection);
    request.query(
      "insert into comments (userName , textComment) values ('" +
        UserName +
        "', '" +
        CommentInfo +
        "')"
    );
    console.log("info sent");
  });
  res.send({ message: "Success" });
});

app.listen(3001, () => {
  console.log("Server is running..");
});

// app.post("/api/insert", (req, res) => {
//   console.log("app.post was called");
//   const userName = req.body.userName;
//   const comment = req.body.comment;
//   const sqlInsert = `INSERT INTO comments (userName , textComment) VALUES (?,?);`;
//   db.query(sqlInsert, [userName, comment], (err, result) => {
//     console.log(result);
//   });
// });

//run this to start the sql server
// nodemon devStart
