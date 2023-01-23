import {
    mouse, Button, Point, straightTo,
} from '@nut-tree/nut-js';

import { COMMANDS } from '../const';

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

    return COMMANDS.DRAW_CIRCLE;
};
