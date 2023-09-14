const socket = io(); // Conéctate al servidor

socket.on('ticketNumber', (mensaje) => {
    console.log('Número de ticket recibido:', mensaje);
    // Hacer algo con el número de ticket, por ejemplo, mostrarlo en la interfaz
    document.getElementById('Tickets').textContent =  mensaje;
});


document.addEventListener('DOMContentLoaded', () => {
            const numeroEscritorioElement = document.getElementById('Escritorio1');
            const urlParams = new URLSearchParams(window.location.search);
            const numeroEscritorio = urlParams.get('escritorio');

            if (numeroEscritorio !== null) {
                numeroEscritorioElement.textContent = `${numeroEscritorio}`;
            }
        });

