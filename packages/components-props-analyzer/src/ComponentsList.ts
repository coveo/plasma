export interface Component {
    /**
     * The name of the component as it is exported
     */
    name: string;
    /**
     * The name of the package from which the component is exported
     */
    packageName: string;
    /**
     * The props type or interface that contains all the props of this component.
     *
     * Most of the time you can use `'auto'`, which will use `React.ComponentProps<typeof name>`
     * to infer the type.
     *
     * @default 'auto'
     */
    propsType?: 'auto' | string;
    /**
     * Suffix to add to the exported name.
     * Useful to avoid name collisions
     */
    suffix?: string;
}

export interface ComponentMetadata {
    name: string;
    description: string;
    type: string;
    optional: boolean;
    defaultValue: string | null;
    deprecation: string | null;
    params: Array<{parameterName: string; text: string}>;
}

/**
 * These are the components whose props are going to be automatically extracted into ./src/components
 */
const components: Component[] = [
    {
        name: 'Badge',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'Toast',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'BlankSlate',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'BrowserPreview',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'ChartContainer',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'CollapsibleConnected',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'IconCard',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'LabeledValue',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'Limit',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'ModalCompositeConnected',
        packageName: '@coveord/plasma-react',
        propsType: 'IModalCompositeProps',
    },
    {
        name: 'ModalWizard',
        packageName: '@coveord/plasma-react',
        suffix: 'Legacy',
    },
    {
        name: 'BasicHeader',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'Section',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'SplitLayout',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'StickyFooter',
        packageName: '@coveord/plasma-react',
        suffix: 'Legacy',
    },
    {
        name: 'TableHOC',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'ActionableItem',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'Button',
        packageName: '@coveord/plasma-react',
        suffix: 'Legacy',
    },
    {
        name: 'Checkbox',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'CodeEditor',
        packageName: '@coveord/plasma-react',
        suffix: 'Legacy',
    },
    {
        name: 'ColorPicker',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'Countdown',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'DatePickerDropdownConnected',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'DiffViewer',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'Facet',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'Filepicker',
        packageName: '@coveord/plasma-react',
        propsType: 'FilepickerProps',
    },
    {
        name: 'FilterBoxConnected',
        packageName: '@coveord/plasma-react',
        propsType: 'IFilterBoxOwnProps',
    },
    {
        name: 'FlatSelectConnected',
        packageName: '@coveord/plasma-react',
        propsType: 'IFlatSelectOwnProps',
    },
    {
        name: 'JSONEditorConnected',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'MultilineBox',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'NumericInputConnected',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'RadioSelectConnected',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'SearchBar',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'SingleSelectConnected',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'MultiSelectConnected',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'Slider',
        packageName: '@coveord/plasma-react',
        propsType: 'SliderOwnProps',
    },
    {
        name: 'TextArea',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'TextInput',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'BreadcrumbHeader',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'SideNavigation',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'SubNavigation',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'Tab',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'Badge',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'ColorBar',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'IconBadge',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'LastUpdated',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'Loading',
        packageName: '@coveord/plasma-react',
        propsType: 'ILoadingOwnProps',
    },
    {
        name: 'StepProgressBar',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'SyncFeedback',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'Toast',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'Tooltip',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'ActionBarConnected',
        packageName: '@coveord/plasma-react',
        propsType: 'IActionBarProps',
    },
    {
        name: 'InfoToken',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'LinkSvg',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'ListBox',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'OptionsCycleConnected',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'PartialStringMatch',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'SlideY',
        packageName: '@coveord/plasma-react',
    },
    {
        name: 'Header',
        packageName: '@coveord/plasma-mantine',
    },
    {
        name: 'Collection',
        packageName: '@coveord/plasma-mantine',
    },
    {
        name: 'CodeEditor',
        packageName: '@coveord/plasma-mantine',
    },
    {
        name: 'Table',
        packageName: '@coveord/plasma-mantine',
    },
    {
        name: 'Modal',
        packageName: '@coveord/plasma-mantine',
    },
    {
        name: 'ModalWizard',
        packageName: '@coveord/plasma-mantine',
    },
    {
        name: 'StickyFooter',
        packageName: '@coveord/plasma-mantine',
    },
    {
        name: 'Button',
        packageName: '@coveord/plasma-mantine',
        propsType: 'ButtonProps',
    },
    {
        name: 'CopyToClipboard',
        packageName: '@coveord/plasma-mantine',
        propsType: 'CopyToClipboardProps',
    },
    {
        name: 'Prompt',
        packageName: '@coveord/plasma-mantine',
    },
];

export default components;
