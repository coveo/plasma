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

// Affix
export * from './components/Affix/Affix.js';

// Anchor
export * from './components/Anchor/Anchor.js';

// Angle Slider
export * from './components/AngleSlider/AngleSlider.js';

// App Shell
export * from './components/AppShell/AppShell.js';

// Aspect Ratio
export * from './components/AspectRatio/AspectRatio.js';

// Autocomplete
export * from './components/Autocomplete/Autocomplete.js';

// Avatar
export * from './components/Avatar/Avatar.js';

// Background Image
export * from './components/BackgroundImage/BackgroundImage.js';

// Alert - override Mantine Alert
export {Alert} from './components/Alert/Alert.js';

// Badge - override Mantine Badge
export {
    Badge,
    type BadgeOverloadFactory,
    type SemanticBadge,
    type SemanticBadgeProps,
} from './components/Badge/Badge.js';

// Blockquote
export * from './components/Blockquote/Blockquote.js';

// Blank Slate
export * from './components/BlankSlate/BlankSlate.js';

// Box
export * from './components/Box/Box.js';

// Breadcrumbs
export * from './components/Breadcrumbs/Breadcrumbs.js';

// Browser Preview
export * from './components/BrowserPreview/BrowserPreview.js';

// Burger
export * from './components/Burger/Burger.js';

// Button - override Mantine Button
export {Button, type ButtonProps} from './components/Button/Button.js';
export {type ButtonWithDisabledTooltipProps} from './components/Button/ButtonWithDisabledTooltip.js';

// Card
export * from './components/Card/Card.js';

// Center
export * from './components/Center/Center.js';

// Check Icon
export * from './components/CheckIcon/CheckIcon.js';

// Checkbox
export * from './components/Checkbox/Checkbox.js';

// Checkbox Icon
export * from './components/CheckboxIcon/CheckboxIcon.js';

// Child Form
export * from './components/ChildForm/ChildForm.js';

// Chip - override Mantine Chip
export {Chip} from './components/Chip/Chip.js';

// Close Button
export * from './components/CloseButton/CloseButton.js';

// Code
export * from './components/Code/Code.js';

// Code Editor
export * from './components/CodeEditor/CodeEditor.js';

// Collapse
export * from './components/Collapse/Collapse.js';

// Collection
export * from './components/Collection/Collection.js';
export {enhanceWithCollectionProps} from './components/Collection/enhanceWithCollectionProps.js';

// Color Input
export * from './components/ColorInput/ColorInput.js';

// Color Picker
export * from './components/ColorPicker/ColorPicker.js';

// Color Swatch
export * from './components/ColorSwatch/ColorSwatch.js';

// Combobox
export * from './components/Combobox/Combobox.js';

// Container
export * from './components/Container/Container.js';

// Copy Button
export * from './components/CopyButton/CopyButton.js';

// Copy to Clipboard
export * from './components/CopyToClipboard/CopyToClipboard.js';

// Date Range Picker
export * from './components/DateRangePicker/DateRangePicker.js';
export * from './components/DateRangePicker/DateRangePickerInlineCalendar.js';
export * from './components/DateRangePicker/DateRangePickerPopoverCalendar.js';
export * from './components/DateRangePicker/DateRangePickerPresetSelect.js';

// Date Time Range Picker
export * from './components/DateTimeRangePicker/DateTimeRangePicker.js';

// Month Picker Input
export * from './components/MonthPickerInput/MonthPickerInput.js';

// Time Picker
export * from './components/TimePicker/TimePicker.js';

// Dialog
export * from './components/Dialog/Dialog.js';

// Divider
export * from './components/Divider/Divider.js';

// Drawer
export * from './components/Drawer/Drawer.js';

// Ellipsis Text
export * from './components/EllipsisText/EllipsisText.js';

// Fieldset
export * from './components/Fieldset/Fieldset.js';

// File Button
export * from './components/FileButton/FileButton.js';

// File Input
export * from './components/FileInput/FileInput.js';

// Flex
export * from './components/Flex/Flex.js';

// Floating Indicator
export * from './components/FloatingIndicator/FloatingIndicator.js';

// Focus Trap
export * from './components/FocusTrap/FocusTrap.js';

// Grid
export * from './components/Grid/Grid.js';

// Group
export * from './components/Group/Group.js';

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

// Highlight
export * from './components/Highlight/Highlight.js';

// Hover Card
export * from './components/HoverCard/HoverCard.js';

// Image
export * from './components/Image/Image.js';

// Indicator
export * from './components/Indicator/Indicator.js';

// Info Token
export * from './components/InfoToken/InfoToken.js';

