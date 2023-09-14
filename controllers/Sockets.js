import { Server as SocketServer } from 'socket.io';
import * as io from 'socket.io'; // Importa la clase Server


const controllerSockets = (socket) => {
  console.log(socket.id);

socket.on('ticketAssigned', (mensaje) => {
    socket.broadcast.emit('ticketNumber', mensaje);
    console.log(mensaje);
  });
}






export default controllerSockets;
