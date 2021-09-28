const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

app.get("/", function (req, res) {
  res.send("Hello /");
});

app.get("/world", function (req, res) {
  res.send("Hello world");
});

app.get("/cd", function (req, res) {
  res.send("Hello cd");
});

server.listen(3000, function () {
  console.log("Express server listening on port " + server.address().port);
});
