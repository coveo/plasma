import type {LlmsData, ComponentData} from './types.js';

export const buildComponentMap = (data: LlmsData): Map<string, ComponentData> =>
    new Map(data.components.map((c) => [c.name.toLowerCase(), c]));
