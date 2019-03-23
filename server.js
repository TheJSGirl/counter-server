const io = require('socket.io')(9000);

io.on('connection', socket => {
    socket.on('hello', hashID => console.log(hashID))
})