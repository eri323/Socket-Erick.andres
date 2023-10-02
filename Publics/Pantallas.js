const socket = io();

const pantallasEscritorios = [
    { ticket: document.querySelector('#ticket1'), escritorio: document.querySelector('#pantalla1') },
    { ticket: document.querySelector('#ticket2'), escritorio: document.querySelector('#pantalla2') },
    { ticket: document.querySelector('#ticket3'), escritorio: document.querySelector('#pantalla3') },
    { ticket: document.querySelector('#ticket4'), escritorio: document.querySelector('#pantalla4') }
];

const escritorios = new Set();
const numerosDeTicket = new Set();

function actualizarPantallas() {
    pantallasEscritorios.forEach((pantallaInfo, index) => {
        const pantallaTicket = pantallaInfo.ticket;
        const pantallaEscritorio = pantallaInfo.escritorio;
        const escritoriosArray = [...escritorios];
        const numerosDeTicketArray = [...numerosDeTicket];

        if (index < escritoriosArray.length) {
            pantallaEscritorio.textContent = "Escritorio: " + escritoriosArray[index];
        } else {
            pantallaEscritorio.textContent = "";
        }
        if (index==pantallaTicket) {
            pantallaTicket.textContent = "Ticket: " + numerosDeTicketArray[index];
            
        } else {
            pantallaTicket.textContent = "Ticket: " + numerosDeTicketArray[index];
            pantallaTicket.textContent = "";
        }
    });
}

socket.on('datoPan', (NumEscritorio) => {
    const escritorio = NumEscritorio[0];
    escritorios.add(escritorio);
    actualizarPantallas();
    console.log(escritorio);
});

socket.on('datoPanTi', (TicketsAtendidos) => {
    numerosDeTicket.add(TicketsAtendidos);
    actualizarPantallas();
    console.log(TicketsAtendidos);
});
