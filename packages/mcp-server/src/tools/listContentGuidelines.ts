import type {LlmsData} from './types.js';

export const listContentGuidelines = (data: LlmsData): string => {
    const list = data.contentGuidelines
        .map((g) => `- **${g.name}**: ${g.description || 'Plasma content guideline'}`)
        .join('\n');
    return `# Plasma Content Guidelines\n\nGuidelines for writing UX copy in Coveo products.\n\n${list}`;
};
