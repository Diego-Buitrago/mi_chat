module.exports = function (io) {

    io.on('connection', (socket) => {
        console.log('Se ha conectado alguien');
    
        socket.on('chat:message', (data) => {
            console.log(data)

            io.sockets.emit('new:message',data);
        });
    })
}