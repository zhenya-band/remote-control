import { createWebSocketStream, WebSocketServer } from 'ws';
import { COMMANDS } from './const';
import { handler } from './handler';

const WS_PORT = 8080;

export const wsServer = new WebSocketServer({ port: WS_PORT });

export const initWsServer = () => {
    wsServer.on('connection', (ws) => {
        console.log('wsServer on connection');

        const wsStream = createWebSocketStream(ws, {
            decodeStrings: false,
            encoding: 'utf8',
        });

        wsStream.on('data', async (data) => {
            const [command, ...params] = data.toString().split(' ');
            console.log(`Client command: command - ${command}, params - ${params}`);

            try {
                const result = await handler(command as COMMANDS, params);
                wsStream.write(result);
            } catch (error) {
                console.error(`error ${error}`);
            }
        });

        wsStream.on('error', (error) => {
            console.error(error);
        });
    });

    wsServer.on('close', () => {
        console.log('wsServer on close');
    });

    wsServer.on('error', (error) => {
        console.error(`wsServer on error ${error}`);
    });
};
