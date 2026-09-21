import type {LlmsData, ToolResult} from './types.js';

export const getFoundations = (data: LlmsData): ToolResult => {
    const foundations = data.foundations ?? [];
    if (foundations.length === 0) {
        return {
            text: 'No foundations documentation is available.',
            isError: true,
        };
    }
    return {text: foundations.map((f) => f.content).join('\n\n---\n\n')};
};
