import {Group} from '@mantine/core';
import {FunctionComponent} from 'react';
import {TableFooterProps} from './TableFooter.types';

export const TableFooter: FunctionComponent<TableFooterProps> = ({children, ...others}) => (
    <Group justify="space-between" px="xl" py="md" {...others}>
        {children}
    </Group>
);
