import type {LlmsData} from './types.js';

export const listComponents = (data: LlmsData): string => {
    const list = data.components
        .map((c) => `- **${c.name}**: ${c.description || 'Plasma component'}`)
        .join('\n');
    return `# Plasma Components\n\nAll components are imported from \`@coveord/plasma-mantine\`.\n\n${list}`;
};
