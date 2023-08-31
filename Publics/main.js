/* Script de archivo index.html
 */const socket = io();


const numero = document.getElementById('cajita')
const btnIngresar = document.getElementById('btnIngresar');


/*  const btnDia = document.querySelector('#btnDia'); */

socket.on('connect', () => {
    console.log("hola");
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
});


btnIngresar.addEventListener('click', function () {
    socket.emit('enviarescritorio', {
        escritorio: numero.value
    })
});



/*  btnDia.addEventListener('click', () => {
 
 
     socket.emit('devuelvaFecha', (msg) => {
 
         console.log(msg);
     });
 });
 
 function upload(files) {
 
 } */





