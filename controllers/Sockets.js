import { Server as SocketServer } from 'socket.io';
import * as io from 'socket.io'; // Importa la clase Server


const controllerSockets = (socket) => {
  console.log(socket.id);


const TicketsCreados = []

socket.on('ticketAssigned', (mensaje) => {
  TicketsCreados.push(mensaje);
    socket.broadcast.emit('ticketNumber', TicketsCreados);
    console.log(TicketsCreados);
  });


  socket.on('updateTickets', (TicketsCreados) => {
    console.log('Array de tickets actualizado en todos los clientes:', TicketsCreados);
    // Aquí puedes realizar cualquier acción necesaria con el nuevo array de tickets en los demás escritorios
     socket.broadcast.emit('ticketNumber', TicketsCreados);
  });
  
}







export default controllerSockets;
