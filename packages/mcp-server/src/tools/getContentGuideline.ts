import type {DocData, ToolResult} from './types.js';

export const buildGuidelineMap = (guidelines: DocData[]): Map<string, DocData> => {
    const map = new Map<string, DocData>();
    for (const g of guidelines) {
        map.set(g.name.toLowerCase(), g);
    }
    return map;
};

export const getContentGuideline = (guidelineMap: Map<string, DocData>, guideline: string): ToolResult => {
    const match = guidelineMap.get(guideline.toLowerCase());
    if (!match) {
        return {
            text: `Content guideline "${guideline}" not found. Use list_content_guidelines to see available guidelines.`,
            isError: true,
        };
    }
    return {text: match.content};
};
