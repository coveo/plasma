import {
    factory,
    Modal as MantineModal,
    ModalFactory as MantineModalFactory,
    ModalProps as MantineModalProps,
} from '@mantine/core';
import {Header, type HeaderDocAnchorProps, type HeaderProps} from '../Header/Header.js';
import {ModalFooter as PlasmaModalFooter} from './ModalFooter.js';

interface PlasmaModalProps extends MantineModalProps {
    /**
     * Description of the modal, displayed below the title.
     */
    description?: HeaderProps['description'];
    /**
     * Help link for the modal, displayed in the header.
     * Usually provides a link to external documentation or help resources.
     */
    help?: HeaderDocAnchorProps;
}

// Need to redeclare the factory to override and add footer to the props type
type PlasmaModalFactory = Omit<MantineModalFactory, 'staticComponents'> & {
    props: PlasmaModalProps;
    staticComponents: MantineModalFactory['staticComponents'] & {
        Footer: typeof PlasmaModalFooter;
    };
};

const PlasmaModal = factory<PlasmaModalFactory>(({title, description, help, ...otherProps}, ref) => {
    const header =
        typeof title === 'string' ? (
            <Header titleComponent="div" variant="secondary" description={description}>
                {title}
                {help && <Header.DocAnchor {...help} />}
            </Header>
        ) : (
            title
        );
    return <MantineModal ref={ref} title={header} {...otherProps} />;
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

export const Modal = PlasmaModal;
export type ModalProps = PlasmaModalProps;

export type ModalFactory = PlasmaModalFactory;
export type {ModalRootProps, ModalCssVariables, ModalStylesNames} from '@mantine/core';
