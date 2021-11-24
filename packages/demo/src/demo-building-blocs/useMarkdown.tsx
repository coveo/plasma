import {useEffect, useState} from 'react';
import {DocsMarkdownFiles} from '../plasma/utils/MarkdownDocs';

export const useMarkdown = (file: keyof typeof DocsMarkdownFiles) => {
    const [markdown, setMarkdown] = useState(null);

    useEffect(() => {
        DocsMarkdownFiles[file]().then((res) => setMarkdown(res.default));
    }, []);

    return markdown;
};
