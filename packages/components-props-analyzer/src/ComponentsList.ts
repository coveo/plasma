export interface Component {
    /**
     * The name of the component as it is exported
     */
    name: string;
    /**
     * the name of the package from which the component is exported
     */
    packageName: string;
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
];

export default components;
