import {
    Button, down, left, mouse, right, up,
} from '@nut-tree/nut-js';
import { COMMANDS } from '../const';

export const drawSquare = async (length: number) => {
    await mouse.leftClick();
    await mouse.pressButton(Button.LEFT);
    await mouse.move(right(length));
    await mouse.move(down(length));
    await mouse.move(left(length));
    await mouse.move(up(length));
    await mouse.releaseButton(Button.LEFT);

    return COMMANDS.DRAW_SQUARE;
};
