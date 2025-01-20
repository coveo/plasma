import {useEffect, useRef} from 'react';
import {
    factory,
    Modal as MantineModal,
    ModalFactory as MantineModalFactory,
    ModalHeaderProps as MantineModalheaderProps,
    ModalProps as MantineModalProps,
} from '@mantine/core';

import {ModalHeaderFactory as MantineModalHeaderFactory} from '@mantine/core/lib/components/Modal/ModalHeader';
import {StickyFooter, StickyFooterFactory} from '../sticky-footer';

// Need to redeclare the factory to override and add footer to the props type
type PlasmaModalFactory = Omit<MantineModalFactory, 'staticComponents'> & {
    staticComponents: MantineModalFactory['staticComponents'] & {
        Footer: typeof StickyFooter;
    };
};

const PlasmaModal = factory<PlasmaModalFactory>((props: MantineModalProps, ref) => (
    <MantineModal ref={ref} {...props} />
));

const PlasmaModalFooter = factory<StickyFooterFactory>((props, ref) => {
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

    return <StickyFooter borderTop ref={ref} {...props} />;
});

PlasmaModal.displayName = '@coveord/plasma-mantine/Modal';
PlasmaModal.Root = MantineModal.Root;
PlasmaModal.Body = MantineModal.Body;
PlasmaModal.Overlay = MantineModal.Overlay;
PlasmaModal.Content = MantineModal.Content;
PlasmaModal.Header = MantineModal.Header;
PlasmaModal.Title = MantineModal.Title;
PlasmaModal.CloseButton = MantineModal.CloseButton;
PlasmaModal.Stack = MantineModal.Stack;
PlasmaModal.Footer = PlasmaModalFooter;

export type ModalFactory = PlasmaModalFactory;
export type ModalFooterFactory = MantineModalHeaderFactory;
export type ModalFooterProps = MantineModalheaderProps;
export const Modal = PlasmaModal;
