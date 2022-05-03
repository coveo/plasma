import {PageLayout} from '../../building-blocs/PageLayout';

const code = `
    import {Countdown} from '@coveord/plasma-react';

    export default () => <Countdown />
`;

export default () => (
    <PageLayout
        id="Countdown"
        section="Form"
        title="Countdown"
        componentSourcePath="/calendar/Countdown.tsx"
        description="A Countdown illustrates how much time there is left until an end date is reached."
        code={code}
    />
);
