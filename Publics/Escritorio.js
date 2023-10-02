const socket = io(); // Conéctate al servidor

const btnAtenderTicket = document.querySelector("#BotonTicket");
const Aten = document.querySelector("#Atendiendo");
const NumEscritorio = []
document.addEventListener('DOMContentLoaded', () => {
    const numeroEscritorioElement = document.getElementById('Escritorio1');
    const urlParams = new URLSearchParams(window.location.search);
    const numeroEscritorio = urlParams.get('escritorio');
    NumEscritorio.push(numeroEscritorio)
    console.log(NumEscritorio)
    if (numeroEscritorio !== null) {
        numeroEscritorioElement.textContent = `${numeroEscritorio}`;

    }
    /* 
        socket.emit('numeroEscritorio', numeroEscritorio); */
});
socket.on('ticketNumber', (TicketsCreados) => {
    console.log('Número de ticket recibido:', TicketsCreados);

    // Mostrar el número de ticket en la interfaz
    document.getElementById('TicketRecibido').textContent = TicketsCreados;

    btnAtenderTicket.addEventListener('click', () => {
        if (TicketsCreados.length > 0) {
            // Accede al primer elemento del array y almacénalo en ticketAtendido
            const ticketAtendido = TicketsCreados[0];
            Aten.textContent = "Atendiendo a " + ticketAtendido;
            console.log("Ticket atendido: " + ticketAtendido);

            // Elimina el primer elemento del array
            TicketsCreados.shift();

            console.log("Tickets en proceso de atención:", TicketsCreados);

            console.log("hOLA", NumEscritorio);
            socket.emit('datoPantalla', NumEscritorio)

            // Emite un evento para informar a todos los clientes sobre el cambio en el array
            socket.emit('updateTickets', TicketsCreados);
            socket.on('NuevosTickets', (TicketsCreados) => {
                const ticketAtendido = TicketsCreados[1];
                Aten.textContent = "Atendiendo a: " + ticketAtendido;
            })
            socket.emit('datoPantallaTicket', ticketAtendido)
        } else {
            Aten.textContent = "No hay tickets pendientes";
        }
    });
});







