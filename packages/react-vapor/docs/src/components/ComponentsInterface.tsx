import * as React from 'react';

export interface IComponent {
    path: string;
    name: string;
    component: ExampleComponent;
}

export type ExampleComponent = React.ComponentType & {
    description?: string;
    firstTabLabel?: string;
    deprecated?: boolean;
    title?: string;
};

export interface TabConfig {
    tabName: string;
    markdown: string;
    order: number;
}
