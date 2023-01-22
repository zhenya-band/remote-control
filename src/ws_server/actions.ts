import {
    mouse, Button, Point, straightTo, right, down, left, up, screen, Region,
} from '@nut-tree/nut-js';
import Jimp from 'jimp';
import { COMMANDS, SCREENSHOT_HEIGHT, SCREENSHOT_WIDTH } from './const';

export const getMousePosition = async () => {
    const { x, y } = await mouse.getPosition();
    return `${COMMANDS.MOUSE_POSITION} ${x}px,${y}px`;
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

export const drawSquare = async (length: number) => {
    await mouse.leftClick();
    await mouse.pressButton(Button.LEFT);
    await mouse.move(right(length));
    await mouse.move(down(length));
    await mouse.move(left(length));
    await mouse.move(up(length));
    await mouse.releaseButton(Button.LEFT);

    return `${COMMANDS.DRAW_SQUARE} ok`;
};

export const printScreen = async () => {
    const { x, y } = await mouse.getPosition();

    const region = new Region(
        x - SCREENSHOT_WIDTH / 2,
        y - SCREENSHOT_HEIGHT / 2,
        SCREENSHOT_WIDTH,
        SCREENSHOT_HEIGHT,
    );

    const image = await screen.grabRegion(region);
    const { data, width, height } = await image.toRGB();

    const imageJimp = new Jimp({ data, width, height });
    const buffer = await imageJimp.getBufferAsync(Jimp.MIME_PNG);
    const base64 = buffer.toString('base64');

    return `${COMMANDS.PRNT_SCRN} ${base64}`;
};
