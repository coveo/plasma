import {IconChevronDown} from '@coveord/plasma-react-icons';
import clsx from 'clsx';
import {ComponentPropsWithoutRef, forwardRef} from 'react';
import classes from './PlasmaComboboxChevron.module.css';

type PlasmaComboboxChevronProps = ComponentPropsWithoutRef<'svg'> & {
    children?: never;
    /* Mantine's ComboboxChevron renders an svg by default and forwards these svg props
     * to the override component. We declare them here so we can strip them before
     * rendering IconChevronDown, which should keep Tabler's own svg attributes.
     */
    fill?: string;
    viewBox?: string;
    xmlns?: string;
};

export const PlasmaComboboxChevron = forwardRef<SVGSVGElement, PlasmaComboboxChevronProps>(
    ({children: _children, className, fill: _fill, viewBox: _viewBox, xmlns: _xmlns, ...props}, ref) => (
        <IconChevronDown
            {...props}
            ref={ref}
            className={clsx(classes.root, className)}
            data-plasma-combobox-chevron
            size={16}
            aria-hidden="true"
        />
    ),
);

PlasmaComboboxChevron.displayName = 'PlasmaComboboxChevron';
