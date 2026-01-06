import {MantineColorsTuple, noop} from '@mantine/core';
import {type RowData} from '@tanstack/table-core';
import {type PlasmaColors} from './theme/PlasmaColors.js';

export * from '@mantine/carousel';
export * from '@mantine/core';
export {Pagination} from '@mantine/core';
export {type DatesRangeValue} from '@mantine/dates';
export * from '@mantine/form';
export * from '@mantine/hooks';
export * from '@mantine/notifications';
export {type NotificationsProps} from '@mantine/notifications';
export * from '@tanstack/table-core';

// Export all components
// Accordion
export {Accordion} from './components/Accordion/Accordion.js';

// Action Icon - override Mantine ActionIcon
export {ActionIcon, type ActionIconProps} from './components/ActionIcon/ActionIcon.js';

// Alert - override Mantine Alert
export {Alert} from './components/Alert/Alert.js';

// Badge - override Mantine Badge
export {
    Badge,
    type BadgeOverloadFactory,
    type SemanticBadge,
    type SemanticBadgeProps,
} from './components/Badge/Badge.js';

// Blank Slate
export * from './components/BlankSlate/BlankSlate.js';

// Browser Preview
export * from './components/BrowserPreview/BrowserPreview.js';

// Button - override Mantine Button
export {Button, type ButtonProps} from './components/Button/Button.js';
export {type ButtonWithDisabledTooltipProps} from './components/Button/ButtonWithDisabledTooltip.js';

// Checkbox
export * from './components/CheckboxIcon/CheckboxIcon.js';

// Child Form
export * from './components/ChildForm/ChildForm.js';

// Chip - override Mantine Chip
export {Chip} from './components/Chip/Chip.js';

// Code Editor
export * from './components/CodeEditor/CodeEditor.js';

// Collection
export * from './components/Collection/Collection.js';
export {enhanceWithCollectionProps} from './components/Collection/enhanceWithCollectionProps.js';

// Copy to Clipboard
export * from './components/CopyToClipboard/CopyToClipboard.js';

// Date Range Picker
export * from './components/DateRangePicker/DateRangePicker.js';
export * from './components/DateRangePicker/DateRangePickerInlineCalendar.js';
export * from './components/DateRangePicker/DateRangePickerPopoverCalendar.js';
export * from './components/DateRangePicker/DateRangePickerPresetSelect.js';

// Date Time Range Picker
export * from './components/DateTimeRangePicker/DateTimeRangePicker.js';

// Ellipsis Text
export * from './components/EllipsisText/EllipsisText.js';

// Header - override @tanstack/table-core Header
export {
    Header,
    type HeaderBreadcrumbsProps,
    type HeaderDocAnchorProps,
    type HeaderFactory,
    type HeaderProps,
    type HeaderRightProps,
    type HeaderStyleNames,
    type HeaderVariant,
} from './components/Header/Header.js';

// Info Token
export * from './components/InfoToken/InfoToken.js';

// Pills Input
export * from './components/PillsInput/PillsInput.js';

// Status Token
export * from './components/StatusToken/StatusToken.js';

// Inline Confirm
export * from './components/InlineConfirm/InlineConfirm.js';
export * from './components/InlineConfirm/InlineConfirmContext.js';

// Last Updated
export * from './components/LastUpdated/LastUpdated.js';

// Loader
export * from './components/CircleLoader/CircleLoader.js';

// Menu - override Mantine Menu
export {Menu, type MenuItemProps} from './components/Menu/Menu.js';

// Modal - override Mantine Modal
export {Modal, type ModalFactory, type ModalProps} from './components/Modal/Modal.js';
export * from './components/Modal/ModalFooter.js';

// Prompt
export * from './components/Prompt/Prompt.js';

// RadioCard - override Mantine RadioCard
export {RadioCard, type RadioCardProps} from './components/RadioCard/RadioCard.js';

// Read Only - override Mantine PasswordInput and Select
export {PasswordInput} from './components/PasswordInput/PasswordInput.js';
export {Select} from './components/Select/Select.js';

// Sticky Footer
export * from './components/StickyFooter/StickyFooter.js';

// Table - override Mantine Table
export {flexRender as renderTableCell} from '@tanstack/react-table';
export {TableActionsColumn} from './components/Table/table-column/TableActionsColumn.js';
export {type TablePredicateProps} from './components/Table/table-predicate/TablePredicate.js';
export {Table, TableComponentsOrder, type PlasmaTableFactory} from './components/Table/Table.js';
export {
    type TableAction,
    type TableLayout,
    type TableLayoutProps,
    type TableProps,
} from './components/Table/Table.types.js';
export {useTableContext} from './components/Table/TableContext.js';
export {useTable, type TableState, type TableStore, type UseTableOptions} from './components/Table/use-table.js';
export {useUrlSyncedState, type SearchParamEntry, type UseUrlSyncedStateOptions} from './hooks/use-url-synced-state.js';

export {noop};

// Theme
export * from './theme/plasmaCSSVariablesResolver.js';
export * from './theme/Plasmantine.js';

declare module '@mantine/core' {
    export interface MantineThemeColorsOverride {
        colors: Record<keyof typeof PlasmaColors | (string & {}), MantineColorsTuple>;
    }
}

declare module '@tanstack/react-table' {
    interface ColumnMeta<TData extends RowData, TValue> {
        /**
         * Whether the column is a control column.
         * Control columns are columns that are not part of the data but are used to control the table.
         * For example, a column that contains checkboxes to select rows.
         */
        controlColumn: boolean;
    }
}
