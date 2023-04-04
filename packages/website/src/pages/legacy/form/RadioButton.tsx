import {RadioSelectConnectedMetadata} from '@coveord/plasma-components-props-analyzer';
import RadioButtonDemo from '@examples/legacy/form/RadioButton/main.demo?demo';
import RadioCard from '@examples/legacy/form/RadioButton/radioCard.demo?demo';

import {PageLayout} from '../../../building-blocs/PageLayout';

const Page = () => (
    <PageLayout
        id="RadioSelectConnected"
        title="Radio Buttons"
        section="Form"
        description="A radio button allows users to select exactly one option from a list of mutually exclusive options."
        sourcePath="/packages/react/src/components/radio/RadioSelectConnected.tsx"
        demo={<RadioButtonDemo center />}
        propsMetadata={RadioSelectConnectedMetadata}
        examples={{
            radioCard: <RadioCard center title="Radio cards" />,
        }}
    />
);

export default Page;
