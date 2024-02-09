import {DefaultProps, Selectors} from '@mantine/core';
import {ReactNode} from 'react';
import useStyles from './TableEditColumnsVisibility.styles';

type TableEditColumnsVisibilityStylesNames = Selectors<typeof useStyles>;

export interface TableEditColumnsVisibilityProps extends DefaultProps<TableEditColumnsVisibilityStylesNames> {
    /**
     * The label of the button
     * @default 'Edit columns'
     */
    label?: ReactNode;
    /**
     * An array of column ids that the user cannot hide. This is useful for columns that are required for the table to function properly.
     */
    nonHideableColumns?: string[];
    /**
     * Whether the count of visible columns is shown in the button label.
     * @default false
     */
    showVisibleCountLabel?: boolean;
    /**
     * The maximum number of columns that can be selected at the same time.
     * If defined a footer will render with the remaining number of columns that can be selected.
     */
    maxSelectableColumns?: number;
}
