import * as React from 'react';
import Markdown from 'react-markdown';
import {LinkSvg, TabPaneConnected} from 'react-vapor';
import remarkGfm from 'remark-gfm';
import {Guidelines, MarkdownOverrides} from './Guidelines';

export const GuidelinesTab: React.FunctionComponent<{id: string}> = ({id}) => (
    <TabPaneConnected id="guide" groupId="page">
        {Guidelines.exists(id) ? (
            <>
                <Markdown remarkPlugins={[remarkGfm]} components={MarkdownOverrides}>
                    {Guidelines.get(id)}
                </Markdown>
                <LinkSvg
                    url={`https://github.com/coveo/react-vapor/edit/master/packages/demo/docs/${id}.md`}
                    svg={{svgName: 'external', svgClass: 'icon mod-14 ml1'}}
                    linkClasses={['mt5']}
                >
                    Edit guidelines
                </LinkSvg>
            </>
        ) : (
            <>
                <p>
                    No guidelines exist for <span className="body-m">{id}</span> yet.
                </p>
                <LinkSvg
                    url={`https://github.com/coveo/react-vapor/new/master/packages/demo/docs?filename=docs/${id}.md`}
                    svg={{svgName: 'external', svgClass: 'icon mod-14 ml1'}}
                    linkClasses={['mt5']}
                >
                    Create guidelines
                </LinkSvg>
            </>
        )}
    </TabPaneConnected>
);
