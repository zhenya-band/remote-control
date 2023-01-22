import {
    mouse, Button, Point, straightTo, right, down, left, up,
} from '@nut-tree/nut-js';
import { COMMANDS } from './const';

export const getMousePosition = async () => {
    const { x, y } = await mouse.getPosition();
    return `mouse_position ${x}px,${y}px`;
};

export const drawCircle = async (radius: number) => {
    const { x, y } = await mouse.getPosition();
    await mouse.pressButton(Button.LEFT);

    for (let i = 0; i <= Math.PI * 2; i += 0.01) {
        const xPoint = x - radius + radius * Math.cos(i);
        const yPoint = y + radius * Math.sin(i);
        const moveTo = new Point(xPoint, yPoint);

        // eslint-disable-next-line no-await-in-loop
        await mouse.move(straightTo(moveTo));
    }

    await mouse.releaseButton(Button.LEFT);

    return `${COMMANDS.DRAW_CIRCLE} ok`;
};

export const drawRectangle = async (width: number, height: number) => {
    await mouse.leftClick();
    await mouse.pressButton(Button.LEFT);
    await mouse.move(right(width));
    await mouse.move(down(height));
    await mouse.move(left(width));
    await mouse.move(up(height));
    await mouse.releaseButton(Button.LEFT);

    return `${COMMANDS.DRAW_RECTANGLE} ok`;
};
