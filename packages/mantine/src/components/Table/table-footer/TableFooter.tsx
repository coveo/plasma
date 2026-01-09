import {Group, GroupProps} from '@mantine/core';
import {FunctionComponent, ReactNode} from 'react';

export interface TableFooterProps extends GroupProps {
    children?: ReactNode;
}

export const TableFooter: FunctionComponent<TableFooterProps> = ({...others}) => (
    <Group justify="space-between" px="xl" py="md" {...others} />
);

TableFooter.displayName = 'Table.Footer';
