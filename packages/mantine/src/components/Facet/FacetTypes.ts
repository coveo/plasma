import {FunctionComponent} from 'react';

export interface FacetItem extends Record<string, unknown> {
    value: string;
    label: string;
    group?: string;
    count?: number;
}

export type FacetData = FacetItem[];

export interface FacetItemComponentProps {
    data: FacetItem;
    selected: boolean;
    countFormatter?: (value: number) => string;
}

export type FacetItemComponent = FunctionComponent<FacetItemComponentProps>;
