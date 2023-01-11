import {Modal as MantineModal, ModalProps} from '@mantine/core';
import {FunctionComponent, ReactNode} from 'react';
import {Header, HeaderProps} from '../header';

export interface CustomModalProps extends Omit<ModalProps, 'title'> {
    /**
     * Header component props (layout/Header)
     */
    header?: Omit<HeaderProps, 'children' | 'description'>;
    /**
     * The title text displayed on top of the modal
     */
    title: ReactNode;
    /**
     * The description text displayed inside the header underneath the title
     */
    description?: HeaderProps['description'];
}

export const Modal: FunctionComponent<CustomModalProps> = ({children, title, header, description, ...otherProps}) => (
    <MantineModal
        {...otherProps}
        styles={{title: {width: '100%'}}}
        title={
            <Header py={0} px={0} description={description} {...header}>
                {title}
            </Header>
        }
    >
        {children}
    </MantineModal>
);
