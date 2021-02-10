const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 4500);

app.use(express.static(path.join(__dirname,'public')));

const server = app.listen(app.get('port'),()=>{
    console.log('Trabajando en el puerto...',app.get('port'));
});

const SocketIO = require('socket.io');
const io = SocketIO(server);

require('./sockets/sockets')(io);