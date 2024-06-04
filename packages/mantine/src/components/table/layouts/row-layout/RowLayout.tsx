import {factory, Factory, StylesApiProps, useProps, useStyles} from '@mantine/core';
import {ReactNode} from 'react';
import classes from './RowLayout.module.css';
import {TableLayout} from '../../Table.types';
import {RowLayoutBody, RowLayoutBodyStylesNames} from './RowLayoutBody';
import {RowLayoutProvider} from './RowLayoutContext';
import {RowLayoutHeader, RowLayoutHeaderStyleNames} from './RowLayoutHeader';
import {RowLayoutIcon} from './RowLayoutIcon';

type RowLayoutStylesNames = RowLayoutHeaderStyleNames | RowLayoutBodyStylesNames;
export interface RowLayoutProps extends StylesApiProps<RowLayoutFactory> {
    children: ReactNode;
}

export type RowLayoutFactory = Factory<{
    props: RowLayoutProps;
    stylesNames: RowLayoutStylesNames;
    staticComponents: TableLayout;
}>;
const defaultProps: Partial<RowLayoutProps> = {};

export const RowLayout = factory<RowLayoutFactory>((props, ref) => {
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
});

RowLayout.Body = RowLayoutBody;
RowLayout.Header = RowLayoutHeader;
RowLayout.Icon = RowLayoutIcon;
RowLayout.displayName = 'Rows';
