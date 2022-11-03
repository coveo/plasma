import {color} from '@coveord/plasma-tokens';
import {Tuple} from '@mantine/core';

const toMantineColor = (plasmaColor: Record<string, string>): Tuple<string, 10> =>
    Object.values(plasmaColor) as Tuple<string, 10>;

export const PlasmaColors = {
    // Primary
    gray: toMantineColor(color.primary.gray),
    action: [
        color.primary.action[1],
        color.primary.action[1],
        color.primary.action[2],
        color.primary.action[3],
        color.primary.action[4],
        color.primary.action[6],
        color.primary.action[6],
        color.primary.action[8],
        color.primary.action[8],
        color.primary.action[9],
    ] as Tuple<string, 10>,
    navy: toMantineColor(color.primary.navy),
    // Accent
    blue: toMantineColor(color.accent.blue),
    red: toMantineColor(color.accent.red),
    teal: toMantineColor(color.accent.teal),
    yellow: toMantineColor(color.accent.yellow),
    // Secondary
    green: toMantineColor(color.secondary.green),
    indigo: toMantineColor(color.secondary.indigo),
    lime: [
        color.secondary.lime[0],
        color.secondary.lime[0],
        color.secondary.lime[0],
        color.secondary.lime[0],
        color.secondary.lime[6],
        color.secondary.lime[6],
        color.secondary.lime[6],
        color.secondary.lime[9],
        color.secondary.lime[9],
        color.secondary.lime[9],
    ] as Tuple<string, 10>,
    purple: toMantineColor(color.secondary.purple),
};
