const socket = io();

//Chat
let message = document.querySelector('input');
let btn = document.getElementById('send');
let screen = document.querySelector('.screen');
let user = document.querySelector('.name');

btn.addEventListener('click', function() {
    
    socket.emit('chat:message', {
        user: user.value,
        message: message.value
    });
    message.value = "";
});

socket.on('new:message', function (data) {
    screen.innerHTML += `<b>${data.user}:</b> ${data.message} <br/>`
});
