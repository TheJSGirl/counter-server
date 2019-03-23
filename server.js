const io = require('socket.io')(6000);

io.on('connection', () => {
    console.log("conected")
})