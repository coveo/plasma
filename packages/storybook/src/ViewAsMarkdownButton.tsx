import {Button} from '@mantine/core';

const BASE_URL = 'https://plasma.coveo.com/llms/';

interface ViewAsMarkdownButtonProps {
    /** The markdown filename, e.g. "content/ProductVocabulary.md" */
    path: string;
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
        mb="sm"
    >
        View as Markdown
    </Button>
);
