import {IColorBarProps} from './ColorBar';

export const noColorsPropsScenarios: IColorBarProps[] = [
    {
        widthPerColor: {
            blue: 0,
        },
    },
    {
        widthPerColor: {
            blue: 0,
            yellow: 0,
        },
    },
    {
        widthPerColor: {},
    },
];

export const withColorsPropsScenarios: IColorBarProps[] = [
    {
        widthPerColor: {
            blue: 50,
        },
    },
    {
        widthPerColor: {
            blue: 100,
        },
    },
    {
        widthPerColor: {
            blue: 20,
            yellow: 0,
            brown: 30,
        },
    },
    {
        widthPerColor: {
            blue: 20,
            yellow: 50,
            brown: 30,
        },
        height: '10px',
        className: ['one-class', 'two-classes', 'three-classes'],
    },
];
