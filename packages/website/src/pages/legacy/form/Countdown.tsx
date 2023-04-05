import {CountdownMetadata} from '@coveord/plasma-components-props-analyzer';
import CountdownDemo from '@examples/legacy/form/Countdown/Countdown.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

const Page = () => (
    <PageLayout
        id="Countdown"
        section="Form"
        title="Countdown"
        sourcePath="/packages/react/src/components/calendar/Countdown.tsx"
        description="A Countdown illustrates how much time there is left until an end date is reached."
        demo={<CountdownDemo center />}
        propsMetadata={CountdownMetadata}
    />
);

export default Page;
