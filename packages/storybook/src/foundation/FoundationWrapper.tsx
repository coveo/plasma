import {Header} from '@coveord/plasma-mantine';
import {Stack} from '@mantine/core';
import type {ReactNode} from 'react';

interface FoundationWrapperProps {
    title: string;
    description: string;
    children: ReactNode;
}

export const FoundationWrapper = ({title, description, children}: FoundationWrapperProps) => (
    <Stack>
        <Header p={0} description={description}>
            {title}
        </Header>
        {children}
    </Stack>
);
