import {Modal as MantineModal, ModalProps, Text} from '@mantine/core';
import {FunctionComponent} from 'react';
import {Header, HeaderProps as PlasmantineHeaderProps} from '../header';

interface HeaderProps extends Omit<PlasmantineHeaderProps, 'children'> {
    title: string;
}

export interface CustomModalProps extends Omit<ModalProps, 'centered' | 'title'> {
    /**
     * Header component props (layout/Header)
     */
    header: HeaderProps;
}

export const Modal: FunctionComponent<CustomModalProps> = ({
    children,
    header: {title, ...otherHeaderProps},
    ...otherProps
}) => (
    <MantineModal
        {...otherProps}
        title={
            <Header py={0} px={0} {...otherHeaderProps}>
                <Text size="md" py="md" weight="500">
                    {title}
                </Text>
            </Header>
        }
    >
        {children}
    </MantineModal>
);
