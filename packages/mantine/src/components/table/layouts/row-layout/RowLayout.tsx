import {Factory, MantineComponent, StylesApiProps, useProps, useStyles} from '@mantine/core';
import {ReactNode} from 'react';
import {identity} from '../../../../utils';
import {TableLayout} from '../../Table.types';
import classes from './RowLayout.module.css';
import {RowLayoutBody, RowLayoutBodyStylesNames} from './RowLayoutBody';
import {RowLayoutProvider} from './RowLayoutContext';
import {RowLayoutHeader, RowLayoutHeaderStyleNames} from './RowLayoutHeader';
import {RowLayoutIcon} from './RowLayoutIcon';

type RowLayoutStylesNames = RowLayoutHeaderStyleNames | RowLayoutBodyStylesNames;
export interface RowLayoutProps extends StylesApiProps<RowLayoutFactory> {
    children: ReactNode;
}

export type RowLayoutFactory = Factory<{
    ref?: never;
    props: RowLayoutProps;
    stylesNames: RowLayoutStylesNames;
    staticComponents: TableLayout;
}>;
const defaultProps: Partial<RowLayoutProps> = {};

export const RowLayout = ((props: RowLayoutProps) => {
    const {children, styles, classNames, unstyled} = useProps('PlasmaRowLayout', defaultProps, props);
    const getStyles = useStyles<RowLayoutFactory>({
        name: 'PlasmaRowLayout',
        classes,
        props,
        styles,
        classNames,
        unstyled,
    });

    return <RowLayoutProvider value={{getStyles}}>{children}</RowLayoutProvider>;
}) as MantineComponent<RowLayoutFactory>;

RowLayout.Body = RowLayoutBody;
RowLayout.Header = RowLayoutHeader;
RowLayout.Icon = RowLayoutIcon;
RowLayout.displayName = 'Rows';
RowLayout.extend = identity;
