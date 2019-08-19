import * as React from 'react';

import ComponentCode from './ComponentCode';

interface VaporComponentProps {
    id: string;
    title: string;
    usage?: React.ReactNode;
    stylesheet?: string;
    withSource?: boolean;
}

export const VaporComponent: React.FunctionComponent<VaporComponentProps & React.HTMLAttributes<HTMLDivElement>> = ({
    id,
    title,
    usage,
    className,
    children,
    style,
    withSource,
}) => (
    <article className="sg-component" id={id}>
        <header className="sg-component-header">
            <h1 className="text-medium-blue">{title}</h1>
            {usage && <p className="sg-component-description">{usage}</p>}
        </header>

        <div className="sg-component-body">
            <div className={`sg-component-display relative ${className || ''}`} style={style || {}}>
                {children}
            </div>
            <div className="clearfix mb4" />
            {withSource && <ComponentCode>{children}</ComponentCode>}
        </div>
    </article>
);

export default VaporComponent;
