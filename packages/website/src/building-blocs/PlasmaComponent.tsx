import * as React from 'react';
import {BasicHeader, TabContent, TabPaneConnected} from '@coveord/plasma-react';

import Code from './Code';
import {GuidelinesTab} from './GuidelinesTab';
import {useCodeExample} from './useCodeExample';
import {useTitle} from './useTitle';

interface PlasmaComponentProps {
    id: string;
    title: string;
    usage?: string | React.ReactNode;
    stylesheet?: string;
    withSource?: boolean;
}

export const PlasmaComponent: React.FunctionComponent<PlasmaComponentProps & React.HTMLAttributes<HTMLDivElement>> = ({
    id,
    title,
    usage,
    children,
    withSource,
}) => {
    useTitle(title);
    const code = useCodeExample();

    return (
        <div id={id}>
            <BasicHeader
                title={{text: title, classes: ['sentence-case']}}
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

export default PlasmaComponent;
