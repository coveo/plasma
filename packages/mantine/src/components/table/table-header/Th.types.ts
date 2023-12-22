import {Header} from '@tanstack/react-table';
import {ComponentType, SVGProps} from 'react';

export type SortState = 'asc' | 'desc' | 'none';

export interface ThProps<T = unknown> {
    header: Header<T, unknown>;
    sortingIcons?: Record<SortState, ComponentType<SVGProps<SVGSVGElement>>>;
}
