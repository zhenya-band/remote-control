import { WebSocketServer } from 'ws';
import { COMMANDS } from './const';
import { handler } from './handler';

export const init = () => {
    const wsServer = new WebSocketServer({ port: 8080 });

    wsServer.on('connection', (ws) => {
        console.log('wsServer on connection');

        ws.on('message', async (data) => {
            const [command, ...params] = data.toString().split(' ');
            console.log(`Client command: command - ${command}, params - ${params}`);

            try {
                const result = await handler(command as COMMANDS, params);
                ws.send(result);
            } catch (error) {
                console.log(`error ${error}`);
            }
        });
    });

    wsServer.on('close', () => {
        console.log('wsServer on close');
    });

    wsServer.on('error', () => {
        console.log('wsServer on error');
    });
};
