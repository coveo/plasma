import {
    factory,
    Modal as MantineModal,
    ModalFactory as MantineModalFactory,
    ModalProps as MantineModalProps,
} from '@mantine/core';
import {ModalFooter, ModalFooter as PlasmaModalFooter} from './ModalFooter';

// Need to redeclare the factory to override and add footer to the props type
type PlasmaModalFactory = Omit<MantineModalFactory, 'staticComponents'> & {
    staticComponents: MantineModalFactory['staticComponents'] & {
        Footer: typeof ModalFooter;
    };
};

const PlasmaModal = factory<PlasmaModalFactory>((props: MantineModalProps, ref) => (
    <MantineModal ref={ref} {...props} />
));

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

export const Modal = PlasmaModal;

export type ModalFactory = PlasmaModalFactory;
