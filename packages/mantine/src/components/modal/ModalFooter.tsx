import {useRef, useEffect} from 'react';
import {Factory, factory} from '@mantine/core';
import {StickyFooter, StickyFooterProps, StickyFooterStylesNames} from '../sticky-footer';
import classes from './ModalFooter.module.css';

export interface ModalFooterProps extends Omit<StickyFooterProps, 'variant'> {}

export type ModalFooterStylesNames = StickyFooterStylesNames;

export type ModalFooterFactory = Factory<{
    props: ModalFooterProps;
    ref: HTMLDivElement;
    stylesNames: ModalFooterStylesNames;
}>;

const ensuresFooterHasEvenHeight = (footer: HTMLElement) => {
    const remainder = footer.offsetHeight % 2;
    footer.style.height = `${footer.offsetHeight - remainder + 2}px`;
};

export const ModalFooter = factory<ModalFooterFactory>((props, ref) => {
    const _ref = useRef<HTMLDivElement>();

    const footerRef = ref || _ref;

    useEffect(() => {
        if (typeof footerRef !== 'function' && footerRef.current) {
            ensuresFooterHasEvenHeight(footerRef.current);
        }

        // if ref === 'function', this is a callback ref. Haven't found any solution for adjusting the height in this case
    }, [ref, props.h]);

    return <StickyFooter className={classes.root} ref={footerRef} {...props} />;
});
