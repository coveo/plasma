import * as React from 'react';
import {BasicHeader, Form} from 'react-vapor';

import Code from './Code';

interface VaporComponentProps {
    id: string;
    title: string;
    usage?: string;
    stylesheet?: string;
    withSource?: boolean;
}

export const VaporComponent: React.FunctionComponent<VaporComponentProps & React.HTMLAttributes<HTMLDivElement>> = ({
    id,
    title,
    usage,
    children,
    withSource,
}) => (
    <div id={id}>
        <BasicHeader title={{text: title}} description={usage} />
        <Form className="mod-header-padding mod-form-top-bottom-padding">
            {children}
            {withSource && (
                <div className="mt2">
                    <Code language="html">{children}</Code>
                </div>
            )}
        </Form>
    </div>
);

export default VaporComponent;
