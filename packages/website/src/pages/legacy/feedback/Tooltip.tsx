import {TooltipMetadata} from '@coveord/plasma-components-props-analyzer';
import TooltipDemo from '@examples/legacy/feedback/Tooltip/Tooltip.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export const TooltipDemos = () => (
    <PageLayout
        id="Tooltip"
        sourcePath="/packages/react/src/components/tooltip/Tooltip.tsx"
        title="Tooltip"
        section="Feedback"
        description="A tooltip is a floating label that provides brief additional information about an interface component."
        thumbnail="tooltip"
        demo={<TooltipDemo center />}
        propsMetadata={TooltipMetadata}
    />
);

export default TooltipDemos;
