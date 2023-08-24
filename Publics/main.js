/* Script de archivo index.html
 */const socket = io();


const txtNombre = document.querySelector('#cajita')
const btnIngresar = document.querySelector('#btnIngresar');

/*  const btnDia = document.querySelector('#btnDia'); */

socket.on('connect', () => {
    console.log("hola");
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
});




btnIngresar.addEventListener('click', () => {
    const inputData = {
        nombre: txtNombre.value
    }
    socket.emit('saludar', inputData);
});

/*  btnDia.addEventListener('click', () => {
 
 
     socket.emit('devuelvaFecha', (msg) => {
 
         console.log(msg);
     });
 });
 
 function upload(files) {
 
 } */





