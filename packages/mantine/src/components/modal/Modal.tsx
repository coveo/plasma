import {Modal as MantineModal, ModalProps, Text} from '@mantine/core';
import {FunctionComponent} from 'react';
import {Header, HeaderProps} from '../header';

interface CustomModalHeaderProps extends Omit<HeaderProps, 'children'> {
    title: string;
}

interface CustomModalProps extends Omit<ModalProps, 'centered' | 'title'> {
    header: CustomModalHeaderProps;
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
