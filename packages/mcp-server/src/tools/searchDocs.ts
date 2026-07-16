import type {LlmsData} from './types.js';

type ResultKind = 'component' | 'content_guideline';

interface SearchResult {
    name: string;
    description: string;
    content: string;
    score: number;
    kind: ResultKind;
}

export const searchDocs = (data: LlmsData, query: string): string => {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);

    const escapeRegex = (str: string): string => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const score = (text: string): number =>
        terms.reduce((acc, term) => acc + (text.match(new RegExp(escapeRegex(term), 'g')) ?? []).length, 0);

    const results: SearchResult[] = [
        ...data.components.map((c) => ({...c, kind: 'component' as const})),
        ...(data.contentGuidelines ?? []).map((g) => ({...g, kind: 'content_guideline' as const})),
    ]
        .map((item) => ({...item, score: score(`${item.name} ${item.description} ${item.content}`.toLowerCase())}))
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);

    if (results.length === 0) {
        return `No results found matching "${query}".`;
    }

    const output = results
        .map(({name, description, content, kind}) => {
            const kindLabel = kind === 'content_guideline' ? ' (Content Guideline)' : '';
            return `## ${name}${kindLabel}\n\n${description}\n\n${content}`;
        })
        .join('\n\n---\n\n');

    return `# Search Results for "${query}"\n\nFound ${results.length} result(s):\n\n${output}`;
};
