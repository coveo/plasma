import {Center, type CenterProps} from '@mantine/core';
import {ReactNode} from 'react';

interface PlaceholderProps extends CenterProps {
    children: ReactNode;
}

export const Placeholder = ({children, ...props}: PlaceholderProps) => (
    <Center bg="blue.1" {...props}>
        {children}
    </Center>
);
