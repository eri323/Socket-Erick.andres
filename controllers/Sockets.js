/* Contenido de archivo socket.js */
const controllerSockets = (socket) => {
    console.log(socket.id);

    socket.on('saludar', async (inputData) => {
        console.log(`hola ${inputData.nombre}`);
        socket.emit('valorInput', inputData.nombre);
        // Emitir el valor a todos los clientes
    });   
    
    
}
export default controllerSockets