// Input
export * from './components/Input/Input.js';

// Input Base
export * from './components/InputBase/InputBase.js';

// Inline Confirm
export * from './components/InlineConfirm/InlineConfirm.js';
export * from './components/InlineConfirm/InlineConfirmContext.js';

// Json Input
export * from './components/JsonInput/JsonInput.js';

// Kbd
export * from './components/Kbd/Kbd.js';

// Last Updated
export * from './components/LastUpdated/LastUpdated.js';

// List
export * from './components/List/List.js';

// Loader
export * from './components/Loader/Loader.js';

// Loading Overlay
export * from './components/LoadingOverlay/LoadingOverlay.js';

// Circle Loader
export * from './components/CircleLoader/CircleLoader.js';

// Mark
export * from './components/Mark/Mark.js';

// Menu - override Mantine Menu
export {Menu, type MenuItemProps} from './components/Menu/Menu.js';

// Modal - override Mantine Modal
export {Modal, type ModalFactory, type ModalProps} from './components/Modal/Modal.js';
export * from './components/Modal/ModalFooter.js';

// Modal Base
export * from './components/ModalBase/ModalBase.js';

// Multi Select
export * from './components/MultiSelect/MultiSelect.js';

// Native Select
export * from './components/NativeSelect/NativeSelect.js';

// Nav Link
export * from './components/NavLink/NavLink.js';

// Notification
export * from './components/Notification/Notification.js';

// Number Formatter
export * from './components/NumberFormatter/NumberFormatter.js';

// Number Input
export * from './components/NumberInput/NumberInput.js';

// Overlay
export * from './components/Overlay/Overlay.js';

// Pagination
export * from './components/Pagination/Pagination.js';

// Paper
export * from './components/Paper/Paper.js';

// Pill
export * from './components/Pill/Pill.js';

// Pills Input
export * from './components/PillsInput/PillsInput.js';

// Pin Input
export * from './components/PinInput/PinInput.js';

// Popover
export * from './components/Popover/Popover.js';

// Portal
export * from './components/Portal/Portal.js';

// Progress
export * from './components/Progress/Progress.js';

// Prompt
export * from './components/Prompt/Prompt.js';

// Radio
export * from './components/Radio/Radio.js';

// RadioCard - override Mantine RadioCard
export {RadioCard, type RadioCardProps} from './components/RadioCard/RadioCard.js';

// Rating
export * from './components/Rating/Rating.js';

// Ring Progress
export * from './components/RingProgress/RingProgress.js';

// Scroll Area
export * from './components/ScrollArea/ScrollArea.js';

// Segmented Control
export * from './components/SegmentedControl/SegmentedControl.js';

// Semi Circle Progress
export * from './components/SemiCircleProgress/SemiCircleProgress.js';

// Read Only - override Mantine PasswordInput and Select
export {PasswordInput} from './components/PasswordInput/PasswordInput.js';
export {Select} from './components/Select/Select.js';

// Simple Grid
export * from './components/SimpleGrid/SimpleGrid.js';

// Skeleton
export * from './components/Skeleton/Skeleton.js';

// Slider
export * from './components/Slider/Slider.js';

// Space
export * from './components/Space/Space.js';

// Spoiler
export * from './components/Spoiler/Spoiler.js';

// Stack
export * from './components/Stack/Stack.js';

// Status Token
export * from './components/StatusToken/StatusToken.js';

// Stepper
export * from './components/Stepper/Stepper.js';

// Sticky Footer
export * from './components/StickyFooter/StickyFooter.js';

// Switch
export * from './components/Switch/Switch.js';

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

// Table of Contents
export * from './components/TableOfContents/TableOfContents.js';

// Tabs
export * from './components/Tabs/Tabs.js';

// Tags Input
export * from './components/TagsInput/TagsInput.js';

// Text
export * from './components/Text/Text.js';

// Text Input
export * from './components/TextInput/TextInput.js';

// Textarea
export * from './components/Textarea/Textarea.js';

// Theme Icon
export * from './components/ThemeIcon/ThemeIcon.js';

// Timeline
export * from './components/Timeline/Timeline.js';

// Title
export * from './components/Title/Title.js';

// Tooltip
export * from './components/Tooltip/Tooltip.js';

// Transition
export * from './components/Transition/Transition.js';

// Tree
export * from './components/Tree/Tree.js';

// Typography
export * from './components/Typography/Typography.js';

// Unstyled Button
export * from './components/UnstyledButton/UnstyledButton.js';

// Visually Hidden
export * from './components/VisuallyHidden/VisuallyHidden.js';

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
