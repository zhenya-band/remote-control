import {
    mouse, right, down, left, up,
} from '@nut-tree/nut-js';
import { COMMANDS } from './const';

export const handler = async (command: COMMANDS, param: number): Promise<void> => {
    switch (command) {
    case COMMANDS.MOUSE_RIGHT:
        await mouse.move(right(param));
        break;
    case COMMANDS.MOUSE_DOWN:
        await mouse.move(down(param));
        break;
    case COMMANDS.MOUSE_LEFT:
        await mouse.move(left(param));
        break;
    case COMMANDS.MOUSE_UP:
        await mouse.move(up(param));
        break;

    default:
        throw Error('Unknown command');
    }
};
