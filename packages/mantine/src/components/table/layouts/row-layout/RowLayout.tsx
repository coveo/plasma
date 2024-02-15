import {factory, Factory, StylesApiProps, useProps, useStyles} from '@mantine/core';
import {ReactNode} from 'react';
import classes from '../../../../styles/RowLayout.module.css';
import {RowLayoutBody, RowLayoutBodyStylesNames} from './RowLayoutBody';
import {RowLayoutProvider} from './RowLayoutContext';
import {RowLayoutHeader, RowLayoutHeaderStyleNames} from './RowLayoutHeader';
import {RowLayoutIcon, RowLayoutIconStylesNames} from './RowLayoutIcon';

type RowLayoutStylesNames = RowLayoutHeaderStyleNames | RowLayoutIconStylesNames | RowLayoutBodyStylesNames;
export interface RowLayoutProps extends StylesApiProps<RowLayoutFactory> {
    children: ReactNode;
}

export type RowLayoutFactory = Factory<{
    props: RowLayoutProps;
    stylesNames: RowLayoutStylesNames;
    staticComponents: {
        name: string;
        Header: typeof RowLayoutHeader;
        Body: typeof RowLayoutBody;
        Icon: typeof RowLayoutIcon;
    };
}>;
const defaultProps: Partial<RowLayoutProps> = {};

export const RowLayout = factory<RowLayoutFactory>((props, ref) => {
    const {children, styles, classNames, unstyled} = useProps('PlasmaRowLayout', defaultProps, props);
    const getStyles = useStyles<RowLayoutFactory>({name: 'RowLayout', classes, props, styles, classNames, unstyled});

    return <RowLayoutProvider value={{getStyles}}>{children}</RowLayoutProvider>;
});

RowLayout.Body = RowLayoutBody;
RowLayout.Header = RowLayoutHeader;
RowLayout.Icon = RowLayoutIcon;
RowLayout.name = 'RowLayout';
