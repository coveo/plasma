import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import {Limit} from '@coveord/plasma-react';

    export default () => (
        <Limit id={'🥔'} title={'Limit example'} usage={42} limit={100} />
    );
`;

const withGoal = `
    import {Limit} from '@coveord/plasma-react';

    export default () => (
        <Limit id={'❗'} title={'Limit example'} usage={100} limit={100} isLimitTheGoalToReach />
    );
`;

const withHistory = `
    import {Limit} from '@coveord/plasma-react';

    export default () => (
        <Limit id={'🐄'} title={'Hey'} usage={82} isHistoryIncluded limit={100} onHistoryIconClick={() => alert('Patate!')}
        />
    );
`;

const withCustomValue = `
    import {Limit} from '@coveord/plasma-react';

    export default () => (
        <Limit id={'👑'} title={'Patate King'} usage={42} limit={130} limitLabel={'Throttling limit'} />
    );
`;

const isLimitEditable = `
    import {Limit} from '@coveord/plasma-react';

    export default () => (
        <Limit id={'💵'} title={'Supreme leader Snoke'} usage={57} isLimitEditable limit={100} />
    );
`;

const LimitExamples = () => (
    <PageLayout
        id="Limit"
        componentSourcePath="/limit/Limit.tsx"
        title="Limit card"
        section="Layout"
        description="A limit card displays the limit and usage of a resource. It includes a bar illustrating the usage against the limit."
        code={code}
        examples={{
            withGoal: {code: withGoal, title: 'With goal to reach'},
            withHistory: {code: withHistory, title: 'With History'},
            withCustomValue: {code: withCustomValue, title: 'With custom value'},
            isLimitEditable: {code: isLimitEditable, title: 'With editable limit'},
        }}
    />
);

export default LimitExamples;
