import {Box, Container} from '@coveord/plasma-mantine';
import {FunctionComponent} from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import {GithubButton} from './GithubButton';
import {Guidelines, MarkdownOverrides} from './Guidelines';

export const GuidelinesTab: FunctionComponent<{id: string}> = ({id}) => (
    <Container size="xl">
        {Guidelines.exists(id) ? (
            <Box px="sm">
                <Markdown remarkPlugins={[remarkGfm]} components={MarkdownOverrides}>
                    {Guidelines.get(id)}
                </Markdown>
                <GithubButton
                    href={`https://github.com/coveo/plasma/edit/master/packages/website/docs/${id}.md`}
                    ariaLabel="Edit guidelines on GitHub"
                    className="my5"
                >
                    Edit guidelines
                </GithubButton>
            </Box>
        ) : (
            <div className="mt5">
                <p>
                    No guidelines exist for <span className="body-m">{id}</span> yet.
                </p>
                <GithubButton
                    href={`https://github.com/coveo/plasma/new/master/packages/website/docs?filename=docs/${id}.md`}
                    ariaLabel="Create guidelines on GitHub"
                    className="my5"
                >
                    Create guidelines
                </GithubButton>
            </div>
        )}
    </Container>
);
