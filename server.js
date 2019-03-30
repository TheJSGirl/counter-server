const io = require('socket.io')(9000);
const redis = require('redis');
const client = redis.createClient({port:6379, host:"0.0.0.0"});

io.on('connection', socket => {
    socket.on('hello', async(data) => {
        const count = await inc(data);
        console.log(count)

    })
})


async function inc(data){
    return new Promise(resolve => {
        client.incr(data.hashID, (err, count) => {
            resolve(count)
        })
    });
}