import { Server as SocketServer } from 'socket.io';
import * as io from 'socket.io'; // Importa la clase Server

const controllerSockets = (socket, ioServer) => {
    console.log(socket.id);
    socket.on('nticket', (numero) => {
        console.log(numero)
    })
    socket.on('enviarescritorio', (data) => {
         
      socket.broadcast.emit('enviar', data);// Aquí es donde estás teniendo un problema
    })
}

export default controllerSockets;
