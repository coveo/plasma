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

/**
 * Round-up an HTML element's height to the nearest even number.
 * There is a known issue when the footer's height is an odd number, the footer would align 1px towards the top and not fill the bottom completely,
 * and this is a helper function for the fix.
 * @param element the HTML element to adjust.
 */
const adjustHeight = (element: HTMLElement) => {
    if (element) {
        const remainder = element.offsetHeight % 2;
        element.style.height = `${element.offsetHeight - remainder + 2}px`;
    }
};

export const ModalFooter = factory<ModalFooterFactory>(({sticky, ...props}, ref) => {
    // There is a known issue when the footer's height is an odd number, the footer would align 1px towards the top and not fill the bottom completely
    // the following workaround essentially ensures that the footer's height is always an even number, on the basis of best-effort (i.e. when ref is available)
    const _ref = useRef<HTMLDivElement>();

    const footerRef = ref || _ref;

    useEffect(() => {
        if (typeof footerRef !== 'function' && footerRef.current) {
            adjustHeight(footerRef.current);
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
