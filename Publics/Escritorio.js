/* Script de archivo Escritorio.html */
const socket = io();

const escritorio1 = document.querySelector("#Escritorio1")

socket.on('connect', () => {
    console.log("hola");
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
});

socket.on('enviar', (data) => {
    console.log("data", data)
    escritorio1.textContent = data
});


/* socket.on('valorInput', (valor) => {
    console.log(`Valor recibido: ${valor}`);
});
 */