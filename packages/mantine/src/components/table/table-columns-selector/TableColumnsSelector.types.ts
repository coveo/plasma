import {DefaultProps, Selectors} from '@mantine/core';
import {ReactNode} from 'react';
import useStyles from './TableColumnsSelector.styles';

type TableColumnsSelectorStylesNames = Selectors<typeof useStyles>;

export interface TableColumnsSelectorProps extends DefaultProps<TableColumnsSelectorStylesNames> {
    /**
     * The label of the button
     * @default 'Edit columns'
     */
    label?: ReactNode;
    /**
     * The style variant of the button
     * @default 'outline'
     */
    buttonVariant?: string;
    /**
     * An array of column ids that the user cannot hide. This is useful for columns that are required for the table to function properly.
     * @default []
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
    /**
     * A dictionary of column ids and names to use for the checkbox labels.
     */
    columnNames: Record<string, string>;
    /**
     * The content to display in the footer when maxSelectableColumns is defined.
     */
    footer?: ReactNode;
    /**
     * The tooltip to display when the user hovers over a disabled checkbox.
     * @default 'You have reached the maximum display limit.'
     */
    limitReachedTooltip?: string;
}
