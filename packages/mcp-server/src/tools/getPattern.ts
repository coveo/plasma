import type {DocData, ToolResult} from './types.js';

export const buildPatternMap = (patterns: DocData[]): Map<string, DocData> => {
    const map = new Map<string, DocData>();
    for (const p of patterns) {
        map.set(p.name.toLowerCase(), p);
    }
    return map;
};

export const getPattern = (patternMap: Map<string, DocData>, pattern: string): ToolResult => {
    const match = patternMap.get(pattern.toLowerCase());
    if (!match) {
        return {
            text: `Pattern "${pattern}" not found. Use list_patterns to see available patterns.`,
            isError: true,
        };
    }
    return {text: match.content};
};
