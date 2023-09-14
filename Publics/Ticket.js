const socket = io();


const boton = document.querySelector("#GenerarT");
const ticket = document.querySelector("#ticket");
let i = 0



boton.addEventListener('click', () => {
    // Generar un número de ticket (puedes implementar tu lógica para generarlo)
    i++;
    const mensaje = ticket.textContent = "Ticket: " + i;
    // Emitir el número de ticket al servidor
        socket.emit('ticketAssigned', mensaje);
    console.log( mensaje);
});

