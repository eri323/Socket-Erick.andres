import 'dotenv/config'
import express from 'express';
import http from 'http';
import * as io from 'socket.io';
import controllerSockets from "./controllers/Sockets.js"

const port = process.env.PORT
let app = express();
app.use(express.json());
app.use(express.static('PublicS'))
const server = http.createServer(app)

let ioServer = new io.Server(server);
app.set('socketio', io)

ioServer.on('connection', controllerSockets);

server.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});