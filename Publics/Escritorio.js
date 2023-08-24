/* Script de archivo Escritorio.html */
const socket = io();

const escritorio1 = document.querySelector("#Escritorio1")

socket.on('connect', () => {
    console.log("hola");
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
});

socket.on('valorInput', (valor) => {
    escritorio1.textContent = `Valor recibido: ${valor}`;
});

socket.on('valorInput', (valor) => {
    console.log(`Valor recibido: ${valor}`);
});
