const server = require('./src/app');

const PORT = 8003;

server.listen(PORT, () => {
    console.log(`Planets listen on port ${ PORT }`)
});