import {Factory, MantineComponent, StylesApiProps, useProps, useStyles} from '@mantine/core';
import {ReactNode} from 'react';
import {identity} from '../../../../utils/createFactoryComponent.js';
import {CollectionLayout} from '../CollectionLayout.types.js';
import classes from './VerticalLayout.module.css';
import {VerticalLayoutBody, VerticalLayoutBodyStylesNames} from './VerticalLayoutBody.js';
import {VerticalLayoutProvider} from './VerticalLayoutContext.js';
import {VerticalLayoutHeader, VerticalLayoutHeaderStyleNames} from './VerticalLayoutHeader.js';

type VerticalLayoutStylesNames = VerticalLayoutHeaderStyleNames | VerticalLayoutBodyStylesNames;

export interface VerticalLayoutProps extends StylesApiProps<VerticalLayoutFactory> {
    children: ReactNode;
}

export type VerticalLayoutFactory = Factory<{
    ref?: never;
    props: VerticalLayoutProps;
    stylesNames: VerticalLayoutStylesNames;
    staticComponents: CollectionLayout;
}>;

const defaultProps: Partial<VerticalLayoutProps> = {};

export const VerticalLayout = ((props: VerticalLayoutProps) => {
    const {children, styles, classNames, unstyled} = useProps('PlasmaVerticalLayout', defaultProps, props);
    const getStyles = useStyles<VerticalLayoutFactory>({
        name: 'PlasmaVerticalLayout',
        classes,
        props,
        styles,
        classNames,
        unstyled,
    });

    return <VerticalLayoutProvider value={{getStyles}}>{children}</VerticalLayoutProvider>;
}) as MantineComponent<VerticalLayoutFactory>;

VerticalLayout.Body = VerticalLayoutBody;
VerticalLayout.Header = VerticalLayoutHeader;
VerticalLayout.displayName = 'Vertical';
VerticalLayout.extend = identity;
