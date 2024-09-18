import { initWsServer, wsServer } from './ws_server/index';
import { httpServer } from './http_server/index';

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

initWsServer();

process.on('SIGINT', () => {
    console.log('Server close');
    httpServer.close();
    wsServer.close();
    process.exit(0);
});
