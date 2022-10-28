import {Group} from '@mantine/core';
import {FunctionComponent} from 'react';

export const TableFooter: FunctionComponent = ({children}) => (
    <Group position="apart" px="md" py="sm">
        {children}
    </Group>
);
