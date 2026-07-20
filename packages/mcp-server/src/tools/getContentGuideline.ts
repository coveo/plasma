import type {ContentGuidelineData, ToolResult} from './types.js';

export const buildGuidelineMap = (guidelines: ContentGuidelineData[]): Map<string, ContentGuidelineData> => {
    const map = new Map<string, ContentGuidelineData>();
    for (const g of guidelines) {
        map.set(g.name.toLowerCase(), g);
        map.set(g.slug.toLowerCase(), g);
    }
    return map;
};

export const getContentGuideline = (guidelineMap: Map<string, ContentGuidelineData>, guideline: string): ToolResult => {
    const match = guidelineMap.get(guideline.toLowerCase());
    if (!match) {
        return {
            text: `Content guideline "${guideline}" not found. Use list_content_guidelines to see available guidelines.`,
            isError: true,
        };
    }
    return {text: match.content};
};
