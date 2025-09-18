import {Box, Space, Stack, Text} from '@coveord/plasma-mantine';
import {FunctionComponent} from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import {GithubButton} from './GithubButton.js';
import {Guidelines, MarkdownOverrides} from './Guidelines.js';

export const GuidelinesTab: FunctionComponent<{id: string}> = ({id}) =>
    Guidelines.exists(id) ? (
        <Stack gap="xl" align="flex-start">
            <Stack gap="xs" align="flex-start">
                <Markdown remarkPlugins={[remarkGfm]} components={MarkdownOverrides}>
                    {Guidelines.get(id)}
                </Markdown>
            </Stack>
            <GithubButton
                href={`https://github.com/coveo/plasma/edit/master/packages/website/docs/${id}.md`}
                ariaLabel="Edit guidelines on GitHub"
            >
                Edit guidelines
            </GithubButton>
        </Stack>
    ) : (
        <Box h="100%">
            <Text>
                No guidelines exist for{' '}
                <Text span fw={500}>
                    {id}
                </Text>{' '}
                yet.
            </Text>
            <Space h="sm" />
            <GithubButton
                href={`https://github.com/coveo/plasma/new/master/packages/website/docs?filename=docs/${id}.md`}
                ariaLabel="Create guidelines on GitHub"
            >
                Create guidelines
            </GithubButton>
        </Box>
    );
