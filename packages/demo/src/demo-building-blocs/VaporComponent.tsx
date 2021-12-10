import * as React from 'react';
import Markdown from 'react-markdown';
import {BasicHeader, LinkSvg, TabContent, TabPaneConnected} from 'react-vapor';

import Code from './Code';
import {Guidelines} from './Guidelines';
import {useCodeExample} from './useCodeExample';

interface VaporComponentProps {
    id: string;
    title: string;
    usage?: string | React.ReactNode;
    stylesheet?: string;
    withSource?: boolean;
}

export const VaporComponent: React.FunctionComponent<VaporComponentProps & React.HTMLAttributes<HTMLDivElement>> = ({
    id,
    title,
    usage,
    children,
    withSource,
}) => {
    const code = useCodeExample();

    return (
        <div id={id}>
            <BasicHeader
                title={{text: title}}
                description={usage}
                tabs={[
                    {groupId: 'page', id: 'usage', title: 'Usage'},
                    {groupId: 'page', id: 'guide', title: 'Guidelines'},
                ]}
            />
            <TabContent className="mod-header-padding mod-form-top-bottom-padding">
                <TabPaneConnected id="usage" groupId="page">
                    <div>{children}</div>
                    <div>
                        {withSource && (
                            <div className="mt2">
                                <Code language="tsx">{code}</Code>
                            </div>
                        )}
                    </div>
                </TabPaneConnected>
                <TabPaneConnected id="guide" groupId="page">
                    {Guidelines.exists(id) ? (
                        <>
                            <Markdown className="markdown-documentation" source={Guidelines.get(id)} />
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
            </TabContent>
        </div>
    );
};

export default VaporComponent;
