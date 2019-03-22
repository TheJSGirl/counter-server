const io = require('socket.io')(9090);

io.on('connection', () => {
    console.log("conected")
})