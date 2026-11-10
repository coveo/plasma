import type {LlmsData} from './types.js';

export const listPatterns = (data: LlmsData): string => {
    const list = (data.patterns ?? []).map((p) => `- **${p.name}**: ${p.description || 'Plasma pattern'}`).join('\n');
    return `# Plasma Patterns\n\nPatterns combine components to solve a recurring user need.\n\n${list}`;
};
