interface NavItem {
    groupTitle?: string;
    label?: string;
    href?: string;
    selected?: boolean;
    children?: NavItem[];
}

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
                href: '/Palette',
            },
            {
                label: 'Typekit',
                href: '/Typekit',
            },
            {
                label: 'Iconography',
                href: '/Iconography',
            },
            {
                label: 'Illustration',
                href: '/Illustration',
            },
            {
                label: 'Effects',
                href: '/Effects',
            },
        ],
    },
    {
        groupTitle: 'Layout',
        children: [
            {
                label: 'Action Bar',
                href: '/ActionBar',
            },
            {
                label: 'Bordered Line / Row',
                href: '/BorderedLine',
            },
            {
                label: 'Card',
                href: '/Card',
            },
            {
                label: 'Commerce Config Card',
                href: '/CommerceConfigCard',
            },
            {
                label: 'Divider',
                href: '/Divider',
            },
            {
                label: 'Icon / Logo Card',
                href: '/IconCard',
            },
            {
                label: 'Modal',
                href: '/Modal',
            },
            {
                label: 'Page Header',
                href: '/PageHeader',
            },
            {
                label: 'Top Bar',
                href: '/TopBar',
            },
            {
                label: 'Search Result Card',
                href: '/SearchResultCard',
            },
            {
                label: 'Split Layout',
                href: '/SplitLayout',
            },
            {
                label: 'Table',
                href: '/Table',
            },
            {
                label: 'Banner',
                href: '/Banner',
            },
        ],
    },
    {
        groupTitle: 'Input',
        children: [
            {
                label: 'Action Button',
                href: '/ActionButton',
            },
            {
                label: 'Actionable Item',
                href: '/ActionableItem',
            },
            {
                label: 'Add/Remove',
                href: '/AddRemove',
            },
            {
                label: 'Button',
                href: '/Button',
            },
            {
                label: 'Checkbox',
                href: '/Checkbox',
            },
            {
                label: 'Childform',
                href: '/Childform',
            },
            {
                label: 'Code Editor',
                href: '/CodeEditor',
            },
            {
                label: 'Diff Viewer',
                href: '/DiffViewer',
            },
            {
                label: 'Dropdown',
                href: '/Dropdown',
            },
            {
                label: 'Filter Box',
                href: '/FilterBox',
            },
            {
                label: 'Facet',
                href: '/Facet',
            },
            {
                label: 'Link',
                href: '/Link',
            },
            {
                label: 'Multiline Box',
                href: '/MultilineBox',
            },
            {
                label: 'Numeric Input',
                href: '/NumericInput',
            },
            {
                label: 'Radio Button',
                href: '/RadioButton',
            },
            {
                label: 'Search Bar',
                href: '/SearchBar',
            },
            {
                label: 'Slider',
                href: '/Slider',
            },
            {
                label: 'Text Input',
                href: '/TextInput',
            },
            {
                label: 'Toggle',
                href: '/Toggle',
            },
            {
                label: 'Value Popup',
                href: '/ValuePopup',
            },
        ],
    },
    {
        groupTitle: 'Navigation',
        children: [
            {
                label: 'Page Title / Breadcrumbs',
                href: '/Breadcrumbs',
            },
            {
                label: 'Flat Select',
                href: '/FlatSelect',
            },
            {
                label: 'Options Cycle',
                href: '/OptionsCycle',
            },
            {
                label: 'Pagination',
                href: '/Pagination',
            },
            {
                label: 'Sidebar Navigation',
                href: '/SidebarNavigation',
            },
            {
                label: 'Tabs',
                href: '/Tabs',
            },
        ],
    },
    {
        groupTitle: 'Feedback and Info',
        children: [
            {
                label: 'Toast',
                href: '/Toast',
            },
            {
                label: 'InfoBox',
                href: '/InfoBox',
            },
            {
                label: 'Info Token',
                href: '/InfoToken',
            },
            {
                label: 'Limit Card',
                href: '/LimitCard',
            },
            {
                label: 'Multistep Bar',
                href: '/MultistepBar',
            },
            {
                label: 'Progress Bar',
                href: '/ProgressBar',
            },
            {
                label: 'Prompt Modals',
                href: '/Prompt',
            },
            {
                label: 'Spinner / Loader',
                href: '/Loading',
            },
            {
                label: 'Status Card',
                href: '/StatusCard',
            },
            {
                label: 'Status Token',
                href: '/StatusToken',
            },
            {
                label: 'Status Widget',
                href: '/StatusWidget',
            },
            {
                label: 'Step / Progress Bar',
                href: '/StepProgressBar',
            },
            {
                label: 'Sync Feedback',
                href: '/SyncFeedback',
            },
            {
                label: 'Tab / Badge',
                href: '/Badge',
            },
            {
                label: 'Tooltip',
                href: '/Tooltip',
            },
        ],
    },
    {
        groupTitle: 'Display & Utilities',
        children: [
            {
                label: 'Border',
                href: '/Border',
            },
            {
                label: 'Collapsible',
                href: '/Collapsible',
            },
            {
                label: 'Coveo Exp. Loader',
                href: '/CoveoExpLoader',
            },
            {
                label: 'Rich Popover',
                href: '/RichPopover',
            },
            {
                label: 'Skeleton Blur',
                href: '/SkeletonBlur',
            },
        ],
    },
];
