// import { Server as SocketServer } from 'socket.io';
// import * as io from 'socket.io'; // Importa la clase Server


const controllerSockets = (socket) => {
  console.log(socket.id);


const TicketsCreados = []
/* const TicketsAtendidos = [] */

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
  

/*   socket.on('numeroEscritorio', (numeroEscritorio )=>{
    EscritoriosCreados.push(numeroEscritorio);
    socket.broadcast.emit('numeroEscri', EscritoriosCreados);
  }) */



  socket.on('datoPantalla', (NumEscritorio)=>{
    socket.broadcast.emit('datoPan',NumEscritorio)
  })

  socket.on('datoPantallaTicket', (ticketAtendido) => {
    socket.broadcast.emit('datoPanTi', ticketAtendido)
  })
}







export default controllerSockets;
