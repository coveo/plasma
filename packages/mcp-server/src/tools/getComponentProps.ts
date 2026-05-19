import type {ComponentData, ToolResult} from './types.js';

export const getComponentProps = (componentMap: Map<string, ComponentData>, component: string): ToolResult => {
    const doc = componentMap.get(component.toLowerCase());
    if (!doc) {
        return {
            text: `Component "${component}" not found. Use list_components to see available components.`,
            isError: true,
        };
    }
    const propsMatch = doc.content.match(/## Props\n([\s\S]*?)(?=\n## |$)/);
    const propsSection = propsMatch ? `## Props\n${propsMatch[1]}` : '_No props documentation available._';
    return {text: `# ${doc.name} Props\n\n${propsSection}`};
};
