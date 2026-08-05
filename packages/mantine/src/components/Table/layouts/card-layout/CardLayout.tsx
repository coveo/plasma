import {IconLayoutGrid} from '@coveord/plasma-react-icons';
import {Factory, MantineComponent, StylesApiProps, useProps, useStyles} from '@mantine/core';
import {ReactNode} from 'react';
import {identity} from '../../../../utils/createFactoryComponent.js';
import {TableLayout} from '../../Table.types.js';
import classes from './CardLayout.module.css';
import {CardLayoutBody, CardLayoutBodyStylesNames} from './CardLayoutBody.js';
import {CardLayoutProvider} from './CardLayoutContext.js';

type CardLayoutStylesNames = CardLayoutBodyStylesNames;
export interface CardLayoutProps extends StylesApiProps<CardLayoutFactory> {
    children: ReactNode;
}

export type CardLayoutFactory = Factory<{
    ref?: never;
    props: CardLayoutProps;
    stylesNames: CardLayoutStylesNames;
    staticComponents: TableLayout;
}>;
const defaultProps: Partial<CardLayoutProps> = {};

export const CardLayout = ((props: CardLayoutProps) => {
    const {children, styles, classNames, unstyled} = useProps('PlasmaCardLayout', defaultProps, props);
    const getStyles = useStyles<CardLayoutFactory>({
        name: 'PlasmaCardLayout',
        classes,
        props,
        styles,
        classNames,
        unstyled,
    });

    return <CardLayoutProvider value={{getStyles}}>{children}</CardLayoutProvider>;
}) as MantineComponent<CardLayoutFactory>;

CardLayout.Body = CardLayoutBody;
CardLayout.Header = () => <></>;
CardLayout.Icon = IconLayoutGrid;
CardLayout.displayName = 'Cards';
CardLayout.extend = identity;
