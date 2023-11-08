import {DefaultProps, Selectors} from '@mantine/core';
import {Header} from '@tanstack/react-table';
import {ComponentType, SVGProps} from 'react';
import useStyles from './Th.styles';

export type SortState = 'asc' | 'desc' | 'none';

export interface ThProps<T = unknown> extends DefaultProps<Selectors<typeof useStyles>> {
    header: Header<T, unknown>;
    sortingIcons?: Record<SortState, ComponentType<SVGProps<SVGSVGElement>>>;
}
