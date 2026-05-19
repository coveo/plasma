import type {ComponentData, ToolResult} from './types.js';

export const getComponentDoc = (componentMap: Map<string, ComponentData>, component: string): ToolResult => {
    const doc = componentMap.get(component.toLowerCase());
    if (!doc) {
        return {
            text: `Component "${component}" not found. Use list_components to see available components.`,
            isError: true,
        };
    }
    return {text: doc.content};
};
