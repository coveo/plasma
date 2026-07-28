import {Button} from '@mantine/core';

const BASE_URL = 'https://raw.githubusercontent.com/coveo/plasma/refs/heads/master/packages/llms/src/content/';

interface ViewAsMarkdownButtonProps {
    /** The markdown filename, e.g. "ProductVocabulary.md" */
    contentPath: string;
}

export const ViewAsMarkdownButton = ({contentPath}: ViewAsMarkdownButtonProps) => (
    <Button
        component="a"
        href={`${BASE_URL}${contentPath}`}
        target="_blank"
        rel="noopener noreferrer"
        variant="outline"
        size="xs"
        color="teal"
        style={{marginBottom: '1rem'}}
    >
        View as Markdown
    </Button>
);
