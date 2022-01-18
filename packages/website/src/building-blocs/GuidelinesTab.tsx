import {TabPaneConnected} from '@coveord/plasma-react';
import * as React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import {GithubButton} from './GithubButton';
import {Guidelines, MarkdownOverrides} from './Guidelines';

export const GuidelinesTab: React.FunctionComponent<{id: string}> = ({id}) => (
    <TabPaneConnected id="guide" groupId="page">
        {Guidelines.exists(id) ? (
            <>
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
            </>
        ) : (
            <>
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
            </>
        )}
    </TabPaneConnected>
);
