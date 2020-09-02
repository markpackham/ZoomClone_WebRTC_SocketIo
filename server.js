// Zoom clone, Express, Socket.io & WebRTC learned from https://www.youtube.com/watch?v=DvlyzDZDEq4
const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const { v4: uuidV4 } = require("uuid");

app.set("view engine", "ejs");
app.use(express.static("public"));

server.listen(3000);
