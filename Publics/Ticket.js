const socket = io();


const buton = document.querySelector("#Button");
const ticket = document.querySelector("#ticket");
let i = 0

buton.addEventListener('click', () => {
 
    i++;
    const mensaje = ticket.textContent = "Ticket: " + i;

    socket.emit('nticket', mensaje, (msg) => {
        console.log(msg);
    });
});
