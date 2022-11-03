import {Group} from '@mantine/core';
import {FunctionComponent, PropsWithChildren} from 'react';

export const TableFooter: FunctionComponent<PropsWithChildren> = ({children}) => (
    <Group position="apart" px="md" py="sm">
        {children}
    </Group>
);
