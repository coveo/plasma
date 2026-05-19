import type {LlmsData} from './types.js';

export const searchDocs = (data: LlmsData, query: string): string => {
    const lowerQuery = query.toLowerCase();
    const terms = lowerQuery.split(/\s+/).filter(Boolean);

    const results = data.components
        .map((c) => {
            const haystack = (c.name + ' ' + c.description + ' ' + c.content).toLowerCase();
            const score = terms.reduce((acc: number, term: string) => {
                const count = (haystack.match(new RegExp(term, 'g')) ?? []).length;
                return acc + count;
            }, 0);
            return {component: c, score};
        })
        .filter(({score}) => score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);

    if (results.length === 0) {
        return `No components found matching "${query}".`;
    }

    const output = results
        .map(({component}) => `## ${component.name}\n\n${component.description}\n\n${component.content}`)
        .join('\n\n---\n\n');

    return `# Search Results for "${query}"\n\nFound ${results.length} component(s):\n\n${output}`;
};
