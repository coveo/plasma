import {TooltipMetadata} from '@coveord/plasma-components-props-analyzer';
import TooltipExample from '@examples/legacy/feedback/Tooltip/Tooltip.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const TooltipExamples = () => (
    <PageLayout
        id="Tooltip"
        componentSourcePath="/tooltip/Tooltip.tsx"
        title="Tooltip"
        section="Feedback"
        description="A tooltip is a floating label that provides brief additional information about an interface component."
        thumbnail="tooltip"
        code={TooltipExample}
        propsMetadata={TooltipMetadata}
    />
);

export default TooltipExamples;
