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
    propsType?: 'auto' | (string & {});
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
        name: 'StickyFooter',
        packageName: '@coveord/plasma-mantine',
    },
    {
        name: 'Button',
        packageName: '@coveord/plasma-mantine',
        propsType: 'ButtonProps',
    },
    {
        name: 'ActionIcon',
        packageName: '@coveord/plasma-mantine',
        propsType: 'ActionIconProps',
    },
    {
        name: 'BrowserPreview',
        packageName: '@coveord/plasma-mantine',
        propsType: 'BrowserPreviewProps',
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
    {
        name: 'InlineConfirm',
        packageName: '@coveord/plasma-mantine',
    },
    {
        name: 'Alert',
        packageName: '@coveord/plasma-mantine',
    },
    {
        name: 'Badge',
        packageName: '@coveord/plasma-mantine',
    },
    {
        name: 'InfoToken',
        packageName: '@coveord/plasma-mantine',
        propsType: 'InfoTokenProps',
    },
    {
        name: 'EllipsisText',
        packageName: '@coveord/plasma-mantine',
        propsType: 'EllipsisTextProps',
    },
    {
        name: 'ChildForm',
        packageName: '@coveord/plasma-mantine',
        propsType: 'ChildFormProps',
    },
    {
        name: 'DateRangePickerPopoverCalendar',
        packageName: '@coveord/plasma-mantine',
        propsType: 'DateRangePickerPopoverCalendarProps',
    },
    {
        name: 'DateRangePickerInlineCalendar',
        packageName: '@coveord/plasma-mantine',
        propsType: 'DateRangePickerInlineCalendarProps',
    },
    {
        name: 'DateTimeRangePicker',
        packageName: '@coveord/plasma-mantine',
        propsType: 'DateTimeRangePickerProps',
    },
];

export default components;
