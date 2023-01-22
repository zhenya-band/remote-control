import {
    mouse, right, down, left, up,
} from '@nut-tree/nut-js';
import {
    drawCircle, drawRectangle, drawSquare, getMousePosition, printScreen,
} from './actions';
import { COMMANDS } from './const';

export const handler = async (command: COMMANDS, params: string[]): Promise<string> => {
    const response = `${command} ${params}`;
    const param1 = Number(params[0]);
    const param2 = Number(params[1]);

    switch (command) {
    case COMMANDS.MOUSE_RIGHT:
        await mouse.move(right(param1));
        return response;

    case COMMANDS.MOUSE_DOWN:
        await mouse.move(down(param1));
        return response;

    case COMMANDS.MOUSE_LEFT:
        await mouse.move(left(param1));
        return response;

    case COMMANDS.MOUSE_UP:
        await mouse.move(up(param1));
        return response;

    case COMMANDS.MOUSE_POSITION:
        return getMousePosition();

    case COMMANDS.DRAW_CIRCLE:
        return drawCircle(param1);

    case COMMANDS.DRAW_RECTANGLE:
        return drawRectangle(param1, param2);

    case COMMANDS.DRAW_SQUARE:
        return drawSquare(param1);

    case COMMANDS.PRNT_SCRN:
        return printScreen();

    default:
        throw Error('Unknown command');
    }
};
