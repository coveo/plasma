import type {LlmsData, DocData} from './types.js';

export const buildComponentMap = (data: LlmsData): Map<string, DocData> =>
    new Map(data.components.map((c) => [c.name.toLowerCase(), c]));
