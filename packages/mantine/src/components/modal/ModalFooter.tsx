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

export const ModalFooter = factory<ModalFooterFactory>(({sticky, ...props}, ref) => {
    // ADUI-10401: when the footer's height is an odd number, the footer would align towards the top and not fill the bottom completely
    // the following workaround essentially ensures that the footer's height is always an even number, on the basis of best-effort (i.e. when ref is available)
    if (ref == null) {
        ref = useRef<HTMLDivElement>();
    }

    useEffect(() => {
        const adjustHeight = (element: HTMLElement) => {
            if (element) {
                const remainder = element.offsetHeight % 2;
                element.style.height = `${element.offsetHeight - remainder + 2}px`;
            }
        };

        if (ref && typeof ref !== 'function' && ref.current) {
            adjustHeight(ref.current);
        }

        // if ref === 'function', this is a callback ref. Haven't found any solution for adjusting the height in this case
    }, [ref]);

    return <StickyFooter className={clsx(classes.footer, {[classes.sticky]: !!sticky})} ref={ref} {...props} />;
});
