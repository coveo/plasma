interface NavItem {
    groupTitle?: string;
    label?: string;
    href?: string;
    selected?: boolean;
    children?: NavItem[];
    disabled?: boolean;
}

/**
 * ==========================
 * PAGES MISSING (COMPONENTS):
 * ==========================
 *
 * * ACTIONABLE ITEM
 * * ACTION BAR CONNECTED
 * * BLANKSLATE
 * * BORDERED LINE
 * * BROWSER PREVIEW
 * * COLOUR BAR
 * * COLOUR PICKER
 * * DATEPICKER
 * * FACET CONNECTED
 * * FILEPICKER
 * * FOOTER
 * * ICON BADGE
 * * ITEM FILTER
 * * ITEM FILTER CONNECTED
 * * JSON EDITOR
 * * LABELED VALUE
 * * LAST UPDATED
 * * LAST UPDATED CONNECTED
 * * LINK SVG
 * * LIST BOX
 * * MODAL WIZARD
 * * MULTI SELECT (MULTI & SINGLE WILL UNDER DROPDOWN I GUESS)
 * * PAGINATION CONNECTED
 * * PARTIALSTRING MATCH
 * * POPOVER
 * * REFESH
 * * SECTION
 * * SEPARATOR
 * * SIDENAVIGATION LOADING
 * * SLIDEY
 * * SUBNAVIGATION
 * * SVG :-(
 * * SYNC
 * * TABLE LOADING / SERVER / BLANK - I ASSUME THESE WILL BE ROLLED INTO THE TABLE DEMO
 * * TABSCONNECTED
 * * TEXT AREA
 * * TOAST CONNECTED
 * * TOAST CONTENT
 *
 * ==========================
 * * PAGES MISSING (STYLES):
 * ==========================
 *
 * * CARD - styles/cards/card IS CURRENTLY THE NEW ROUTE FOR CARD. HOME / MATERIAL / WIZARD MISSING
 * * MEMBER
 * * BANNER - DUPLICATE WITH THE ONE IN COMPONENTS
 * * ICONOGRAPHY LINKEDTOICONS, NOT SVG. SHOULD THESE BEE ROLLED TOGETHER
 * * SPACE BOX
 * * TRANSPARENCY
 * * TYPOGRAPHY - HEADING / UTILITIES / LISTS AND UTILITY SECTION SHOULD BE GROUPED IN TYPEKIT WHEN READY
 *
 * ===============================
 * NON-EXISTENT COMPONENTS / PAGES
 * ===============================
 *
 * marked as disabled for the sidenav
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
        href: '/Brand',
    },
    {
        groupTitle: 'Foundations',
        children: [
            {
                label: 'Palette',
                href: '/styles/Palette',
                disabled: true,
            },
            {
                label: 'Typekit',
                href: '/styles/Typekit',
                disabled: true,
            },
            {
                label: 'Iconography',
                href: '/styles/icons/list',
            },
            {
                label: 'Illustration',
                href: '/styles/Illustration',
                disabled: true,
            },
            {
                label: 'Effects',
                href: '/styles/Effects',
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
                href: '/components/Breadcrumbs',
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
];
