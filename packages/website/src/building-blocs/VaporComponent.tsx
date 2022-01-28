import * as React from 'react';
import {BasicHeader, TabContent, TabPaneConnected} from '@coveord/plasma-react';

import Code from './Code';
import {GuidelinesTab} from './GuidelinesTab';
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
                title={{text: title, classes: ['@crawled-title']}}
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
                <GuidelinesTab id={id} />
            </TabContent>
        </div>
    );
};

export default VaporComponent;
