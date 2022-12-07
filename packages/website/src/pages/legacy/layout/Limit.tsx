import {LimitMetadata} from '@coveord/plasma-components-props-analyzer';
import LimitDemo from '@examples/legacy/layout/Limit/Limit.demo.tsx';
import LimitEditableDemo from '@examples/legacy/layout/Limit/LimitEditable.demo.tsx';
import LimitWithCustomValueDemo from '@examples/legacy/layout/Limit/LimitWithCustomValue.demo.tsx';
import LimitWithGoalDemo from '@examples/legacy/layout/Limit/LimitWithGoal.demo.tsx';
import LimitWithHistoryDemo from '@examples/legacy/layout/Limit/LimitWithHistory.demo.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const LimitDemos = () => (
    <PageLayout
        id="Limit"
        sourcePath="/packages/react/src/components/limit/Limit.tsx"
        title="Limit card"
        section="Layout"
        description="A limit card displays the limit and usage of a resource. It includes a bar illustrating the usage against the limit."
        demo={<LimitDemo />}
        propsMetadata={LimitMetadata}
        examples={{
            withGoal: <LimitWithGoalDemo title="With goal to reach" />,
            withHistory: <LimitWithHistoryDemo title="With History" />,
            withCustomValue: <LimitWithCustomValueDemo title="With custom value" />,
            isLimitEditable: <LimitEditableDemo title="With editable limit" />,
        }}
    />
);

export default LimitDemos;
