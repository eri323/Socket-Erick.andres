// import data from 'bd.js'

const socket = io();

const btnPantalla = document.querySelector('#btnPantalla')
const btnTicket = document.querySelector('#btnGeneraricket')
/* const btnEscritorio = document.querySelector('btnIngresar') */
// const btnSiguienteTicket = document.querySelector('#btn-siguiente-ticket')


socket.on('connect', () => {
    console.log("En linea");
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
});

socket.on('saluden', (data) => {
    console.log(data);

});

btnTicket.addEventListener('click', () => {
    window.open('Ticket.html', '_blank');
    socket.on('entrando a ticket', (data) => {
        console.log(data)
    })
});

btnPantalla.addEventListener('click', () => {
    window.open('Pantallas.html', '_blank');
});


const escritorios = new Set(); // Conjunto para almacenar los escritorios utilizados

document.addEventListener('DOMContentLoaded', () => {
    const inputEscritorio = document.querySelector('#cajita');
    const btnGenerarEscritorio = document.getElementById('btnIngresar');
    const errorEscritorio = document.getElementById('errorEscritorio')

    btnGenerarEscritorio.addEventListener('click', () => {
        const numeroEscritorio = parseInt(inputEscritorio.value);

        if (numeroEscritorio > 0 && !isNaN(numeroEscritorio) && !escritorios.has(numeroEscritorio)) {
            escritorios.add(numeroEscritorio);

            // Agregar el número de escritorio como parámetro en la URL de la página "Escritorio"
            window.open(`Escritorio.html?escritorio=${numeroEscritorio}`, '_blank');
            console.log(escritorios)
        } else {
            if (inputEscritorio.value.trim() === "") {
                errorEscritorio.textContent = 'Por favor digite el numero del escritorio'
            } else if (inputEscritorio.value <= 0) {
                errorEscritorio.textContent = 'El numero del escritorio debe ser mayor que 0'
            } else if (escritorios.has(numeroEscritorio)) {
                errorEscritorio.textContent = 'Este escritorio ya esta en uso'
            }
        }
    });
});