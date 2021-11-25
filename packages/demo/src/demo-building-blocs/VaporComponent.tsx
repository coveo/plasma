import * as React from 'react';
import Markdown from 'react-markdown';
import {useLocation} from 'react-router';
import {BasicHeader, Form, TabContent, TabPaneConnected} from 'react-vapor';

import Code from './Code';
import {useCodeExample} from './useCodeExample';

interface VaporComponentProps {
    id: string;
    title: string;
    usage?: string;
    stylesheet?: string;
    withSource?: boolean;
    markdown?: string;
}

export const VaporComponent: React.FunctionComponent<VaporComponentProps & React.HTMLAttributes<HTMLDivElement>> = ({
    id,
    title,
    usage,
    children,
    withSource,
    markdown,
}) => {
    const {pathname} = useLocation();

    const page = pathname.substr(pathname.lastIndexOf('/'));
    const githubMarkdownLink = `https://github.com/coveo/react-vapor/tree/master/packages/demo/docs${page}.md`;

    const code = useCodeExample();

    return (
        <div id={id}>
            <BasicHeader
                title={{text: title}}
                description={usage}
                tabs={[
                    {groupId: 'page', id: 'usage', title: 'Usage'},
                    {groupId: 'page', id: 'guide', title: 'Guide'},
                ]}
            />
            <TabContent className="mod-header-padding mod-form-top-bottom-padding">
                <TabPaneConnected id="usage" groupId="page">
                    <Form className="mod-header-padding mod-form-top-bottom-padding">
                        {children}
                        {withSource && (
                            <div className="mt2">
                                <Code language="tsx">{code}</Code>
                            </div>
                        )}
                    </Form>
                </TabPaneConnected>
                <TabPaneConnected id="guide" groupId="page">
                    {markdown ? (
                        <Markdown className="markdown-documentation" source={markdown} />
                    ) : (
                        <div>
                            There are no guidelines for this component yet, click{' '}
                            <a href={githubMarkdownLink} target="_blank" rel="noopener noreferrer" className="bold">
                                here
                            </a>{' '}
                            to create some.
                        </div>
                    )}
                </TabPaneConnected>
            </TabContent>
        </div>
    );
};

export default VaporComponent;
