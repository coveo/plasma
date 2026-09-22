import {type Factory, factory} from '@mantine/core';
import clsx from 'clsx';
import {StickyFooter, type StickyFooterProps, type StickyFooterStylesNames} from '../StickyFooter/StickyFooter.js';
import classes from './DrawerFooter.module.css';

export interface DrawerFooterProps extends Omit<StickyFooterProps, 'variant'> {}

export type DrawerFooterStylesNames = StickyFooterStylesNames;

export type DrawerFooterFactory = Factory<{
    props: DrawerFooterProps;
    ref: HTMLDivElement;
    stylesNames: DrawerFooterStylesNames;
}>;

export const DrawerFooter = factory<DrawerFooterFactory>(({borderTop = true, className, ref, ...props}) => (
    <StickyFooter borderTop={borderTop} className={clsx(classes.root, className)} ref={ref} {...props} />
));

DrawerFooter.displayName = 'Drawer.Footer';
