import {LimitMetadata} from '@coveord/plasma-components-props-analyzer';
import LimitExample from '@examples/legacy/layout/Limit/Limit.example.tsx';
import LimitEditableExample from '@examples/legacy/layout/Limit/LimitEditable.example.tsx';
import LimitWithCustomValueExample from '@examples/legacy/layout/Limit/LimitWithCustomValue.example.tsx';
import LimitWithGoalExample from '@examples/legacy/layout/Limit/LimitWithGoal.example.tsx';
import LimitWithHistoryExample from '@examples/legacy/layout/Limit/LimitWithHistory.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

const LimitExamples = () => (
    <PageLayout
        id="Limit"
        componentSourcePath="/limit/Limit.tsx"
        title="Limit card"
        section="Layout"
        description="A limit card displays the limit and usage of a resource. It includes a bar illustrating the usage against the limit."
        code={LimitExample}
        propsMetadata={LimitMetadata}
        examples={{
            withGoal: {code: LimitWithGoalExample, title: 'With goal to reach'},
            withHistory: {code: LimitWithHistoryExample, title: 'With History'},
            withCustomValue: {code: LimitWithCustomValueExample, title: 'With custom value'},
            isLimitEditable: {code: LimitEditableExample, title: 'With editable limit'},
        }}
    />
);

export default LimitExamples;
