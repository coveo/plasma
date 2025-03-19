import {useRef, useEffect} from 'react';
import clsx from 'clsx';
import {Factory, factory} from '@mantine/core';
import {StickyFooter, StickyFooterProps, StickyFooterStylesNames} from '../sticky-footer';
import classes from './Modal.module.css';

export interface ModalFooterProps extends Omit<StickyFooterProps, 'variant'> {
    /**
     * If the footer is sticky, its margin will be adjusted to counteract the padding of the Modal.Body, ensuring the footer visually sticks to the bottom of the modal.
     */
    sticky?: boolean;
}

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

export const ModalFooter = factory<ModalFooterFactory>(({sticky, ...props}, ref) => {
    const _ref = useRef<HTMLDivElement>();

    const footerRef = ref || _ref;

    useEffect(() => {
        if (typeof footerRef !== 'function' && footerRef.current) {
            ensuresFooterHasEvenHeight(footerRef.current);
        }

        // if ref === 'function', this is a callback ref. Haven't found any solution for adjusting the height in this case
    }, [ref, props.h]);

    return (
        <StickyFooter
            className={clsx(classes.footer, {[classes.modalFooterSticky]: !!sticky})}
            ref={footerRef}
            {...props}
        />
    );
});
