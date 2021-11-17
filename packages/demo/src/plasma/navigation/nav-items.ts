export interface NavItem {
    groupTitle?: string;
    label?: string;
    href?: string;
    selected?: boolean;
    children?: NavItem[];
    disabled?: boolean;
}

/**
 * ==============
 * PAGES MISSING:
 * ==============
 *
 * Many pages from Vapor aren't included in the mockup for Plasma.
 * I've added all those pages (from components and styles) in a new section 'Not Included'
 * As work continues we can roll sections we want to keep into other pages, give them their own page or
 * drop them altogether
 *
 * =========
 * NEW PAGES
 * =========
 *
 * marked as disabled / coming soon for the sidenav
 *
 * * PALETTE
 * * TYPEKIT
 * * ILLUSTRATION
 * * EFFECT
 * * COMMERCE CONFIG CARD
 * * DIVIDER
 * * TOPBAR
 * * SEARCH RESULT CARD
 * * ACTION BUTTON
 * * ADD REMOVE BUTTON
 * * FACET
 * * TOGGLE
 * * BREADCRUMBS
 * * PROMPT
 * * STATUS TOKEN
 * * STATUS WIDGET
 * * COVEOEXPLOADER
 * * RICHPOPOVER
 * * SKELETONBLUR
 */

export const NavItems: NavItem[] = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Brand',
        href: '/brand',
    },
    {
        groupTitle: 'Foundations',
        children: [
            {
                label: 'Palette',
                href: '/components/Palette',
                disabled: true,
            },
            {
                label: 'Typekit',
                href: '/components/Typekit',
                disabled: true,
            },
            {
                label: 'Iconography',
                href: '/styles/icons/list',
            },
            {
                label: 'Illustration',
                href: '/components/Illustration',
                disabled: true,
            },
            {
                label: 'Effects',
                href: '/components/Effects',
                disabled: true,
            },
        ],
    },
    {
        groupTitle: 'Layout',
        children: [
            {
                label: 'Action Bar',
                href: '/components/ActionBar',
            },
            {
                label: 'Bordered Line / Row',
                href: '/components/BorderedLine',
            },
            {
                label: 'Card',
                href: '/styles/cards/card',
            },
            {
                label: 'Commerce Config Card',
                href: '/components/CommerceConfigCard',
                disabled: true,
            },
            {
                label: 'Divider',
                href: '/components/Divider',
                disabled: true,
            },
            {
                label: 'Icon / Logo Card',
                href: '/components/IconCard',
            },
            {
                label: 'Modal',
                href: '/components/ModalWindow',
            },
            {
                label: 'Page Header',
                href: '/styles/headers/site',
            },
            {
                label: 'Top Bar',
                href: '/components/TopBar',
                disabled: true,
            },
            {
                label: 'Search Result Card',
                href: '/components/SearchResultCard',
                disabled: true,
            },
            {
                label: 'Split Layout',
                href: '/components/SplitLayout',
            },
            {
                label: 'Table',
                href: '/components/TableHOC',
            },
            {
                label: 'Banner',
                href: '/components/Banner',
            },
        ],
    },
    {
        groupTitle: 'Input',
        children: [
            {
                label: 'Action Button',
                href: '/components/ActionButton',
                disabled: true,
            },
            {
                label: 'Actionable Item',
                href: '/components/ActionableItem',
            },
            {
                label: 'Add/Remove',
                href: '/components/AddRemove',
                disabled: true,
            },
            {
                label: 'Button',
                href: '/components/Button',
            },
            {
                label: 'Checkbox',
                href: '/components/Checkbox',
            },
            {
                label: 'Childform',
                href: '/components/Childform',
            },
            {
                label: 'Code Editor',
                href: '/components/CodeEditor',
            },
            {
                label: 'Diff Viewer',
                href: '/components/DiffViewer',
            },
            {
                label: 'Dropdown',
                // will need MultiSelect toooo
                href: '/components/SingleSelect',
            },
            {
                label: 'Filter Box',
                href: '/components/FilterBox',
            },
            {
                label: 'Facet',
                href: '/components/Facet',
                disabled: true,
            },
            {
                label: 'Link',
                href: '/styles/typography/links',
            },
            {
                label: 'Multiline Box',
                href: '/components/MultilineBox',
            },
            {
                label: 'Numeric Input',
                href: '/components/NumericInput',
            },
            {
                label: 'Radio Button',
                href: '/components/RadioButton',
            },
            {
                label: 'Search Bar',
                href: '/components/SearchBar',
            },
            {
                label: 'Slider',
                href: '/components/Slider',
            },
            {
                label: 'Text Input',
                href: '/components/TextInput',
            },
            {
                label: 'Toggle',
                href: '/components/Toggle',
                disabled: true,
            },
            {
                label: 'Value Popup',
                href: '/styles/filtering/value-popup',
            },
        ],
    },
    {
        groupTitle: 'Navigation',
        children: [
            {
                label: 'Page Title / Breadcrumbs',
                href: '/components/Header',
                disabled: true,
            },
            {
                label: 'Flat Select',
                href: '/components/FlatSelect',
            },
            {
                label: 'Options Cycle',
                href: '/components/OptionsCycle',
            },
            {
                label: 'Pagination',
                href: '/components/Pagination',
            },
            {
                label: 'Sidebar Navigation',
                href: '/components/SideNavigation',
            },
            {
                label: 'Tabs',
                href: '/components/Tabs',
            },
        ],
    },
    {
        groupTitle: 'Feedback and Info',
        children: [
            {
                label: 'Toast',
                href: '/components/Toast',
            },
            {
                label: 'InfoBox',
                href: '/components/InfoBox',
            },
            {
                label: 'Info Token',
                href: '/components/InfoToken',
            },
            {
                label: 'Limit Card',
                href: '/components/Limit',
            },
            {
                label: 'Progress Bar',
                href: '/styles/form-controls/progress-bar',
            },
            {
                label: 'Prompt Modals',
                href: '/components/Prompt',
                disabled: true,
            },
            {
                label: 'Spinner / Loader',
                href: '/components/Loading',
            },
            {
                label: 'Status Card',
                href: '/components/StatusCard',
            },
            {
                label: 'Status Token',
                href: '/components/StatusToken',
                disabled: true,
            },
            {
                label: 'Status Widget',
                href: '/components/StatusWidget',
                disabled: true,
            },
            {
                label: 'Step / Progress Bar',
                href: '/components/StepProgressBar',
            },
            {
                label: 'Sync Feedback',
                href: '/components/SyncFeedback',
            },
            {
                label: 'Tab / Badge',
                href: '/components/Badge',
            },
            {
                label: 'Tooltip',
                href: '/components/Tooltip',
            },
        ],
    },
    {
        groupTitle: 'Display & Utilities',
        children: [
            {
                label: 'Border',
                href: '/styles/borders',
            },
            {
                label: 'Collapsible',
                href: '/components/Collapsible',
            },
            {
                label: 'Coveo Exp. Loader',
                href: '/components/CoveoExpLoader',
                disabled: true,
            },
            {
                label: 'Rich Popover',
                href: '/components/RichPopover',
                disabled: true,
            },
            {
                label: 'Skeleton Blur',
                href: '/components/SkeletonBlur',
                disabled: true,
            },
        ],
    },
    {
        groupTitle: 'Not included',
        children: [
            {label: 'Action Bar Connected', href: '/components/ActionBarConnected'},
            {label: 'Blankslate', href: '/components/BlankSlate'},
            {label: 'Bordered Line', href: '/components/BorderedLine'},
            {label: 'Browser Preview', href: '/components/BrowserPreview'},
            {label: 'Card Home', href: '/styles/cards/home'},
            {label: 'Card Material', href: '/styles/cards/material'},
            {label: 'Card Wizard', href: '/styles/cards/wizard'},
            {label: 'Chart', href: '/components/Chart'},
            {label: 'Colour Bar', href: '/components/ColorBar'},
            {label: 'Colour Picker', href: '/components/ColorPicker'},
            {label: 'Date Picker', href: '/components/DatePicker'},
            {label: 'Facet Connected', href: '/components/FacetConnected'},
            {label: 'File Picker', href: '/components/Filepicker'},
            {label: 'Footer', href: '/components/Footer'},
            {label: 'Icon Badge', href: '/components/IconBadge'},
            {label: 'Item Filter', href: '/components/Item Filter'},
            {label: 'Item Filter Connected', href: '/components/ItemFilterConnected'},
            {label: 'JSON Editor', href: '/components/JSONEditor'},
            {label: 'Labeled Value', href: '/components/LabeledValue'},
            {label: 'Last Updated', href: '/components/LastUpdated'},
            {label: 'Last Updated Connected', href: '/components/LastUpdatedConnected'},
            {label: 'Link Svg', href: '/components/LinkSvg'},
            {label: 'List Box', href: '/components/ListBox'},
            {label: 'Member', href: '/styles/components/member'},
            {label: 'Modal Wizard', href: '/components/ModalWizard'},
            {label: 'Multi Select', href: '/components/MultiSelect'},
            {label: 'Pagination Connected', href: '/components/PaginationConnected'},
            {label: 'Partialstring Match', href: '/components/PartialstringMatch'},
            {label: 'Popover', href: '/components/Popover'},
            {label: 'Refesh', href: '/components/Refresh'},
            {label: 'Section', href: '/components/Section'},
            {label: 'Separator', href: '/components/Separator'},
            {label: 'Sidenavigation Loading', href: '/components/SidenavigationLoading'},
            {label: 'Slidey', href: '/components/Slidey'},
            {label: 'Spaced Box', href: '/styles/layout/spaced-box'},
            {label: 'Subnavigation', href: '/components/Subnavigation'},
            {label: 'SVG', href: '/components/SVG'},
            {label: 'Sync', href: '/components/Sync'},
            {label: 'Table Loading', href: '/components/TableHOCLoading'},
            {label: 'Table Server', href: '/components/TableHOCServer'},
            {label: 'Table Blank Slate', href: '/components/TableHOCwithBlankSlate'},
            {label: 'Tabs Connected', href: '/components/TabsConnected'},
            {label: 'Text Area', href: '/components/TextArea'},
            {label: 'Toast Connected', href: '/components/ToastConnected'},
            {label: 'Toast Content', href: '/components/ToastContent'},
            {label: 'Transparency', href: '/styles/transparency'},
            {label: 'Typekit - Headings', href: '/styles/typography/headings'},
            {label: 'Typekit - Utilities', href: '/styles/typography/utilities'},
            {label: 'Typekit - Lists', href: '/styles/typography/lists'},
            {label: 'Typekit - Text Size', href: '/styles/utility/line-height'},
            {label: 'Typekit - Text Colors', href: '/styles/utility/text-colors'},
            {label: 'Typekit - Icon Colors', href: '/styles/utility/icon-colors'},
            {label: 'Typekit - Whitespace', href: '/styles/utility/whitespace'},
            {label: 'Cursor', href: '/styles/utility/cursor'},
            {label: 'Color Dots', href: '/styles/utility/color-dots'},
        ],
    },
];
