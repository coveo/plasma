import * as React from 'react';

import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import * as React from 'react';
    import {Tooltip} from '@coveord/plasma-react';

    export default () => (
        <Tooltip title="I am a tooltip!" placement="right">
            <button type="button" className="btn">
                Hover me!
            </button>
        </Tooltip>
    );
`;

export const TooltipExamples = () => (
    <PageLayout
        id="Tooltip"
        componentSourcePath="/tooltip/Tooltip.tsx"
        title="Tooltip"
        section="Feedback"
        description="A tooltip is a floating label that provides brief additional information about an interface component."
        thumbnail="tooltip"
        code={code}
    />
);

export default TooltipExamples;
