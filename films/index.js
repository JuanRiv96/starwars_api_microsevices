const server = require('./src/app');

const PORT = 8002;

server.listen(PORT, () => {
    console.log(`Films listen on port ${ PORT }`)
});