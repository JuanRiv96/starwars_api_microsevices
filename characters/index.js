const server = require('./src/app');

const PORT = 8001;

server.listen(PORT, () => {
    console.log(`Characters listen on port ${ PORT }`)
});