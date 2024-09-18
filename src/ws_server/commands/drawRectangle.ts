import {
    Button,
    down, left, mouse, right, up,
} from '@nut-tree/nut-js';
import { COMMANDS } from '../const';

export const drawRectangle = async (width: number, height: number) => {
    await mouse.leftClick();
    await mouse.pressButton(Button.LEFT);
    await mouse.move(right(width));
    await mouse.move(down(height));
    await mouse.move(left(width));
    await mouse.move(up(height));
    await mouse.releaseButton(Button.LEFT);

    return COMMANDS.DRAW_RECTANGLE;
};
