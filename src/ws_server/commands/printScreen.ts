import { mouse, Region, screen } from '@nut-tree/nut-js';
import Jimp from 'jimp';
import { COMMANDS, SCREENSHOT_HEIGHT, SCREENSHOT_WIDTH } from '../const';

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
