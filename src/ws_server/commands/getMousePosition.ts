import { mouse } from '@nut-tree/nut-js';
import { COMMANDS } from '../const';

export const getMousePosition = async () => {
    const { x, y } = await mouse.getPosition();
    return `${COMMANDS.MOUSE_POSITION} ${x}px,${y}px`;
};
