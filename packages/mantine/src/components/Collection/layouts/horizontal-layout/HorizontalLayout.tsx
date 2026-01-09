import {Factory, MantineComponent, StylesApiProps, useProps, useStyles} from '@mantine/core';
import {ReactNode} from 'react';
import {identity} from '../../../../utils/createFactoryComponent.js';
import {CollectionLayout} from '../CollectionLayout.types.js';
import classes from './HorizontalLayout.module.css';
import {HorizontalLayoutBody, HorizontalLayoutBodyStylesNames} from './HorizontalLayoutBody.js';
import {HorizontalLayoutProvider} from './HorizontalLayoutContext.js';
import {HorizontalLayoutHeader, HorizontalLayoutHeaderStyleNames} from './HorizontalLayoutHeader.js';

type HorizontalLayoutStylesNames = HorizontalLayoutHeaderStyleNames | HorizontalLayoutBodyStylesNames;

export interface HorizontalLayoutProps extends StylesApiProps<HorizontalLayoutFactory> {
    children: ReactNode;
}

export type HorizontalLayoutFactory = Factory<{
    ref?: never;
    props: HorizontalLayoutProps;
    stylesNames: HorizontalLayoutStylesNames;
    staticComponents: CollectionLayout;
}>;

const defaultProps: Partial<HorizontalLayoutProps> = {};

export const HorizontalLayout = ((props: HorizontalLayoutProps) => {
    const {children, styles, classNames, unstyled} = useProps('PlasmaHorizontalLayout', defaultProps, props);
    const getStyles = useStyles<HorizontalLayoutFactory>({
        name: 'PlasmaHorizontalLayout',
        classes,
        props,
        styles,
        classNames,
        unstyled,
    });

    return <HorizontalLayoutProvider value={{getStyles}}>{children}</HorizontalLayoutProvider>;
}) as MantineComponent<HorizontalLayoutFactory>;

HorizontalLayout.Body = HorizontalLayoutBody;
HorizontalLayout.Header = HorizontalLayoutHeader;
HorizontalLayout.displayName = 'Horizontal';
HorizontalLayout.extend = identity;
