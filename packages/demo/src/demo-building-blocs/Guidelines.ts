const MarkdownFiles = new Map();

const importAll = (context: __WebpackModuleApi.RequireContext) => {
    context.keys().forEach((key) => {
        const [, formattedKey] = /.*\/(\w+)\.md$/.exec(key);
        MarkdownFiles.set(formattedKey, context(key).default);
    });
};

importAll(require.context('!raw-loader!../../docs', false, /\.md$/));

export const Guidelines = {
    exists: (fileName: string): boolean => MarkdownFiles.has(fileName),
    get: (fileName: string): string => MarkdownFiles.get(fileName),
};
