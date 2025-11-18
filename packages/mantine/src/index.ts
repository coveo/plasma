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
export {Accordion} from './components/accordion/Accordion.js';

// Action Icon - override Mantine ActionIcon
export {ActionIcon, type ActionIconProps} from './components/action-icon/ActionIcon.js';

// Alert - override Mantine Alert
export {Alert} from './components/alert/Alert.js';

// Badge - override Mantine Badge
export {
    Badge,
    type BadgeOverloadFactory,
    type SemanticBadge,
    type SemanticBadgeProps,
} from './components/badge/Badge.js';

// Blank Slate
export * from './components/blank-slate/BlankSlate.js';

// Browser Preview
export * from './components/browser-preview/BrowserPreview.js';

// Button - override Mantine Button
export {Button, type ButtonProps} from './components/button/Button.js';
export {type ButtonWithDisabledTooltipProps} from './components/button/ButtonWithDisabledTooltip.js';

// Checkbox
export * from './components/checkbox/CheckboxIcon.js';

// Child Form
export * from './components/child-form/ChildForm.js';

// Chip - override Mantine Chip
export {Chip} from './components/chip/Chip.js';

// Code Editor
export * from './components/code-editor/CodeEditor.js';

// Collection
export * from './components/collection/Collection.js';
export {enhanceWithCollectionProps} from './components/collection/enhanceWithCollectionProps.js';

// Copy to Clipboard
export * from './components/copyToClipboard/CopyToClipboard.js';

// Date Range Picker
export * from './components/date-range-picker/DateRangePicker.js';
export * from './components/date-range-picker/DateRangePickerInlineCalendar.js';
export * from './components/date-range-picker/DateRangePickerPopoverCalendar.js';
export * from './components/date-range-picker/DateRangePickerPresetSelect.js';

// Date Time Range Picker
export * from './components/date-time-range-picker/DateTimeRangePicker.js';

// Ellipsis Text
export * from './components/ellipsis-text/EllipsisText.js';

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
} from './components/header/Header.js';

// Info Token
export * from './components/info-token/InfoToken.js';

// Inline Confirm
export * from './components/inline-confirm/InlineConfirm.js';
export * from './components/inline-confirm/InlineConfirmContext.js';

// Last Updated
export * from './components/last-updated/LastUpdated.js';

// Loader
export * from './components/loader/CircleLoader.js';

// Menu - override Mantine Menu
export {Menu, type MenuItemProps} from './components/menu/Menu.js';

// Modal - override Mantine Modal
export {Modal, type ModalFactory, type ModalProps} from './components/modal/Modal.js';
export * from './components/modal/ModalFooter.js';

// Prompt
export * from './components/prompt/Prompt.js';

// Read Only - override Mantine PasswordInput and Select
export {PasswordInput} from './components/read-only/PasswordInput.js';
export {Select} from './components/read-only/Select.js';

// Sticky Footer
export * from './components/sticky-footer/StickyFooter.js';

// Table - override Mantine Table
export {flexRender as renderTableCell} from '@tanstack/react-table';
export {type TablePredicateProps} from './components/table/table-predicate/TablePredicate.js';
export {Table, TableComponentsOrder, type PlasmaTableFactory} from './components/table/Table.js';
export {
    type TableAction,
    type TableLayout,
    type TableLayoutProps,
    type TableProps,
} from './components/table/Table.types.js';
export {useTableContext} from './components/table/TableContext.js';
export {useTable, type TableState, type TableStore, type UseTableOptions} from './components/table/use-table.js';
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
