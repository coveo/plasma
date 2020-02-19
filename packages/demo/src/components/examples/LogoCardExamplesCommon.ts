import {IBadgeProps, ICornerRibbonProps} from 'react-vapor';

export const MULTIPLE_BADGES: IBadgeProps[] = [
    {
        label: 'Badge 1',
        extraClasses: ['bg-blue'],
    },
    {
        label: 'Badge 2',
        extraClasses: ['bg-medium-blue'],
    },
    {
        label: 'Badge 3',
        extraClasses: ['bg-darker-blue'],
    },
];

export const EXAMPLE_RIBBON_PROPS: ICornerRibbonProps = {
    label: 'Ribbon',
    extraClasses: ['bg-orange', 'bold'],
};
