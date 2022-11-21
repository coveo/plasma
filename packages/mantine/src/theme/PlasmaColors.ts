import {color} from '@coveord/plasma-tokens';
import {Tuple} from '@mantine/core';

const toMantineColor = (plasmaColor: Record<string, string>): Tuple<string, 10> =>
    Object.values(plasmaColor) as Tuple<string, 10>;

const navy = toMantineColor(color.primary.navy);
const red = toMantineColor(color.accent.red);
const yellow = toMantineColor(color.accent.yellow);
const teal = toMantineColor(color.accent.teal);
const lime = [
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
] as Tuple<string, 10>;

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
    navy,
    info: navy,
    // Accent
    blue: toMantineColor(color.accent.blue),
    red,
    critical: red,
    teal,
    new: teal,
    yellow,
    warning: yellow,
    // Secondary
    green: toMantineColor(color.secondary.green),
    indigo: toMantineColor(color.secondary.indigo),
    lime,
    success: lime,
    purple: toMantineColor(color.secondary.purple),
};
