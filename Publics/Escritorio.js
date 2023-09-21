const socket = io(); // Conéctate al servidor

const btnAtenderTicket = document.querySelector("#BotonTicket");
const Aten = document.querySelector("#Atendiendo");

socket.on('ticketNumber', (TicketsCreados) => {
    console.log('Número de ticket recibido:', TicketsCreados);

    // Mostrar el número de ticket en la interfaz
    document.getElementById('TicketRecibido').textContent = TicketsCreados;

    btnAtenderTicket.addEventListener('click', () => {
        if (TicketsCreados.length > 0) {
            // Accede al primer elemento del array y almacénalo en ticketAtendido
            const ticketAtendido = TicketsCreados[0];
            Aten.textContent = "Atendiendo a: " + ticketAtendido;
            console.log("Ticket atendido: " + ticketAtendido);

            // Elimina el primer elemento del array
            TicketsCreados.shift();

            console.log("Tickets en proceso de atención:", TicketsCreados);

            // Emite un evento para informar a todos los clientes sobre el cambio en el array
            socket.emit('updateTickets', TicketsCreados);
            socket.on('NuevosTickets', (TicketsCreados) => {
                const ticketAtendido = TicketsCreados[1];
                Aten.textContent = "Atendiendo a: " + ticketAtendido;
            })
        } else {
            Aten.textContent = "No hay tickets pendientes";
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const numeroEscritorioElement = document.getElementById('Escritorio1');
    const urlParams = new URLSearchParams(window.location.search);
    const numeroEscritorio = urlParams.get('escritorio');

    if (numeroEscritorio !== null) {
        numeroEscritorioElement.textContent = `${numeroEscritorio}`;
    }
});

// Escuchar el evento 'updateTickets' para actualizar el array en todos los clientes

