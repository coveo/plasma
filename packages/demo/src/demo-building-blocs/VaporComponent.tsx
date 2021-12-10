import * as React from 'react';
import Markdown from 'react-markdown';
import {useLocation} from 'react-router';
import {BasicHeader, Form, TabContent, TabPaneConnected} from 'react-vapor';

// import Code from './Code';
import EditableCode from './EditableCode';
import {useCodeExample} from './useCodeExample';

interface VaporComponentProps {
    id: string;
    title: string;
    usage?: string | React.ReactNode;
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

    const page = pathname.substr(pathname.lastIndexOf('/')).replace('/', '');
    const githubMarkdownLink = `https://github.com/coveo/react-vapor/new/master/packages/demo/docs`;

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
                        <div>{children}</div>
                        {withSource && code && <EditableCode>{code}</EditableCode>}
                        {/* <div>
                            {withSource && (
                                <div className="mt2">
                                    <Code language="tsx">{code}</Code>
                                </div>
                            )}
                        </div> */}
                    </Form>
                </TabPaneConnected>
                <TabPaneConnected id="guide" groupId="page">
                    {markdown ? (
                        <Markdown className="markdown-documentation" source={markdown} />
                    ) : (
                        <div className="body-l-book">
                            There are no guidelines for <span className="text bold">{page}</span> yet, click{' '}
                            <a
                                href={githubMarkdownLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text mod-link bold"
                            >
                                here
                            </a>{' '}
                            to go to the documentation directory in Github and create it
                        </div>
                    )}
                </TabPaneConnected>
            </TabContent>
        </div>
    );
};

export default VaporComponent;
