import {RadioSelectConnectedMetadata} from '@coveord/plasma-components-props-analyzer';
import code from '@examples/RadioButton/main.example.tsx';
import radioCard from '@examples/RadioButton/radioCard.example.tsx';

import {PageLayout} from '../../../building-blocs/PageLayout';

export default () => (
    <PageLayout
        id="RadioSelectConnected"
        title="Radio Buttons"
        section="Form"
        description="A radio button allows users to select exactly one option from a list of mutually exclusive options."
        componentSourcePath="/radio/RadioSelectConnected.tsx"
        code={code}
        propsMetadata={RadioSelectConnectedMetadata}
        examples={{
            radioCard: {code: radioCard, title: 'Radio cards'},
        }}
    />
);
